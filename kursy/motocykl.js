// Kurs: Zaawansowana technika jazdy motocyklem (teoria; praktyka na placu z instruktorem).
window.KURSY = window.KURSY || {};
window.KURSY.motocykl = {
  id: 'motocykl',
  tytul: 'Motocykl: technika jazdy',
  krotko: 'MOT',
  kolor: '#C9700C',
  opis: 'Zaawansowana technika: przeciwskręt, linia jazdy, hamowanie i manewry przy małej prędkości.',
  uwaga: 'Teoria nie zastąpi praktyki. Nowe techniki ćwicz na zamkniętym placu, najlepiej z instruktorem i w pełnym stroju ochronnym.',
  dzialy: [
    {
      tytul: 'Technika jazdy',
      opis: 'Jak motocykl naprawdę skręca, hamuje i manewruje.',
      lekcje: [
        {
          id: 'm1', tytul: 'Przeciwskręt i wzrok',
          zadania: [
            { t: 'info', tytul: 'Motocykl skręca pochyleniem', tekst: 'Powyżej ok. 20–30 km/h motocykl skręca dzięki pochyleniu, a pochylenie uruchamiasz **przeciwskrętem**.\nLekko pchnij do przodu prawą manetkę: motocykl pochyli się i skręci w prawo. Lewą: w lewo.\nMocniejszy nacisk to szybsze pochylenie.\n**Wzrok** prowadzi motocykl: jedziesz tam, gdzie patrzysz. Wpatrywanie się w przeszkodę to **fiksacja na celu**.' },
            { t: 'wybor', q: 'Jedziesz 60 km/h i chcesz skręcić w prawo. Co uruchamia skręt?', o: ['Pchnięcie prawej manetki do przodu', 'Pchnięcie lewej manetki do przodu', 'Skręt kierownicą w prawo jak w rowerze przy małej prędkości'], ok: 0 },
            { t: 'wybor', q: 'Nagle widzisz dziurę w asfalcie. Gdzie patrzysz?', o: ['Na wolną drogę, którą ją ominiesz', 'Prosto na dziurę, żeby ją dobrze widzieć', 'W lusterko'], ok: 0, wyj: 'Motocykl jedzie tam, gdzie patrzysz. Wpatrywanie się w przeszkodę kieruje Cię prosto w nią.' },
            { t: 'luka', q: 'Uzupełnij', s: 'Im mocniej naciśniesz manetkę po stronie zakrętu, tym ___ motocykl się pochyli.', o: ['szybciej', 'wolniej', 'mniej'], ok: 0 },
            { t: 'pary', pary: [['Przeciwskręt', 'nacisk na manetkę po stronie zakrętu'], ['Fiksacja na celu', 'jedziesz tam, gdzie się wpatrujesz'], ['Pozycja ciała', 'luźne ręce, kolana przy zbiorniku'], ['Wzrok w zakręcie', 'daleko, w wyjście z zakrętu']] },
            { t: 'wybor', q: 'Dlaczego ręce na kierownicy powinny być luźne?', o: ['Sztywne ręce blokują stabilizację i precyzyjny przeciwskręt', 'Żeby szybciej się zmęczyć', 'Wymaga tego przepis'], ok: 0 },
            { t: 'wybor', q: 'Gdzie patrzysz, wchodząc w zakręt?', o: ['Daleko, w kierunku wyjścia z zakrętu', 'Tuż przed przednie koło', 'Na prędkościomierz'], ok: 0 },
            { t: 'wybor', q: 'Co daje lekkie ściskanie zbiornika kolanami?', o: ['Stabilne podparcie, dzięki któremu ręce mogą być luźne', 'Większą prędkość maksymalną', 'Nic, to tylko styl'], ok: 0 }
          ]
        },
        {
          id: 'm2', tytul: 'Linia jazdy w zakręcie',
          zadania: [
            { t: 'info', tytul: 'Zewnętrzna, wewnętrzna, zewnętrzna', tekst: 'Klasyczna linia: wejście po zewnętrznej, wierzchołek (apex) przy wewnętrznej, wyjście znów po zewnętrznej.\nW zakręcie niewidocznym wybierz **późny wierzchołek**: dłużej widzisz wyjście i masz zapas na niespodzianki.\nPrędkość ustal **przed** zakrętem. W zakręcie łagodnie i równo dodawaj gazu, to stabilizuje motocykl.\nNa drodze publicznej pamiętaj: w pochyleniu głowa i bark wychodzą poza linię kół.' },
            { t: 'wybor', q: 'Ślepy zakręt w prawo. Jaki wierzchołek wybierasz?', o: ['Późny: dłużej widzisz wyjście i masz zapas', 'Wczesny: szybciej przy wewnętrznej', 'Przy osi jezdni'], ok: 0 },
            { t: 'kafelki', q: 'Ułóż klasyczną linię przejazdu zakrętu', odp: 'zewnętrzna wewnętrzna zewnętrzna', extra: 'środek' },
            { t: 'wybor', q: 'Kiedy hamujesz przed zakrętem?', o: ['Przed zakrętem, na wyprostowanym motocyklu', 'W najgłębszym pochyleniu', 'Za wierzchołkiem, mocno przednim hamulcem'], ok: 0 },
            { t: 'wybor', q: 'Co stabilizuje motocykl w zakręcie?', o: ['Łagodne, równe dodawanie gazu', 'Gwałtowne zamknięcie gazu', 'Wciśnięte sprzęgło'], ok: 0 },
            { t: 'wybor', q: 'Zakręt w lewo na drodze dwukierunkowej, jedziesz blisko osi. Ryzyko?', o: ['Głowa i bark mogą znaleźć się nad przeciwnym pasem', 'Żadne', 'Szybsze zużycie opony'], ok: 0 },
            { t: 'luka', q: 'Uzupełnij', s: 'Wszedłeś w zakręt trochę za szybko? Zwykle lepiej zwiększyć ___ i patrzeć w wyjście niż gwałtownie hamować.', o: ['pochylenie', 'prędkość', 'obroty'], ok: 0, wyj: 'Opony zwykle mają zapas przyczepności. Gwałtowne hamowanie w pochyleniu prostuje motocykl i wynosi go na zewnątrz.' },
            { t: 'pary', pary: [['Wierzchołek', 'punkt najbliżej wewnętrznej krawędzi'], ['Wejście', 'ustawienie po zewnętrznej'], ['Wyjście', 'prostowanie i dodawanie gazu'], ['Późny wierzchołek', 'lepsza widoczność w ślepym zakręcie']] }
          ]
        },
        {
          id: 'm3', tytul: 'Hamowanie',
          zadania: [
            { t: 'info', tytul: 'Siła jest z przodu', tekst: 'Przy mocnym hamowaniu ciężar przenosi się do przodu, więc **przedni hamulec** daje większość siły hamowania.\nHamowanie awaryjne: motocykl wyprostowany, przedni hamulec dozuj progresywnie: najpierw lekko (dociśnij oponę), potem mocno. Użyj też tylnego.\nZ **ABS**: ściśnij mocno i trzymaj. Bez ABS: nie dopuść do zablokowania przedniego koła.\n**Trail braking**, czyli stopniowe puszczanie hamulca przy wchodzeniu w zakręt, to technika zaawansowana. Ćwicz ją na torze lub placu.' },
            { t: 'wybor', q: 'Który hamulec daje najwięcej siły przy mocnym hamowaniu?', o: ['Przedni', 'Tylny', 'Oba tak samo'], ok: 0 },
            { t: 'wybor', q: 'Hamowanie awaryjne na prostej, motocykl ma ABS. Co robisz?', o: ['Mocno ściskasz przedni hamulec (i tylny) i trzymasz', 'Pompujesz hamulcem', 'Hamujesz tylko tylnym'], ok: 0 },
            { t: 'wybor', q: 'Dlaczego bez ABS najpierw lekko, a potem mocno?', o: ['Ciężar przenosi się na przód i opona dostaje docisk przed pełną siłą', 'Żeby oszczędzać klocki', 'Żeby kierowca z tyłu zauważył światło stop'], ok: 0 },
            { t: 'wybor', q: 'Musisz mocno hamować w pochyleniu. Co jest bezpieczniejsze?', o: ['Najpierw wyprostować motocykl, potem hamować mocno', 'Hamować mocno w pochyleniu', 'Wcisnąć sprzęgło i czekać'], ok: 0, wyj: 'Mocne hamowanie w pochyleniu zużywa przyczepność potrzebną do skrętu. ABS zakrętowy pomaga, ale fizyka zostaje ta sama.' },
            { t: 'pary', pary: [['ABS', 'zapobiega blokowaniu kół'], ['Trail braking', 'stopniowe puszczanie hamulca w wejściu w zakręt'], ['Nurkowanie', 'ugięcie przedniego zawieszenia'], ['Tylny hamulec', 'stabilizacja przy małej prędkości']] },
            { t: 'luka', q: 'Uzupełnij', s: 'Na mokrej nawierzchni droga hamowania jest ___.', o: ['dłuższa', 'krótsza', 'taka sama'], ok: 0 },
            { t: 'wybor', q: 'Bez ABS przednie koło zablokowało się. Co robisz?', o: ['Natychmiast puszczasz i ponownie dozujesz przedni hamulec', 'Trzymasz mocniej', 'Skręcasz kierownicą'], ok: 0 }
          ]
        },
        {
          id: 'm4', tytul: 'Mała prędkość i manewry',
          zadania: [
            { t: 'info', tytul: 'Kontrola przy małej prędkości', tekst: 'Nawroty i parkingi wymagają innej techniki niż szybkie zakręty:\n**Sprzęgło** w strefie tarcia dozuje moc.\n**Gaz** stały i lekki.\n**Tylny hamulec** delikatnie reguluje prędkość. Przedniego unikaj przy skręconej kierownicy.\n**Głowa i wzrok** w kierunku wyjścia z nawrotu.\n**Przeciwwaga**: motocykl pochylony do środka, ciało wyprostowane, lekko na zewnątrz.' },
            { t: 'wybor', q: 'Nawrót na wąskiej drodze. Czym regulujesz prędkość?', o: ['Delikatnie tylnym hamulcem', 'Mocno przednim przy skręconej kierownicy', 'Wyłącznie hamowaniem silnikiem'], ok: 0, wyj: 'Przedni hamulec przy skręconej kierownicy łatwo przewraca motocykl.' },
            { t: 'wybor', q: 'Strefa tarcia sprzęgła to:', o: ['zakres, w którym sprzęgło częściowo przenosi napęd', 'najwyższy bieg', 'tryb jazdy w deszczu'], ok: 0 },
            { t: 'wybor', q: 'Gdzie patrzysz przy ciasnym nawrocie?', o: ['Odwracasz głowę w kierunku wyjścia z nawrotu', 'Na przednie koło', 'Na krawężnik'], ok: 0 },
            { t: 'luka', q: 'Uzupełnij', s: 'Przy bardzo małej prędkości motocykl pochylasz, a ciało przesuwasz na ___ zakrętu.', o: ['zewnątrz', 'wewnątrz', 'tył'], ok: 0, wyj: 'To przeciwwaga: motocykl skręca ciaśniej, a środek ciężkości zostaje nad punktem podparcia.' },
            { t: 'pary', pary: [['Sprzęgło', 'dozuje moc'], ['Gaz', 'stały, lekki'], ['Tylny hamulec', 'reguluje prędkość'], ['Wzrok', 'wyjście z manewru']] },
            { t: 'wybor', q: 'Motocykl przewraca się przy prawie zerowej prędkości ze skręconą kierownicą. Najczęstsza przyczyna?', o: ['Gwałtowne użycie przedniego hamulca', 'Za niskie ciśnienie w oponach', 'Zbyt duża prędkość'], ok: 0 },
            { t: 'wybor', q: 'Gdzie najlepiej ćwiczyć ósemki i nawroty?', o: ['Na pustym placu manewrowym, najlepiej z instruktorem', 'Na ruchliwym skrzyżowaniu', 'Na autostradzie'], ok: 0 }
          ]
        }
      ]
    },
    {
      tytul: 'Bezpieczeństwo i warunki',
      opis: 'Deszcz, jazda w grupie, widoczność i strój.',
      lekcje: [{ id: 'm5', tytul: 'Deszcz i śliska nawierzchnia' }, { id: 'm6', tytul: 'Jazda w grupie' }, { id: 'm7', tytul: 'Widoczność i martwe pola' }, { id: 'm8', tytul: 'Strój ochronny' }]
    }
  ]
};
