// Case studies for treppmann.de, written for Mittelstand leadership.
// Every fact must match brand/CLAIMS.md and my-cv-tailor/CAREER-TRUTH.md. No percentages for Bibel TV
// development, never "launched" for the app rebuild, never name Bibel TV's development agency.

export interface CaseStudy {
  slug: string;
  label: string;
  title: string;
  lead: string;
  object: string;
  shape: 'circle' | 'arch' | 'square';
  facts: [string, string][];
  situation: { title: string; paras: string[] };
  steps: { title: string; items: [string, string][] };
  images?: { src: string; alt: string; caption: string; width: number; height: number }[];
  result: { title: string; big: string; bigLabel: string; items: string[]; note?: string };
  transfer: { title: string; body: string; examples: string[] };
  limits: { title: string; items: string[] };
  description: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ki-assistent-zuschauerservice',
    label: 'Bibel TV · Zuschauerservice',
    title: 'Ein KI-Assistent, den das Team freiwillig nutzt.',
    lead: 'Der Zuschauerservice von Bibel TV beantwortet Briefe, E-Mails und Nachrichten, viele davon sehr persönlich. Ich habe einen KI-Assistenten eingeführt, der Antworten im Ton des Hauses vorformuliert. Ein Mensch prüft und verschickt jede einzelne.',
    description: 'Wie bei Bibel TV ein KI-Assistent im Zuschauerservice eingeführt wurde: freiwillig, mit Testwoche und Einzelgesprächen. Komplexe Briefe in Minuten statt Stunden.',
    object: 'letters',
    shape: 'arch',
    facts: [
      ['Prozess', 'Antworten auf Zuschauerpost'],
      ['Einführung', 'Freiwillig: eine Testwoche, dann Einzelgespräche'],
      ['Ergebnis', 'Komplexe Briefe in Minuten statt Stunden'],
    ],
    situation: {
      title: 'Die Ausgangslage',
      paras: [
        'Bibel TV ist ein christlicher Fernsehsender, der sich gerade vom klassischen Fernsehen zu Apps und Streaming weiterentwickelt. Der Zuschauerservice beantwortet, was Zuschauerinnen und Zuschauer schreiben. Ein großer Teil kommt noch mit der Post.',
        'Manche Briefe enthalten mehrere Anliegen auf einmal. Jede Antwort soll im Ton des Hauses geschrieben sein und den Formulierungen des Service-Handbuchs folgen. Vom leeren Blatt aus kostet das Zeit. Und der Ton hängt davon ab, wer gerade schreibt: Aushilfen brauchen lange, bis sie ihn treffen.',
      ],
    },
    steps: {
      title: 'Was ich gemacht habe',
      items: [
        ['Mit der Abteilungsleitung das Ziel geklärt', 'Leichter werden sollte das Schreiben, nicht das Entscheiden. Was in einer Antwort steht, verantwortet weiter ein Mensch.'],
        ['Den Ablauf angesehen, wie er wirklich ist', 'Die meiste Post kommt auf Papier. Deshalb ist der Assistent bewusst an nichts angebunden: Ein Mensch liest den Brief, entscheidet, ob er den Assistenten nutzt, und gibt den Inhalt selbst ein.'],
        ['Das Handbuch zum Maßstab gemacht', 'Der Assistent bekommt die Formulierungen, die Formatierung und die Standardsätze des Service-Handbuchs mit. Ändert sich das Handbuch, ändern sich die Entwürfe. Ein Training oder eine eigene Entwicklung war dafür nicht nötig.'],
        ['Klare Grenzen eingebaut', 'Keine medizinische, rechtliche oder finanzielle Beratung, keine politischen oder konfessionellen Urteile. Ist die Eingabe gar keine Zuschaueranfrage, schreibt der Assistent keine Antwort, sondern fragt nach.'],
        ['Freiwillig eingeführt', 'Die Teamleitung hat ermutigt, nicht verpflichtet. Eine Woche zum Ausprobieren, danach Einzelgespräche am eigenen Fall.'],
      ],
    },
    result: {
      title: 'Was sich verändert hat',
      big: 'Minuten statt Stunden',
      bigLabel: 'für Antworten auf komplexe Briefe mit mehreren Anliegen',
      items: [
        'Aushilfen schreiben vom ersten Tag an im Ton des Hauses.',
        'Kolleginnen und Kollegen, die anfangs skeptisch waren, kamen von sich aus zurück, nachdem sie den Assistenten an ihrem schwierigsten Fall ausprobiert hatten.',
        'Jede Antwort wird weiterhin von einem Menschen gelesen, angepasst und verschickt.',
      ],
      note: 'Das sind Beobachtungen aus dem Team, keine Zeitmessung pro Brief.',
    },
    transfer: {
      title: 'Was das für Ihr Unternehmen heißt',
      body: 'Überall, wo Ihr Team viele ähnliche, aber nie gleiche Texte schreibt, lässt sich der Entwurf an KI abgeben, ohne die Entscheidung abzugeben. Entscheidend ist nicht das Werkzeug, sondern die Einführung: ein klarer Maßstab, klare Grenzen und Zeit, es am eigenen Fall auszuprobieren.',
      examples: ['Antworten auf Reklamationen', 'Rückfragen zu Aufträgen und Lieferungen', 'Angebotsanschreiben', 'Antworten im Kundenservice'],
    },
    limits: {
      title: 'Was es nicht ist',
      items: ['Kein eigenes KI-Modell, sondern eine vorhandene Plattform mit gutem Kontext.', 'Kein Autopilot: Nichts wird ohne Menschen verschickt.', 'Keine Anbindung an das Postfach, kein automatisches Lesen.'],
    },
  },
  {
    slug: 'produktentwicklung-mit-ki',
    label: 'Bibel TV · Produktentwicklung',
    title: 'Von der Agentur abhängig zu: Wir bauen selbst.',
    lead: 'Bei Bibel TV hing fast jede Änderung an Apps und Systemen an einer externen Agentur. Eigene Entwicklerinnen und Entwickler gibt es nicht. Heute entsteht ein großer Teil des Backends und erste Teile der Oberflächen im Haus, gebaut von Product Managern und Product Ownern mit KI.',
    description: 'Wie Bibel TV mit KI unabhängiger von einer externen Agentur wurde: Product Manager und Product Owner bauen heute selbst, mit Claude Code, klaren Regeln und Begleitung.',
    object: 'hands',
    shape: 'circle',
    facts: [
      ['Vorher', 'Fast jede Änderung über eine externe Agentur'],
      ['Heute', 'Großer Teil des Backends und erste Oberflächen im Haus'],
      ['Vertrauen', 'Die Geschäftsführung hat mir die Neuentwicklung der App übertragen'],
    ],
    situation: {
      title: 'Die Ausgangslage',
      paras: [
        'Bibel TV entwickelt Apps für iOS, Android, Web und Fernseher, hat aber keine eigene Entwicklungsabteilung. Fast alles lief über eine externe Agentur. Jede Änderung hieß: beschreiben, beauftragen, warten.',
        'Die Leute, die wissen, was gebraucht wird, sitzen im Haus: Product Manager und Product Owner. Bauen konnten sie bisher nicht selbst.',
      ],
    },
    steps: {
      title: 'Wie es dazu kam',
      items: [
        ['2025: KI als bessere Recherche', 'Das Team nutzte Gemini und Copilot, weil sie schon da waren. Vor allem zum Recherchieren.'],
        ['Vorgemacht statt verordnet', 'Ich habe Prototypen in echtem Code gebaut, gegen echte Daten. Die Entwicklung baut direkt auf diesem Code auf. Das hat gezeigt, was möglich ist, besser als jede Präsentation.'],
        ['Frühjahr 2026: Claude eingeführt', 'Mit dem Team habe ich Claude Code, GitHub mit Spec Kit und MCP-Server für die interne Dokumentation eingeführt. Die Dokumentation hat das Team danach selbst erweitert und aufbereitet.'],
        ['Regeln statt Wildwuchs', 'Im Firmenkonto von Claude gelten feste Regeln, zum Beispiel für Formate, Freigaben und den Umgang mit Quellen. So arbeiten alle nach denselben Standards.'],
        ['Einzeln begleitet', 'Austausch mit den Product Managern und Product Ownern und Einzelsitzungen an ihren eigenen Aufgaben.'],
        ['Seit Sommer 2026: selbst entwickeln', 'Das Team baut einzelne Anwendungen und interne Werkzeuge selbst. Werkzeuge für automatisierte Tests und viele interne Tools habe ich selbst gebaut.'],
      ],
    },
    images: [
      { src: '/images/beispiele/bibeltv-prototyp.webp', alt: 'Zwei Bildschirme eines Android-Prototyps von Bibel TV mit echten Sendungen', caption: 'Prototyp in echtem Code, auf echten Bibel-TV-Inhalten. Die Entwicklung baut auf diesem Code auf.', width: 1200, height: 1227 },
    ],
    result: {
      title: 'Wo es heute steht',
      big: 'Ohne Agentur',
      bigLabel: 'hat die Geschäftsführung mir die Neuentwicklung der App übertragen. Das Vertrauen kam aus der bisherigen Arbeit. Gebaut habe ich sie selbst, mit KI.',
      items: [
        'Ein großer Teil des Backends und erste Teile der Oberflächen entstehen heute im Haus.',
        'Im Team gibt es ein bis zwei interne Ansprechpersonen, die das weitertragen.',
        'Die neue App ist noch nicht veröffentlicht.',
      ],
      note: 'Abgeschlossen ist die Umstellung nicht. Das Team arbeitet weiter daran, Schritt für Schritt.',
    },
    transfer: {
      title: 'Was das für Ihr Unternehmen heißt',
      body: 'Wenn Sie für jede Änderung an Ihrer Software auf einen Dienstleister warten, können Fachleute im Haus mit KI einen Teil selbst bauen. Das funktioniert, wenn drei Dinge zusammenkommen: jemand, der es vormacht, feste Regeln und Begleitung an der eigenen Aufgabe.',
      examples: ['Interne Werkzeuge und Auswertungen', 'Schnittstellen zwischen bestehenden Systemen', 'Prototypen, bevor Sie Entwicklung beauftragen', 'Automatisierte Tests'],
    },
    limits: {
      title: 'Was es nicht ist',
      items: ['Kein Ersatz für Architektur, IT-Sicherheit und Prüfung.', 'Keine Abschaffung externer Partner: Sie werden für das gebraucht, was sie wirklich besser können.', 'Kein Selbstläufer: Ohne Regeln entsteht Software, die niemand warten kann.'],
    },
  },
  {
    slug: 'ki-onboarding-ninox',
    label: 'Ninox · KI im Produkt',
    title: 'Aus Alltagssprache wird eine Anwendung, die Nutzer selbst ändern können.',
    lead: 'Ninox ist eine No-Code-Plattform, mit der kleine und mittlere Unternehmen ihre eigenen Geschäftsanwendungen bauen. Die Hürde war das Datenmodell. Mit dem CEO und dem technischen Mitgründer habe ich gestaltet, wie KI diese Hürde abnimmt, ohne dass die Nutzer die Kontrolle verlieren.',
    description: 'Wie Ninox mit KI aus einer Beschreibung in Alltagssprache ein Datenmodell erzeugt, das Nutzer direkt bearbeiten können. Grundlage der öffentlichen KI-Beta.',
    object: 'blocks',
    shape: 'square',
    facts: [
      ['Auftrag', 'Freiberuflich, Sommer 2025, mit CEO und technischem Mitgründer'],
      ['Prinzip', 'Direkt bearbeiten statt nur chatten'],
      ['Ergebnis', 'Interaktionsprinzip der öffentlichen KI-Beta von Ninox'],
    ],
    situation: {
      title: 'Die Ausgangslage',
      paras: [
        'Mit Ninox bauen Kanzleien, Bauunternehmen, Handwerksbetriebe und Sachverständige ihre eigenen Anwendungen: Auftragsverwaltung, Projektlisten, Fallakten. Sobald ein Datenmodell steht, erzeugt Ninox die Oberflächen fast von selbst.',
        'Genau dieses Datenmodell war die Hürde. Wer keine Datenbankkenntnisse hatte, kam nicht weiter oder holte sich einen Berater. Die Idee: Nutzer beschreiben ihre Arbeit in Alltagssprache, und KI erzeugt daraus das Datenmodell.',
      ],
    },
    steps: {
      title: 'Was ich gemacht habe',
      items: [
        ['Die eigentliche Frage gestellt', 'Dass KI ein Datenmodell erzeugen kann, war gesetzt. Meine Frage war: Was passiert danach, wenn jemand ohne Datenbankwissen vor dem Ergebnis sitzt?'],
        ['Chat allein verworfen', 'Ein realistisches Datenmodell hat acht bis zwölf Tabellen. Als Text im Chat ist das unlesbar, und Änderungen per Chat fühlen sich an wie Programmieren in Prosa. Außerdem schreibt niemand im ersten Satz eine vollständige Beschreibung: Das erste Ergebnis liegt immer etwas daneben.'],
        ['Ergebnis im echten Editor', 'Die KI erzeugt das Datenmodell direkt im Editor, den Nutzer auch sonst verwenden. Tabellen erscheinen als Karten, Felder sind anklickbar.'],
        ['Zwei Wege, ein Ergebnis', 'Nutzer ändern per Klick direkt in der Karte oder per Chat, je nachdem, was leichter ist. Vorschläge für naheliegende Ergänzungen helfen weiter.'],
        ['Kein eigener KI-Modus', 'Ist das Datenmodell fertig, ist es einfach eine Ninox-Anwendung. Nutzer arbeiten im selben Werkzeug weiter.'],
      ],
    },
    images: [
      { src: '/images/beispiele/ninox-zwei-wege.webp', alt: 'Ninox KI-Onboarding: links der Chat, rechts das erzeugte Datenmodell mit bearbeitbaren Tabellenkarten', caption: 'Zwei Wege nebeneinander: links Änderungen per Chat, rechts direkt in den Tabellenkarten.', width: 1600, height: 997 },
      { src: '/images/beispiele/ninox-im-editor.webp', alt: 'Das von der KI erzeugte Datenmodell als normale Ninox-Anwendung im Editor', caption: 'Danach ist es eine normale Ninox-Anwendung, im selben Editor.', width: 1600, height: 1002 },
    ],
    result: {
      title: 'Was daraus wurde',
      big: 'Direkt bearbeiten',
      bigLabel: 'wurde zum Interaktionsprinzip der öffentlichen KI-Beta von Ninox.',
      items: [
        'Nutzer müssen nicht erst lernen, wie man mit einer KI spricht. Sie ändern, was sie sehen.',
        'Das erste, unvollständige Ergebnis ist kein Fehler, sondern der normale Start.',
      ],
    },
    transfer: {
      title: 'Was das für Ihr Unternehmen heißt',
      body: 'Wenn Sie KI in Ihr eigenes Produkt oder Ihre interne Software bringen, ist die Frage nicht, ob die KI etwas erzeugen kann. Die Frage ist, ob Ihre Leute das Ergebnis danach übernehmen können. KI nimmt das leere Blatt ab. Die Kontrolle muss bei den Menschen bleiben.',
      examples: ['KI-Funktionen im eigenen Softwareprodukt', 'Konfiguratoren und Angebotswerkzeuge', 'Interne Formulare und Datenerfassung', 'Auswertungen, die Fachleute anpassen'],
    },
    limits: {
      title: 'Was es nicht ist',
      items: ['Die KI-Erzeugung selbst wurde separat entwickelt. Meine Arbeit war, wie Menschen damit umgehen.', 'Ich habe nicht die gesamte Beta verantwortet.'],
    },
  },
];
