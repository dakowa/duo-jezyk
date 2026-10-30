# AGENT_STATE

## Cel
Duo Język: polska mapa nauki programowania z AI + seria dni + codzienne przypomnienia na telefon (styl Duolingo), dla kilku osób, z maskotką Korą (oryginalny owczarek collie).

## Zrobione
- v1: mapa po polsku, 5 etapów, 28 zadań.
- v2: seria dni, sesja dnia (5/15/30 min), pasek tygodnia, przypomnienia przez GitHub Actions + ntfy.
- v3: profile bez rejestracji (Marcin, Teresa, Diana, Damian + „Dodaj osobę”), osobny postęp i przypomnienia dla każdej osoby, strefa czasowa z przeglądarki, Kora w panelu dnia (nastrój: zadowolona / czeka / smutna), instalacja na ekran telefonu (manifest, service worker, skróty ?sesja=5|15, karta „Dodaj Duo Język na ekran telefonu” dla Androida i iPhone'a, plakietka na ikonie).
- Strona główna: repo dakowa/dakowa.github.io z listą projektów.

## Pliki
- `index.html`: cała aplikacja (bez zależności).
- `manifest.webmanifest`, `sw.js`: instalacja na ekran i praca offline (najpierw sieć).
- `ikony/kora.svg`: źródło ikony; PNG generowane z niego na Macu (qlmanage + sips).
- `_przypomnienia/przypomnij.mjs`: logika przypomnień dla wielu osób.
- `_przypomnienia/ustawienia.json`: strefa domyślna, godziny, lista profili z imionami.
- `_przypomnienia/stan.json`: stan per profil (zapisuje workflow).
- `.github/workflows/przypomnienia.yml`: harmonogram (minuta 17 każdej godziny), tryb test z wyborem profilu.

## Decyzje
- Profile tylko lokalnie (localStorage, klucze z sufiksem `:id`). Dane sprzed profili przeniesione do Damiana.
- Link konfiguracyjny: `#polacz=<temat>~<log>~<profil>`; stary format bez profilu = Damian.
- Sekrety: NTFY_TOPICS (JSON id → temat), NTFY_LOG_TOPIC (wspólny), NTFY_TOPIC (stary, dla Damiana). Tematy nigdy w plikach repo.
- Osoba dostaje przypomnienia dopiero po otwarciu swojego linku (sygnał „polaczenie”).
- Nowa osoba dodana w aplikacji nie ma przypomnień, dopóki nie dodamy jej tematu do NTFY_TOPICS (bezpieczeństwo: tematy nie trafiają do publicznego stanu).
- Prawdziwy widżet niemożliwy dla strony WWW; zamiast tego ikona PWA ze skrótami.
- Maskotka: oryginalna Kora, nie Lassie (chroniona postać).

## Testy
- Playwright: profile, migracja, linki (nowy i stary format), skrót ?sesja=15, karta instalacji (Android, iPhone, komputer), tryb ciemny, telefon.
- Skrypt: scenariusze jednej osoby (14) + wielu osób (migracja, strefy Dublin/Warszawa, zła strefa, stary sygnał, test dla profilu, brak profilu).

## Otwarte
- Marcin, Teresa i Diana muszą zainstalować ntfy i otworzyć swoje linki.

## Następny krok
- Brak. Nowa osoba z przypomnieniami: wygeneruj temat, dopisz do NTFY_TOPICS i do `profile` w ustawieniach, daj link.
