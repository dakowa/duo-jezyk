# Duo Język

Mapa nauki programowania z AI (Cursor, Claude, Gemini) po polsku, z serią dni, profilami bez rejestracji, maskotką Korą i codziennymi przypomnieniami na telefon.

Strona: https://dakowa.github.io/duo-jezyk/

## Profile
Bez rejestracji i hasła. Każda osoba ma własną serię, postęp i przypomnienia. Dane zapisują się na urządzeniu.

## Ikona na ekranie telefonu
Aplikację można dodać do ekranu głównego (Android: przycisk w aplikacji; iPhone: Udostępnij → Dodaj do ekranu początkowego). Na Androidzie przytrzymanie ikony pokazuje skróty „Zalicz 15 minut” i „Zalicz 5 minut”.

## Jak działają przypomnienia
1. Gdy ktoś włączy przypomnienia lub zaliczy sesję, aplikacja wysyła cichy sygnał do prywatnego tematu w [ntfy](https://ntfy.sh).
2. Co godzinę GitHub Actions uruchamia `_przypomnienia/przypomnij.mjs`.
3. Jeśli ktoś dziś nie ćwiczył, dostaje przypomnienie na swój telefon, w swojej strefie czasowej. Ton rośnie z każdym dniem przerwy.
4. Po 7 dniach ciszy przypomnienia milkną, aż ta osoba wróci.

Godziny zmienisz w `_przypomnienia/ustawienia.json`.
Tematy ntfy są w sekretach repozytorium (`NTFY_TOPICS`, `NTFY_LOG_TOPIC`), nie w kodzie.

Ręczny test: zakładka Actions → Przypomnienia → Run workflow → tryb `test`, profil np. `teresa`.
