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
    title: 'From depending on an agency to: we build it ourselves.',
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
    lead: 'Ninox is a no-code platform small and mid-sized companies use to build their own business applications. The hurdle was the data model. With the CEO and the technical co-founder I designed how AI removes that hurdle without users losing control.',
    description: 'How Ninox uses AI to turn a plain-language description into a data model users can edit directly. The basis of the public AI beta.',
    object: 'blocks',
    shape: 'square',
    facts: [
      ['Engagement', 'Freelance, summer 2025, with the CEO and technical co-founder'],
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
