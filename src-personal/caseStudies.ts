// Case studies for treppmann.de, written for Mittelstand leadership.
// Every fact must match brand/CLAIMS.md and my-cv-tailor/CAREER-TRUTH.md. No percentages for Bibel TV
// development, never "launched" for the app rebuild, never name Bibel TV's development agency.

// A prose section with a statement heading. `nav` is its short label in the jump navigation.
export interface CaseSection { title: string; nav?: string; paras: string[] }

// Two layouts share this type. The classic one uses situation, steps, result, transfer and limits.
// The article layout (brand/VOICE-DE.md section 7) adds an opening scene, nut paragraph, turning point,
// chapters, callback, takeaways and questions. When `chapters` is set, steps/transfer/limits are not rendered.
export interface CaseStudy {
  slug: string;
  label: string;
  title: string;
  lead: string;
  object: string;
  shape: 'circle' | 'arch' | 'square';
  facts: [string, string][];
  opening?: CaseSection;
  nut?: string;
  situation: CaseSection;
  turn?: CaseSection;
  chapters?: CaseSection[];
  steps?: { title: string; items: [string, string][] };
  images?: { src: string; alt: string; caption: string; width: number; height: number }[];
  result: { title: string; nav?: string; big: string; bigLabel: string; items: string[]; note?: string };
  callback?: CaseSection;
  takeaways?: { title: string; nav?: string; items: [string, string][]; notFitLabel: string; notFit: string };
  questions?: { title: string; items: string[] };
  transfer?: { title: string; body: string; examples: string[] };
  limits?: { title: string; items: string[] };
  cta?: { title: string; body: string };
  description: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ki-assistent-zuschauerservice',
    label: 'Bibel TV · Zuschauerservice',
    title: 'Wie ein Zuschauerservice KI einführte, ohne jemanden zu zwingen',
    lead: 'Bibel TV bekommt einen großen Teil seiner Zuschauerpost noch auf Papier. Ein KI-Assistent schreibt dort heute den ersten Entwurf, im Ton des Hauses. Lesen, entscheiden und verschicken bleibt beim Menschen.',
    description: 'Wie Bibel TV einen KI-Assistenten im Zuschauerservice einführte: freiwillig, an kein Postfach angebunden, mit dem Service-Handbuch als Maßstab. Selbst komplexe Briefe in Minuten statt Stunden.',
    object: 'letters',
    shape: 'arch',
    facts: [
      ['Organisation', 'Bibel TV, christlicher Fernsehsender auf dem Weg zu Apps und Streaming'],
      ['Ausgangslage', 'Persönliche Post, viel davon auf Papier. Jede Antwort entstand vom leeren Blatt, nach dem Service-Handbuch.'],
      ['Was ich gemacht habe', 'Einen KI-Assistenten gebaut, der Entwürfe nach dem Handbuch schreibt. Von Hand bedient, an kein Postfach angebunden.'],
      ['Zeitraum', 'Gebaut im Herbst 2025, freiwillig eingeführt mit Testwoche und Einzelgesprächen. Heute im ganzen Team im Alltag.'],
      ['Ergebnis', 'Selbst komplexe Briefe sind in Minuten statt Stunden beantwortet. Teilzeit- und Aushilfskräfte treffen den Ton des Hauses von Anfang an, nicht erst nach Wochen der Einarbeitung.'],
      ['Drei Erkenntnisse', 'Den Entwurf abgeben, nicht die Entscheidung. Das vorhandene Handbuch zum Maßstab machen. Freiwillig einführen, am schwierigsten Fall testen.'],
    ],
    opening: {
      title: 'Die meiste Post kommt hier noch auf Papier',
      paras: [
        'Die Post kommt als Brief oder als Postkarte, handschriftlich oder getippt.',
        'Zuschauerinnen und Zuschauer bedanken sich für eine Sendung und schreiben, was sie ihnen persönlich bedeutet. Sie fragen nach Sendungen und nach Büchern oder Materialien, die darin vorkamen. Und sie kritisieren Inhalte, manche mit ihrer Meinung, manche mit theologischen Argumenten.',
        'Dann kommt eine Beschwerde: anspruchsvoll geschrieben, mit vielen Punkten auf einmal. Jemand im Zuschauerservice liest sie.',
        'Die Antwort soll auf jeden Punkt eingehen, im Ton des Hauses und mit den Formulierungen des Service-Handbuchs. Vom leeren Blatt aus dauert das Stunden.',
      ],
    },
    nut: 'Heute schreibt bei Bibel TV ein KI-Assistent den ersten Entwurf. Das allein wäre keine Geschichte. Entwürfe schreibt heute fast jedes KI-Werkzeug. Lehrreich ist, wie der Assistent ins Team kam: ohne Pflicht, ohne Anschluss an ein Postfach und mit einem Maßstab, den es schon gab. Das lässt sich auf fast jeden Betrieb übertragen, in dem ein Team viele ähnliche, aber nie gleiche Texte schreibt.',
    situation: {
      title: 'Persönliche Post verträgt keinen Autopiloten',
      nav: 'Ausgangslage',
      paras: [
        'Bibel TV ist ein christlicher Fernsehsender auf dem Weg vom klassischen Fernsehen zu Apps und Streaming. Der Zuschauerservice beantwortet Briefe, E-Mails und Nachrichten. Interne Richtlinien legen fest, worauf er antwortet, worauf nicht und wie weit er sich auf strittige Themen einlässt.',
        'Der Ton einer Antwort hing davon ab, wer gerade schrieb. Aushilfen brauchten lange, bis sie ihn trafen. Und eine Antwort, die falsch klingt, trifft einen Menschen, nicht einen Vorgang.',
        'Mit der Abteilungsleitung habe ich deshalb zuerst das Ziel geklärt. Leichter werden sollte das Schreiben, nicht das Entscheiden. Was in einer Antwort steht, verantwortet weiter ein Mensch.',
        'Dazu kam Unsicherheit im Team, wie sie bei neuen Abläufen fast immer entsteht, bei der Digitalisierung genauso wie jetzt bei KI. Dahinter steckt Veränderungsstress: die Last, etwas Neues lernen zu müssen, die Frage, ob man das gut lernen kann, bis hin zur Sorge um den eigenen Arbeitsplatz. Bei KI kommt eine weitere Frage dazu: Welche Arbeit soll beim Menschen bleiben und welche nicht?',
        'All das begegnete uns hier auch. Zwei im Team wollten zunächst keine KI. Ein Einwand lautete: Eine Antwort an Zuschauerinnen und Zuschauer braucht einen menschlichen Ton. Die Telefon-Hotline soll ohnehin nie durch KI ersetzt werden.',
      ],
    },
    turn: {
      title: 'Ein Assistent, der an nichts angeschlossen ist',
      nav: 'Wendepunkt',
      paras: [
        'Bei KI im Kundenservice denken viele zuerst an Automatik: Postfach anschließen, mitlesen lassen, Antworten verschicken. Hier hätte das nicht gepasst. Die meiste Post kommt auf Papier.',
        'Also ist der Assistent bewusst an nichts angebunden. Ein Mensch liest den Brief. Er entscheidet, ob der Assistent helfen soll, und gibt den Inhalt selbst ein. Den Entwurf bearbeitet er, kopiert ihn in Word, druckt ihn aus und legt ihn in den Postausgang. Bei E-Mails geht es direkter.',
        'Das klingt nach einem Umweg. Es ist die eigentliche Sicherung. Bevor der Assistent einen Brief sieht, hat ein Mensch ihn gelesen. Ob und wie geantwortet wird, entscheidet immer ein Mensch. Auch gar nicht zu antworten, bleibt eine Möglichkeit.',
      ],
    },
    chapters: [
      {
        title: 'Das Handbuch gab es schon. Es wurde zum Maßstab.',
        nav: 'Handbuch',
        paras: [
          'Ich habe den Assistenten im September und Oktober 2025 gebaut. Den Maßstab musste ich dafür nicht erfinden: Der Zuschauerservice hatte längst aufgeschrieben, wie eine gute Antwort aussieht. Im Service-Handbuch stehen Formulierungen, Formatierung und Standardsätze. Genau das bekommt der Assistent mit. Ändert sich das Handbuch, ändern sich die Entwürfe.',
          'Ein eigenes KI-Modell zu trainieren oder etwas zu programmieren war nicht nötig. Der Assistent läuft auf einer vorhandenen KI-Plattform und bekommt das Handbuch als Grundlage. Viele Betriebe haben ihren Maßstab ebenfalls schon aufgeschrieben. Nur eben nicht für eine KI.',
        ],
      },
      {
        title: 'Grenzen stehen in den Anweisungen, die Prüfung macht ein Mensch',
        nav: 'Grenzen',
        paras: [
          'Der Assistent hat eine Liste von Themen, zu denen er nichts rät: keine medizinische, rechtliche oder finanzielle Beratung, keine politischen oder konfessionellen Urteile. Dazu kommt: keine missionarische Sprache, denn der Sender will sachlich und ökumenisch bleiben. Ist die Eingabe gar keine Zuschaueranfrage, schreibt der Assistent keinen Entwurf.',
          'Ehrlicherweise: Diese Liste ist eine Anweisung, keine technische Sperre. Nichts prüft den fertigen Entwurf automatisch. Deshalb liest ein Mensch jeden Entwurf, bevor daraus eine Antwort wird.',
        ],
      },
      {
        title: 'Freiwillig eingeführt, am schwierigsten Fall überzeugt',
        nav: 'Einführung',
        paras: [
          'Ich habe den Assistenten dem Team vorgestellt und die Einführung selbst begleitet. Die Teamleitung hat ermutigt, nicht verpflichtet. Wer wollte, probierte ihn eine Woche lang selbst aus. Danach folgten Einzelgespräche am eigenen Fall.',
          'Den Ausschlag gab ein Brief wie der vom Anfang. Eine der beiden Personen, die keine KI wollten, probierte den Assistenten an genau so einer Beschwerde aus: anspruchsvoll, mit vielen Punkten auf einmal. Der Entwurf ging auf jeden Punkt ein, im Ton des Handbuchs und des Hauses. Die Rückmeldung danach: Von Hand hätte das mindestens Stunden gedauert. Seitdem nutzt diese Person den Assistenten regelmäßig.',
          'Die zweite Person war KI gegenüber grundsätzlich skeptisch. Später erzählte sie mir, dass sie den Assistenten inzwischen ebenfalls regelmäßig nutzt. Im Rückblick sahen beide darin ein Hilfsmittel, bei dem sie die Kontrolle behalten.',
          'An dieser Stelle kippen viele Einführungen: Man zeigt ein Werkzeug an einem leichten Beispiel und wundert sich, dass es im Alltag niemand nutzt. Der schwierige eigene Fall ist der ehrlichere Test.',
        ],
      },
    ],
    result: {
      title: 'Was sich verändert hat',
      nav: 'Ergebnis',
      big: 'Minuten statt Stunden',
      bigLabel: 'selbst für komplexe Briefe mit vielen Punkten auf einmal, weil die KI sofort einen Ansatzpunkt liefert',
      items: [
        'Im Team arbeiten viele in Teilzeit. Den Ton von Bibel TV trafen neue Kolleginnen und Kollegen früher erst nach Wochen, manchmal Monaten. Heute antworten sie von Anfang an in dieser Stimme.',
        '2026 nutzte zunächst ein Teil des Teams den Assistenten regelmäßig. Heute gehört er im ganzen Team zum Alltag, auch wenn nicht jeder Brief damit entsteht.',
        'Beide, die anfangs keine KI wollten, nutzen ihn heute regelmäßig.',
        'Jede Antwort wird weiterhin von einem Menschen gelesen, angepasst und verschickt.',
      ],
      note: 'Die Zeiten stammen aus der Erfahrung des Teams, nicht aus einer Messung pro Brief.',
    },
    callback: {
      title: 'Der Brief kommt immer noch mit der Post',
      paras: [
        'Jemand öffnet ihn und liest ihn, wie vorher. Was sich verändert hat, ist das Blatt danach. Es ist nicht mehr leer.',
        'Darauf steht ein Entwurf, der auf jeden Punkt eingeht, mit den Sätzen aus dem Handbuch. Die Person passt ihn an, druckt ihn aus und legt ihn in den Postausgang. Bei einem Brief mit vielen Punkten dauert das jetzt Minuten.',
      ],
    },
    takeaways: {
      title: 'Was Sie daraus mitnehmen können',
      nav: 'Für Sie',
      items: [
        ['Geben Sie den Entwurf ab, nicht die Entscheidung.', 'Legen Sie fest, wer vorher liest und wer hinterher verschickt. Erst wenn Sie beide Stellen benennen können, ist der Rahmen klar.'],
        ['Machen Sie Ihr vorhandenes Regelwerk zum Maßstab.', 'Handbuch, Textbausteine, Musterbriefe: Was schon schriftlich vorliegt, ist der beste Kontext für eine KI. Prüfen Sie zuerst, ob es dieses Dokument bei Ihnen gibt.'],
        ['Führen Sie freiwillig ein, und testen Sie am schwierigsten Fall.', 'Eine Woche zum Ausprobieren, dann Einzelgespräche am eigenen Beispiel. Bei Bibel TV nutzen heute beide, die anfangs keine KI wollten, den Assistenten regelmäßig.'],
      ],
      notFitLabel: 'Wann es nicht passt',
      notFit: 'Wenn Sie viele Nachrichten vollautomatisch beantworten wollen, ohne dass jemand sie vorher liest. Oder wenn bestimmte Inhalte nachweislich nie in einer Antwort stehen dürfen. Dann reicht eine Liste in den Anweisungen nicht, und Sie brauchen eine zusätzliche Prüfung.',
    },
    questions: {
      title: 'Zum Weiterdenken',
      items: [
        'Wo schreibt Ihr Team heute viele ähnliche, aber nie gleiche Texte – und wer entscheidet, was davon hinausgeht?',
        'Welches Dokument beschreibt bei Ihnen, wie eine gute Antwort klingt? Und wann hat es zuletzt jemand geöffnet?',
      ],
    },
    cta: {
      title: 'Haben Sie einen ähnlichen Prozess?',
      body: 'In 30 Minuten sprechen wir darüber, wo bei Ihnen der erste Entwurf entsteht und ob ein Assistent dort hilft. Kostenlos und ohne Verpflichtung.',
    },
  },
  {
    slug: 'produktentwicklung-mit-ki',
    label: 'Bibel TV · Produktentwicklung',
    title: 'Selbst bauen statt auf die Agentur warten.',
    lead: 'Bei Bibel TV hing fast jede Änderung an Apps und Systemen an einer externen Agentur. Eigene Entwicklerinnen und Entwickler gibt es nicht. Heute entstehen ein großer Teil des Backends und erste Teile der Oberflächen im Haus. Gebaut werden sie mit KI, von den Produktverantwortlichen selbst: Product Managern und Product Ownern.',
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
        'Bibel TV bietet Apps für iOS, Android, Web und Fernseher an, hat aber keine eigene Entwicklungsabteilung. Fast alles lief über eine externe Agentur. Jede Änderung hieß: beschreiben, beauftragen, warten.',
        'Die Leute, die wissen, was gebraucht wird, sitzen im Haus: die Produktverantwortlichen. Bauen konnten sie bisher nicht selbst.',
      ],
    },
    steps: {
      title: 'Wie es dazu kam',
      items: [
        ['2025: KI als bessere Recherche', 'Das Team nutzte Gemini und Copilot, weil sie schon da waren. Vor allem zum Recherchieren.'],
        ['Vorgemacht statt verordnet', 'Ich habe Prototypen in echtem Code gebaut, gegen echte Daten. Die Entwicklung baut direkt auf diesem Code auf. Das hat gezeigt, was möglich ist, besser als jede Präsentation.'],
        ['Frühjahr 2026: Claude eingeführt', 'Mit dem Team habe ich Claude Code, GitHub mit Spec Kit und MCP-Server für die interne Dokumentation eingeführt. Die Dokumentation hat das Team danach selbst erweitert und aufbereitet.'],
        ['Regeln statt Wildwuchs', 'Im Firmenkonto von Claude gelten feste Regeln, zum Beispiel für Formate, Freigaben und den Umgang mit Quellen. So arbeiten alle nach denselben Standards.'],
        ['Einzeln begleitet', 'Ich habe mich mit den Produktverantwortlichen ausgetauscht und in Einzelsitzungen mit ihnen an ihren eigenen Aufgaben gearbeitet.'],
        ['Seit Sommer 2026: selbst entwickeln', 'Das Team baut einzelne Anwendungen und interne Werkzeuge selbst. Die Werkzeuge für automatisierte Tests und viele weitere interne Werkzeuge habe ich gebaut.'],
      ],
    },
    images: [
      { src: '/images/beispiele/bibeltv-prototyp.webp', alt: 'Zwei Bildschirme eines Android-Prototyps von Bibel TV mit echten Sendungen', caption: 'Prototyp in echtem Code, auf echten Bibel-TV-Inhalten. Die Entwicklung baut auf diesem Code auf.', width: 1200, height: 1227 },
    ],
    result: {
      title: 'Wo es heute steht',
      big: 'Ohne Agentur',
      bigLabel: 'hat die Geschäftsführung mir die Neuentwicklung der App übertragen. Das Vertrauen kam aus meiner bisherigen Arbeit. Gebaut habe ich sie selbst, mit KI.',
      items: [
        'Ein großer Teil des Backends und erste Teile der Oberflächen entstehen heute im Haus.',
        'Im Team gibt es ein bis zwei interne Ansprechpersonen, die das Thema im Haus weitertragen.',
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
      items: ['Kein Ersatz für Architektur, IT-Sicherheit und Prüfung.', 'Externe Partner bleiben – für das, was sie wirklich besser können.', 'Kein Selbstläufer: Ohne Regeln entsteht Software, die niemand warten kann.'],
    },
  },
  {
    slug: 'ki-onboarding-ninox',
    label: 'Ninox · KI im Produkt',
    title: 'Aus Alltagssprache wird eine Anwendung, die man selbst ändern kann.',
    lead: 'Ninox ist eine No-Code-Plattform, mit der kleine und mittlere Unternehmen ihre eigenen Geschäftsanwendungen bauen. Die Hürde war das Datenmodell. Ich habe gestaltet, wie KI über diese Hürde hilft, ohne dass jemand die Kontrolle verliert.',
    description: 'Wie Ninox mit KI aus einer Beschreibung in Alltagssprache ein Datenmodell erzeugt, das man direkt bearbeiten kann. Grundlage der öffentlichen KI-Beta.',
    object: 'blocks',
    shape: 'square',
    facts: [
      ['Auftrag', 'Freiberuflich, Sommer 2025'],
      ['Prinzip', 'Direkt bearbeiten statt nur chatten'],
      ['Ergebnis', 'Interaktionsprinzip der öffentlichen KI-Beta von Ninox'],
    ],
    situation: {
      title: 'Die Ausgangslage',
      paras: [
        'Mit Ninox bauen Kanzleien, Bauunternehmen, Handwerksbetriebe und Sachverständige ihre eigenen Anwendungen: Auftragsverwaltung, Projektlisten, Fallakten. Sobald ein Datenmodell steht, erzeugt Ninox die Oberflächen fast von selbst.',
        'Genau dieses Datenmodell war die Hürde. Wer keine Datenbankkenntnisse hatte, kam nicht weiter oder holte sich Hilfe von außen. Die Idee: Man beschreibt die eigene Arbeit in Alltagssprache, und KI erzeugt daraus das Datenmodell.',
      ],
    },
    steps: {
      title: 'Was ich gemacht habe',
      items: [
        ['Die eigentliche Frage gestellt', 'Dass KI ein Datenmodell erzeugen kann, war gesetzt. Meine Frage war: Was passiert danach, wenn jemand ohne Datenbankwissen vor dem Ergebnis sitzt?'],
        ['Chat allein verworfen', 'Ein realistisches Datenmodell hat acht bis zwölf Tabellen. Als Text im Chat ist das unlesbar, und Änderungen per Chat fühlen sich an wie Programmieren in Prosa. Außerdem schreibt niemand im ersten Satz eine vollständige Beschreibung: Das erste Ergebnis liegt immer etwas daneben.'],
        ['Ergebnis im echten Editor', 'Die KI erzeugt das Datenmodell direkt im Editor, den man auch sonst verwendet. Tabellen erscheinen als Karten, Felder sind anklickbar.'],
        ['Zwei Wege, ein Ergebnis', 'Geändert wird per Klick direkt in der Karte oder per Chat, je nachdem, was leichter ist. Vorschläge für naheliegende Ergänzungen helfen weiter.'],
        ['Kein eigener KI-Modus', 'Ist das Datenmodell fertig, ist es einfach eine Ninox-Anwendung. Man arbeitet im selben Werkzeug weiter.'],
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
        'Niemand muss erst lernen, wie man mit einer KI spricht. Man ändert, was man sieht.',
        'Das erste, unvollständige Ergebnis ist kein Fehler, sondern der normale Start.',
      ],
    },
    transfer: {
      title: 'Was das für Ihr Unternehmen heißt',
      body: 'Wenn Sie KI in Ihr eigenes Produkt oder Ihre interne Software einbauen, ist die Frage nicht, ob die KI etwas erzeugen kann. Die Frage ist, ob Ihre Leute das Ergebnis danach selbst weiterbearbeiten können. KI nimmt das leere Blatt ab. Die Kontrolle muss bei den Menschen bleiben.',
      examples: ['KI-Funktionen im eigenen Softwareprodukt', 'Konfiguratoren und Angebotswerkzeuge', 'Interne Formulare und Datenerfassung', 'Auswertungen, die Fachleute anpassen'],
    },
    limits: {
      title: 'Was es nicht ist',
      items: ['Die Technik, mit der die KI das Datenmodell erzeugt, haben andere entwickelt. Meine Arbeit war, wie Menschen mit dem Ergebnis umgehen.', 'Ich habe nicht die gesamte Beta verantwortet.'],
    },
  },
];

// English versions: same facts, same order. `pair` is the slug of the other language.
export const caseStudiesEn: CaseStudy[] = [
  {
    slug: 'ai-assistant-viewer-services',
    label: 'Bibel TV · Viewer services',
    title: 'An AI assistant the team uses by choice.',
    lead: 'Bibel TV’s viewer services team answers letters, emails and messages, many of them deeply personal. I introduced an AI assistant that drafts replies in the house voice. A person checks and sends every single one.',
    description: 'How Bibel TV introduced an AI assistant in viewer services: voluntary, with a trial week and one-to-one sessions. Complex letters in minutes instead of hours.',
    object: 'letters',
    shape: 'arch',
    facts: [
      ['Process', 'Replies to viewer mail'],
      ['Rollout', 'Voluntary: a trial week, then one-to-one sessions'],
      ['Result', 'Complex letters in minutes instead of hours'],
    ],
    situation: {
      title: 'The starting point',
      paras: [
        'Bibel TV is a Christian broadcaster moving from linear television to apps and streaming. Its viewer services team answers what viewers write. A large share still arrives by post.',
        'Some letters raise several concerns at once. Every reply should sound like the house and follow the wording of the service handbook. Starting from a blank page takes time. And the tone depends on who is writing: temporary staff take a long time to find it.',
      ],
    },
    steps: {
      title: 'What I did',
      items: [
        ['Agreed the goal with the head of the department', 'Writing should get easier, not deciding. What a reply says remains a person’s responsibility.'],
        ['Looked at the process as it really runs', 'Most mail arrives on paper. So the assistant is deliberately connected to nothing: a person reads the letter, decides whether to use the assistant and enters the content themselves.'],
        ['Made the handbook the standard', 'The assistant works with the wording, formatting and standard phrases of the service handbook. When the handbook changes, the drafts change. No training and no custom development were needed.'],
        ['Built in clear limits', 'No medical, legal or financial advice, no political or denominational judgements. If the input is not a viewer enquiry at all, the assistant writes no reply and asks instead.'],
        ['Introduced it on a voluntary basis', 'The team lead encouraged, never mandated. One week to try it, then one-to-one sessions on people’s own cases.'],
      ],
    },
    result: {
      title: 'What changed',
      big: 'Minutes, not hours',
      bigLabel: 'for replies to complex letters covering several topics',
      items: [
        'Temporary staff write in the house voice from their first day.',
        'Colleagues who were sceptical at first came back on their own after trying the assistant on their hardest letter.',
        'Every reply is still read, adapted and sent by a person.',
      ],
      note: 'These are observations from the team, not a per-letter time measurement.',
    },
    transfer: {
      title: 'What this means for your company',
      body: 'Wherever your team writes many similar but never identical texts, you can hand the draft to AI without handing over the decision. What makes it work is not the tool but the rollout: a clear standard, clear limits and time to try it on real work.',
      examples: ['Replies to complaints', 'Questions about orders and deliveries', 'Cover letters for quotes', 'Customer service replies'],
    },
    limits: {
      title: 'What it is not',
      items: ['Not a custom AI model, but an existing platform with good context.', 'Not an autopilot: nothing is sent without a person.', 'No connection to the inbox, no automatic reading.'],
    },
  },
  {
    slug: 'building-in-house-with-ai',
    label: 'Bibel TV · Product development',
    title: 'Building in-house instead of waiting for the agency.',
    lead: 'At Bibel TV, almost every change to apps and systems depended on an external agency. There are no in-house developers. Today a large part of the backend and the first parts of the user interfaces are built in-house, by product managers and product owners working with AI.',
    description: 'How Bibel TV became less dependent on an external agency with AI: product managers and product owners now build themselves, with Claude Code, clear rules and guidance.',
    object: 'hands',
    shape: 'circle',
    facts: [
      ['Before', 'Almost every change went through an external agency'],
      ['Today', 'Much of the backend and first interfaces built in-house'],
      ['Trust', 'Leadership gave me the rebuild of the app'],
    ],
    situation: {
      title: 'The starting point',
      paras: [
        'Bibel TV builds apps for iOS, Android, web and TV, but has no development department of its own. Almost everything ran through an external agency. Every change meant: describe it, commission it, wait.',
        'The people who know what is needed work in-house: product managers and product owners. Until then, they could not build anything themselves.',
      ],
    },
    steps: {
      title: 'How it happened',
      items: [
        ['2025: AI as better research', 'The team used Gemini and Copilot because they were already available, mostly for research.'],
        ['Showing, not ordering', 'I built prototypes in real code, against real data. Development builds directly on that code. It showed what is possible better than any presentation.'],
        ['Spring 2026: Claude introduced', 'With the team I introduced Claude Code, GitHub with Spec Kit and MCP servers for the internal documentation. The team then extended and prepared that documentation itself.'],
        ['Rules, not sprawl', 'The company Claude account carries fixed rules, for example on formats, approvals and the use of sources. Everyone works to the same standards.'],
        ['Guided one by one', 'Exchange with the product managers and product owners, and one-to-one sessions on their own tasks.'],
        ['Since summer 2026: building in-house', 'The team builds individual applications and internal tools itself. I built the tools for automated testing and many of the internal tools myself.'],
      ],
    },
    images: [
      { src: '/images/beispiele/bibeltv-prototyp.webp', alt: 'Two screens of an Android prototype for Bibel TV with real programmes', caption: 'Prototype in real code, on real Bibel TV content. Development builds on this code.', width: 1200, height: 1227 },
    ],
    result: {
      title: 'Where it stands',
      big: 'No agency',
      bigLabel: 'Leadership gave me the rebuild of the app. The trust came from the work before it. I built it myself, with AI.',
      items: [
        'A large part of the backend and the first parts of the interfaces are now built in-house.',
        'The team has one or two internal champions who carry it forward.',
        'The new app has not been released yet.',
      ],
      note: 'The change is not finished. The team keeps working on it, step by step.',
    },
    transfer: {
      title: 'What this means for your company',
      body: 'If you wait for a supplier for every change to your software, people in your company can build part of it themselves with AI. It works when three things come together: someone who shows how, fixed rules, and guidance on their own tasks.',
      examples: ['Internal tools and reports', 'Interfaces between existing systems', 'Prototypes before you commission development', 'Automated tests'],
    },
    limits: {
      title: 'What it is not',
      items: ['No replacement for architecture, IT security and review.', 'No end to external partners: they are needed for what they really do better.', 'Not self-running: without rules you get software nobody can maintain.'],
    },
  },
  {
    slug: 'ninox-ai-onboarding',
    label: 'Ninox · AI in the product',
    title: 'Plain language becomes an application users can change themselves.',
    lead: 'Ninox is a no-code platform small and mid-sized companies use to build their own business applications. The hurdle was the data model. I designed how AI removes that hurdle without users losing control.',
    description: 'How Ninox uses AI to turn a plain-language description into a data model users can edit directly. The basis of the public AI beta.',
    object: 'blocks',
    shape: 'square',
    facts: [
      ['Engagement', 'Freelance, summer 2025'],
      ['Principle', 'Edit directly instead of only chatting'],
      ['Result', 'Interaction model of Ninox’s public AI beta'],
    ],
    situation: {
      title: 'The starting point',
      paras: [
        'Law firms, construction companies, contractors and inspectors use Ninox to build their own applications: order management, project lists, case files. Once a data model exists, Ninox generates the interfaces almost by itself.',
        'That data model was the hurdle. People without database knowledge got stuck or hired a consultant. The idea: users describe their work in plain language, and AI generates the data model.',
      ],
    },
    steps: {
      title: 'What I did',
      items: [
        ['Asked the real question', 'That AI could generate a data model was a given. My question was: what happens next, when someone without database knowledge sits in front of the result?'],
        ['Ruled out chat alone', 'A realistic data model has eight to twelve tables. As text in a chat it is unreadable, and changing it by chat feels like programming in prose. And nobody writes a complete description in their first sentence: the first result is always somewhat off.'],
        ['Result in the real editor', 'The AI generates the data model directly in the editor users already work in. Tables appear as cards, fields are clickable.'],
        ['Two paths, one result', 'Users change things by clicking directly in the card or by chat, whichever is easier. Suggestions for obvious additions help them along.'],
        ['No separate AI mode', 'Once the data model is done, it is simply a Ninox application. Users keep working in the same tool.'],
      ],
    },
    images: [
      { src: '/images/beispiele/ninox-zwei-wege.webp', alt: 'Ninox AI onboarding: the chat on the left, the generated data model with editable table cards on the right', caption: 'Two paths side by side: changes by chat on the left, directly in the table cards on the right.', width: 1600, height: 997 },
      { src: '/images/beispiele/ninox-im-editor.webp', alt: 'The AI-generated data model as a normal Ninox application in the editor', caption: 'Afterwards it is a normal Ninox application, in the same editor.', width: 1600, height: 1002 },
    ],
    result: {
      title: 'What came of it',
      big: 'Edit directly',
      bigLabel: 'became the interaction model of Ninox’s public AI beta.',
      items: [
        'Users do not have to learn how to talk to an AI first. They change what they see.',
        'The first, incomplete result is not an error but the normal start.',
      ],
    },
    transfer: {
      title: 'What this means for your company',
      body: 'When you bring AI into your own product or internal software, the question is not whether the AI can produce something. The question is whether your people can take ownership of the result. AI removes the blank page. Control has to stay with people.',
      examples: ['AI features in your own software product', 'Configurators and quoting tools', 'Internal forms and data entry', 'Reports that specialists adjust'],
    },
    limits: {
      title: 'What it is not',
      items: ['The AI generation itself was developed separately. My work was how people deal with it.', 'I was not responsible for the whole beta.'],
    },
  },
];

// Language pairs, by position in the two arrays.
export const pairSlug = (slug: string) => {
  const i = caseStudies.findIndex((s) => s.slug === slug);
  if (i >= 0) return caseStudiesEn[i].slug;
  return caseStudies[caseStudiesEn.findIndex((s) => s.slug === slug)].slug;
};

// Visual extras per case study: a flow or timeline, a before/after comparison and one pull quote.
// `who` marks who does a step: a person, the AI, or neither (an input or an outcome).
export interface CaseVisuals {
  quote: { text: string; by: string };
  flow: { title: string; kind: 'flow' | 'timeline'; nodes: [string, string, 'human' | 'ai' | 'neutral'][] };
  compare: { title: string; beforeTitle: string; afterTitle: string; before: string[]; after: string[] };
}

export const caseVisuals: Record<string, CaseVisuals> = {
  'ki-assistent-zuschauerservice': {
    quote: { text: 'Das leere Blatt abgeben. Nicht die Entscheidung.', by: 'Der Grundsatz hinter dem Assistenten' },
    flow: { title: 'So entsteht eine Antwort heute', kind: 'flow', nodes: [
      ['Eine Anfrage kommt an', 'per Post, E-Mail oder Nachricht', 'neutral'],
      ['Ein Mensch liest', 'und entscheidet, ob der Assistent hilft', 'human'],
      ['Der Assistent entwirft', 'nach dem Service-Handbuch, im Ton des Hauses', 'ai'],
      ['Ein Mensch prüft', 'und passt den Entwurf an', 'human'],
      ['Ein Mensch verschickt', 'jede einzelne Antwort', 'human'],
    ] },
    compare: { title: 'Vorher und nachher', beforeTitle: 'Vorher', afterTitle: 'Heute',
      before: ['Jede Antwort vom leeren Blatt', 'Der Ton hängt davon ab, wer schreibt', 'Neue im Team brauchen Wochen oder Monate, bis sie ihn treffen', 'Komplexe Briefe: Stunden'],
      after: ['Entwurf nach den Formulierungen des Handbuchs', 'Neue im Team treffen den Ton von Anfang an', 'Komplexe Briefe: Minuten', 'Jede Antwort weiter von einem Menschen geprüft'] },
  },
  'produktentwicklung-mit-ki': {
    quote: { text: 'Vorgemacht statt verordnet.', by: 'Wie die Einführung funktioniert hat' },
    flow: { title: 'Wie das Team Schritt für Schritt weiterkam', kind: 'timeline', nodes: [
      ['2025', 'KI als bessere Recherche, mit Gemini und Copilot', 'neutral'],
      ['Frühjahr 2026', 'Claude eingeführt, erste Prototypen im Team', 'ai'],
      ['Sommer 2026', 'Einzelne Anwendungen und interne Werkzeuge selbst entwickelt', 'human'],
    ] },
    compare: { title: 'Vorher und heute', beforeTitle: 'Vorher', afterTitle: 'Heute',
      before: ['Fast jede Änderung über eine externe Agentur', 'Beschreiben, beauftragen, warten', 'Die Produktverantwortlichen können nicht selbst bauen'],
      after: ['Großer Teil des Backends im Haus', 'Erste Oberflächen im Haus', 'Feste Regeln für Formate, Freigaben und Quellen', 'Ein bis zwei interne Ansprechpersonen'] },
  },
  'ki-onboarding-ninox': {
    quote: { text: 'Erst das Ergebnis zeigen. Dann bearbeiten lassen.', by: 'Das Gestaltungsprinzip des Onboardings' },
    flow: { title: 'Vom Satz zur Anwendung', kind: 'flow', nodes: [
      ['Beschreiben', 'ein Satz in Alltagssprache', 'human'],
      ['KI erzeugt', 'das Datenmodell direkt im Editor', 'ai'],
      ['Ändern', 'per Klick oder per Chat', 'human'],
      ['Anwendung läuft', 'eine normale Ninox-Anwendung', 'neutral'],
    ] },
    compare: { title: 'Warum Chat allein nicht reicht', beforeTitle: 'Nur im Chat', afterTitle: 'Im echten Editor',
      before: ['Datenmodell als lange Textausgabe', 'Änderungen in Prosa beschreiben', 'Erstes Ergebnis daneben: nächste Chat-Runde'],
      after: ['Tabellen als Karten, Felder anklickbar', 'Ändern per Klick oder per Chat', 'Das erste Ergebnis ist der normale Start'] },
  },
  'ai-assistant-viewer-services': {
    quote: { text: 'Hand over the blank page. Not the decision.', by: 'The principle behind the assistant' },
    flow: { title: 'How a reply is written today', kind: 'flow', nodes: [
      ['A request arrives', 'by post, email or message', 'neutral'],
      ['A person reads it', 'and decides whether the assistant helps', 'human'],
      ['The assistant drafts', 'following the service handbook, in the house voice', 'ai'],
      ['A person checks', 'and adapts the draft', 'human'],
      ['A person sends', 'every single reply', 'human'],
    ] },
    compare: { title: 'Before and after', beforeTitle: 'Before', afterTitle: 'Today',
      before: ['Every reply from a blank page', 'The tone depends on who writes', 'Temporary staff take long to find it', 'Complex letters: hours'],
      after: ['Drafts follow the handbook’s wording', 'Temporary staff write in the house voice from day one', 'Complex letters: minutes', 'Every reply still checked by a person'] },
  },
  'building-in-house-with-ai': {
    quote: { text: 'Showing, not ordering.', by: 'What made the rollout work' },
    flow: { title: 'How the team moved forward, step by step', kind: 'timeline', nodes: [
      ['2025', 'AI as better research, with Gemini and Copilot', 'neutral'],
      ['Spring 2026', 'Claude introduced, first prototypes in the team', 'ai'],
      ['Summer 2026', 'Individual applications and internal tools built in-house', 'human'],
    ] },
    compare: { title: 'Before and today', beforeTitle: 'Before', afterTitle: 'Today',
      before: ['Almost every change through an external agency', 'Describe, commission, wait', 'Product managers and owners cannot build themselves'],
      after: ['Much of the backend in-house', 'First interfaces in-house', 'Fixed rules for formats, approvals and sources', 'One or two internal champions'] },
  },
  'ninox-ai-onboarding': {
    quote: { text: 'Show the result first. Then let people edit it.', by: 'The design principle of the onboarding' },
    flow: { title: 'From a sentence to an application', kind: 'flow', nodes: [
      ['Describe', 'one sentence in plain language', 'human'],
      ['AI generates', 'the data model directly in the editor', 'ai'],
      ['User changes it', 'by clicking or by chat', 'human'],
      ['Application runs', 'a normal Ninox application', 'neutral'],
    ] },
    compare: { title: 'Why not chat alone', beforeTitle: 'Chat only', afterTitle: 'In the real editor',
      before: ['Data model as a long text output', 'Describing changes in prose', 'First result off: another chat round'],
      after: ['Tables as cards, fields clickable', 'Change by click or by chat', 'The first result is the normal start'] },
  },
};
