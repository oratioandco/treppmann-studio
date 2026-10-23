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
    title: 'Wie ein Produktteam ohne Entwicklungsabteilung selbst baut',
    lead: 'Bei Bibel TV hing fast jede Änderung an einer externen Agentur, und selbst eine kleine dauerte Wochen. Heute bauen die Produktverantwortlichen einen großen Teil der Technik hinter den Apps selbst, mit KI.',
    description: 'Wie bei Bibel TV Product Manager und Product Owner mit KI selbst bauen: vorgemacht statt verordnet, mit Claude Code, Spec Kit, klaren Regeln und Begleitung an der eigenen Aufgabe.',
    object: 'hands',
    shape: 'circle',
    facts: [
      ['Organisation', 'Bibel TV, christlicher Fernsehsender mit Apps für iOS, Android, Web und Fernseher, ohne eigene Entwicklungsabteilung'],
      ['Ausgangslage', 'Jede Änderung lief über eine externe Agentur: spezifizieren, entscheiden, umsetzen, Fehler beheben, veröffentlichen. Selbst kleine Änderungen dauerten Wochen.'],
      ['Was ich gemacht habe', 'Mit KI selbst gebaut und gezeigt, was geht. Mit dem Team Claude Code, Spec Kit, Zugriff auf die interne Dokumentation und feste Regeln eingeführt. Einzeln begleitet.'],
      ['Zeitraum', '2025 KI als bessere Recherche, Frühjahr 2026 Claude im Team, seit Sommer 2026 eigene Entwicklung im Haus'],
      ['Ergebnis', 'Ein großer Teil des Backends und erste Oberflächen entstehen im Haus. Die Neuentwicklung der App hat die Geschäftsführung mir übertragen, ohne Agentur.'],
      ['Drei Erkenntnisse', 'Vormachen statt verordnen. Mit einem internen Werkzeug anfangen. Zweifel an der Codequalität mit Regeln beantworten.'],
    ],
    opening: {
      title: 'Eine kleine Änderung, viele Wochen',
      paras: [
        'Im Produktteam gibt es eine Idee. Eine kleine Änderung, nichts Großes.',
        'Zuerst wird sie genau beschrieben, rund drei Wochen innerhalb eines Sprints, also eines festen Arbeitsabschnitts. Dann wird sie geprüft und entschieden. Im besten Fall kommt sie danach in einen dreiwöchigen Umsetzungssprint bei der Agentur. Meist folgt ein weiterer Sprint, um Fehler zu beheben. Dann geht sie in die Veröffentlichung, mit festen Versionen.',
        'Bis jemand die kleine Änderung in der App sieht, vergehen viele Wochen.',
      ],
    },
    nut: 'Das ist kein Vorwurf an die Agentur. So arbeiten viele Unternehmen ohne eigene Entwicklung. Bei Bibel TV bauen die Produktverantwortlichen heute einen großen Teil des Backends selbst, mit KI. Lehrreich ist, wie es dazu kam: nicht per Anordnung, sondern weil es jemand vorgemacht hat, mit klaren Regeln und mit Begleitung an der eigenen Aufgabe.',
    situation: {
      title: 'Die Leute mit den Ideen konnten nicht bauen',
      nav: 'Ausgangslage',
      paras: [
        'Bibel TV bietet Apps für iOS, Android, Web und Fernseher an, hat aber keine eigene Entwicklungsabteilung. Fast alles lief über eine externe Agentur.',
        'Die Leute, die wissen, was gebraucht wird, sitzen im Haus: Product Manager und Product Owner. Sie konnten genau beschreiben, was sie brauchen. Bauen konnten sie es nicht.',
        '2025 nutzte das Team KI vor allem als bessere Suche. Gemini und Copilot waren schon da, also nahm man die.',
      ],
    },
    turn: {
      title: 'Erst zeigen, dann einführen',
      nav: 'Wendepunkt',
      paras: [
        'Statt eine Schulung anzusetzen, habe ich selbst gebaut: Prototypen in echtem Code, gegen echte Daten und Schnittstellen.',
        'Die Entwicklung baut heute direkt auf diesem Code auf. Das hat gezeigt, was möglich ist, besser als jede Präsentation. Und es hat Vertrauen geschaffen: Später hat die Geschäftsführung mir die Neuentwicklung der App übertragen, ohne Agentur. Gebaut habe ich sie selbst, mit KI.',
      ],
    },
    chapters: [
      {
        title: 'Erst Werkzeuge und Regeln, dann loslegen',
        nav: 'Werkzeuge',
        paras: [
          'Im Frühjahr 2026 habe ich mit dem Team Claude eingeführt, ein KI-Modell wie ChatGPT. Dazu kamen drei Werkzeuge: Claude Code, mit dem die KI direkt Software schreibt. Spec Kit, mit dem man zuerst festlegt, was gebaut werden soll. Und Schnittstellen, über die die KI die interne Dokumentation lesen kann. Diese Dokumentation hat das Team danach selbst erweitert und aufbereitet.',
          'Im Firmenkonto von Claude gelten feste Regeln, zum Beispiel für Formate, Freigaben und den Umgang mit Quellen. So arbeiten alle nach denselben Standards, statt jeder nach seinen eigenen.',
        ],
      },
      {
        title: 'Zweifel an der Codequalität sind berechtigt',
        nav: 'Zweifel',
        paras: [
          'Widerstand von der Agentur gab es kaum. Im Team aber gab es Zurückhaltung und klare Meinungen zur Qualität von Code, den eine KI schreibt.',
          'Überzeugt hat keine Debatte, sondern die Praxis. Je mehr wir KI genutzt haben, desto mehr haben mitgemacht. Viel geholfen hat Spec Kit: Damit wird erst festgelegt, was gebaut werden soll, bevor Code entsteht. Am meisten aber haben Einzelsitzungen gebracht, in denen wir gemeinsam an einer echten Aufgabe gebaut haben.',
        ],
      },
      {
        title: 'Klein anfangen: ein internes Werkzeug',
        nav: 'Erste Schritte',
        paras: [
          'Das Erste, was das Team selbst gebaut hat, waren im Frühjahr und Sommer 2026 Ergänzungen an einem internen Backend-Werkzeug. Später kam die komplette Neuentwicklung dieses Werkzeugs dazu.',
          'Ein internes Werkzeug ist ein guter Anfang. Die Menschen, die es nutzen, sitzen im Haus. Rückmeldungen kommen schnell, und ein Fehler trifft keine Zuschauerinnen und Zuschauer.',
          'Die Werkzeuge für automatisierte Tests und viele weitere interne Werkzeuge habe ich selbst gebaut.',
        ],
      },
    ],
    images: [
      { src: '/images/beispiele/bibeltv-prototyp.webp', alt: 'Zwei Bildschirme eines Android-Prototyps von Bibel TV mit echten Sendungen', caption: 'Prototyp in echtem Code, auf echten Bibel-TV-Inhalten. Die Entwicklung baut auf diesem Code auf.', width: 1200, height: 1227 },
    ],
    result: {
      title: 'Wo es heute steht',
      nav: 'Ergebnis',
      big: 'Ohne Agentur',
      bigLabel: 'hat die Geschäftsführung mir die Neuentwicklung der App übertragen. Das Vertrauen kam aus meiner bisherigen Arbeit.',
      items: [
        'Ein großer Teil des Backends und erste Teile der Oberflächen entstehen heute im Haus, gebaut von den Produktverantwortlichen.',
        'Im Team gibt es ein bis zwei interne Ansprechpersonen, die das Thema im Haus weitertragen.',
        'Die neue App ist fertig entwickelt und in der internen Prüfung. Veröffentlicht ist sie noch nicht.',
      ],
      note: 'Abgeschlossen ist die Umstellung nicht. Das Team arbeitet weiter daran, Schritt für Schritt.',
    },
    callback: {
      title: 'Die kleine Änderung heute',
      paras: [
        'Eine Idee aus dem Produktteam muss heute nicht mehr durch alle Sprints. Für interne Werkzeuge und einen großen Teil des Backends legt die verantwortliche Person fest, was gebraucht wird, und baut es selbst, mit KI und nach den gemeinsamen Regeln.',
        'Die Agentur bleibt. Für das, was sie wirklich besser kann.',
      ],
    },
    takeaways: {
      title: 'Was Sie daraus mitnehmen können',
      nav: 'Für Sie',
      items: [
        ['Machen Sie es vor, statt es anzuordnen.', 'Ein funktionierender Prototyp in echtem Code überzeugt mehr als jede Schulung. Wer im Haus selbst baut, zeigt, was möglich ist.'],
        ['Fangen Sie mit einem internen Werkzeug an.', 'Die Menschen, die es nutzen, sitzen im Haus, Rückmeldungen kommen schnell, und Fehler treffen keine Kunden. Größeres kommt danach.'],
        ['Beantworten Sie Zweifel an der Codequalität mit Regeln.', 'Erst festlegen, was gebaut wird, dann bauen. Feste Standards im Firmenkonto. Und Begleitung an echten Aufgaben statt Überzeugungsarbeit im Meeting.'],
      ],
      notFitLabel: 'Wann es nicht passt',
      notFit: 'Wenn Ihre Software sicherheitskritisch ist oder strengen Prüfpflichten unterliegt. Dann ersetzt Bauen im Fachbereich keine Architektur, IT-Sicherheit und Prüfung. Es kann dort Prototypen liefern, mehr nicht.',
    },
    questions: {
      title: 'Zum Weiterdenken',
      items: [
        'Wie lange dauert bei Ihnen eine kleine Änderung an Ihrer Software, von der Idee bis zum Einsatz?',
        'Wer in Ihrem Haus weiß genau, was gebraucht wird, und könnte es mit Begleitung selbst bauen?',
      ],
    },
    cta: {
      title: 'Warten Sie auch auf kleine Änderungen?',
      body: 'In 30 Minuten sprechen wir darüber, was Ihr Team selbst bauen könnte und wo ein Dienstleister die bessere Wahl bleibt. Kostenlos und ohne Verpflichtung.',
    },
  },
  {
    slug: 'ki-onboarding-ninox',
    label: 'Ninox · KI im Produkt',
    title: 'Wie Menschen ohne Datenbankwissen mit KI ihre eigene Anwendung bauen',
    lead: 'Ninox ist eine Plattform, mit der kleine und mittlere Unternehmen ihre eigenen Geschäftsanwendungen bauen, ohne zu programmieren. Die Hürde war das Datenmodell, also die Frage, welche Daten man in welchen Tabellen ablegt und wie sie zusammenhängen. Ich habe den Einstieg mit KI so gestaltet, dass KI über diese Hürde hilft und niemand die Kontrolle verliert.',
    description: 'Wie Ninox mit KI aus einer kurzen Beschreibung in Alltagssprache ein Datenmodell erzeugt, das man direkt im Editor ändert. Heute das Onboarding der KI-Beta.',
    object: 'blocks',
    shape: 'square',
    facts: [
      ['Organisation', 'Ninox, No-Code-Plattform für Geschäftsanwendungen kleiner und mittlerer Unternehmen'],
      ['Ausgangslage', 'Wer keine Datenbanken kennt, scheitert am Datenmodell: Tabellen, Feldtypen, Verknüpfungen.'],
      ['Was ich gemacht habe', 'Das KI-Onboarding mitgestaltet: Man beschreibt die eigene Arbeit, die KI schlägt das Datenmodell vor, und man ändert es direkt im Editor.'],
      ['Zeitraum', 'Freiberuflich, Sommer 2025'],
      ['Ergebnis', 'Direkt bearbeiten wurde zum Interaktionsprinzip, und das Onboarding zum Onboarding der inzwischen gestarteten KI-Beta.'],
      ['Drei Erkenntnisse', 'Das erste Ergebnis liegt daneben, also muss das Danach stimmen. Ergebnisse dort zeigen, wo man ohnehin arbeitet. Kein eigener KI-Modus.'],
    ],
    opening: {
      title: 'Die erste Frage ist die schwerste',
      paras: [
        'Wer mit Ninox anfängt, will meist etwas ganz Konkretes: eine Auftragsverwaltung, eine Projektliste, eine Fallakte.',
        'Und steht dann vor der ersten Frage: Welche Tabellen braucht das? Welche Felder, mit welchem Feldtyp? Und wie hängen Kunden, Aufträge und Rechnungen zusammen?',
        'Für viele ist das eine fremde Welt. Ein Datenmodell festzulegen, ist kein Begriff, den man aus dem Arbeitsalltag kennt.',
      ],
    },
    nut: 'Dass KI ein Datenmodell erzeugen kann, war gesetzt. Die eigentliche Frage war eine andere: Was passiert danach, wenn jemand ohne Datenbankwissen vor dem Ergebnis sitzt? Diese Frage stellt sich bei fast jeder KI-Funktion in eigener Software. Und die Antwort entscheidet, ob Menschen sie nutzen.',
    situation: {
      title: 'Leicht ist relativ',
      nav: 'Ausgangslage',
      paras: [
        'Mit Ninox bauen Kanzleien, Bauunternehmen, Handwerksbetriebe und Sachverständige ihre eigenen Anwendungen. Sobald ein Datenmodell steht, erzeugt Ninox die Oberflächen fast von selbst.',
        'Wer Datenbanken kennt, schätzt, wie einfach das ist. Wer sie nicht kennt, weiß nicht einmal, dass es viel leichter ist, als eine Datenbank von Hand zu programmieren. Für diese Menschen war schon der erste Schritt zu viel: Tabellen anlegen, Feldtypen wählen, Verknüpfungen bauen. Sie kamen nicht weiter oder holten sich Hilfe von außen.',
        'Die Idee: Man beschreibt die eigene Arbeit in Alltagssprache, und KI erzeugt daraus das Datenmodell.',
      ],
    },
    turn: {
      title: 'Das erste Ergebnis liegt fast immer daneben',
      nav: 'Wendepunkt',
      paras: [
        'Aus frühen eigenen Tests und weil ich Ninox kannte, wusste ich: Die meisten beschreiben ihre Arbeit kurz, nicht ausführlich. Der erste Vorschlag der KI wird also selten ganz stimmen. Oder man sieht ihn und merkt erst dann, dass man mehr braucht oder etwas leicht anderes.',
        'Das ist kein Fehler, das ist der normale Start. Deshalb kommt es weniger auf den ersten Vorschlag an als auf das, was danach passiert.',
      ],
    },
    chapters: [
      {
        title: 'Chat allein reicht nicht',
        nav: 'Chat',
        paras: [
          'Ein realistisches Datenmodell hat acht bis zwölf Tabellen. Als Text im Chat ist das unlesbar. Und Änderungen per Chat fühlen sich an wie Programmieren in Prosa.',
          'Wer ohnehin nicht weiß, was ein Feldtyp ist, soll ihn nicht auch noch in Worten beschreiben müssen.',
        ],
      },
      {
        title: 'Das Ergebnis landet im echten Editor',
        nav: 'Editor',
        paras: [
          'Die KI erzeugt das Datenmodell direkt im Editor, den man auch sonst verwendet. Tabellen erscheinen als Karten, Felder sind anklickbar.',
          'Geändert wird auf zwei Wegen: per Klick direkt in der Karte oder per Chat, je nachdem, was leichter ist. Vorschläge für naheliegende Ergänzungen helfen weiter.',
        ],
      },
      {
        title: 'Kein eigener KI-Modus',
        nav: 'Danach',
        paras: [
          'Ist das Datenmodell fertig, ist es einfach eine Ninox-Anwendung. Man arbeitet im selben Werkzeug weiter, ohne Umweg und ohne etwas Neues lernen zu müssen.',
          'Die Technik, mit der die KI das Datenmodell erzeugt, haben andere entwickelt. Mein Teil war alles, was danach kommt: das Ergebnis lesen, prüfen und ändern.',
        ],
      },
    ],
    images: [
      { src: '/images/beispiele/ninox-zwei-wege.webp', alt: 'Ninox KI-Onboarding: links der Chat, rechts das erzeugte Datenmodell mit bearbeitbaren Tabellenkarten', caption: 'Zwei Wege nebeneinander: links Änderungen per Chat, rechts direkt in den Tabellenkarten.', width: 1600, height: 997 },
      { src: '/images/beispiele/ninox-im-editor.webp', alt: 'Das von der KI erzeugte Datenmodell als normale Ninox-Anwendung im Editor', caption: 'Danach ist es eine normale Ninox-Anwendung, im selben Editor.', width: 1600, height: 1002 },
    ],
    result: {
      title: 'Was daraus wurde',
      nav: 'Ergebnis',
      big: 'Direkt bearbeiten',
      bigLabel: 'wurde zum Interaktionsprinzip. Das Onboarding ist heute das Onboarding der inzwischen gestarteten KI-Beta von Ninox.',
      items: [
        'Niemand muss erst lernen, wie man mit einer KI spricht. Man ändert, was man sieht.',
        'Das erste, unvollständige Ergebnis ist kein Fehler, sondern der normale Start.',
        'Ich habe nicht die gesamte Beta verantwortet, sondern das Onboarding mitgestaltet.',
      ],
    },
    callback: {
      title: 'Die erste Frage heute',
      paras: [
        'Wer heute mit der KI-Beta anfängt, muss nicht mehr wissen, welche Tabellen und Feldtypen nötig sind. Man beschreibt kurz die eigene Arbeit. Dann liegt ein Vorschlag im Editor, und man ändert ihn, bis er passt.',
      ],
    },
    takeaways: {
      title: 'Was Sie daraus mitnehmen können',
      nav: 'Für Sie',
      items: [
        ['Planen Sie für das zweite Ergebnis, nicht für das erste.', 'Menschen beschreiben kurz. Der erste Vorschlag einer KI liegt deshalb oft daneben. Entscheidend ist, wie leicht man ihn korrigiert.'],
        ['Zeigen Sie Ergebnisse dort, wo man ohnehin arbeitet.', 'Nicht als Text im Chat, sondern im Werkzeug, das Ihre Leute kennen. Dort sehen sie, was nicht stimmt, und können es direkt ändern.'],
        ['Bauen Sie keinen eigenen KI-Modus.', 'Was die KI erzeugt, sollte danach ganz normal weiterverwendbar sein. Sonst entsteht eine zweite Welt, die niemand pflegt.'],
      ],
      notFitLabel: 'Wann es nicht passt',
      notFit: 'Wenn das Ergebnis kaum Struktur hat, etwa ein kurzer Text oder eine Antwort auf eine Frage. Dann ist ein Chat oft genau richtig. Die Arbeit im Editor lohnt sich, wo das Ergebnis aus vielen zusammenhängenden Teilen besteht.',
    },
    questions: {
      title: 'Zum Weiterdenken',
      items: [
        'Wo in Ihrer Software oder Ihren Abläufen scheitern Menschen am ersten Schritt, weil sie ein Fachwissen bräuchten, das sie nicht haben?',
        'Wenn eine KI dort einen ersten Vorschlag macht: Wie leicht könnten Ihre Leute ihn ändern?',
      ],
    },
    cta: {
      title: 'Planen Sie eine KI-Funktion in Ihrer eigenen Software?',
      body: 'In 30 Minuten sprechen wir darüber, wo eine KI-Funktion Ihren Leuten den ersten Schritt abnimmt und wie sie danach die Kontrolle behalten. Kostenlos und ohne Verpflichtung.',
    },
  },
  {
    slug: 'spendenbriefe-mit-ki',
    label: 'Spendenbriefe · Analyse und KI-Werkzeug',
    title: 'Warum manche Spendenbriefe viel mehr bringen als andere, und wie KI beim nächsten hilft',
    lead: 'Eine spendenfinanzierte Organisation wollte wissen, warum manche Spendenbriefe viel mehr bringen als andere. Statt einer KI, die Briefe schreibt, entstand ein Werkzeug, das beim Schreiben fragt und prüft.',
    description: 'Wie eine spendenfinanzierte Organisation ihre Spendenbriefe fair vergleicht, die echten Ausreißer findet und daraus ein KI-Werkzeug macht, das fragt und prüft, statt in einem Zug zu schreiben.',
    object: 'envelope',
    shape: 'circle',
    facts: [
      ['Organisation', 'Spendenfinanzierte gemeinnützige Organisation (anonymisiert)'],
      ['Ausgangslage', 'Spendenbriefe mehrmals im Jahr. Manche brachten weit mehr als andere, und niemand wusste genau, warum.'],
      ['Was ich gemacht habe', 'Mehrere Jahre Aussendungen ausgewertet, die echten Ausreißer gefunden, die Muster gegen allgemeine Fundraising-Regeln geprüft und daraus ein KI-Werkzeug gebaut, das durch den Brief führt.'],
      ['Ergebnis', 'Der erste Brief, der mit dem Werkzeug entstand, war ein Erfolg.'],
      ['Drei Erkenntnisse', 'Erst fair vergleichen, dann urteilen. Nur Muster übernehmen, die auch allgemeinen Regeln standhalten. Die KI fragen und prüfen lassen, statt sie in einem Zug schreiben zu lassen.'],
    ],
    opening: {
      title: 'Im Haus galt eine Regel: Der Monat entscheidet',
      paras: [
        'Spendenbriefe haben eine Saison. Manche Monate bringen im Schnitt deutlich mehr als andere. Im Haus galt deshalb der Monat als der wichtigste Grund, warum ein Brief gut oder schlecht lief.',
        'Nur erklärte das nicht alles. Einige Briefe brachten weit mehr als andere, und niemand konnte genau sagen, warum. Jeder neue Brief begann trotzdem wieder beim leeren Blatt.',
      ],
    },
    nut: 'Das ist kein Problem nur von Spendenorganisationen. Überall, wo ein Betrieb regelmäßig dieselbe Art Text verschickt, liegt in den alten Ergebnissen Wissen, das niemand ausgewertet hat: bei Angeboten, Mailings, Newslettern, Vertriebsanschreiben. Und überall ist die Versuchung groß, einer KI einfach zu sagen: Schreib uns so einen Brief.',
    situation: {
      title: 'Erst fair vergleichen',
      nav: 'Vergleich',
      paras: [
        'Bevor man fragt, was einen guten Brief ausmacht, muss klar sein, welche Briefe wirklich gut waren. Das ist weniger selbstverständlich, als es klingt.',
        'Ich habe die Ergebnisse mehrerer Jahre zuerst vergleichbar gemacht: Ertrag pro tausend verschickte Briefe statt Gesamtsumme, damit eine große und eine kleine Aussendung nebeneinander stehen können. Dann habe ich die Saison herausgerechnet. Jeder Brief wurde nicht mehr mit allen anderen verglichen, sondern mit dem Durchschnitt seines eigenen Monats.',
      ],
    },
    turn: {
      title: 'Der Monat setzt die Basis. Der Brief entscheidet.',
      nav: 'Wendepunkt',
      paras: [
        'Damit kippte das Bild. In den meisten Monaten gab es Briefe weit über und weit unter dem eigenen Durchschnitt, im selben Monat. Der Monat erklärte das Niveau. Den Unterschied machte der Text.',
        'Aus dem einen Topf „gute und schlechte Briefe“ wurden drei Gruppen: Briefe im erwartbaren Rahmen, echte Ausreißer nach oben und echte Ausreißer nach unten. Erst jetzt lohnte sich die Frage, was die Ausreißer gemeinsam hatten.',
      ],
    },
    chapters: [
      {
        title: 'Muster nur übernehmen, wenn sie mehr sind als Zufall',
        nav: 'Muster',
        paras: [
          'Ich habe die starken und die schwachen Briefe nebeneinandergelegt: Wie beginnen sie? Wie konkret ist die Bitte? Welche Rolle spielt der Nachsatz? Dazu kamen die Stilanalyse und das Schreibhandbuch, das es im Haus schon gab.',
          'Dann der wichtigste Schritt: Jedes gefundene Muster habe ich gegen allgemein bekannte Regeln für Spendenbriefe geprüft. Vieles deckte sich, etwa dass eine konkrete, greifbare Bitte besser wirkt als eine abstrakte Mission. Ins Werkzeug kam nur, was beides bestanden hat: die eigenen Zahlen und das allgemeine Fachwissen. Die Muster, die nur für diese Organisation gelten, bleiben bei ihr.',
        ],
      },
      {
        title: 'Ein Werkzeug, das fragt, bevor es schreibt',
        nav: 'Werkzeug',
        paras: [
          'Aus Analyse, Regeln und Schreibhandbuch habe ich ein KI-Werkzeug gebaut, auf Basis von Claude, einem KI-Modell wie ChatGPT. Es schreibt den Brief nicht in einem Zug. Es fragt zuerst: Was ist der Anlass? Für wen ist der Brief? Welches konkrete Vorhaben soll er nennen? Dann führt es Schritt für Schritt durch den Aufbau und prüft den Entwurf gegen die Kriterien, bevor es weitergeht.',
          'Das ist bewusst langsamer als ein Knopf „Brief erstellen“. Der häufigste Fehler von KI-Texten ist ein Entwurf, der gut klingt, aber genau das Konkrete verfehlt, das nur jemand im Haus weiß. Die Fragen holen dieses Wissen ab. Die Prüfungen sorgen dafür, dass die Erkenntnisse aus der Analyse im Brief ankommen. Was verschickt wird, entscheidet weiter ein Mensch.',
        ],
      },
    ],
    images: [
      { src: '/images/beispiele/spendenbriefe-illustration.svg', alt: 'Illustration mit erfundenen Werten: Punkte je Brief über und unter einer Null-Linie, gruppiert nach Monat A bis F. In jedem Monat liegen einzelne Briefe weit über und weit unter dem Monatsdurchschnitt.', caption: 'So sah das Bild aus, nachdem die Saison herausgerechnet war. Die Werte sind erfunden; die echten Zahlen bleiben bei der Organisation.', width: 1200, height: 700 },
    ],
    result: {
      title: 'Der erste Brief',
      nav: 'Ergebnis',
      big: 'Ein Erfolg',
      bigLabel: 'war gleich der erste Spendenbrief, der mit dem Werkzeug entstand.',
      items: [
        'Die Organisation weiß jetzt, warum ein Brief wirkt, und dieses Wissen wird bei jedem neuen Brief abgefragt, statt in einzelnen Köpfen zu stecken.',
        'Das Werkzeug fragt, führt und prüft. Der Mensch entscheidet.',
      ],
      note: 'Ob das Werkzeug über viele Aussendungen trägt, zeigt sich mit der Zeit. Zahlen dazu veröffentliche ich nicht.',
    },
    callback: {
      title: 'Zurück zur Regel',
      paras: [
        'Der Monat zählt weiterhin. Er setzt die Basis, mit der man einen Brief fair beurteilt. Aber ob ein Brief gut wird, entscheidet sich beim Schreiben. Genau dort hilft jetzt das Werkzeug.',
      ],
    },
    takeaways: {
      title: 'Was Sie daraus mitnehmen können',
      nav: 'Für Sie',
      items: [
        ['Vergleichen Sie fair, bevor Sie urteilen.', 'Rechnen Sie Größe und Saison heraus und messen Sie jedes Ergebnis an seinem eigenen Umfeld. Sonst halten Sie den Kalender für eine Erkenntnis.'],
        ['Übernehmen Sie nur Muster, die zwei Prüfungen bestehen.', 'Ihre eigenen Zahlen und das allgemeine Fachwissen. Was nur in einer der beiden Quellen auftaucht, ist oft Zufall.'],
        ['Lassen Sie die KI fragen und prüfen, nicht in einem Zug schreiben.', 'Das Wissen über den konkreten Anlass liegt bei Ihren Leuten. Ein gutes Werkzeug holt es ab, bevor es formuliert.'],
      ],
      notFitLabel: 'Wann es nicht passt',
      notFit: 'Wenn Sie nur eine Handvoll vergleichbarer Aussendungen haben. Dann sind die Unterschiede zu klein, um echte Muster von Zufall zu trennen. Beginnen Sie dann mit klaren Schreibregeln und sammeln Sie Ergebnisse.',
    },
    questions: {
      title: 'Zum Weiterdenken',
      items: [
        'Welche Texte verschickt Ihr Betrieb regelmäßig, deren Ergebnisse Sie kennen, aber nie verglichen haben?',
        'Woran würden Sie heute erkennen, ob ein Angebot oder Mailing wegen des Textes gut lief oder wegen des Zeitpunkts?',
      ],
    },
    cta: {
      title: 'Stecken in Ihren alten Zahlen auch Muster?',
      body: 'In 30 Minuten sprechen wir darüber, welche Ihrer Texte sich auswerten lassen und ob daraus ein Werkzeug für Ihr Team werden kann. Kostenlos und ohne Verpflichtung.',
    },
  },
];

// English versions: same facts, same order. `pair` is the slug of the other language.
export const caseStudiesEn: CaseStudy[] = [
  {
    slug: 'ai-assistant-viewer-services',
    label: 'Bibel TV · Viewer services',
    title: 'How a viewer services team adopted AI without anyone being forced to',
    lead: 'Much of Bibel TV’s viewer mail still arrives on paper. Today an AI assistant writes the first draft, in the house voice. Reading, deciding, and sending stay with people.',
    description: 'How Bibel TV introduced an AI assistant in viewer services: voluntary, connected to no inbox, with the service handbook as the standard. Even complex letters in minutes instead of hours.',
    object: 'letters',
    shape: 'arch',
    facts: [
      ['Organisation', 'Bibel TV, a Christian broadcaster moving from linear TV to apps and streaming'],
      ['Starting point', 'Personal mail, much of it on paper. Every reply started from a blank page, following the service handbook.'],
      ['What I did', 'Built an AI assistant that drafts replies from the handbook. Operated by hand, connected to no inbox.'],
      ['Timeline', 'Built in autumn 2025, introduced voluntarily with a trial week and one-to-one sessions. Today part of everyday work across the team.'],
      ['Result', 'Even complex letters are answered in minutes instead of hours. Part-time and temporary staff hit the house voice from the start, not after weeks of onboarding.'],
      ['Three takeaways', 'Hand over the draft, not the decision. Make the handbook you already have the standard. Introduce it voluntarily, and test it on the hardest case.'],
    ],
    opening: {
      title: 'Most of the mail here still arrives on paper',
      paras: [
        'It comes as letters and postcards, handwritten or typed.',
        'Viewers say thank you for a programme and write about what it means to them. They ask about programmes, and about books or materials mentioned in them. And they criticise content, some with their opinion, some with theological arguments.',
        'Then a complaint arrives: carefully argued, with many points at once. Someone in viewer services reads it.',
        'The reply has to address every point, in the house voice and with the wording of the service handbook. From a blank page, that takes hours.',
      ],
    },
    nut: 'Today an AI assistant writes the first draft at Bibel TV. That alone wouldn’t be a story; almost every AI tool writes drafts now. What’s worth learning from is how the assistant got into the team: nobody had to use it, it’s connected to no inbox, and its standard already existed. That carries over to almost any business where a team writes lots of similar, but never identical, texts.',
    situation: {
      title: 'Personal mail doesn’t do autopilot',
      nav: 'Starting point',
      paras: [
        'Bibel TV is a Christian broadcaster moving from linear TV to apps and streaming. Viewer services answers letters, emails, and messages. Internal guidelines set out what to answer, what not to, and how far to engage with contentious topics.',
        'The tone of a reply depended on who was writing it. Temporary staff took a long time to get it right. And a reply that sounds wrong hits a person, not a case number.',
        'So with the head of the department, I settled the goal first: writing should get easier, deciding should not. A person stays responsible for what a reply says.',
        'On top of that came the uncertainty that almost any new way of working brings, with digitisation just as much as with AI now. Behind it is the stress of change: having to learn something new, wondering whether you can learn it well, all the way to worrying about your job. AI adds one more question: which work should stay with people, and which shouldn’t?',
        'We met all of that here too. Two people on the team didn’t want AI at first. One objection: a reply to a viewer needs a human tone. And the phone hotline should never be replaced by AI anyway.',
      ],
    },
    turn: {
      title: 'An assistant connected to nothing',
      nav: 'Turning point',
      paras: [
        'When people think of AI in customer service, they usually think of automation first: connect the inbox, let it read along, send replies. That wouldn’t have fit here. Most of the mail arrives on paper.',
        'So the assistant is deliberately connected to nothing. A person reads the letter, decides whether the assistant should help, and types in the content. They edit the draft, copy it into Word, print it, and put it in the outbox. With emails it’s more direct.',
        'That sounds like a detour. It’s the actual safeguard. Before the assistant sees a letter, a person has read it. Whether and how to reply is always a person’s call. Not replying at all remains an option.',
      ],
    },
    chapters: [
      {
        title: 'The handbook already existed. It became the standard.',
        nav: 'Handbook',
        paras: [
          'I built the assistant in September and October 2025. I didn’t have to invent its standard: viewer services had long written down what a good reply looks like. The service handbook holds the wording, the formatting, and the standard phrases. That is exactly what the assistant gets. When the handbook changes, the drafts change.',
          'No model training and no custom development were needed. The assistant runs on an existing AI platform and gets the handbook as its basis. Many businesses have written down their standard too. Just not for an AI.',
        ],
      },
      {
        title: 'The limits are in the instructions. A person does the checking.',
        nav: 'Limits',
        paras: [
          'The assistant has a list of topics it doesn’t advise on: no medical, legal, or financial advice, no political or denominational judgements. And no missionary language, because the broadcaster wants to stay objective and ecumenical. If the input isn’t a viewer enquiry at all, the assistant writes no draft.',
          'To be honest: that list is an instruction, not a technical lock. Nothing checks the finished draft automatically. That’s why a person reads every draft before it becomes a reply.',
        ],
      },
      {
        title: 'Introduced voluntarily, won over by the hardest case',
        nav: 'Rollout',
        paras: [
          'I presented the assistant to the team and ran the introduction myself. The team lead encouraged people; nobody was required to use it. Whoever wanted to tried it for a week. Then came one-to-one sessions on people’s own cases.',
          'What tipped it was a letter like the one at the start. One of the two people who didn’t want AI tried the assistant on exactly that kind of complaint: carefully argued, with many points at once. The draft addressed every point, in the tone of the handbook and the house. The feedback afterwards: by hand, that would have taken hours at least. Since then, this person has used the assistant regularly.',
          'The second person was sceptical of AI in general. Later they told me they now use the assistant regularly too. Looking back, both saw it as a tool that leaves them in control.',
          'This is where many rollouts tip over: you demo a tool on an easy example and wonder why nobody uses it day to day. Your own hardest case is the more honest test.',
        ],
      },
    ],
    result: {
      title: 'What changed',
      nav: 'Result',
      big: 'Minutes, not hours',
      bigLabel: 'even for complex letters with many points at once, because the AI gives an immediate starting point',
      items: [
        'Many on the team work part-time. New colleagues used to take weeks, sometimes months, to find the Bibel TV voice. Today they reply in that voice from the start.',
        'In 2026, part of the team used the assistant regularly at first. Today it’s part of everyday work across the team, even if not every letter is written with it.',
        'Both people who didn’t want AI at first now use it regularly.',
        'Every reply is still read, adjusted, and sent by a person.',
      ],
      note: 'The times come from the team’s experience, not from timing each letter.',
    },
    callback: {
      title: 'The letter still arrives by post',
      paras: [
        'Someone opens it and reads it, as before. What has changed is the page after that. It’s no longer blank.',
        'On it is a draft that addresses every point, with the sentences from the handbook. The person adjusts it, prints it, and puts it in the outbox. For a letter with many points, that now takes minutes.',
      ],
    },
    takeaways: {
      title: 'What you can take from this',
      nav: 'For you',
      items: [
        ['Hand over the draft, not the decision.', 'Decide who reads before and who sends after. Only when you can name both is the frame clear.'],
        ['Make the rules you already have the standard.', 'Handbook, text modules, template letters: whatever is already written down is the best context for an AI. Check first whether that document exists in your company.'],
        ['Introduce it voluntarily, and test it on the hardest case.', 'A week to try it out, then one-to-one sessions on people’s own examples. At Bibel TV, both people who didn’t want AI at first now use the assistant regularly.'],
      ],
      notFitLabel: 'When it doesn’t fit',
      notFit: 'If you want to answer lots of messages fully automatically, without anyone reading them first. Or if certain content must provably never appear in a reply. Then a list in the instructions isn’t enough, and you need an additional check.',
    },
    questions: {
      title: 'Something to think about',
      items: [
        'Where does your team write lots of similar, but never identical, texts today – and who decides what goes out?',
        'Which document describes what a good reply sounds like in your company? And when did someone last open it?',
      ],
    },
    cta: {
      title: 'Do you have a similar process?',
      body: 'In 30 minutes we talk about where the first draft gets written in your company and whether an assistant could help there. Free and without obligation.',
    },
  },
  {
    slug: 'building-in-house-with-ai',
    label: 'Bibel TV · Product development',
    title: 'How a product team without developers builds its own software',
    lead: 'At Bibel TV, almost every change depended on an external agency, and even a small one took weeks. Today the product managers and owners build a large part of the technology behind the apps themselves, with AI.',
    description: 'How product managers and product owners at Bibel TV build with AI: shown rather than mandated, with Claude Code, Spec Kit, clear rules, and one-to-one guidance on their own tasks.',
    object: 'hands',
    shape: 'circle',
    facts: [
      ['Organisation', 'Bibel TV, a Christian broadcaster with apps for iOS, Android, web, and TV, and no development department of its own'],
      ['Starting point', 'Every change went through an external agency: spec, decide, build, fix, release. Even small changes took weeks.'],
      ['What I did', 'Built with AI myself and showed what was possible. Introduced Claude Code, Spec Kit, access to internal documentation, and firm rules with the team. Coached people one to one.'],
      ['Timeline', '2025 AI as a better search, spring 2026 Claude in the team, since summer 2026 in-house development'],
      ['Result', 'A large part of the backend and the first interfaces are built in-house. Leadership gave me the rebuild of the app, without the agency.'],
      ['Three takeaways', 'Show it rather than mandate it. Start with an internal tool. Answer doubts about code quality with rules.'],
    ],
    opening: {
      title: 'A small change, many weeks',
      paras: [
        'Someone on the product team has an idea. A small change, nothing big.',
        'First it gets written up in detail, about three weeks within a sprint, a fixed block of work. Then it is reviewed and decided. At best it then goes into a three-week build sprint at the agency. Usually another sprint follows to fix defects. Then it joins the release pipeline, with versioned releases.',
        'By the time anyone sees the small change in the app, many weeks have passed.',
      ],
    },
    nut: 'That’s no criticism of the agency. It’s how many companies without their own developers work. At Bibel TV, the product managers and owners now build a large part of the backend themselves, with AI. What’s worth learning from is how that happened: not by mandate, but because someone showed it could be done, with clear rules and guidance on people’s own tasks.',
    situation: {
      title: 'The people with the ideas couldn’t build',
      nav: 'Starting point',
      paras: [
        'Bibel TV offers apps for iOS, Android, web, and TV, but has no development department of its own. Almost everything ran through an external agency.',
        'The people who know what’s needed work in-house: product managers and product owners. They could describe exactly what they needed. They couldn’t build it.',
        'In 2025 the team used AI mostly as a better search. Gemini and Copilot were already there, so that’s what people used.',
      ],
    },
    turn: {
      title: 'Show it first, then introduce it',
      nav: 'Turning point',
      paras: [
        'Instead of scheduling a training, I built things myself: prototypes in real code, against real data and interfaces.',
        'Development now builds directly on that code. It showed what was possible better than any presentation could. And it built trust: later, leadership gave me the rebuild of the app, without the agency. I built it myself, with AI.',
      ],
    },
    chapters: [
      {
        title: 'Tools and rules first, then go',
        nav: 'Tools',
        paras: [
          'In spring 2026 I introduced Claude, an AI model like ChatGPT, with the team. Three tools came with it: Claude Code, which lets the AI write software directly. Spec Kit, which pins down what should be built first. And interfaces that let the AI read the internal documentation. The team then extended and prepared that documentation themselves.',
          'Firm rules apply in the company’s Claude account, for example on formats, approvals, and how sources are used. That way everyone works to the same standards rather than their own.',
        ],
      },
      {
        title: 'Doubts about code quality are fair',
        nav: 'Doubts',
        paras: [
          'There was little resistance from the agency. Inside the team, though, there was hesitation and strong opinions about the quality of code an AI writes.',
          'What changed minds wasn’t a debate but practice. The more we used AI, the more people joined in. Spec Kit helped a lot: it pins down what should be built before any code gets written. But what helped most were one-to-one sessions where we built something together on a real task.',
        ],
      },
      {
        title: 'Start small: an internal tool',
        nav: 'First steps',
        paras: [
          'The first things the team built themselves, in spring and summer 2026, were additions to an internal backend tool. Later came a complete rebuild of that tool.',
          'An internal tool is a good place to start. The people who use it work in-house. Feedback comes fast, and a bug doesn’t hit any viewers.',
          'The tools for automated testing and many other internal tools I built myself.',
        ],
      },
    ],
    images: [
      { src: '/images/beispiele/bibeltv-prototyp.webp', alt: 'Two screens of an Android prototype for Bibel TV with real programmes', caption: 'Prototype in real code, on real Bibel TV content. Development builds on this code.', width: 1200, height: 1227 },
    ],
    result: {
      title: 'Where it stands today',
      nav: 'Result',
      big: 'No agency',
      bigLabel: 'Leadership gave me the rebuild of the app. The trust came from my earlier work.',
      items: [
        'A large part of the backend and the first parts of the interfaces are now built in-house, by the product managers and owners.',
        'The team has one or two internal go-to people who carry the topic forward.',
        'The new app is fully developed and in internal review. It hasn’t been released yet.',
      ],
      note: 'The shift isn’t finished. The team keeps working on it, step by step.',
    },
    callback: {
      title: 'The small change today',
      paras: [
        'An idea from the product team no longer has to go through every sprint. For internal tools and a large part of the backend, the person responsible pins down what’s needed and builds it themselves, with AI and the shared rules.',
        'The agency stays. For what it genuinely does better.',
      ],
    },
    takeaways: {
      title: 'What you can take from this',
      nav: 'For you',
      items: [
        ['Show it rather than mandate it.', 'A working prototype in real code convinces more than any training. Someone in-house who builds shows what’s possible.'],
        ['Start with an internal tool.', 'The people who use it work in-house, feedback comes fast, and mistakes don’t hit customers. Bigger things come after.'],
        ['Answer doubts about code quality with rules.', 'Decide what gets built before building it. Firm standards in the company account. And guidance on real tasks instead of persuasion in meetings.'],
      ],
      notFitLabel: 'When it doesn’t fit',
      notFit: 'If your software is safety-critical or subject to strict audit requirements. Then building in the business team doesn’t replace architecture, IT security, and review. There it can deliver prototypes, nothing more.',
    },
    questions: {
      title: 'Something to think about',
      items: [
        'How long does a small change to your software take today, from idea to use?',
        'Who in your company knows exactly what’s needed and could build it themselves with some guidance?',
      ],
    },
    cta: {
      title: 'Are you waiting on small changes too?',
      body: 'In 30 minutes we talk about what your team could build itself and where an external provider remains the better choice. Free and without obligation.',
    },
  },
  {
    slug: 'ninox-ai-onboarding',
    label: 'Ninox · AI in the product',
    title: 'How people without database skills build their own application with AI',
    lead: 'Ninox is a platform small and mid-sized companies use to build their own business applications without programming. The hurdle was the data model: which data goes into which tables, and how they connect. I designed the AI-assisted start so that AI helps people over that hurdle and nobody loses control.',
    description: 'How Ninox uses AI to turn a short plain-language description into a data model you change directly in the editor. Today the onboarding of the AI beta.',
    object: 'blocks',
    shape: 'square',
    facts: [
      ['Organisation', 'Ninox, a no-code platform for business applications at small and mid-sized companies'],
      ['Starting point', 'People who don’t know databases get stuck on the data model: tables, field types, relations.'],
      ['What I did', 'Co-designed the AI onboarding: you describe your work, AI proposes the data model, and you change it directly in the editor.'],
      ['Timeline', 'Freelance, summer 2025'],
      ['Result', 'Editing directly became the interaction model, and the onboarding became the onboarding of the now-launched AI beta.'],
      ['Three takeaways', 'The first result will be off, so what comes after has to work. Show results where people already work. No separate AI mode.'],
    ],
    opening: {
      title: 'The first question is the hardest',
      paras: [
        'People who start with Ninox usually want something very concrete: order management, a project list, a case file.',
        'And then they face the first question: Which tables does that need? Which fields, with which field type? And how do customers, orders, and invoices relate to each other?',
        'For many, that’s a foreign world. Defining a data model isn’t something you know from everyday work.',
      ],
    },
    nut: 'That AI could generate a data model was a given. The real question was a different one: what happens next, when someone without database knowledge is looking at the result? That question comes up with almost every AI feature in your own software. And the answer decides whether people use it.',
    situation: {
      title: 'Easy is relative',
      nav: 'Starting point',
      paras: [
        'Law firms, construction companies, trades businesses, and surveyors use Ninox to build their own applications. Once a data model exists, Ninox generates the interfaces almost by itself.',
        'People who know databases appreciate how easy that is. People who don’t, don’t even know it’s far easier than programming a database by hand. For them, the first step was already too much: creating tables, choosing field types, building relations. They got stuck or brought in outside help.',
        'The idea: you describe your work in plain language, and AI turns it into a data model.',
      ],
    },
    turn: {
      title: 'The first result is almost always off',
      nav: 'Turning point',
      paras: [
        'From my own early tests, and from knowing Ninox, I knew most people describe their work briefly, not at length. So the AI’s first proposal will rarely be quite right. Or you see it and only then realise you need more, or something slightly different.',
        'That isn’t a failure, it’s the normal start. Which is why the first proposal matters less than what happens after it.',
      ],
    },
    chapters: [
      {
        title: 'Chat alone isn’t enough',
        nav: 'Chat',
        paras: [
          'A realistic data model has eight to twelve tables. As text in a chat, that’s unreadable. And changing it by chat feels like programming in prose.',
          'Someone who doesn’t know what a field type is shouldn’t also have to describe one in words.',
        ],
      },
      {
        title: 'The result lands in the real editor',
        nav: 'Editor',
        paras: [
          'The AI creates the data model directly in the editor people use anyway. Tables appear as cards, fields are clickable.',
          'There are two ways to change it: with a click, right in the card, or by chat, whichever is easier. Suggestions for obvious additions help along the way.',
        ],
      },
      {
        title: 'No separate AI mode',
        nav: 'After',
        paras: [
          'Once the data model is done, it’s simply a Ninox application. You keep working in the same tool, with no detour and nothing new to learn.',
          'The technology the AI uses to generate the data model was built by others. My part was everything that comes after: reading, checking, and changing the result.',
        ],
      },
    ],
    images: [
      { src: '/images/beispiele/ninox-zwei-wege.webp', alt: 'Ninox AI onboarding: the chat on the left, the generated data model with editable table cards on the right', caption: 'Two paths side by side: changes by chat on the left, directly in the table cards on the right.', width: 1600, height: 997 },
      { src: '/images/beispiele/ninox-im-editor.webp', alt: 'The AI-generated data model as a normal Ninox application in the editor', caption: 'Afterwards it is a normal Ninox application, in the same editor.', width: 1600, height: 1002 },
    ],
    result: {
      title: 'What came of it',
      nav: 'Result',
      big: 'Edit directly',
      bigLabel: 'became the interaction model. The onboarding is now the onboarding of Ninox’s launched AI beta.',
      items: [
        'Nobody has to learn how to talk to an AI first. You change what you see.',
        'The first, incomplete result isn’t a failure but the normal start.',
        'I wasn’t responsible for the whole beta; I co-designed the onboarding.',
      ],
    },
    callback: {
      title: 'The first question today',
      paras: [
        'Anyone starting with the AI beta today no longer needs to know which tables and field types they need. You briefly describe your work. Then a proposal appears in the editor, and you change it until it fits.',
      ],
    },
    takeaways: {
      title: 'What you can take from this',
      nav: 'For you',
      items: [
        ['Plan for the second result, not the first.', 'People describe things briefly, so an AI’s first proposal is often off. What matters is how easily it can be corrected.'],
        ['Show results where people already work.', 'Not as text in a chat, but in the tool your people know. That’s where they see what’s wrong and can change it directly.'],
        ['Don’t build a separate AI mode.', 'Whatever the AI creates should be usable normally afterwards. Otherwise you get a second world nobody maintains.'],
      ],
      notFitLabel: 'When it doesn’t fit',
      notFit: 'When the result has little structure, such as a short text or an answer to a question. Then a chat is often exactly right. Working in the editor pays off where the result consists of many connected parts.',
    },
    questions: {
      title: 'Something to think about',
      items: [
        'Where in your software or processes do people fail at the first step because they’d need expertise they don’t have?',
        'If an AI made a first proposal there: how easily could your people change it?',
      ],
    },
    cta: {
      title: 'Planning an AI feature in your own software?',
      body: 'In 30 minutes we talk about where an AI feature could take the first step off your people’s hands, and how they keep control afterwards. Free and without obligation.',
    },
  },
  {
    slug: 'fundraising-letters-with-ai',
    label: 'Fundraising letters · Analysis and AI tool',
    title: 'Why some fundraising letters raise far more than others, and how AI helps with the next one',
    lead: 'A donor-funded organisation wanted to know why some fundraising letters raise far more than others. Instead of an AI that writes letters, the result was a tool that asks and checks while you write.',
    description: 'How a donor-funded organisation compares its fundraising letters fairly, finds the real outliers, and turns that into an AI tool that asks and checks instead of writing in one go.',
    object: 'envelope',
    shape: 'circle',
    facts: [
      ['Organisation', 'Donor-funded non-profit (anonymised)'],
      ['Starting point', 'Fundraising letters several times a year. Some raised far more than others, and nobody knew exactly why.'],
      ['What I did', 'Analysed several years of mailings, found the real outliers, checked the patterns against general fundraising practice, and built an AI tool that guides you through the letter.'],
      ['Result', 'The first letter written with the tool was a success.'],
      ['Three takeaways', 'Compare fairly before you judge. Only adopt patterns that also hold up against general practice. Let the AI ask and check instead of writing in one go.'],
    ],
    opening: {
      title: 'The rule in the house: the month decides',
      paras: [
        'Fundraising letters have a season. Some months raise clearly more on average than others. So in the organisation, the month was seen as the main reason a letter did well or badly.',
        'But that didn’t explain everything. Some letters raised far more than others, and nobody could say exactly why. And every new letter still started from a blank page.',
      ],
    },
    nut: 'That isn’t just a problem for fundraising organisations. Wherever a business regularly sends the same kind of text, its old results hold knowledge nobody has analysed: in quotes, mailings, newsletters, sales letters. And everywhere the temptation is to just tell an AI: write us one of those.',
    situation: {
      title: 'Compare fairly first',
      nav: 'Comparison',
      paras: [
        'Before you ask what makes a good letter, you need to know which letters really were good. That’s less obvious than it sounds.',
        'First I made several years of results comparable: return per thousand letters sent instead of totals, so a large and a small mailing can sit side by side. Then I took out the season. Each letter was no longer compared with all the others, but with the average of its own month.',
      ],
    },
    turn: {
      title: 'The month sets the baseline. The letter decides.',
      nav: 'Turning point',
      paras: [
        'That flipped the picture. In most months there were letters far above and far below their own average, in the same month. The month explained the level. The text made the difference.',
        'One pile of “good and bad letters” became three groups: letters within the expected range, real outliers above, and real outliers below. Only then was it worth asking what the outliers had in common.',
      ],
    },
    chapters: [
      {
        title: 'Only adopt patterns that are more than chance',
        nav: 'Patterns',
        paras: [
          'I put the strong and the weak letters side by side: How do they open? How concrete is the ask? What does the PS do? Add to that the voice analysis and the writing handbook the organisation already had.',
          'Then the most important step: I checked every pattern against widely known rules for fundraising letters. Much of it matched, for example that a concrete, tangible ask works better than an abstract mission. Only what passed both checks went into the tool: the organisation’s own numbers and general expertise. The patterns that only apply to this organisation stay with it.',
        ],
      },
      {
        title: 'A tool that asks before it writes',
        nav: 'Tool',
        paras: [
          'From the analysis, the rules, and the writing handbook, I built an AI tool on top of Claude, an AI model like ChatGPT. It doesn’t write the letter in one go. First it asks: What’s the occasion? Who is the letter for? Which concrete project should it name? Then it guides you through the structure step by step and checks the draft against the criteria before moving on.',
          'That’s deliberately slower than a “write letter” button. The most common failure of AI writing is a draft that sounds good but misses exactly the specifics only someone in-house knows. The questions collect that knowledge. The checks make sure the findings from the analysis actually reach the letter. A person still decides what gets sent.',
        ],
      },
    ],
    images: [
      { src: '/images/beispiele/fundraising-illustration.svg', alt: 'Illustration with invented values: one dot per letter above and below a zero line, grouped by month A to F. Every month has letters far above and far below its average.', caption: 'What the picture looked like once the season was taken out. The values are invented; the real figures stay with the organisation.', width: 1200, height: 700 },
    ],
    result: {
      title: 'The first letter',
      nav: 'Result',
      big: 'A success',
      bigLabel: 'was the very first fundraising letter written with the tool.',
      items: [
        'The organisation now knows why a letter works, and that knowledge is asked for with every new letter instead of living in a few people’s heads.',
        'The tool asks, guides, and checks. A person decides.',
      ],
      note: 'Whether the tool holds up across many mailings will show over time. I don’t publish figures on it.',
    },
    callback: {
      title: 'Back to the rule',
      paras: [
        'The month still counts. It sets the baseline you need to judge a letter fairly. But whether a letter turns out well is decided while it’s being written. That’s exactly where the tool now helps.',
      ],
    },
    takeaways: {
      title: 'What you can take from this',
      nav: 'For you',
      items: [
        ['Compare fairly before you judge.', 'Take out size and season, and measure every result against its own context. Otherwise you mistake the calendar for an insight.'],
        ['Only adopt patterns that pass two checks.', 'Your own numbers and general expertise. What shows up in only one of the two is often chance.'],
        ['Let the AI ask and check, not write in one go.', 'The knowledge about the specific occasion sits with your people. A good tool collects it before it writes.'],
      ],
      notFitLabel: 'When it doesn’t fit',
      notFit: 'If you only have a handful of comparable mailings. Then the differences are too small to separate real patterns from chance. Start with clear writing rules and collect results.',
    },
    questions: {
      title: 'Something to think about',
      items: [
        'Which texts does your business send regularly whose results you know but have never compared?',
        'How would you tell today whether a quote or mailing did well because of the text or because of the timing?',
      ],
    },
    cta: {
      title: 'Are there patterns in your old numbers too?',
      body: 'In 30 minutes we talk about which of your texts could be analysed and whether that could become a tool for your team. Free and without obligation.',
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
      before: ['Every reply from a blank page', 'The tone depends on who writes', 'New people need weeks or months to find it', 'Complex letters: hours'],
      after: ['Drafts follow the handbook’s wording', 'New people hit the house voice from the start', 'Complex letters: minutes', 'Every reply still checked by a person'] },
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
  'spendenbriefe-mit-ki': {
    quote: { text: 'Der Monat setzt die Basis. Der Brief entscheidet.', by: 'Was die Analyse gezeigt hat' },
    flow: { title: 'Vom Datensatz zum Werkzeug', kind: 'flow', nodes: [
      ['Vergleichbar machen', 'Ertrag pro tausend Briefe', 'neutral'],
      ['Saison herausrechnen', 'jeder Brief gegen seinen Monat', 'neutral'],
      ['Ausreißer finden', 'drei Gruppen statt einer', 'human'],
      ['Muster doppelt prüfen', 'eigene Zahlen und Fachwissen', 'human'],
      ['Werkzeug fragt und prüft', 'statt in einem Zug zu schreiben', 'ai'],
    ] },
    compare: { title: 'Vorher und heute', beforeTitle: 'Vorher', afterTitle: 'Heute',
      before: ['Der Monat gilt als Hauptgrund', 'Jeder Brief beginnt beim leeren Blatt', 'Wissen steckt in einzelnen Köpfen'],
      after: ['Jeder Brief fair gegen seinen Monat bewertet', 'Ein Werkzeug fragt und prüft beim Schreiben', 'Die Erkenntnisse werden bei jedem Brief abgefragt'] },
  },
  'fundraising-letters-with-ai': {
    quote: { text: 'The month sets the baseline. The letter decides.', by: 'What the analysis showed' },
    flow: { title: 'From data to tool', kind: 'flow', nodes: [
      ['Make comparable', 'return per thousand letters', 'neutral'],
      ['Take out the season', 'each letter against its month', 'neutral'],
      ['Find the outliers', 'three groups instead of one', 'human'],
      ['Check patterns twice', 'own numbers and expertise', 'human'],
      ['Tool asks and checks', 'instead of writing in one go', 'ai'],
    ] },
    compare: { title: 'Before and today', beforeTitle: 'Before', afterTitle: 'Today',
      before: ['The month seen as the main reason', 'Every letter starts from a blank page', 'Knowledge lives in a few heads'],
      after: ['Every letter judged fairly against its month', 'A tool asks and checks while you write', 'The findings are asked for with every letter'] },
  },
};
