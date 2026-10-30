# Duo Język

Mapa nauki programowania z AI (Cursor, Claude, Gemini) po polsku, z serią dni i codziennymi przypomnieniami na telefon.

Strona: https://dakowa.github.io/duo-jezyk/

## Jak działają przypomnienia

1. Gdy zaliczysz sesję, aplikacja wysyła cichy sygnał do prywatnego tematu w [ntfy](https://ntfy.sh).
2. Co godzinę GitHub Actions uruchamia `_przypomnienia/przypomnij.mjs`.
3. Jeśli dziś nie było sesji, skrypt wysyła przypomnienie na telefon. Ton rośnie z każdym dniem przerwy.
4. Po 7 dniach ciszy przypomnienia milkną, aż wrócisz.

Godziny i strefę czasową zmienisz w `_przypomnienia/ustawienia.json`.
Tematy ntfy są w sekretach repozytorium (`NTFY_TOPIC`, `NTFY_LOG_TOPIC`), nie w kodzie.

Ręczny test: zakładka Actions → Przypomnienia → Run workflow → tryb `test`.
