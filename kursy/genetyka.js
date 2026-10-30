// Kurs: Zaawansowana medycyna genetyczna (materiał edukacyjny).
window.KURSY = window.KURSY || {};
window.KURSY.genetyka = {
  id: 'genetyka',
  tytul: 'Medycyna genetyczna',
  krotko: 'DNA',
  kolor: '#178A5E',
  opis: 'Zaawansowana genetyka kliniczna: dziedziczenie, warianty, farmakogenomika, terapie genowe i onkogenetyka.',
  uwaga: 'Materiał edukacyjny. Decyzje kliniczne zawsze podejmuje lekarz, z uwzględnieniem aktualnych wytycznych.',
  dzialy: [
    {
      tytul: 'Dziedziczenie i warianty',
      opis: 'Wzorce dziedziczenia, mechanizmy nietypowe, klasyfikacja wariantów i farmakogenomika.',
      lekcje: [
        {
          id: 'g1', tytul: 'Wzorce dziedziczenia',
          zadania: [
            { t: 'info', tytul: 'Cztery podstawowe wzorce', tekst: '**AD** (autosomalny dominujący): chory heterozygota przekazuje chorobę z ryzykiem 50% dla każdego dziecka.\n**AR** (autosomalny recesywny): dwoje nosicieli → 25% chore, 50% nosiciele, 25% bez wariantu.\n**XR** (sprzężony z X, recesywny): brak przekazania z ojca na syna; córki chorego ojca są nosicielkami.\n**mtDNA**: dziedziczenie tylko po matce; nasilenie zależy od heteroplazmii.' },
            { t: 'wybor', q: 'Oboje rodzice są nosicielami wariantu patogennego CFTR. Ryzyko mukowiscydozy u dziecka?', o: ['25%', '50%', '75%', '0%'], ok: 0 },
            { t: 'wybor', q: 'Zdrowe rodzeństwo osoby chorej na chorobę AR (rodzice są nosicielami). Prawdopodobieństwo, że jest nosicielem?', o: ['2/3', '1/2', '1/4', '1/3'], ok: 0, wyj: 'Wiemy, że nie jest chore. Zostają 3 równie prawdopodobne genotypy, z czego 2 to nosiciele.' },
            { t: 'wybor', q: 'Która obserwacja w rodowodzie wyklucza dziedziczenie XR?', o: ['Przekazanie choroby z ojca na syna', 'Chorują głównie mężczyźni', 'Matki chorych są zdrowe'], ok: 0, wyj: 'Ojciec przekazuje synowi chromosom Y, nie X.' },
            { t: 'pary', pary: [['AD', '50% ryzyka dla dziecka chorego'], ['AR', '25% ryzyka przy dwojgu nosicieli'], ['XR', 'brak przekazania ojciec → syn'], ['mtDNA', 'tylko po matce']] },
            { t: 'wybor', q: 'Heteroplazmia oznacza:', o: ['Współistnienie prawidłowego i zmutowanego mtDNA w komórce', 'Dwie kopie genu od jednego rodzica', 'Warianty w obu allelach genu jądrowego'], ok: 0 },
            { t: 'luka', q: 'Uzupełnij', s: 'Choroba Huntingtona dziedziczy się w sposób autosomalny ___.', o: ['dominujący', 'recesywny', 'sprzężony z X'], ok: 0 },
            { t: 'wybor', q: 'Ojciec choruje na hemofilię A, matka nie jest nosicielką. Córki będą:', o: ['wszystkie nosicielkami', 'chore w 50%', 'bez wariantu'], ok: 0 },
            { t: 'wpisz', q: 'Ryzyko (w %) dla dziecka osoby z chorobą AD o pełnej penetracji?', odp: ['50', '50%'] }
          ]
        },
        {
          id: 'g2', tytul: 'Penetracja, antycypacja, imprinting',
          zadania: [
            { t: 'info', tytul: 'Gdy dziedziczenie nie wygląda podręcznikowo', tekst: '**Niepełna penetracja**: część nosicieli nie ma objawów, choroba „przeskakuje” pokolenie.\n**Zmienna ekspresja**: różne nasilenie u nosicieli tego samego wariantu (np. NF1).\n**Antycypacja**: wcześniejszy początek i cięższy przebieg w kolejnych pokoleniach, typowy dla ekspansji powtórzeń.\n**Mozaicyzm**: wariant powstały po zapłodnieniu, obecny tylko w części komórek (także w gonadach).\n**Piętnowanie genomowe**: ekspresja allelu zależy od tego, od którego rodzica pochodzi.' },
            { t: 'pary', pary: [['Penetracja', 'odsetek nosicieli z objawami'], ['Ekspresja', 'nasilenie objawów'], ['Antycypacja', 'wcześniejszy początek w kolejnych pokoleniach'], ['Mozaicyzm', 'wariant tylko w części komórek']] },
            { t: 'pary', q: 'Połącz chorobę z rodzajem powtórzenia', pary: [['Choroba Huntingtona', 'CAG'], ['Zespół łamliwego X', 'CGG'], ['Dystrofia miotoniczna typu 1', 'CTG']] },
            { t: 'wybor', q: 'W zespole łamliwego X przejście premutacji w pełną mutację zachodzi przy przekazaniu przez:', o: ['matkę', 'ojca', 'oboje rodziców jednakowo'], ok: 0 },
            { t: 'wybor', q: 'Delecja 15q11–q13 na chromosomie pochodzącym od ojca prowadzi do:', o: ['zespołu Pradera-Williego', 'zespołu Angelmana', 'zespołu Turnera'], ok: 0 },
            { t: 'wybor', q: 'Zespół Angelmana wiąże się z utratą funkcji matczynego allelu genu:', o: ['UBE3A', 'SNRPN', 'FMR1'], ok: 0 },
            { t: 'wybor', q: 'Rodzice są zdrowi, badanie ich krwi jest prawidłowe, a dwoje dzieci ma tę samą chorobę AD. Najbardziej prawdopodobne wyjaśnienie?', o: ['Mozaicyzm germinalny u jednego z rodziców', 'Antycypacja', 'Dziedziczenie mitochondrialne'], ok: 0 },
            { t: 'luka', q: 'Uzupełnij', s: 'Nosiciel bez objawów, a choroba „przeskakuje” pokolenie. To przykład niepełnej ___.', o: ['penetracji', 'ekspresji', 'antycypacji'], ok: 0 },
            { t: 'wybor', q: 'Dziecko ojca z chorobą Huntingtona zachorowało znacznie wcześniej niż ojciec. Jak nazywa się to zjawisko?', o: ['antycypacja', 'penetracja', 'imprinting'], ok: 0, wyj: 'Ekspansja powtórzeń CAG jest szczególnie duża przy przekazaniu przez ojca.' }
          ]
        },
        {
          id: 'g3', tytul: 'Warianty i sekwencjonowanie',
          zadania: [
            { t: 'info', tytul: 'Jak czytać wynik badania genetycznego', tekst: 'Klasyfikacja ACMG/AMP: **patogenny**, **prawdopodobnie patogenny**, **VUS** (o niepewnym znaczeniu), **prawdopodobnie łagodny**, **łagodny**.\nVUS nie powinien zmieniać postępowania klinicznego. Z czasem bywa reklasyfikowany, najczęściej jako łagodny.\n**WES** bada eksom (ok. 1–2% genomu). **WGS** bada cały genom i lepiej wykrywa warianty niekodujące oraz strukturalne.' },
            { t: 'wybor', q: 'Wynik: VUS w genie BRCA2. Właściwe postępowanie?', o: ['Nie opierać decyzji na tym wariancie; postępować według wywiadu rodzinnego', 'Zaproponować profilaktyczną mastektomię', 'Uznać wynik za ujemny na zawsze'], ok: 0, wyj: 'Warto ustalić, jak pacjent będzie informowany o ewentualnej reklasyfikacji.' },
            { t: 'kafelki', q: 'Ułóż klasy wariantów od najbardziej do najmniej groźnej', odp: 'patogenny prawdop.-patogenny VUS prawdop.-łagodny łagodny' },
            { t: 'pary', pary: [['missense', 'zmiana jednego aminokwasu'], ['nonsense', 'przedwczesny kodon stop'], ['frameshift', 'przesunięcie ramki odczytu'], ['CNV', 'zmiana liczby kopii fragmentu DNA']] },
            { t: 'wybor', q: 'Przedwczesny kodon stop często prowadzi do degradacji transkryptu. Ten mechanizm to:', o: ['NMD (nonsense-mediated decay)', 'alternatywny splicing', 'metylacja DNA'], ok: 0 },
            { t: 'wybor', q: 'Przewaga WGS nad WES:', o: ['Obejmuje introny i regiony regulatorowe oraz lepiej wykrywa CNV', 'Jest zawsze tańsze', 'Nie wymaga interpretacji'], ok: 0 },
            { t: 'luka', q: 'Uzupełnij', s: 'Eksom to około ___ genomu.', o: ['1–2%', '25%', '50%'], ok: 0 },
            { t: 'wybor', q: 'Pozakomórkowe DNA płodu we krwi matki to podstawa badania:', o: ['NIPT', 'amniopunkcji', 'biopsji kosmówki'], ok: 0, wyj: 'NIPT to badanie przesiewowe. Wynik nieprawidłowy wymaga potwierdzenia badaniem inwazyjnym.' },
            { t: 'wybor', q: 'Choroba AR występuje z częstością 1/2500. Częstość nosicieli (Hardy–Weinberg) wynosi około:', o: ['1/25', '1/50', '1/2500', '1/5'], ok: 0, wyj: 'q² = 1/2500, więc q = 1/50. Nosiciele: 2pq ≈ 2 × 1/50 = 1/25.' }
          ]
        },
        {
          id: 'g4', tytul: 'Farmakogenomika',
          zadania: [
            { t: 'info', tytul: 'Genotyp zmienia działanie leku', tekst: '**CYP2D6** i kodeina: kodeina to prolek, aktywowany do morfiny.\n**CYP2C19** i klopidogrel: prolek, wymaga aktywacji.\n**TPMT / NUDT15** i tiopuryny (azatiopryna, merkaptopuryna).\n**DPYD** i fluoropirymidyny (5-FU, kapecytabina).\nAllel HLA-B*57:01 i abakawir. Allel HLA-B*15:02 i karbamazepina.' },
            { t: 'pary', pary: [['HLA-B*57:01', 'abakawir'], ['HLA-B*15:02', 'karbamazepina'], ['TPMT', 'azatiopryna'], ['DPYD', 'kapecytabina']] },
            { t: 'wybor', q: 'Ultraszybki metabolizer CYP2D6 przyjmuje kodeinę. Główne ryzyko?', o: ['Toksyczność morfiny, w tym depresja oddechowa', 'Brak działania przeciwbólowego', 'Hipoglikemia'], ok: 0 },
            { t: 'wybor', q: 'Słaby metabolizer CYP2C19 po wszczepieniu stentu. Klopidogrel:', o: ['działa słabiej, bo prolek nie jest wystarczająco aktywowany', 'działa silniej', 'działa tak samo'], ok: 0 },
            { t: 'wybor', q: 'Przed włączeniem abakawiru wykonuje się badanie:', o: ['HLA-B*57:01', 'TPMT', 'CYP2D6'], ok: 0 },
            { t: 'wybor', q: 'Niedobór DPD (warianty DPYD) zwiększa ryzyko:', o: ['ciężkiej toksyczności 5-FU i kapecytabiny', 'oporności na insulinę', 'krwawień po warfarynie'], ok: 0 },
            { t: 'luka', q: 'Uzupełnij', s: 'Ryzyko SJS/TEN po karbamazepinie wiąże się z HLA-B*15:02, częstym w populacjach ___.', o: ['Azji Wschodniej i Południowo-Wschodniej', 'północnej Europy', 'Afryki Zachodniej'], ok: 0 },
            { t: 'wybor', q: 'Pacjent z brakiem aktywności TPMT ma otrzymać tiopurynę. Co mówią wytyczne?', o: ['Rozważyć inny lek albo bardzo znacznie zmniejszyć dawkę', 'Podać standardową dawkę', 'Zwiększyć dawkę'], ok: 0, wyj: 'Szczegóły dawkowania zawsze według aktualnych wytycznych (np. CPIC) i decyzji lekarza.' }
          ]
        }
      ]
    },
    {
      tytul: 'Terapie genowe i onkogenetyka',
      opis: 'ASO, AAV, CRISPR, CAR-T oraz genetyka nowotworów.',
      lekcje: [
        {
          id: 'g5', tytul: 'ASO, AAV i CRISPR',
          zadania: [
            { t: 'info', tytul: 'Trzy sposoby na naprawę informacji', tekst: 'Rdzeniowy zanik mięśni (SMA, brak funkcji SMN1) to wzorcowy przykład:\n**nusinersen**: oligonukleotyd antysensowny (ASO), podawany dokanałowo. Zwiększa włączanie egzonu 7 do transkryptu SMN2.\n**onasemnogen abeparwowek**: wektor AAV9 z genem SMN1, jednorazowo dożylnie.\n**risdiplam**: doustny modyfikator splicingu SMN2.\n**exa-cel (Casgevy)**: edycja CRISPR-Cas9 erytroidalnego enhancera BCL11A w komórkach macierzystych pacjenta (ex vivo). Rośnie HbF. Wskazania: anemia sierpowatokrwinkowa i β-talasemia zależna od przetoczeń.' },
            { t: 'pary', pary: [['nusinersen', 'oligonukleotyd antysensowny'], ['onasemnogen abeparwowek', 'wektor AAV9'], ['risdiplam', 'doustny modyfikator splicingu'], ['exa-cel', 'edycja CRISPR-Cas9']] },
            { t: 'wybor', q: 'Mechanizm działania nusinersenu w SMA:', o: ['Zwiększa włączanie egzonu 7 do transkryptu SMN2', 'Wycina wariant w SMN1', 'Hamuje rozpad białka SMN w proteasomie'], ok: 0 },
            { t: 'wybor', q: 'exa-cel zwiększa poziom HbF, ponieważ:', o: ['edytuje erytroidalny enhancer genu BCL11A', 'dostarcza nową kopię genu HBB', 'hamuje syntezę HbA'], ok: 0 },
            { t: 'wybor', q: 'Ważne ograniczenie terapii wektorem AAV:', o: ['Istniejące przeciwciała przeciw AAV i odpowiedź immunologiczna', 'Integracja z genomem w każdej komórce', 'Konieczność codziennego podawania'], ok: 0 },
            { t: 'luka', q: 'Uzupełnij', s: 'Terapia CAR-T polega na genetycznej modyfikacji ___ pacjenta.', o: ['limfocytów T', 'erytrocytów', 'hepatocytów'], ok: 0 },
            { t: 'wybor', q: 'Edycja ex vivo oznacza, że:', o: ['komórki modyfikuje się poza organizmem i podaje z powrotem', 'lek podaje się doustnie', 'modyfikuje się komórki rozrodcze'], ok: 0 }
          ]
        },
        {
          id: 'g6', tytul: 'Onkogenetyka',
          zadania: [
            { t: 'info', tytul: 'Geny i nowotwory', tekst: '**BRCA1/2**: naprawa DNA przez rekombinację homologiczną. Inhibitory PARP działają na zasadzie letalności syntetycznej.\n**Zespół Lyncha**: MLH1, MSH2, MSH6, PMS2, EPCAM. Guzy często MSI-H / dMMR, co zwiększa szansę odpowiedzi na inhibitory punktów kontrolnych.\n**Hipoteza Knudsona**: geny supresorowe wymagają utraty obu alleli („dwa uderzenia”), klasycznie RB1 w siatkówczaku.' },
            { t: 'wybor', q: 'Dlaczego inhibitory PARP działają szczególnie w guzach z wariantami BRCA?', o: ['Letalność syntetyczna przy braku naprawy przez rekombinację homologiczną', 'BRCA aktywuje PARP', 'Blokują receptor estrogenowy'], ok: 0 },
            { t: 'pary', pary: [['BRCA1/2', 'rak piersi i jajnika'], ['MLH1, MSH2', 'zespół Lyncha'], ['RB1', 'siatkówczak'], ['APC', 'rodzinna polipowatość gruczolakowata']] },
            { t: 'wybor', q: 'Guz MSI-H / dMMR. Która terapia często daje dobrą odpowiedź?', o: ['Inhibitory punktów kontrolnych (np. anty-PD-1)', 'Tamoksyfen', 'Inhibitory PARP niezależnie od BRCA'], ok: 0 },
            { t: 'wybor', q: 'Hipoteza „dwóch uderzeń” Knudsona dotyczy:', o: ['genów supresorowych nowotworu', 'onkogenów', 'genów mitochondrialnych'], ok: 0 },
            { t: 'luka', q: 'Uzupełnij', s: 'Zespół Li-Fraumeni wiąże się z germinalnym wariantem genu ___.', o: ['TP53', 'KRAS', 'BRAF'], ok: 0 },
            { t: 'wybor', q: 'Wariant obecny w guzie, ale nieobecny we krwi, to wariant:', o: ['somatyczny', 'germinalny', 'mitochondrialny'], ok: 0 }
          ]
        }
      ]
    },
    {
      tytul: 'Poradnictwo i genetyka złożona',
      opis: 'Doradztwo genetyczne, epigenetyka i ryzyko poligeniczne.',
      lekcje: [{ id: 'g7', tytul: 'Poradnictwo genetyczne' }, { id: 'g8', tytul: 'Epigenetyka' }, { id: 'g9', tytul: 'Ryzyko poligeniczne' }]
    }
  ]
};
