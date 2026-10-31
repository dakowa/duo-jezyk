# AGENT_STATE

## Cel
Duo Język: platforma lekcji w stylu Duolingo (ścieżka, serduszka, XP, dzienny cel, seria, przypomnienia), z profilami bez rejestracji i osobnymi kursami:
- Damian: Programowanie z AI
- Marcin: Angielski (zna słówka, bez czasów → czasy)
- Diana: Medycyna genetyczna (zaawansowana), Motocykl (zaawansowany), Angielski (czasy, wymowa, słuchanie)
- Teresa: Szachy (od zasad do taktyki), Grzyby i lasy grzybowe w Polsce (zaawansowane, bezpieczeństwo)

## Zrobione
- v1–v3: mapa nauki, seria dni, przypomnienia (GitHub Actions + ntfy), profile, Kora, instalacja na ekran.
- v4: silnik lekcji + 6 kursów, 33 grywalne lekcje (~270 zadań):
  - programowanie: 7 lekcji (Python na start, Programowanie z AI) + 2 działy „wkrótce”.
  - angielski: 7 lekcji (to be, Present Simple/Continuous, Past Simple, will/going to) + dział „wkrótce”.
  - genetyka: 6 lekcji; motocykl: 4 lekcje; szachy: 5 lekcji (pozycje sprawdzone python-chess); grzyby: 4 lekcje.
- Przypomnienia: treści neutralne, z imieniem i nazwą kursu (`kurs` w sygnale, nazwy w `ustawienia.json`).
- Manifest: skróty „Następna lekcja” (`?lekcja=dalej`) i „Szybka powtórka” (`?lekcja=powtorka`). SW cache v5 z plikami kursów.
- v5: egzaminy do przeskakiwania działów. Zablokowany dział: „Przeskocz tutaj” (egzamin z niezaliczonych lekcji wcześniejszych działów). Bieżący dział: „Znasz to? Zalicz egzaminem”. 10–15 pytań, 3 szanse, bez serduszek, +20 XP; zdany = lekcje oznaczone `egzamin: <data>`.
- v5: poprawiony układ okien „Kto się uczy?” i „Twoje kursy” na telefonie (długie listy kursów wypychały wiersze poza ekran).

## Pliki
- `index.html`: silnik (profile, kursy, ścieżka, lekcja, 11 typów zadań, ntfy, instalacja).
- `kursy/<id>.js`: treść kursu (format w README).
- `_przypomnienia/`, `.github/workflows/przypomnienia.yml`, `manifest.webmanifest`, `sw.js`, `ikony/`.

## Decyzje
- Postęp lokalny per profil: `duo-jezyk-kursy-v1:<id>`, `duo-jezyk-dni-v1:<id>` (XP dziennie), `duo-jezyk-serca-v1:<id>`.
- Serduszka: 5, +1 na godzinę; powtórki nie zabierają serduszek i zwracają 1.
- XP: lekcja 10 (+5 bez błędów), powtórka 5. Dzienny cel 20 XP. Błędne zadanie wraca na koniec lekcji.
- Egzamin: typy pytań wybor, luka, kafelki, sluchaj, dyktando, wpisz, blad, szachy (bez info, mow, pary). Pytania po równo z każdej lekcji.
- Mówienie: Web Speech API (rozpoznawanie, próg 70% słów); bez wsparcia można pominąć. Słuchanie: synteza mowy en-GB, tryb wolny.
- Treści medyczne, motocyklowe i grzybowe mają ostrzeżenia bezpieczeństwa; bez porad dawkowania.

## Testy
- Playwright (`scratchpad/test_course.py`, `test_regress.py`, `test_exam.py`, `shot_dialog.py`, `lesson_bot.py`): każdy kurs przechodzony w całości przez UI; migracja v3, brak serduszek, profile, dodawanie kursu, skróty.
- Skrypt przypomnień: atrapa ntfy, scenariusze wielu osób, stref, nazw kursów.

## Następny krok
- Dopisywać lekcje w działach „wkrótce” (lekcja bez `zadania` = wkrótce).
- Pomysł: ranking rodzinny (tygodniowe XP) liczony przez workflow z sygnałów ntfy.
