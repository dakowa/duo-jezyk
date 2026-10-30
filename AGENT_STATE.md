# AGENT_STATE

## Cel
Duo Język: polska mapa nauki programowania z AI + seria dni + codzienne przypomnienia na telefon (styl Duolingo).

## Zrobione
- v1: mapa po polsku, 5 etapów, 28 zadań, postęp w localStorage.
- v2: seria dni, sesja dnia (5/15/30 min), pasek tygodnia, sekcja „Przypomnienia”.
- Przypomnienia: GitHub Actions co godzinę + ntfy.sh. Eskalacja tonu, „ostatnia szansa” ok. 21:00, cisza po 7 dniach.
- Strona główna: repo dakowa/dakowa.github.io z listą projektów.

## Pliki
- `index.html`: cała aplikacja (bez zależności).
- `_przypomnienia/przypomnij.mjs`: logika przypomnień.
- `_przypomnienia/ustawienia.json`: strefa czasowa, godziny, adres aplikacji.
- `_przypomnienia/stan.json`: dni aktywności, wysłane przypomnienia (zapisuje workflow).
- `.github/workflows/przypomnienia.yml`: harmonogram (minuta 17 każdej godziny).

## Decyzje
- Brak serwera: aplikacja wysyła sygnał aktywności do tematu ntfy (log), workflow go odczytuje (ntfy trzyma wiadomości ok. 12 h, dlatego co godzinę).
- Tematy ntfy są w sekretach repo (NTFY_TOPIC, NTFY_LOG_TOPIC) i w linku konfiguracyjnym (#polacz=temat~log). Nigdy w plikach repo.
- Folder z podkreślnikiem nie jest publikowany przez Jekyll na stronie.
- Stan w gałęzi main: commity utrzymują aktywność repo (GitHub wyłącza harmonogram po 60 dniach bez aktywności).

## Testy
- Przeglądarka (Playwright): seria, sesja, link konfiguracyjny, sygnał do ntfy, test powiadomienia, telefon + tryb ciemny.
- Skrypt: 14 scenariuszy na atrapie ntfy (start, dziś, ostatnia szansa, przerwa, cisza, powrót, typowa godzina, czas letni, tryb test).

## Otwarte
- Użytkownik musi zainstalować ntfy i subskrybować temat na telefonie.

## Następny krok
- Brak. Zmiany godzin: edytuj `_przypomnienia/ustawienia.json`.
