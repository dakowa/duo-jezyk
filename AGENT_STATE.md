# AGENT_STATE

## Cel
Duo Język: platforma lekcji w stylu Duolingo (ścieżka, serduszka, XP, dzienny cel, seria, przypomnienia), z profilami bez rejestracji i osobnymi kursami:
- Damian: Programowanie z AI
- Marcin: Angielski (zna słówka, bez czasów → czasy)
- Diana: Medycyna genetyczna (zaawansowana), Motocykl (zaawansowany), Angielski (czasy, wymowa, słuchanie)
- Teresa: Szachy (od zasad do taktyki), Grzyby i lasy grzybowe w Polsce (zaawansowane, bezpieczeństwo)

## Zrobione
- v1–v3: mapa nauki, seria dni, przypomnienia (GitHub Actions + ntfy), profile, Kora, instalacja na ekran.
- v4 (gałąź `lekcje`): nowy silnik lekcji w `index.html`; kurs `kursy/programowanie.js` (7 lekcji grywalnych + 2 działy „wkrótce”). Test automatyczny przechodzi wszystkie lekcje.

## W toku
- Kursy: angielski, genetyka, motocykl, szachy, grzyby (`kursy/*.js`).
- Przypomnienia: neutralne treści z nazwą kursu (skrypt czyta `kurs` z sygnału).
- Manifest: skróty `?lekcja=dalej` i `?lekcja=powtorka` zamiast `?sesja=`.

## Pliki
- `index.html`: silnik (profile, kursy, ścieżka, lekcja, 11 typów zadań, ntfy, instalacja).
- `kursy/<id>.js`: treść kursu, `window.KURSY[id] = { tytul, krotko, kolor, opis, mowa?, uwaga?, dzialy: [{ tytul, opis, lekcje: [{ id, tytul, zadania: [...] }] }] }`.
- Typy zadań: info, wybor, luka, kafelki, pary, sluchaj, dyktando, mow, wpisz, blad, szachy.
- `_przypomnienia/`, `.github/workflows/przypomnienia.yml`, `manifest.webmanifest`, `sw.js`, `ikony/`.

## Decyzje
- Postęp lokalny per profil: klucze `duo-jezyk-kursy-v1:<id>`, `duo-jezyk-dni-v1:<id>` (XP dziennie), `duo-jezyk-serca-v1:<id>`.
- Serduszka: 5, +1 na godzinę; powtórki nie zabierają serduszek i zwracają 1.
- XP: lekcja 10 (+5 bez błędów), powtórka 5. Dzienny cel 20 XP.
- Błędne zadanie wraca na koniec lekcji.
- Pracuję na gałęzi `lekcje`; scalam do `main` dopiero, gdy wszystkie kursy przejdą testy.

## Testy
- `scratchpad/test_engine.py` + `lesson_bot.py`: Playwright przechodzi całe kursy przez UI (poprawne i błędne odpowiedzi).

## Następny krok
- Napisać `kursy/angielski.js`, przetestować słuchanie/dyktando/mówienie.
