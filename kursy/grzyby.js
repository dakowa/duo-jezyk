// Kurs: Grzyby i lasy grzybowe w Polsce (zaawansowany, z naciskiem na bezpieczeństwo).
window.KURSY = window.KURSY || {};
window.KURSY.grzyby = {
  id: 'grzyby',
  tytul: 'Grzyby i lasy grzybowe',
  krotko: 'GRZ',
  kolor: '#8A5A2B',
  opis: 'Zaawansowana wiedza o grzybach i lasach grzybowych w Polsce: rozpoznawanie, groźne pomyłki, mikoryza i przepisy.',
  uwaga: 'Kurs uczy, ale nie zastępuje grzyboznawcy. **Nigdy nie jedz grzyba rozpoznanego tylko z aplikacji lub zdjęcia.** W sezonie wiele stacji Sanepidu bezpłatnie ocenia zebrane grzyby. Gdy masz wątpliwość, wyrzuć.',
  dzialy: [
    {
      tytul: 'Bezpieczne grzybobranie',
      opis: 'Budowa grzyba, trujące gatunki, groźne pomyłki i lasy.',
      lekcje: [
        {
          id: 'gr1', tytul: 'Budowa grzyba i zasady',
          zadania: [
            { t: 'info', tytul: 'Czytaj grzyb od góry do dołu', tekst: 'Owocnik ma: **kapelusz**, pod nim **blaszki** albo **rurki** (gąbkę), **trzon**, czasem **pierścień**, a u podstawy czasem **pochwę** (woreczek) z bulwą.\nPochwa u podstawy to kluczowa cecha muchomorów. Dlatego nieznany grzyb wykręcaj w całości, a nie ucinaj.\nZbieraj do przewiewnego koszyka, nie do foliówki.', uwaga: 'Nie ma „domowych testów” jadalności. Smak, zapach, srebrna łyżeczka czy ślady ślimaków niczego nie dowodzą.' },
            { t: 'pary', pary: [['Blaszki', 'cienkie listki pod kapeluszem'], ['Rurki', 'gąbka pod kapeluszem'], ['Pierścień', 'resztka osłony na trzonie'], ['Pochwa', 'woreczek u podstawy trzonu']] },
            { t: 'wybor', q: 'Dlaczego nieznany grzyb wykręca się w całości, zamiast go ucinać?', o: ['Żeby zobaczyć podstawę trzonu, na przykład pochwę muchomora', 'Żeby grzybnia lepiej rosła', 'Bo tak jest szybciej'], ok: 0 },
            { t: 'wybor', q: 'Najlepsze naczynie na grzyby:', o: ['Przewiewny koszyk', 'Szczelna foliówka', 'Zamknięty plecak'], ok: 0, wyj: 'W foliówce grzyby się zaparzają i szybko psują.' },
            { t: 'wybor', q: 'Grzyb nie jest gorzki i jedzą go ślimaki. Czy to znaczy, że jest jadalny?', o: ['Nie. Takie testy nie działają', 'Tak, ślimaki znają się na grzybach', 'Tak, jeśli nie jest gorzki'], ok: 0, wyj: 'Śmiertelnie trujący muchomor zielonawy podobno nie ma przykrego smaku.' },
            { t: 'wybor', q: 'Gdzie w Polsce w sezonie bezpłatnie sprawdzisz zebrane grzyby?', o: ['W stacji sanitarno-epidemiologicznej (Sanepid)', 'W aptece', 'W sklepie spożywczym'], ok: 0 },
            { t: 'luka', q: 'Uzupełnij zasadę numer jeden', s: 'Jeśli masz choć cień ___, nie zbieraj i nie jedz.', o: ['wątpliwości', 'czasu', 'apetytu'], ok: 0 },
            { t: 'wybor', q: 'Grzyby leśne na targu bez atestu grzyboznawcy:', o: ['Lepiej omijać i kupować tylko z atestem', 'Są zawsze bezpieczne', 'Są bezpieczne, jeśli ładnie wyglądają'], ok: 0 },
            { t: 'wybor', q: 'Które owocniki zostawić w lesie?', o: ['Bardzo młode, nierozwinięte oraz stare i robaczywe', 'Wyłącznie duże okazy', 'Te, które rosną przy drzewach'], ok: 0 }
          ]
        },
        {
          id: 'gr2', tytul: 'Śmiertelnie trujące',
          zadania: [
            { t: 'info', tytul: 'Gatunki, które trzeba znać', tekst: '**Muchomor zielonawy** (sromotnikowy): kapelusz zielonkawo-oliwkowy (bywa bledszy, prawie biały), blaszki zawsze **białe**, pierścień, bulwa w błoniastej **pochwie**. Amanityny niszczą wątrobę. Objawy zwykle po 6–24 godzinach, potem bywa „pozorna poprawa”. Jeden owocnik może zabić.\n**Muchomor jadowity**: cały biały, równie groźny.\n**Zasłonak rudy**: rdzawy, orellanina uszkadza nerki. Objawy nawet po kilku dniach, czasem po 2–3 tygodniach.\n**Piestrzenica kasztanowata**: wiosną, kapelusz pofałdowany jak mózg. Trująca, mylona ze smardzami.', uwaga: 'Toksyny muchomorów nie znikają podczas gotowania, smażenia ani suszenia.' },
            { t: 'wybor', q: 'Jakiego koloru są blaszki muchomora zielonawego?', o: ['Zawsze białe', 'Różowe, potem brązowe', 'Żółte'], ok: 0, wyj: 'Pieczarki mają blaszki różowe, potem brązowe. Białe blaszki + pierścień + bulwa w pochwie = alarm.' },
            { t: 'wybor', q: 'Kiedy zwykle pojawiają się pierwsze objawy zatrucia muchomorem zielonawym?', o: ['Po kilku do kilkunastu godzin (zwykle 6–24 h)', 'Po 10 minutach', 'Po miesiącu'], ok: 0, wyj: 'Późne objawy to zły znak: toksyny zdążyły się wchłonąć.' },
            { t: 'wybor', q: 'Kilka godzin po grzybowym obiedzie pojawiają się wymioty i biegunka. Co robisz?', o: ['Dzwonię pod 112 albo jadę do szpitala i zabieram resztki grzybów', 'Czekam, aż przejdzie', 'Piję mleko i idę spać'], ok: 0, wyj: 'Nawet jeśli objawy na chwilę miną, przy zatruciu muchomorem może to być tylko pozorna poprawa.' },
            { t: 'pary', pary: [['Muchomor zielonawy', 'amanityny: wątroba'], ['Zasłonak rudy', 'orellanina: nerki'], ['Piestrzenica kasztanowata', 'gyromitryna'], ['Muchomor czerwony', 'muscymol i kwas ibotenowy']] },
            { t: 'luka', q: 'Uzupełnij', s: 'Zatrucie zasłonakiem rudym jest podstępne, bo objawy mogą pojawić się dopiero po ___.', o: ['kilku dniach', '5 minutach', 'godzinie'], ok: 0 },
            { t: 'wybor', q: 'Piestrzenicę kasztanowatą łatwo pomylić ze:', o: ['smardzem', 'kurką', 'prawdziwkiem'], ok: 0 },
            { t: 'wybor', q: 'Ile owocników muchomora zielonawego może wystarczyć do śmiertelnego zatrucia dorosłego?', o: ['Nawet jeden', 'Co najmniej dziesięć', 'Żaden, gotowanie usuwa toksyny'], ok: 0 }
          ]
        },
        {
          id: 'gr3', tytul: 'Groźne pomyłki',
          zadania: [
            { t: 'info', tytul: 'Pary, które warto znać na pamięć', tekst: '**Kania (czubajka kania) a muchomor**: kania ma podwójny pierścień, który da się **przesuwać** po trzonie, trzon z brązowym wzorem jak wężowa skóra i bulwiastą podstawę **bez pochwy**. Młodych, zamkniętych „kań” nie zbieraj.\n**Kurka a lisówka pomarańczowa**: kurka ma grube **listewki** zbiegające na trzon i jędrny miąższ. Lisówka ma cienkie, gęste, prawdziwe blaszki i jest niejadalna.\n**Prawdziwek a goryczak żółciowy**: goryczak ma różowawe pory i **ciemną** siateczkę na trzonie. Jest tak gorzki, że jeden owocnik psuje całą potrawę.' },
            { t: 'wybor', q: 'Cecha kani, której nie ma muchomor zielonawy:', o: ['Pierścień, który da się przesuwać po trzonie', 'Białe blaszki', 'Pierścień na trzonie'], ok: 0 },
            { t: 'wybor', q: 'Dlaczego nie zbiera się młodych, zamkniętych „kań”?', o: ['Bo łatwo je pomylić z młodymi muchomorami', 'Bo są gorzkie', 'Bo nie mają smaku'], ok: 0 },
            { t: 'pary', pary: [['Kurka', 'listewki zbiegające na trzon'], ['Lisówka pomarańczowa', 'cienkie, gęste blaszki'], ['Prawdziwek', 'jasna siateczka na trzonie'], ['Goryczak żółciowy', 'różowe pory, ciemna siateczka']] },
            { t: 'wybor', q: 'Grzyb przypomina prawdziwka, ale ma różowawe pory i ciemną siateczkę na trzonie. To prawdopodobnie:', o: ['goryczak żółciowy', 'podgrzybek brunatny', 'koźlarz babka'], ok: 0 },
            { t: 'wybor', q: 'Co dzieje się z porami podgrzybka brunatnego po dotknięciu?', o: ['Sinieją', 'Czerwienieją', 'Nie zmieniają koloru'], ok: 0 },
            { t: 'luka', q: 'Uzupełnij', s: 'Kurka ma pod kapeluszem nie prawdziwe blaszki, ale ___.', o: ['listewki', 'rurki', 'kolce'], ok: 0 },
            { t: 'wybor', q: 'W lesie rośnie biały grzyb z białymi blaszkami, pierścieniem i bulwą u podstawy. Co to może być?', o: ['Śmiertelnie trujący muchomor, np. jadowity. Nie zbierać!', 'Pieczarka', 'Kania'], ok: 0, wyj: 'Dojrzałe pieczarki nie mają śnieżnobiałych blaszek, a kania ma przesuwalny pierścień i wężowy wzór na trzonie.' }
          ]
        },
        {
          id: 'gr4', tytul: 'Lasy grzybowe i mikoryza',
          zadania: [
            { t: 'info', tytul: 'Grzyb i drzewo to drużyna', tekst: '**Mikoryza** to symbioza grzyba z korzeniami drzewa: grzyb dostarcza wodę i sole mineralne, drzewo oddaje cukry.\nDlatego wiele grzybów rośnie pod konkretnymi drzewami:\nkoźlarz babka: **brzoza**; maślak zwyczajny: **sosna**; maślak żółty: **modrzew**; koźlarz czerwony: **osika**; rydz: młode **sosny**; prawdziwek: świerk, sosna, buk, dąb.\nBory sosnowe (np. Bory Tucholskie) słyną z podgrzybków, maślaków i rydzów.' },
            { t: 'pary', q: 'Połącz grzyb z drzewem-partnerem', pary: [['Koźlarz babka', 'brzoza'], ['Maślak zwyczajny', 'sosna'], ['Maślak żółty', 'modrzew'], ['Koźlarz czerwony', 'osika']] },
            { t: 'wybor', q: 'Mikoryza to:', o: ['Symbioza grzyba z korzeniami drzewa', 'Choroba drzew', 'Sposób suszenia grzybów'], ok: 0 },
            { t: 'info', tytul: 'Przepisy i zwyczaje w lesie', tekst: 'W lasach państwowych grzyby można zbierać na własne potrzeby.\n**Stały zakaz wstępu** obowiązuje m.in. w uprawach leśnych do 4 m wysokości, na powierzchniach doświadczalnych, w drzewostanach nasiennych i ostojach zwierząt.\nW rezerwatach i parkach narodowych zbieranie jest zwykle zabronione albo ograniczone do wyznaczonych miejsc.\nNie niszcz grzybów, których nie zbierasz. Trujące też są ważne dla lasu.' },
            { t: 'wybor', q: 'Gdzie w lesie państwowym obowiązuje stały zakaz wstępu?', o: ['W uprawach leśnych do 4 m wysokości', 'Na wszystkich polanach', 'Na leśnych drogach'], ok: 0 },
            { t: 'wybor', q: 'Ktoś kopie muchomora czerwonego, „żeby nikt się nie otruł”. To:', o: ['Błąd: trujące grzyby też są potrzebne lasowi', 'Dobry zwyczaj', 'Wymóg przepisów'], ok: 0 },
            { t: 'luka', q: 'Uzupełnij', s: 'Bory sosnowe to dobre miejsce na podgrzybki i ___.', o: ['maślaki', 'smardze', 'pieczarki'], ok: 0 },
            { t: 'wybor', q: 'Po jakiej pogodzie zwykle jest najlepszy wysyp?', o: ['Po kilku dniach deszczu i ciepłych nocach', 'Po długiej suszy', 'Po pierwszym mrozie'], ok: 0 }
          ]
        }
      ]
    },
    {
      tytul: 'Sezon i kuchnia',
      opis: 'Przechowywanie, grzyby wiosenne i zimowe, gatunki chronione.',
      lekcje: [{ id: 'gr5', tytul: 'Suszenie, mrożenie, marynowanie' }, { id: 'gr6', tytul: 'Grzyby wiosenne i zimowe' }, { id: 'gr7', tytul: 'Gatunki chronione' }, { id: 'gr8', tytul: 'Grzyby nadrzewne' }]
    }
  ]
};
