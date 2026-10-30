// Duo Język: codzienne przypomnienia w stylu „nie przerywaj serii”.
// Uruchamiane co godzinę przez GitHub Actions (.github/workflows/przypomnienia.yml).
//
// Jak to działa:
// 1. Aplikacja wysyła cichy sygnał do tematu NTFY_LOG_TOPIC, gdy zaliczysz sesję.
// 2. Ten skrypt czyta te sygnały i zapisuje dni aktywności w stan.json.
// 3. Jeśli dziś nie było sesji, wysyła przypomnienie do tematu NTFY_TOPIC (Twój telefon).
//    Ton rośnie z każdym dniem przerwy. Po kilku dniach ciszy przypomnienia milkną.
//
// Zmienne środowiskowe:
//   NTFY_TOPIC, NTFY_LOG_TOPIC  sekrety repozytorium (wymagane)
//   TRYB=test                   wyślij od razu przykładowe przypomnienie
//   SUCHO=1                     tylko wypisz decyzję, nic nie wysyłaj
//   TERAZ=<data ISO>            udawaj inny czas (do testów)
//   SERWER=<url>                inny serwer ntfy (do testów)

import { readFile, writeFile } from 'node:fs/promises';

const DIR = new URL('./', import.meta.url);
const cfg = JSON.parse(await readFile(new URL('ustawienia.json', DIR), 'utf8'));
const STATE_FILE = new URL('stan.json', DIR);
const TOPIC = process.env.NTFY_TOPIC;
const LOG = process.env.NTFY_LOG_TOPIC;
const TRYB = process.env.TRYB || 'normalny';
const SUCHO = process.env.SUCHO === '1';
const SERVER = (process.env.SERWER || cfg.serwer).replace(/\/$/, '');

if (!TOPIC || !LOG) {
  console.error('Brak sekretów NTFY_TOPIC i NTFY_LOG_TOPIC.');
  process.exit(1);
}

// ---------- Dates in the configured time zone ----------
function inZone(date) {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('en-CA', {
      timeZone: cfg.strefa, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hourCycle: 'h23'
    }).formatToParts(date).map((x) => [x.type, x.value])
  );
  return { date: `${p.year}-${p.month}-${p.day}`, hour: Number(p.hour) };
}
const dayNum = (d) => Date.parse(d + 'T00:00:00Z') / 86400000;
const diff = (a, b) => Math.round(dayNum(b) - dayNum(a));
const shift = (d, n) => new Date((dayNum(d) + n) * 86400000).toISOString().slice(0, 10);
const isDate = (s) => typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s);
const dni = (n) => (n === 1 ? 'dzień' : 'dni');

const now = inZone(process.env.TERAZ ? new Date(process.env.TERAZ) : new Date());

// ---------- State ----------
let state = {};
try { state = JSON.parse(await readFile(STATE_FILE, 'utf8')); } catch { /* first run */ }
state.start ||= now.date;
state.aktywneDni ||= [];
state.godziny ||= {};   // date -> hour of the first session that day
state.wyslane ||= {};   // "date:kind" -> true
state.cisza ||= false;
const before = JSON.stringify(state);

// ---------- 1. Read activity signals (ntfy keeps them for about 12 hours) ----------
const res = await fetch(`${SERVER}/${LOG}/json?poll=1&since=all`);
if (!res.ok) throw new Error(`ntfy: HTTP ${res.status} przy odczycie sygnałów`);
for (const line of (await res.text()).split('\n')) {
  if (!line.trim()) continue;
  let m; try { m = JSON.parse(line); } catch { continue; }
  if (m.event !== 'message') continue;
  let body = null; try { body = JSON.parse(m.message); } catch { /* plain text signal */ }
  if (body && body.type && body.type !== 'practice') continue;
  const at = inZone(new Date(m.time * 1000));
  const d = body && isDate(body.date) ? body.date : at.date;
  if (diff(now.date, d) > 1 || diff(d, now.date) > 60) continue; // ignore odd dates
  if (!state.aktywneDni.includes(d)) state.aktywneDni.push(d);
  if (at.date === d && (state.godziny[d] === undefined || at.hour < state.godziny[d])) state.godziny[d] = at.hour;
}
state.aktywneDni = [...new Set(state.aktywneDni)].sort().slice(-120);
for (const k of Object.keys(state.godziny)) if (diff(k, now.date) > 30) delete state.godziny[k];
for (const k of Object.keys(state.wyslane)) if (diff(k.slice(0, 10), now.date) > 14) delete state.wyslane[k];

// ---------- 2. Where are we? ----------
const past = state.aktywneDni.filter((d) => diff(d, now.date) >= 0);
const last = past.length ? past[past.length - 1] : null;
const przerwa = last === null ? null : diff(last, now.date); // 0 = practiced today
let seria = 0;
if (last !== null) {
  const set = new Set(state.aktywneDni);
  for (let d = last; set.has(d); d = shift(d, -1)) seria++;
}
if (przerwa !== null && przerwa <= cfg.ciszaPoDniach) state.cisza = false; // you came back

// Like Duolingo: remind around the hour you usually start practising.
const hours = Object.values(state.godziny).sort((a, b) => a - b);
let first = cfg.pierwszePrzypomnienie;
if (hours.length >= 3) {
  first = Math.min(Math.max(hours[Math.floor(hours.length / 2)], cfg.najwczesniej), cfg.ostatniaSzansa - 1);
}
const sent = (kind) => state.wyslane[`${now.date}:${kind}`] === true;

function decide() {
  if (przerwa === 0) return null;
  if (now.hour < cfg.najwczesniej || now.hour > cfg.najpozniej) return null;
  const quietDays = przerwa === null ? diff(state.start, now.date) : przerwa;
  if (quietDays > cfg.ciszaPoDniach) return !state.cisza && now.hour >= first ? 'cisza' : null;
  if (przerwa === 1 && now.hour >= cfg.ostatniaSzansa && !sent('ostatnia')) return 'ostatnia';
  if (now.hour >= first && !sent('pierwsze') && !sent('ostatnia')) {
    return przerwa === null ? 'start' : przerwa === 1 ? 'dzis' : 'przerwa';
  }
  return null;
}

// ---------- 3. Messages ----------
function message(kind) {
  const n = seria, k = przerwa === null ? 0 : przerwa - 1; // k = full days missed
  const T = {
    start: [
      { t: 'Pierwsza sesja czeka', m: 'Pięć minut dziś to pierwszy dzień Twojej serii.' },
      { t: 'Zacznij serię dzisiaj', m: 'Jedna krótka sesja z AI i ogień zapłonie.' }
    ],
    dzis: [
      { t: `Seria: ${n} ${dni(n)}. Dziś też?`, m: 'Jedna krótka sesja przedłuży serię. Wystarczy 5 minut.' },
      { t: 'Czas na Duo Język', m: `Twoja seria ma ${n} ${dni(n)}. Nie daj jej zgasnąć.` },
      { t: 'Twój kod czeka', m: `${n} ${dni(n)} z rzędu. Dorzuć dzisiejszy dzień.` }
    ],
    ostatnia: [
      { t: `Seria ${n} ${dni(n)} zgaśnie o północy`, m: 'Masz jeszcze czas. Pięć minut wystarczy, żeby ją uratować.' },
      { t: 'Ostatnia szansa na dziś', m: `Za kilka godzin stracisz serię ${n} ${dni(n)}. Szybka sesja?` }
    ],
    przerwa:
      k <= 1 ? [
        { t: 'Seria zgasła', m: 'Wczoraj nie było sesji. Zacznij nową serię dziś, od 5 minut.' },
        { t: 'Nowy start', m: 'Wczorajszy dzień przepadł. Dzisiejszy jeszcze nie.' }
      ] : k === 2 ? [
        { t: 'Dwa dni bez kodu', m: 'Kod sam się nie napisze. Dobra, AI go napisze. Ale to Ty musisz go zrozumieć.' }
      ] : k <= 4 ? [
        { t: 'Cursor się nudzi', m: `Od ${k} dni nikt do niego nie zagląda. 15 minut i jesteście kwita.` },
        { t: 'Halo, jest tam kto?', m: `${k} dni przerwy. Jedna sesja dziś i wracasz do gry.` }
      ] : [
        { t: 'Nie odpuszczaj teraz', m: `${k} dni przerwy to jeszcze nie koniec. Pierwszy krok trwa 5 minut.` },
        { t: 'Python za Tobą tęskni', m: 'Serio. Otwórz edytor na 5 minut i zobacz, co się stanie.' }
      ],
    cisza: [
      { t: 'Te przypomnienia chyba nie działają', m: 'Robimy przerwę i przestajemy pisać. Gdy wrócisz do Duo Język, wrócimy i my.' }
    ]
  };
  const list = T[kind];
  const pick = list[Math.abs(Math.round(dayNum(now.date))) % list.length];
  const tags = { start: ['seedling'], dzis: ['fire'], ostatnia: ['hourglass_flowing_sand', 'fire'], przerwa: ['eyes'], cisza: ['zzz'] }[kind];
  const priority = { ostatnia: 4, cisza: 2 }[kind] || 3;
  return { title: pick.t, message: pick.m, tags, priority };
}

async function send(kind, prefix = '') {
  const msg = message(kind);
  const payload = {
    topic: TOPIC,
    title: prefix + msg.title,
    message: msg.message,
    tags: msg.tags,
    priority: msg.priority,
    click: cfg.aplikacja,
    actions: [{ action: 'view', label: 'Otwórz Duo Język', url: cfg.aplikacja }]
  };
  if (SUCHO) { console.log('SUCHO, nie wysyłam:', JSON.stringify({ title: payload.title, message: payload.message })); return; }
  const r = await fetch(SERVER + '/', { method: 'POST', body: JSON.stringify(payload) });
  if (!r.ok) throw new Error(`ntfy: HTTP ${r.status} przy wysyłce`);
  console.log(`Wysłano: ${payload.title}`);
}

// ---------- 4. Act ----------
console.log(`Teraz ${now.date} ${now.hour}:00 (${cfg.strefa}). Ostatnia sesja: ${last ?? 'brak'}. Przerwa: ${przerwa ?? '-'}. Seria: ${seria}. Godzina przypomnienia: ${first}:00.`);

if (TRYB === 'test') {
  const kind = przerwa === null ? 'start' : przerwa <= 1 ? 'dzis' : 'przerwa';
  await send(kind, 'Test: ');
} else {
  const kind = decide();
  if (kind) {
    await send(kind);
    if (!SUCHO) {
      if (kind === 'cisza') state.cisza = true;
      else state.wyslane[`${now.date}:${kind === 'ostatnia' ? 'ostatnia' : 'pierwsze'}`] = true;
    }
  } else {
    console.log('Bez przypomnienia w tej godzinie.');
  }
}

if (JSON.stringify(state) !== before && !SUCHO) {
  await writeFile(STATE_FILE, JSON.stringify(state, null, 2) + '\n');
  console.log('Zapisano stan.');
}
