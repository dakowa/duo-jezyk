// Kurs: Angielski dla osób, które znają podstawowe słowa, ale nie znają czasów.
// Nacisk: czasy, wyraźna wymowa (zadania „mow”) i rozumienie ze słuchu („sluchaj”, „dyktando”).
window.KURSY = window.KURSY || {};
window.KURSY.angielski = {
  id: 'angielski',
  tytul: 'Angielski',
  krotko: 'EN',
  kolor: '#C93C6E',
  mowa: 'en-GB',
  opis: 'Czasy, wyraźna wymowa i rozumienie ze słuchu.',
  uwaga: 'Włącz dźwięk. Słuchanie i mówienie działają najlepiej w Chrome albo Safari. Ikona żółwia odtwarza zdanie wolniej.',
  dzialy: [
    {
      tytul: 'Teraźniejszość',
      opis: 'to be, Present Simple i Present Continuous.',
      lekcje: [
        {
          id: 'en1', tytul: 'Być: am, is, are',
          zadania: [
            { t: 'info', tytul: 'Być: am, is, are', tekst: 'Po angielsku „być” zmienia się zależnie od osoby:\n**I am**: ja jestem\n**you / we / they are**: ty jesteś, my jesteśmy, oni są\n**he / she / it is**: on, ona, ono jest\nW mowie używamy skrótów: I\'m, you\'re, he\'s, she\'s, it\'s, we\'re, they\'re.', mow: 'I am tired. She is at home. They are happy.' },
            { t: 'luka', q: 'Uzupełnij zdanie', s: 'I ___ tired.', o: ['am', 'is', 'are'], ok: 0 },
            { t: 'luka', q: 'Uzupełnij zdanie', s: 'She ___ a doctor.', o: ['is', 'am', 'are'], ok: 0 },
            { t: 'sluchaj', s: 'We are at home.', o: ['We are at home.', 'We were at home.', 'He is at home.'], ok: 0 },
            { t: 'kafelki', q: 'Przetłumacz', p: 'Oni są w pracy.', odp: 'They are at work', extra: 'is am home' },
            { t: 'pary', mowL: true, pary: [['I am', 'ja jestem'], ['you are', 'ty jesteś'], ['he is', 'on jest'], ['they are', 'oni są']] },
            { t: 'mow', s: 'I am happy to see you.', pl: 'Cieszę się, że cię widzę.' },
            { t: 'dyktando', s: 'It is very cold today.', extra: 'hot are' },
            { t: 'wybor', q: 'Jak zapytać: „Czy jesteś zmęczony?”', o: ['Are you tired?', 'You are tired?', 'Is you tired?', 'Do you tired?'], ok: 0, wyj: 'W pytaniu am / is / are stoi przed osobą.' }
          ]
        },
        {
          id: 'en2', tytul: 'Present Simple: zwykle',
          zadania: [
            { t: 'info', tytul: 'Present Simple: nawyki i stałe fakty', tekst: 'Mówimy o tym, co robimy zwykle, zawsze, codziennie.\n**I work**, **you work**, **we work**, **they work**.\nUwaga na **he / she / it**: dodajemy **-s**: she **works**, he **lives**, it **rains**.\nSłówka-sygnały: always (zawsze), usually (zwykle), every day (codziennie), never (nigdy).', mow: 'She works in a hospital. I drink coffee every day.' },
            { t: 'luka', q: 'Uzupełnij zdanie', s: 'He ___ in London.', o: ['lives', 'live', 'living'], ok: 0, wyj: 'he / she / it → dodaj -s.' },
            { t: 'luka', q: 'Uzupełnij zdanie', s: 'We ___ English every day.', o: ['study', 'studies', 'studying'], ok: 0 },
            { t: 'info', tytul: 'Pytania i przeczenia: do / does', tekst: 'Pytanie: **Do you work?** / **Does she work?**\nPrzeczenie: I **don\'t** work. / He **doesn\'t** work.\nPo does i doesn\'t czasownik traci -s: Does she **work**? (nie: works).', mow: 'Do you work here? Does she like tea?' },
            { t: 'wybor', q: 'Wybierz poprawne pytanie', o: ['Does she like coffee?', 'Does she likes coffee?', 'Do she like coffee?'], ok: 0 },
            { t: 'kafelki', q: 'Przetłumacz', p: 'Nie lubię poniedziałków.', odp: "I don't like Mondays", extra: "doesn't likes" },
            { t: 'sluchaj', s: 'He usually gets up at seven.', o: ['He usually gets up at seven.', 'He usually got up at seven.', 'He is getting up at seven.'], ok: 0 },
            { t: 'mow', s: 'I usually walk to work.', pl: 'Zwykle chodzę do pracy pieszo.' },
            { t: 'dyktando', s: 'My brother lives in Dublin.', extra: 'live London' },
            { t: 'pary', mowL: true, pary: [['always', 'zawsze'], ['usually', 'zwykle'], ['sometimes', 'czasami'], ['never', 'nigdy']] }
          ]
        },
        {
          id: 'en3', tytul: 'Present Continuous: teraz',
          zadania: [
            { t: 'info', tytul: 'To, co dzieje się teraz', tekst: 'Budowa: **am / is / are + czasownik z -ing**.\nI **am reading**: czytam (teraz).\nShe **is cooking**: ona gotuje (teraz).\nThey **are playing**: oni grają (teraz).\nSłówka-sygnały: now (teraz), right now (właśnie teraz), at the moment (w tej chwili), Look! (Patrz!).', mow: 'I am reading a book now.' },
            { t: 'luka', q: 'Uzupełnij zdanie', s: 'She ___ cooking dinner now.', o: ['is', 'are', 'am'], ok: 0 },
            { t: 'luka', q: 'Uzupełnij zdanie', s: 'They are ___ football at the moment.', o: ['playing', 'play', 'plays'], ok: 0 },
            { t: 'kafelki', q: 'Przetłumacz', p: 'Teraz pada deszcz.', odp: 'It is raining now', extra: 'rains are' },
            { t: 'sluchaj', s: 'Look! The children are dancing.', o: ['Look! The children are dancing.', 'Look! The children dance.', 'Look! The child is dancing.'], ok: 0 },
            { t: 'wybor', q: 'Jak zapytać: „Co teraz robisz?”', o: ['What are you doing now?', 'What do you doing now?', 'What you are doing now?'], ok: 0 },
            { t: 'mow', s: 'We are waiting for the bus.', pl: 'Czekamy na autobus.' },
            { t: 'dyktando', s: 'He is talking on the phone.', extra: 'talks are' },
            { t: 'wpisz', q: 'Napisz po angielsku', p: 'Ona teraz pracuje.', odp: ['She is working now', "She's working now", 'She is working', "She's working", 'She is working right now', 'She is working at the moment'] }
          ]
        },
        {
          id: 'en4', tytul: 'Zwykle czy teraz?',
          zadania: [
            { t: 'info', tytul: 'Simple czy Continuous?', tekst: 'Zwykle, zawsze, regularnie → **Present Simple**: I **drink** tea every morning.\nTeraz, w tej chwili → **Present Continuous**: I **am drinking** tea now.\nCzasowniki stanu (like, love, know, want, need) zwykle nie biorą -ing: I **know** (nie: I am knowing).', mow: 'I drink tea every morning, but now I am drinking coffee.' },
            { t: 'luka', q: 'Uzupełnij zdanie', s: 'I usually ___ the bus to work.', o: ['take', 'am taking', 'takes'], ok: 0 },
            { t: 'luka', q: 'Uzupełnij zdanie', s: 'Be quiet! The baby ___.', o: ['is sleeping', 'sleeps', 'sleep'], ok: 0 },
            { t: 'wybor', q: 'Które zdanie jest poprawne?', o: ['I know the answer.', 'I am knowing the answer.', 'I knows the answer.'], ok: 0 },
            { t: 'sluchaj', s: "She doesn't eat meat.", o: ["She doesn't eat meat.", "She isn't eating meat.", "She didn't eat meat."], ok: 0, wyj: 'doesn\'t eat: nie je (nigdy, zwykle). isn\'t eating: nie je (w tej chwili).' },
            { t: 'kafelki', q: 'Przetłumacz', p: 'Co zwykle robisz w weekendy?', odp: 'What do you usually do at weekends', extra: 'are doing does', alt: ['What do you usually do on weekends'] },
            { t: 'mow', s: "I'm learning English this year.", pl: 'W tym roku uczę się angielskiego.' },
            { t: 'dyktando', s: 'They often visit their grandparents.', extra: 'are visiting' },
            { t: 'wpisz', q: 'Napisz po angielsku', p: 'Mieszkam w Dublinie.', odp: ['I live in Dublin'] }
          ]
        }
      ]
    },
    {
      tytul: 'Przeszłość i przyszłość',
      opis: 'Past Simple, will i going to.',
      lekcje: [
        {
          id: 'en5', tytul: 'Past Simple: -ed',
          zadania: [
            { t: 'info', tytul: 'Przeszłość: Past Simple', tekst: 'Mówimy o rzeczach zakończonych: wczoraj, w zeszłym tygodniu, w 2020 roku.\nCzasowniki regularne dostają **-ed**: work → **worked**, play → **played**, live → **lived**.\nTa sama forma dla wszystkich osób: I worked, she worked, they worked.\nSłówka-sygnały: yesterday (wczoraj), last week (w zeszłym tygodniu), ago (temu).', mow: 'I worked late yesterday.' },
            { t: 'luka', q: 'Uzupełnij zdanie', s: 'Yesterday I ___ football with my son.', o: ['played', 'play', 'plays'], ok: 0 },
            { t: 'luka', q: 'Uzupełnij zdanie', s: 'She ___ in Paris two years ago.', o: ['lived', 'lives', 'living'], ok: 0 },
            { t: 'info', tytul: 'Pytania i przeczenia: did', tekst: 'Pytanie: **Did you work** yesterday?\nPrzeczenie: I **didn\'t work** yesterday.\nPo did i didn\'t czasownik wraca do formy podstawowej: Did she **watch**? (nie: watched).', mow: 'Did you work yesterday? No, I didn\'t.' },
            { t: 'wybor', q: 'Wybierz poprawne zdanie', o: ["I didn't watch TV yesterday.", "I didn't watched TV yesterday.", "I don't watched TV yesterday."], ok: 0 },
            { t: 'sluchaj', s: 'We visited my parents last weekend.', o: ['We visited my parents last weekend.', 'We visit my parents every weekend.', 'We are visiting my parents this weekend.'], ok: 0 },
            { t: 'wybor', q: 'Wymowa: w którym słowie -ed brzmi jak osobna sylaba „id”?', o: ['wanted', 'worked', 'played'], ok: 0, wyj: 'Po t i d mówimy „id”: wanted, needed. W innych słowach -ed jest krótkie: worked brzmi jak „łerkt”, played jak „plejd”.' },
            { t: 'mow', s: 'I called you yesterday.', pl: 'Dzwoniłem do ciebie wczoraj.' },
            { t: 'dyktando', s: 'Did you finish your work?', extra: 'finished do' },
            { t: 'kafelki', q: 'Przetłumacz', p: 'Nie pracowałam w zeszłym tygodniu.', odp: "I didn't work last week", extra: "worked don't" }
          ]
        },
        {
          id: 'en6', tytul: 'Past Simple: nieregularne',
          zadania: [
            { t: 'info', tytul: 'Czasowniki nieregularne', tekst: 'Najczęstsze czasowniki mają własną formę przeszłą. Trzeba ją zapamiętać:\ngo → **went**, have → **had**, see → **saw**, make → **made**, get → **got**, take → **took**, eat → **ate**, buy → **bought**.\nW pytaniach i przeczeniach znów pomaga did: Did you **go**? I didn\'t **see** it.', mow: 'Yesterday I went to the shop and bought some bread.' },
            { t: 'pary', mowL: true, pary: [['went', 'poszedłem, pojechałem'], ['saw', 'zobaczyłem'], ['had', 'miałem'], ['bought', 'kupiłem']] },
            { t: 'luka', q: 'Uzupełnij zdanie', s: 'Last summer we ___ to Spain.', o: ['went', 'goed', 'go'], ok: 0 },
            { t: 'luka', q: 'Uzupełnij zdanie', s: 'I ___ a great film last night.', o: ['saw', 'seed', 'see'], ok: 0 },
            { t: 'sluchaj', s: 'She bought a new car last month.', o: ['She bought a new car last month.', 'She buys a new car every year.', 'She brought a new car last month.'], ok: 0, wyj: 'bought (kupiła) brzmi podobnie do brought (przyniosła). Słuchaj, czy jest „r”.' },
            { t: 'wybor', q: 'Popraw zdanie: „Did you went to work?”', o: ['Did you go to work?', 'Did you goes to work?', 'Do you went to work?'], ok: 0 },
            { t: 'mow', s: 'We had a lovely time.', pl: 'Świetnie się bawiliśmy.' },
            { t: 'dyktando', s: 'He took the train to Cork.', extra: 'take bus' },
            { t: 'wpisz', q: 'Napisz formę przeszłą', p: 'eat → ?', odp: ['ate'] }
          ]
        },
        {
          id: 'en7', tytul: 'Przyszłość: will i going to',
          zadania: [
            { t: 'info', tytul: 'Dwie przyszłości', tekst: '**going to**: plan, który już masz. I am **going to** visit my mum on Sunday.\n**will**: decyzja podjęta w tej chwili, obietnica, przewidywanie. The phone is ringing. I **will** answer it!\nPo will czasownik w formie podstawowej: she **will go** (nie: will goes). Skróty: I\'ll, you\'ll, she\'ll.', mow: "I'm going to start a new course next month." },
            { t: 'luka', q: 'Uzupełnij zdanie (plan)', s: 'We ___ visit Grandma on Sunday. We have the tickets.', o: ['are going to', 'will', 'are'], ok: 0, wyj: 'Plan ustalony wcześniej → going to.' },
            { t: 'luka', q: 'Uzupełnij zdanie (decyzja teraz)', s: 'Wait, I___ help you with that bag!', o: ["'ll", "'m going", "'s"], ok: 0, wyj: 'Decyzja w tej chwili → will (I\'ll).' },
            { t: 'wybor', q: 'Które zdanie jest poprawne?', o: ['She will call you tomorrow.', 'She will calls you tomorrow.', 'She wills call you tomorrow.'], ok: 0 },
            { t: 'sluchaj', s: "It's going to rain this afternoon.", o: ["It's going to rain this afternoon.", 'It rained this afternoon.', "It's raining this afternoon."], ok: 0 },
            { t: 'kafelki', q: 'Przetłumacz', p: 'Pomogę ci jutro.', odp: 'I will help you tomorrow', extra: 'helps am' },
            { t: 'mow', s: 'I will see you on Monday.', pl: 'Do zobaczenia w poniedziałek.' },
            { t: 'dyktando', s: 'They are going to buy a house.', extra: 'bought will' },
            { t: 'pary', mowL: true, pary: [['I work every day', 'Present Simple'], ['I am working now', 'Present Continuous'], ['I worked yesterday', 'Past Simple'], ["I'm going to work tomorrow", 'going to']] }
          ]
        }
      ]
    },
    {
      tytul: 'Doświadczenia i rozmowa',
      opis: 'Present Perfect, Past Continuous i wymowa trudnych dźwięków.',
      lekcje: [{ id: 'en8', tytul: 'Present Perfect' }, { id: 'en9', tytul: 'Past Continuous' }, { id: 'en10', tytul: 'Wymowa: th, w, v' }, { id: 'en11', tytul: 'Rozmowa w pracy' }]
    }
  ]
};
