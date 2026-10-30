// Kurs: Programowanie z AI (Python + vibe coding). Każda lekcja to lista zadań; typy opisuje README.
window.KURSY = window.KURSY || {};
window.KURSY.programowanie = {
  id: 'programowanie',
  tytul: 'Programowanie z AI',
  krotko: '{ }',
  kolor: '#2F5DE0',
  opis: 'Python i vibe coding z Cursorem, Claude i Gemini.',
  dzialy: [
    {
      tytul: 'Python na start',
      opis: 'Zmienne, typy, warunki i pętle.',
      lekcje: [
        {
          id: 'py1', tytul: 'Zmienne i print',
          zadania: [
            { t: 'info', tytul: 'Zmienna to pudełko z etykietą', tekst: 'Zapis `wiek = 42` wkłada liczbę 42 do pudełka z etykietą `wiek`.\nPolecenie `print(wiek)` pokazuje zawartość pudełka na ekranie.\nZnak `=` w Pythonie nie znaczy „równa się”, tylko „włóż do”.' },
            { t: 'wybor', q: 'Co wypisze ten kod?', kod: 'x = 5\nx = x + 2\nprint(x)', o: ['7', '5', 'x + 2', '52'], ok: 0, wyj: 'Najpierw x = 5, potem do x wkładamy 5 + 2.' },
            { t: 'luka', q: 'Uzupełnij, aby wypisać imię', kod: true, s: 'imie = "Ola"\n___(imie)', o: ['print', 'echo', 'show'], ok: 0 },
            { t: 'kafelki', q: 'Ułóż instrukcję, która zapisze 10 w zmiennej punkty', mono: true, odp: 'punkty = 10', extra: '== "10" :' },
            { t: 'wybor', q: 'Która nazwa zmiennej jest poprawna?', mono: true, o: ['moja_zmienna', '2zmienna', 'moja-zmienna', 'moja zmienna'], ok: 0, wyj: 'Nazwa nie może zaczynać się od cyfry ani zawierać myślnika lub spacji.' },
            { t: 'blad', q: 'Która linia zawiera błąd?', linie: ['imie = "Ania"', 'wiek = 30', 'print("Cześć, " + imie)', 'print(Wiek)'], ok: 3, wyj: 'Python rozróżnia wielkość liter: `Wiek` to inna nazwa niż `wiek`.' },
            { t: 'pary', pary: [['=', 'włóż wartość do zmiennej'], ['print()', 'pokaż na ekranie'], ['#', 'komentarz'], ['"tekst"', 'napis (str)']] },
            { t: 'wpisz', q: 'Co wypisze ten kod?', kod: 'a = 3\nb = 4\nprint(a * b)', odp: ['12'] }
          ]
        },
        {
          id: 'py2', tytul: 'Typy i działania',
          zadania: [
            { t: 'info', tytul: 'Cztery podstawowe typy', tekst: '`int`: liczba całkowita, np. `42`.\n`float`: liczba z częścią dziesiętną. Uwaga: w Pythonie piszemy kropkę, `3.5`.\n`str`: tekst w cudzysłowie, np. `"kot"`.\n`bool`: prawda lub fałsz, `True` / `False`.\nFunkcja `type(x)` mówi, jaki typ ma `x`.' },
            { t: 'wybor', q: 'Jaki typ ma 3.14?', mono: true, o: ['float', 'int', 'str', 'bool'], ok: 0 },
            { t: 'wybor', q: 'Co wypisze ten kod?', kod: 'print("2" + "3")', o: ['23', '5', 'Błąd'], ok: 0, wyj: 'Dodawanie napisów skleja je w jeden napis.' },
            { t: 'wybor', q: 'Co wypisze ten kod?', kod: 'print(7 // 2, 7 % 2)', mono: true, o: ['3 1', '3.5 1', '3 0.5', '4 1'], ok: 0, wyj: '`//` to dzielenie bez reszty, `%` to reszta z dzielenia.' },
            { t: 'luka', q: 'Zamień napis na liczbę', kod: true, s: 'wiek = ___("42")\nprint(wiek + 1)', o: ['int', 'str', 'print'], ok: 0, wyj: '`int()` zamienia napis "42" na liczbę 42.' },
            { t: 'pary', pary: [['int', '42'], ['float', '4.2'], ['str', '"42"'], ['bool', 'True']] },
            { t: 'blad', q: 'Która linia spowoduje błąd?', linie: ['liczba = 5', 'tekst = "Wynik: "', 'print(tekst + liczba)'], ok: 2, wyj: 'Nie da się dodać liczby do napisu. Użyj f-stringa: `f"Wynik: {liczba}"`.' },
            { t: 'wybor', q: 'Jak najprościej wstawić zmienną do tekstu?', mono: true, o: ['f"Mam {wiek} lat"', '"Mam {wiek} lat"', '"Mam" wiek "lat"'], ok: 0, wyj: 'Litera `f` przed cudzysłowem zamienia `{wiek}` na wartość zmiennej.' },
            { t: 'wpisz', q: 'Co wypisze ten kod?', kod: 'x = 10\nx += 5\nprint(x)', odp: ['15'], wyj: '`x += 5` to skrót od `x = x + 5`.' }
          ]
        },
        {
          id: 'py3', tytul: 'Warunki',
          zadania: [
            { t: 'info', tytul: 'Rozjazd na torach', tekst: '`if` działa jak zwrotnica: program jedzie jednym torem albo drugim.\n`if` sprawdza warunek, `elif` następny, `else` łapie resztę.\nPo warunku stawiamy dwukropek `:`, a kod w środku ma wcięcie (4 spacje).\nPorównania: `==` równe, `!=` różne, `<`, `>`, `<=`, `>=`.' },
            { t: 'wybor', q: 'Co wypisze ten kod?', kod: 'temp = 25\nif temp > 30:\n    print("upał")\nelif temp > 20:\n    print("ciepło")\nelse:\n    print("chłodno")', o: ['ciepło', 'upał', 'chłodno', 'upał i ciepło'], ok: 0 },
            { t: 'luka', q: 'Uzupełnij warunek pełnoletności', kod: true, s: 'if wiek ___ 18:\n    print("pełnoletni")', o: ['>=', '=', '=>'], ok: 0, wyj: '`=` to przypisanie, a `=>` nie istnieje w Pythonie.' },
            { t: 'blad', q: 'Która linia zawiera błąd?', linie: ['haslo = "tajne"', 'if haslo == "tajne"', '    print("Witaj")'], ok: 1, wyj: 'Po warunku `if` musi być dwukropek `:`.' },
            { t: 'wybor', q: 'Ile wynosi 5 > 3 and 2 > 4?', mono: true, o: ['False', 'True', '5'], ok: 0, wyj: '`and` wymaga, aby oba warunki były prawdziwe. 2 > 4 jest fałszem.' },
            { t: 'kafelki', q: 'Ułóż warunek: jeśli x jest równe 0', mono: true, odp: 'if x == 0:', extra: '= else', wyj: 'Do porównania służą dwa znaki równości.' },
            { t: 'blad', q: 'Która linia zawiera błąd?', linie: ['pada = True', 'if pada:', 'print("Weź parasol")'], ok: 2, wyj: 'Kod wewnątrz `if` musi mieć wcięcie.' },
            { t: 'wpisz', q: 'Co wypisze ten kod?', kod: 'x = 7\nif x % 2 == 0:\n    print("parzysta")\nelse:\n    print("nieparzysta")', odp: ['nieparzysta'] }
          ]
        },
        {
          id: 'py4', tytul: 'Pętle',
          zadania: [
            { t: 'info', tytul: 'Pętla to powtarzanie bez kopiowania', tekst: '`for` robi coś dla każdego elementu listy lub napisu.\n`range(3)` daje liczby 0, 1, 2. Zaczyna od zera i nie dochodzi do 3.\n`while` powtarza, dopóki warunek jest prawdziwy. Uważaj, żeby warunek kiedyś stał się fałszywy.' },
            { t: 'wybor', q: 'Jakie liczby wypisze ten kod?', kod: 'for i in range(3):\n    print(i)', o: ['0, 1, 2', '1, 2, 3', '0, 1, 2, 3'], ok: 0 },
            { t: 'wpisz', q: 'Co wypisze ten kod?', kod: 'suma = 0\nfor n in [2, 4, 6]:\n    suma += n\nprint(suma)', odp: ['12'] },
            { t: 'luka', q: 'Uzupełnij pętlę', kod: true, s: 'for owoc ___ ["jabłko", "gruszka"]:\n    print(owoc)', o: ['in', 'of', 'w'], ok: 0 },
            { t: 'wybor', q: 'Co jest nie tak z tym kodem?', kod: 'licznik = 0\nwhile licznik < 3:\n    print(licznik)', o: ['Pętla nigdy się nie skończy, bo licznik się nie zmienia', 'Brakuje dwukropka', 'Nic, wypisze 0, 1, 2'], ok: 0, wyj: 'Brakuje linii `licznik += 1` wewnątrz pętli.' },
            { t: 'kafelki', q: 'Ułóż nagłówek pętli, która powtórzy się 5 razy', mono: true, odp: 'for i in range(5):', extra: 'while range(4):' },
            { t: 'pary', pary: [['for', 'dla każdego elementu'], ['while', 'dopóki warunek jest prawdziwy'], ['break', 'przerwij pętlę'], ['range(3)', '0, 1, 2']] },
            { t: 'wybor', q: 'Co wypisze ostatnia linia?', kod: 'for litera in "kot":\n    print(litera.upper())', mono: true, o: ['T', 'KOT', 't', 'K'], ok: 0, wyj: 'Pętla wypisuje K, O, T, każdą literę w nowej linii.' }
          ]
        }
      ]
    },
    {
      tytul: 'Programowanie z AI',
      opis: 'Dobre prompty, czytanie kodu z AI i debugowanie.',
      lekcje: [
        {
          id: 'ai1', tytul: 'Dobry prompt',
          zadania: [
            { t: 'info', tytul: 'Prompt to brief dla wykonawcy', tekst: 'AI jest jak bardzo szybki wykonawca, który nie zna Twojego projektu.\nDobry prompt ma 4 części:\n**Cel**: co ma powstać.\n**Kontekst**: dane, pliki, środowisko.\n**Ograniczenia**: np. tylko biblioteka standardowa.\n**Format**: np. jedna funkcja z komentarzami.' },
            { t: 'wybor', q: 'Który prompt da lepszy kod?', o: ['„Napisz w Pythonie funkcję, która z pliku CSV (kolumny: data, kwota) policzy sumę kwot dla każdego miesiąca. Użyj tylko biblioteki standardowej i dodaj krótkie komentarze.”', '„Zrób kod do CSV.”', '„Napisz najlepszy możliwy program do finansów.”'], ok: 0 },
            { t: 'wybor', q: 'Czego brakuje w prompcie „Napraw mój kod”?', o: ['Kodu, treści błędu i opisu, co miało się stać', 'Grzecznego „proszę”', 'Nazwy modelu AI'], ok: 0 },
            { t: 'pary', pary: [['Cel', 'co ma powstać'], ['Kontekst', 'dane, pliki, środowisko'], ['Ograniczenia', 'np. bez dodatkowych bibliotek'], ['Format', 'np. jedna funkcja z komentarzami']] },
            { t: 'wybor', q: 'Kiedy warto poprosić AI najpierw o plan, a dopiero potem o kod?', o: ['Przy większym zadaniu z kilkoma krokami', 'Nigdy, plan to strata czasu', 'Tylko przy literówkach'], ok: 0, wyj: 'Plan pozwala wyłapać złe założenia, zanim powstanie dużo kodu.' },
            { t: 'luka', q: 'Uzupełnij zasadę', s: 'Duże zadanie dziel na ___ kroki i sprawdzaj każdy z nich.', o: ['małe', 'losowe', 'tajne'], ok: 0 },
            { t: 'wybor', q: 'Co zrobić z kodem z AI, którego nie rozumiesz?', o: ['Poprosić o wyjaśnienie linia po linii', 'Od razu wdrożyć', 'Usunąć komentarze'], ok: 0 },
            { t: 'wybor', q: 'Co jest najważniejsze w prośbie o naprawę błędu?', o: ['Pełny komunikat błędu (traceback)', 'Godzina wystąpienia', 'Motyw kolorystyczny edytora'], ok: 0 }
          ]
        },
        {
          id: 'ai2', tytul: 'Czytaj kod z AI',
          zadania: [
            { t: 'info', tytul: 'AI bywa pewne siebie i w błędzie', tekst: 'Zanim użyjesz kodu z AI, sprawdź 4 rzeczy:\n1. Czy kod się uruchamia na małym, znanym przykładzie?\n2. Czy obsługuje puste lub dziwne dane?\n3. Czy biblioteki naprawdę istnieją?\n4. Czy w kodzie nie ma haseł ani kluczy?' },
            { t: 'blad', q: 'Która linia spowoduje błąd przy uruchomieniu?', linie: ['def srednia(liczby):', '    return sum(liczby) / len(liczby)', 'print(srednia([]))'], ok: 2, wyj: 'Pusta lista daje dzielenie przez zero. Dobra funkcja powinna obsłużyć ten przypadek.' },
            { t: 'wybor', q: 'Czego brakuje w tym kodzie?', kod: 'import requests\nodp = requests.get(URL)\ndane = odp.json()', o: ['Sprawdzenia, czy zapytanie się udało, np. odp.raise_for_status()', 'Pętli for', 'Komentarza na końcu'], ok: 0 },
            { t: 'wybor', q: 'AI użyło biblioteki „superfastcsv”, o której nie słyszałeś. Co robisz?', o: ['Sprawdzam, czy istnieje i czy jest zaufana', 'Instaluję bez sprawdzania', 'Proszę AI, żeby się nie myliło'], ok: 0, wyj: 'AI czasem wymyśla nazwy bibliotek. Paczki o podobnych nazwach bywają złośliwe.' },
            { t: 'blad', q: 'Która linia jest niebezpieczna?', linie: ['API_KEY = "sk-live-123456"', 'def pobierz():', '    return wyslij(API_KEY)'], ok: 0, wyj: 'Klucze trzymaj w zmiennych środowiskowych, nigdy w kodzie ani w repozytorium.' },
            { t: 'wybor', q: 'Jaki błąd logiczny ma ta funkcja?', kod: 'def czy_pelnoletni(wiek):\n    return wiek > 18', o: ['Osoba w wieku 18 lat nie jest uznana za pełnoletnią', 'Brakuje dwukropka', 'Funkcja nic nie zwraca'], ok: 0, wyj: 'Powinno być `wiek >= 18`.' },
            { t: 'pary', pary: [['Traceback', 'ścieżka do miejsca błędu'], ['Test', 'automatyczne sprawdzenie kodu'], ['Halucynacja', 'pewna siebie, ale fałszywa odpowiedź'], ['Code review', 'przegląd kodu przed użyciem']] },
            { t: 'wybor', q: 'Najszybszy sposób sprawdzenia kodu z AI?', o: ['Uruchomić go na małym, znanym przykładzie', 'Przeczytać tylko pierwszą linię', 'Zaufać, bo AI brzmi pewnie'], ok: 0 }
          ]
        },
        {
          id: 'ai3', tytul: 'Debugowanie z AI',
          zadania: [
            { t: 'info', tytul: 'Debugowanie w 4 krokach', tekst: '1. **Odtwórz** błąd, żeby wiedzieć, kiedy występuje.\n2. **Przeczytaj** ostatnią linię tracebacku: tam jest nazwa błędu.\n3. **Zapytaj** AI, podając kod, błąd i oczekiwany wynik.\n4. **Sprawdź** poprawkę i zrozum przyczynę.' },
            { t: 'wybor', q: 'Co oznacza ten błąd?', kod: 'Traceback (most recent call last):\n  File "app.py", line 7, in <module>\n    print(ceny["kawa"])\nKeyError: \'kawa\'', o: ['W słowniku ceny nie ma klucza "kawa"', 'Plik app.py nie istnieje', 'Python nie jest zainstalowany'], ok: 0 },
            { t: 'wybor', q: 'Najczęstsza przyczyna tego błędu?', kod: 'TypeError: can only concatenate str (not "int") to str', o: ['Dodawanie liczby do tekstu', 'Brak internetu', 'Zła nazwa pliku'], ok: 0 },
            { t: 'wybor', q: 'Jak to naprawić?', kod: "ModuleNotFoundError: No module named 'requests'", o: ['Zainstalować pakiet: pip install requests', 'Nazwać swój plik requests.py', 'Usunąć wszystkie importy'], ok: 0, wyj: 'Uwaga: własny plik o nazwie `requests.py` też psuje ten import.' },
            { t: 'kafelki', q: 'Ułóż kroki debugowania w kolejności', odp: 'odtwórz przeczytaj zapytaj sprawdź', extra: 'zgadnij' },
            { t: 'wybor', q: 'AI trzeci raz proponuje poprawkę, która nie działa. Co robisz?', o: ['Daję więcej kontekstu albo proszę o inną strategię', 'Wklejam ten sam błąd jeszcze raz', 'Usuwam cały projekt'], ok: 0 },
            { t: 'wybor', q: 'Co zwykle oznacza IndentationError?', o: ['Złe wcięcia w kodzie', 'Brak pamięci', 'Złe hasło'], ok: 0 },
            { t: 'wybor', q: 'Po co zapisać działającą wersję w Gicie przed dużą zmianą z AI?', o: ['Żeby łatwo wrócić, jeśli AI coś popsuje', 'Bo Git przyspiesza Pythona', 'Bo AI tego wymaga'], ok: 0 }
          ]
        }
      ]
    },
    {
      tytul: 'Git i narzędzia',
      opis: 'Zapisywanie postępu, środowiska i biblioteki.',
      lekcje: [{ id: 'git1', tytul: 'Git: zapisuj postęp' }, { id: 'env1', tytul: 'Środowiska i pip' }, { id: 'lib1', tytul: 'Pliki i biblioteki' }]
    },
    {
      tytul: 'Projekty vibe coding',
      opis: 'Budujesz prawdziwe narzędzia z pomocą AI.',
      lekcje: [{ id: 'proj1', tytul: 'Dane z API' }, { id: 'proj2', tytul: 'Automatyzacja nudnych zadań' }, { id: 'proj3', tytul: 'Mała aplikacja webowa' }]
    }
  ]
};
