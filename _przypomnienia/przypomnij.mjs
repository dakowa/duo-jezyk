// Duo Język: codzienne przypomnienia w stylu „nie przerywaj serii”, osobno dla każdej osoby.
// Uruchamiane co godzinę przez GitHub Actions (.github/workflows/przypomnienia.yml).
//
// Jak to działa:
// 1. Aplikacja wysyła cichy sygnał do tematu NTFY_LOG_TOPIC: gdy ktoś włączy przypomnienia
//    („polaczenie”) i gdy zaliczy sesję („practice”). Sygnał zawiera profil i strefę czasową.
// 2. Ten skrypt czyta sygnały i zapisuje dni aktywności każdej osoby w stan.json.
// 3. Jeśli ktoś dziś nie ćwiczył, wysyła mu przypomnienie na jego temat z NTFY_TOPICS.
//    Ton rośnie z każdym dniem przerwy. Po kilku dniach ciszy przypomnienia milkną.
//
// Zmienne środowiskowe:
//   NTFY_TOPICS      sekret: JSON {"damian":"temat", "marcin":"temat", ...}
//   NTFY_LOG_TOPIC   sekret: wspólny temat sygnałów z aplikacji
//   NTFY_TOPIC       (stary sekret, używany dla Damiana, jeśli brak go w NTFY_TOPICS)
//   TRYB=test        wyślij od razu przykładowe przypomnienie do osoby z PROFIL
//   PROFIL=<id>      dla trybu test (domyślnie damian)
//   SUCHO=1          tylko wypisz decyzje, nic nie wysyłaj i nie zapisuj
//   TERAZ=<ISO>      udawaj inny czas (do testów)
//   SERWER=<url>     inny serwer ntfy (do testów)

import { readFile, writeFile } from 'node:fs/promises';

const DIR = new URL('./', import.meta.url);
const cfg = JSON.parse(await readFile(new URL('ustawienia.json', DIR), 'utf8'));
const STATE_FILE = new URL('stan.json', DIR);
const LOG = process.env.NTFY_LOG_TOPIC;
const TRYB = process.env.TRYB || 'normalny';
const PROFIL_TESTU = (process.env.PROFIL || 'damian').trim().toLowerCase();
const SUCHO = process.env.SUCHO === '1';
const SERVER = (process.env.SERWER || cfg.serwer).replace(/\/$/, '');

let TOPICS = {};
try { TOPICS = JSON.parse(process.env.NTFY_TOPICS || '{}'); } catch {
  console.error('Sekret NTFY_TOPICS nie jest poprawnym JSON.');
  process.exit(1);
}
if (process.env.NTFY_TOPIC && !TOPICS.damian) TOPICS.damian = process.env.NTFY_TOPIC;
if (!LOG || !Object.keys(TOPICS).length) {
  console.error('Brak sekretów NTFY_LOG_TOPIC i NTFY_TOPICS.');
  process.exit(1);
}

// ---------- Helpers ----------
const ID = /^[a-z0-9-]{1,32}$/;
function validZone(z) { try { new Intl.DateTimeFormat('en', { timeZone: z }); return true; } catch { return false; } }
function inZone(date, zone) {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('en-CA', {
      timeZone: zone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hourCycle: 'h23'
    }).formatToParts(date).map((x) => [x.type, x.value])
  );
  return { date: `${p.year}-${p.month}-${p.day}`, hour: Number(p.hour) };
}
const dayNum = (d) => Date.parse(d + 'T00:00:00Z') / 86400000;
const diff = (a, b) => Math.round(dayNum(b) - dayNum(a));
const shift = (d, n) => new Date((dayNum(d) + n) * 86400000).toISOString().slice(0, 10);
const isDate = (s) => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s);
const dni = (n) => (n === 1 ? 'dzień' : 'dni');
const names = Object.fromEntries((cfg.profile || []).map((p) => [p.id, p.imie]));
const imieOf = (id) => names[id] || id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' ');
const hash = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);

const nowDate = process.env.TERAZ ? new Date(process.env.TERAZ) : new Date();

// ---------- State (and migration from the one-person version) ----------
let state = {};
try { state = JSON.parse(await readFile(STATE_FILE, 'utf8')); } catch { /* first run */ }
const before = JSON.stringify(state);
if (!state.profile) {
  const old = Array.isArray(state.aktywneDni)
    ? { start: state.start, aktywneDni: state.aktywneDni, godziny: state.godziny || {}, wyslane: state.wyslane || {}, cisza: !!state.cisza, polaczony: true }
    : null;
  state = { profile: {} };
  if (old) state.profile.damian = old;
}
function person(id) {
  const p = (state.profile[id] ||= {});
  p.aktywneDni ||= []; p.godziny ||= {}; p.wyslane ||= {}; p.cisza ||= false; p.polaczony ||= false;
  return p;
}

// ---------- 1. Read signals from the app (ntfy keeps them for about 12 hours) ----------
const res = await fetch(`${SERVER}/${LOG}/json?poll=1&since=all`);
if (!res.ok) throw new Error(`ntfy: HTTP ${res.status} przy odczycie sygnałów`);
for (const line of (await res.text()).split('\n')) {
  if (!line.trim()) continue;
  let m; try { m = JSON.parse(line); } catch { continue; }
  if (m.event !== 'message') continue;
  let body = null; try { body = JSON.parse(m.message); } catch { /* plain text signal */ }
  const type = (body && body.type) || 'practice';
  if (type !== 'practice' && type !== 'polaczenie') continue;
  const id = body && typeof body.profil === 'string' ? body.profil : 'damian';
  if (!ID.test(id)) continue;
  const p = person(id);
  if (body && typeof body.strefa === 'string' && validZone(body.strefa)) p.strefa = body.strefa;
  if (body && typeof body.kurs === 'string' && ID.test(body.kurs)) p.kurs = body.kurs;
  const zone = p.strefa || cfg.strefa;
  const today = inZone(nowDate, zone).date;
  const at = inZone(new Date(m.time * 1000), zone);
  const d = body && isDate(body.date) ? body.date : at.date;
  if (diff(today, d) > 1 || diff(d, today) > 60) continue; // ignore odd dates
  if (!p.polaczony) { p.polaczony = true; p.start ||= d; }
  if (type === 'polaczenie') continue;
  if (!p.aktywneDni.includes(d)) p.aktywneDni.push(d);
  if (at.date === d && (p.godziny[d] === undefined || at.hour < p.godziny[d])) p.godziny[d] = at.hour;
}

// ---------- 2. Where is each person? ----------
function situation(id, p) {
  const zone = p.strefa || cfg.strefa;
  const now = inZone(nowDate, zone);
  p.start ||= now.date;
  p.aktywneDni = [...new Set(p.aktywneDni)].sort().slice(-120);
  for (const k of Object.keys(p.godziny)) if (diff(k, now.date) > 30) delete p.godziny[k];
  for (const k of Object.keys(p.wyslane)) if (diff(k.slice(0, 10), now.date) > 14) delete p.wyslane[k];

  const past = p.aktywneDni.filter((d) => diff(d, now.date) >= 0);
  const last = past.length ? past[past.length - 1] : null;
  const przerwa = last === null ? null : diff(last, now.date); // 0 = practised today
  let seria = 0;
  if (last !== null) {
    const set = new Set(p.aktywneDni);
    for (let d = last; set.has(d); d = shift(d, -1)) seria++;
  }
  if (przerwa !== null && przerwa <= cfg.ciszaPoDniach) p.cisza = false; // came back

  // Like Duolingo: remind around the hour this person usually starts practising.
  const hours = Object.values(p.godziny).sort((a, b) => a - b);
  let first = cfg.pierwszePrzypomnienie;
  if (hours.length >= 3) first = Math.min(Math.max(hours[Math.floor(hours.length / 2)], cfg.najwczesniej), cfg.ostatniaSzansa - 1);
  return { id, zone, now, last, przerwa, seria, first, kurs: (cfg.kursy || {})[p.kurs] || '' };
}

function decide(s, p) {
  const { now, przerwa, first } = s;
  const sent = (kind) => p.wyslane[`${now.date}:${kind}`] === true;
  if (przerwa === 0) return null;
  if (now.hour < cfg.najwczesniej || now.hour > cfg.najpozniej) return null;
  const quietDays = przerwa === null ? diff(p.start, now.date) : przerwa;
  if (quietDays > cfg.ciszaPoDniach) return !p.cisza && now.hour >= first ? 'cisza' : null;
  if (przerwa === 1 && now.hour >= cfg.ostatniaSzansa && !sent('ostatnia')) return 'ostatnia';
  if (now.hour >= first && !sent('pierwsze') && !sent('ostatnia')) return przerwa === null ? 'start' : przerwa === 1 ? 'dzis' : 'przerwa';
  return null;
}

// ---------- 3. Messages (Kora is the collie mascot) ----------
function message(kind, s) {
  const n = s.seria, k = s.przerwa === null ? 0 : s.przerwa - 1, imie = imieOf(s.id); // k = full days missed
  const kurs = s.kurs ? ` (${s.kurs})` : '';
  const T = {
    start: [
      { t: `Cześć, ${imie}! Pierwsza lekcja czeka`, m: `Kilka minut dziś to pierwszy dzień Twojej serii.` },
      { t: 'Zacznij serię dzisiaj', m: 'Jedna krótka lekcja i ogień zapłonie. Kora już merda ogonem.' }
    ],
    dzis: [
      { t: `Seria: ${n} ${dni(n)}. Dziś też?`, m: `Jedna krótka lekcja${kurs} przedłuży serię.` },
      { t: `${imie}, czas na lekcję`, m: `Twoja seria ma ${n} ${dni(n)}. Nie daj jej zgasnąć.` },
      { t: 'Kora czeka na Ciebie', m: `${n} ${dni(n)} z rzędu. Dorzuć dzisiejszy dzień.` }
    ],
    ostatnia: [
      { t: `${imie}, seria ${n} ${dni(n)} zgaśnie o północy`, m: 'Masz jeszcze czas. Jedna krótka lekcja wystarczy, żeby ją uratować.' },
      { t: 'Ostatnia szansa na dziś', m: `Za kilka godzin stracisz serię ${n} ${dni(n)}. Kora trzyma kciuki. Znaczy: łapy.` }
    ],
    przerwa:
      k <= 1 ? [
        { t: 'Seria zgasła', m: `Wczoraj nie było lekcji, ${imie}. Zacznij nową serię dziś.` },
        { t: 'Nowy start', m: 'Wczorajszy dzień przepadł. Dzisiejszy jeszcze nie.' }
      ] : k === 2 ? [
        { t: 'Dwa dni bez nauki', m: `Pamięć lubi powtórki. Jedna lekcja${kurs} i wracasz na ścieżkę.` }
      ] : k <= 4 ? [
        { t: 'Kora patrzy na drzwi', m: `Od ${k} dni nikt nie wyszedł z nią na naukowy spacer. Jedna lekcja i jesteście kwita.` },
        { t: 'Halo, jest tam kto?', m: `${k} dni przerwy. Jedna lekcja dziś i wracasz do gry.` }
      ] : [
        { t: 'Nie odpuszczaj teraz', m: `${k} dni przerwy to jeszcze nie koniec. Pierwszy krok trwa 5 minut.` },
        { t: 'Kora za Tobą tęskni', m: s.kurs ? `Otwórz kurs „${s.kurs}” na 5 minut i zobacz, co się stanie.` : 'Otwórz aplikację na 5 minut i zobacz, co się stanie.' }
      ],
    cisza: [
      { t: 'Te przypomnienia chyba nie działają', m: `Kora robi przerwę i przestaje pisać. Gdy wrócisz, ${imie}, wróci i ona.` }
    ]
  };
  const list = T[kind];
  const pick = list[(Math.round(dayNum(s.now.date)) + hash(s.id)) % list.length];
  const tags = { start: ['seedling'], dzis: ['fire'], ostatnia: ['hourglass_flowing_sand'], przerwa: ['dog'], cisza: ['zzz'] }[kind];
  const priority = { ostatnia: 4, cisza: 2 }[kind] || 3;
  return { title: pick.t, message: pick.m, tags, priority };
}

async function send(topic, kind, s, prefix = '') {
  const msg = message(kind, s);
  const payload = {
    topic,
    title: prefix + msg.title,
    message: msg.message,
    tags: msg.tags,
    priority: msg.priority,
    click: cfg.aplikacja,
    icon: cfg.ikona,
    actions: [{ action: 'view', label: 'Otwórz Duo Język', url: cfg.aplikacja }]
  };
  if (SUCHO) { console.log(`  SUCHO, nie wysyłam: ${payload.title} | ${payload.message}`); return; }
  const r = await fetch(SERVER + '/', { method: 'POST', body: JSON.stringify(payload) });
  if (!r.ok) throw new Error(`ntfy: HTTP ${r.status} przy wysyłce`);
  console.log(`  Wysłano: ${payload.title}`);
}

// ---------- 4. Act ----------
const log = (s) => `${imieOf(s.id)}: ${s.now.date} ${s.now.hour}:00 (${s.zone}). Ostatnia sesja: ${s.last ?? 'brak'}. Przerwa: ${s.przerwa ?? '-'}. Seria: ${s.seria}. Godzina przypomnienia: ${s.first}:00.`;

if (TRYB === 'test') {
  const topic = TOPICS[PROFIL_TESTU];
  if (!topic) { console.error(`Brak tematu dla profilu „${PROFIL_TESTU}” w NTFY_TOPICS.`); process.exit(1); }
  const p = state.profile[PROFIL_TESTU] || { aktywneDni: [], godziny: {}, wyslane: {}, cisza: false };
  const s = situation(PROFIL_TESTU, p);
  console.log(log(s));
  await send(topic, s.przerwa === null ? 'start' : s.przerwa <= 1 ? 'dzis' : 'przerwa', s, 'Test: ');
} else {
  const ids = Object.keys(TOPICS).filter((id) => ID.test(id)).sort();
  for (const id of ids) {
    const p = state.profile[id];
    if (!p || !p.polaczony) { console.log(`${imieOf(id)}: przypomnienia jeszcze nie włączone w aplikacji.`); continue; }
    const s = situation(id, p);
    console.log(log(s));
    const kind = decide(s, p);
    if (!kind) { console.log('  Bez przypomnienia w tej godzinie.'); continue; }
    await send(TOPICS[id], kind, s);
    if (!SUCHO) {
      if (kind === 'cisza') p.cisza = true;
      else p.wyslane[`${s.now.date}:${kind === 'ostatnia' ? 'ostatnia' : 'pierwsze'}`] = true;
    }
  }
}

if (JSON.stringify(state) !== before && !SUCHO) {
  await writeFile(STATE_FILE, JSON.stringify(state, null, 2) + '\n');
  console.log('Zapisano stan.');
}
