# Duo Język

Lekcje w stylu Duolingo dla całej rodziny: ścieżka lekcji, serduszka, XP, dzienny cel, seria dni, maskotka Kora i codzienne przypomnienia na telefon.

Strona: https://dakowa.github.io/duo-jezyk/

## Kursy
| Osoba | Kursy |
|---|---|
| Damian | Programowanie z AI |
| Marcin | Angielski (czasy, słuchanie, mówienie) |
| Diana | Medycyna genetyczna, Motocykl: technika jazdy, Angielski |
| Teresa | Szachy, Grzyby i lasy grzybowe |

Każdy może dodać inny kurs przyciskiem kursu w lewym górnym rogu.

**Przeskakiwanie działów:** na banerze zablokowanego działu jest przycisk „Przeskocz tutaj”. Egzamin z wcześniejszych działów (3 szanse, bez serduszek) odblokowuje ten dział. Na bieżącym dziale: „Znasz to? Zalicz egzaminem”. Profile działają bez rejestracji; postęp zapisuje się na urządzeniu.

## Jak dopisać lekcję
Treść kursu jest w `kursy/<id>.js`. Lekcja to `{ id, tytul, zadania: [...] }`. Lekcja bez `zadania` pokazuje się jako „wkrótce”.

Typy zadań:
- `info`: karta z wiedzą (`tytul`, `tekst`, opcjonalnie `uwaga`, `mow` do odczytania na głos).
- `wybor`: wybór odpowiedzi (`q`, `o`, `ok`, opcjonalnie `kod`, `fen`, `mono`, `wyj`).
- `luka`: zdanie z luką `___` (`s`, `o`, `ok`, `kod: true` dla kodu).
- `kafelki`: ułóż odpowiedź z kafelków (`p` polecenie, `odp`, `extra`, `alt`).
- `pary`: połącz pary (`pary`, `mowL: true` czyta lewą kolumnę na głos).
- `sluchaj`: posłuchaj i wybierz (`s`, `o`, `ok`).
- `dyktando`: posłuchaj i ułóż zdanie (`s`, `extra`).
- `mow`: powiedz na głos, rozpoznawanie mowy (`s`, `pl`).
- `wpisz`: wpisz odpowiedź (`q`, `p`, `odp` lista poprawnych).
- `blad`: wskaż linię z błędem (`linie`, `ok`).
- `szachy`: pozycja FEN i wybór ruchu (`fen`, `o`, `ok`). Pozycje sprawdzaj silnikiem (python-chess).

Formatowanie w tekstach: `**pogrubienie**`, `` `kod` ``, nowa linia `\n`.

## Przypomnienia
1. Po ukończonej lekcji aplikacja wysyła cichy sygnał do prywatnego tematu w [ntfy](https://ntfy.sh).
2. Co godzinę GitHub Actions uruchamia `_przypomnienia/przypomnij.mjs`.
3. Jeśli ktoś dziś nie ukończył lekcji, dostaje przypomnienie na telefon, w swojej strefie czasowej, z nazwą kursu. Ton rośnie z każdym dniem przerwy.
4. Po 7 dniach ciszy przypomnienia milkną, aż ta osoba wróci.

Godziny zmienisz w `_przypomnienia/ustawienia.json`. Tematy ntfy są w sekretach repozytorium (`NTFY_TOPICS`, `NTFY_LOG_TOPIC`), nie w kodzie.

Ręczny test: Actions → Przypomnienia → Run workflow → tryb `test`, profil np. `teresa`.
