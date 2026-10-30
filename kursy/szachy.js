// Kurs: Szachy od zasad do pierwszej taktyki. Pozycje (FEN) sprawdzone silnikiem python-chess.
// Notacja polska: K król, H hetman, W wieża, G goniec, S skoczek; ruch piona bez litery.
window.KURSY = window.KURSY || {};
window.KURSY.szachy = {
  id: 'szachy',
  tytul: 'Szachy',
  krotko: '♞︎',
  kolor: '#7A4FD6',
  opis: 'Od ruchów bierek, przez maty, do pierwszej taktyki.',
  dzialy: [
    {
      tytul: 'Zasady gry',
      opis: 'Bierki, szach, mat, pat i ruchy specjalne.',
      lekcje: [
        {
          id: 's1', tytul: 'Bierki i ich ruchy',
          zadania: [
            { t: 'info', tytul: 'Sześć rodzajów bierek', tekst: '**Król (K)**: o jedno pole w dowolną stronę.\n**Hetman (H)**: dowolnie daleko w linii prostej i po skosie.\n**Wieża (W)**: dowolnie daleko w linii prostej.\n**Goniec (G)**: dowolnie daleko po skosie.\n**Skoczek (S)**: ruch w kształcie litery L (dwa pola prosto i jedno w bok). Jako jedyny przeskakuje inne bierki.\n**Pion**: o jedno pole do przodu, z pozycji startowej także o dwa. Bije po skosie.' },
            { t: 'pary', q: 'Połącz bierkę z jej literą', pary: [['Król', 'K'], ['Hetman', 'H'], ['Wieża', 'W'], ['Goniec', 'G'], ['Skoczek', 'S']] },
            { t: 'wybor', q: 'Która bierka może przeskakiwać inne?', o: ['Skoczek', 'Goniec', 'Wieża', 'Hetman'], ok: 0 },
            { t: 'szachy', q: 'Na które pole może pójść skoczek z d4?', fen: '4k3/8/8/8/3N4/8/8/4K3 w - - 0 1', o: ['Sf5', 'Sd6', 'Se5', 'Sd5'], ok: 0, wyj: 'Skoczek z d4 może iść na: b3, b5, c2, c6, e2, e6, f3, f5.' },
            { t: 'szachy', q: 'Na które pole może pójść goniec z c3?', fen: '4k3/8/8/8/8/2B5/8/4K3 w - - 0 1', o: ['Gg7', 'Gc6', 'Gf3', 'Ge4'], ok: 0, wyj: 'Goniec chodzi tylko po skosie: c3, d4, e5, f6, g7.' },
            { t: 'wybor', q: 'Jak bije pion?', o: ['Po skosie, o jedno pole do przodu', 'Prosto do przodu', 'W bok'], ok: 0 },
            { t: 'szachy', q: 'Którym ruchem wieża da szacha królowi czarnych?', fen: '4k3/8/8/8/8/8/8/R3K3 w - - 0 1', o: ['Wa8', 'Wa7', 'Wd1'], ok: 0 },
            { t: 'wybor', q: 'Która bierka jest najcenniejsza (poza królem)?', o: ['Hetman', 'Wieża', 'Skoczek'], ok: 0, wyj: 'Przybliżona wartość: hetman 9, wieża 5, goniec 3, skoczek 3, pion 1.' }
          ]
        },
        {
          id: 's2', tytul: 'Szach, mat i pat',
          zadania: [
            { t: 'info', tytul: 'Jak kończy się partia', tekst: '**Szach**: król jest atakowany. Trzeba się obronić: uciec, zasłonić się albo zbić atakującą bierkę.\n**Mat**: szach, przed którym nie ma obrony. Koniec partii.\n**Pat**: strona na ruchu nie ma żadnego dozwolonego ruchu, a jej król NIE jest szachowany. To remis.' },
            { t: 'szachy', q: 'Białe dają mata w 1 ruchu. Który ruch?', fen: 'k7/8/1K6/8/8/8/7Q/8 w - - 0 1', o: ['Hh8', 'Hb8', 'Hc7', 'Ha2'], ok: 0, wyj: 'Hetman zamyka 8. linię, a król białych pilnuje pól a7 i b7. Uwaga: Hc7 to pat, czyli tylko remis!' },
            { t: 'wybor', q: 'Czym pat różni się od mata?', o: ['Przy pacie król nie jest szachowany, a strona nie ma ruchu. To remis.', 'Pat to mat w narożniku', 'Pat wygrywa ten, kto go dał'], ok: 0 },
            { t: 'szachy', q: 'Ruch czarnych. Jaki jest wynik?', fen: 'k7/2Q5/1K6/8/8/8/8/8 b - - 0 1', o: ['Pat: remis', 'Mat: wygrywają białe', 'Partia trwa dalej'], ok: 0, wyj: 'Król czarnych nie jest szachowany, ale każde pole obok jest atakowane.' },
            { t: 'pary', pary: [['Szach', 'król jest atakowany'], ['Mat', 'szach bez obrony'], ['Pat', 'brak ruchu bez szacha'], ['Remis', 'nikt nie wygrywa']] },
            { t: 'wybor', q: 'Król jest w szachu. Czego NIE wolno zrobić?', o: ['Zagrać innym pionem i zostawić króla w szachu', 'Uciec królem', 'Zasłonić króla bierką', 'Zbić atakującą bierkę'], ok: 0 },
            { t: 'szachy', q: 'Białe dają mata w 1 ruchu. Który ruch?', fen: '6k1/5ppp/8/8/8/8/5PPP/4R1K1 w - - 0 1', o: ['We8', 'We7', 'Kf1', 'f3'], ok: 0, wyj: 'To mat korytarzowy: własne piony zamykają królowi ucieczkę.' },
            { t: 'luka', q: 'Uzupełnij', s: 'Mat korytarzowy zdarza się, gdy własne ___ blokują ucieczkę króla.', o: ['piony', 'gońce', 'skoczki'], ok: 0 }
          ]
        },
        {
          id: 's3', tytul: 'Ruchy specjalne',
          zadania: [
            { t: 'info', tytul: 'Roszada, promocja, bicie w przelocie', tekst: '**Roszada**: król idzie o dwa pola w stronę wieży, a wieża staje obok niego po drugiej stronie. Warunki: król i ta wieża jeszcze się nie ruszały, pola między nimi są puste, król nie jest w szachu i nie przechodzi przez atakowane pole. Krótka: O-O, długa: O-O-O.\n**Promocja**: pion na ostatniej linii zamienia się w hetmana, wieżę, gońca albo skoczka.\n**Bicie w przelocie**: jeśli pion przeciwnika ruszy się o dwa pola i stanie obok Twojego piona, możesz go zbić tak, jakby ruszył się o jedno. Tylko w następnym ruchu.' },
            { t: 'wybor', q: 'Kiedy NIE możesz zrobić roszady?', o: ['Gdy Twój król jest w szachu', 'Gdy wieża jeszcze się nie ruszała', 'Gdy minęło 10 ruchów'], ok: 0 },
            { t: 'szachy', q: 'Na którym polu stanie król białych po roszadzie krótkiej?', fen: '4k3/8/8/8/8/8/8/R3K2R w KQ - 0 1', o: ['g1', 'c1', 'f1'], ok: 0, wyj: 'Po roszadzie krótkiej: król g1, wieża f1. Po długiej: król c1, wieża d1.' },
            { t: 'szachy', q: 'Pion stoi na a7. Najsilniejszy ruch?', fen: '8/P6k/8/8/8/8/8/4K3 w - - 0 1', o: ['a8=H', 'a8=S', 'Ke2'], ok: 0 },
            { t: 'szachy', q: 'Czarne zagrały właśnie d7–d5. Jak białe zbiją tego piona w przelocie?', fen: '4k3/8/8/3pP3/8/8/8/4K3 w - d6 0 2', o: ['exd6', 'e6', 'Kd2'], ok: 0, wyj: 'Pion z e5 bije na d6, a pion z d5 znika z szachownicy.' },
            { t: 'pary', pary: [['O-O', 'roszada krótka'], ['O-O-O', 'roszada długa'], ['=H', 'promocja na hetmana'], ['e.p.', 'bicie w przelocie']] },
            { t: 'luka', q: 'Uzupełnij', s: 'Bicie w przelocie jest możliwe tylko ___ po ruchu piona o dwa pola.', o: ['bezpośrednio', 'dowolnie długo', 'dwa ruchy'], ok: 0 },
            { t: 'wybor', q: 'W co nie może zamienić się pion przy promocji?', o: ['W króla', 'W hetmana', 'W skoczka'], ok: 0 }
          ]
        }
      ]
    },
    {
      tytul: 'Pierwsza taktyka',
      opis: 'Mat szewski, widełki i związanie.',
      lekcje: [
        {
          id: 's4', tytul: 'Mat szewski i obrona',
          zadania: [
            { t: 'info', tytul: 'Słaby punkt f7', tekst: 'Na początku partii pole **f7** (u białych **f2**) broni tylko król.\nMat szewski: 1.e4 e5 2.Gc4 Sc6 3.Hh5 Sf6?? 4.Hxf7#.\nObrona po 3.Hh5: na przykład 3...g6 albo 3...He7.' },
            { t: 'szachy', q: 'Białe dają mata w 1 ruchu. Który ruch?', fen: 'r1bqkb1r/pppp1ppp/2n2n2/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 4 4', o: ['Hxf7', 'Hxe5', 'Gxf7', 'Hxh7'], ok: 0 },
            { t: 'wybor', q: 'Które pole jest najsłabsze w pozycji wyjściowej czarnych?', o: ['f7', 'e5', 'd4', 'a8'], ok: 0 },
            { t: 'wybor', q: 'Po 1.e4 e5 2.Gc4 Sc6 3.Hh5 białe grożą Hxf7. Która obrona czarnych jest dobra?', o: ['3...g6', '3...Sf6', '3...h6'], ok: 0, wyj: 'Po 3...Sf6 albo 3...h6 białe dają mata: 4.Hxf7#.' },
            { t: 'szachy', q: 'Czarne zagrały g6. Który odwrót hetmana nadal grozi matem na f7?', fen: 'r1bqkbnr/pppp1p1p/2n3p1/4p2Q/2B1P3/8/PPPP1PPP/RNB1K1NR w KQkq - 0 4', o: ['Hf3', 'Hh4', 'He2'], ok: 0 },
            { t: 'luka', q: 'Uzupełnij', s: 'Mat szewski to mat hetmanem na polu ___.', o: ['f7', 'e8', 'h7'], ok: 0 },
            { t: 'wybor', q: 'Morał z mata szewskiego:', o: ['Rozwijaj figury i pilnuj pola f7 (f2)', 'Zawsze wyprowadzaj hetmana w drugim ruchu', 'Nigdy nie rób roszady'], ok: 0 }
          ]
        },
        {
          id: 's5', tytul: 'Widełki i związanie',
          zadania: [
            { t: 'info', tytul: 'Dwa podstawowe motywy', tekst: '**Widełki**: jedna bierka atakuje dwie naraz. Przeciwnik uratuje tylko jedną. Mistrzem widełek jest skoczek.\n**Związanie**: bierka nie może się ruszyć, bo odsłoniłaby cenniejszą bierkę za sobą. Gdy za nią stoi król, ruch jest wręcz niedozwolony. Wiązać mogą gońce, wieże i hetmany.' },
            { t: 'szachy', q: 'Znajdź widełki skoczkiem.', fen: 'r3k3/8/8/1N6/8/8/8/4K3 w - - 0 1', o: ['Sc7', 'Sd6', 'Sa7', 'Sd4'], ok: 0, wyj: 'Sc7 szachuje króla i atakuje wieżę na a8. Król musi uciec, a białe zbiją wieżę.' },
            { t: 'szachy', q: 'Którym ruchem goniec zwiąże skoczka z królem?', fen: '4k3/3n4/8/8/8/8/8/4KB2 w - - 0 1', o: ['Gb5', 'Gd3', 'Ge2', 'Gh3'], ok: 0, wyj: 'Goniec na b5, skoczek na d7 i król na e8 stoją na jednej przekątnej.' },
            { t: 'wybor', q: 'Co może zrobić skoczek związany z własnym królem?', o: ['Nie może się ruszyć, bo odsłoniłby króla', 'Rusza się normalnie', 'Może tylko bić'], ok: 0 },
            { t: 'pary', pary: [['Widełki', 'atak na dwie bierki naraz'], ['Związanie', 'bierka nie może się ruszyć'], ['Szach', 'atak na króla'], ['Wymiana', 'zbicie za zbicie']] },
            { t: 'szachy', q: 'Znajdź widełki hetmanem, po których czarne stracą wieżę.', fen: 'r5k1/8/8/8/8/8/8/3QK3 w - - 0 1', o: ['Hd5', 'Hd8', 'Hg4'], ok: 0, wyj: 'Hd5 szachuje po przekątnej i atakuje wieżę na a8. Po Hd8 wieża po prostu bije hetmana.' },
            { t: 'luka', q: 'Uzupełnij', s: 'Goniec może związać bierkę z królem tylko po ___.', o: ['przekątnej', 'linii pionowej', 'linii poziomej'], ok: 0 }
          ]
        }
      ]
    },
    {
      tytul: 'Debiuty i końcówki',
      opis: 'Zasady otwarcia i proste końcówki.',
      lekcje: [{ id: 's6', tytul: 'Zasady debiutu' }, { id: 's7', tytul: 'Partia włoska' }, { id: 's8', tytul: 'Opozycja królów' }, { id: 's9', tytul: 'Reguła kwadratu' }]
    }
  ]
};
