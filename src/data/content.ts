import type { Locale, PlayTypeId } from "./quest";

export type PlayTypeContent = {
  title: string;
  meta: string;
  teaser: string;
  description: string;
  fit: string;
  experiences: string[];
  variantsLabel: string;
  variants: { title: string; description: string }[];
  imageAlt: string;
};

const shared = {
  de: {
    brand: "QUESTLAND",
    descriptor: "REAL-LIFE GAMES",
    nav: {
      questgiver: "Questgeber",
      gameTypes: "Spielarten",
      journey: "Ablauf",
      why: "Warum Questland?",
      start: "Abenteuer starten",
      open: "Menü öffnen",
      close: "Menü schließen"
    },
    hero: {
      eyebrow: "MISSION BRIEFING · QUESTLAND",
      title: "Videospiele im echten Leben.",
      accent: "Die Welt ist euer Spielfeld.",
      gameplay: "Jagt Monster. Erobert Flaggen. Löst Rätsel. Entlarvt den Verräter. Und schreibt euer eigenes Abenteuer.",
      support: "Questland verwandelt echte Orte in interaktive Abenteuer für Familien, Freunde, Schulen und Unternehmen.",
      find: "Quest suchen",
      start: "Abenteuer starten",
      objective: "Gemeinsam ans Ziel",
      terrain: "Outdoor & Indoor",
      status: "Spielbereit",
      tags: ["Teamplay", "Objectives", "Story", "Real World"]
    },
    finder: {
      kicker: "01 · DER QUESTGEBER",
      title: "Jede Gruppe ist anders. Finden wir das Abenteuer, das zu euch passt.",
      greeting: "Willkommen bei Questland.",
      start: "Questgeber fragen",
      completion: "Treffer! Ich habe passende Abenteuer für euch gefunden.",
      show: "Quests ansehen",
      back: "Zurück",
      next: "Weiter",
      selected: "Ausgewählt",
      profile: "Eure Auswahl",
      questions: [
        {
          id: "audience",
          text: "Für wen ist das Spiel?",
          options: [
            ["school", "Schule oder Camp"],
            ["event", "Unternehmen oder Event"],
            ["private", "Private Gruppe"]
          ]
        },
        {
          id: "ages",
          text: "Welche Altersgruppen spielen in eurer Gruppe mit?",
          hint: "Mehrfachauswahl möglich",
          options: [
            ["5-7", "5–7"],
            ["8-11", "8–11"],
            ["12-15", "12–15"],
            ["16+", "16+"]
          ]
        },
        {
          id: "groupSize",
          text: "Wie groß ist eure Gruppe?",
          options: [
            ["2-5", "2–5 Personen"],
            ["6-20", "6–20 Personen"],
            ["20+", "20+ Personen"]
          ]
        },
        {
          id: "style",
          text: "Welcher Spielstil passt zu euch?",
          options: [
            ["action", "Action"],
            ["adventure", "Abenteuer"],
            ["mix", "Mischung"]
          ]
        }
      ]
    },
    questlog: {
      kicker: "02 · DIE SPIELARTEN",
      title: "Euer Questlog.",
      intro: "Von der kooperativen Monsterjagd bis zur Spezialmission: Entdeckt die Spielarten, aus denen Questland euer Spiel entwickelt.",
      selectedHeading: "FÜR EURE GRUPPE AUSGEWÄHLT",
      selectedText: "Der Questgeber hat diese Spielarten für euch zusammengestellt.",
      moreHeading: "WEITERE SPIELARTEN ENTDECKEN",
      allHeading: "ALLE SPIELARTEN",
      main: "HAUPTQUEST",
      alternative: "ALTERNATIVE QUEST",
      details: "Details",
      fitLabel: "Für wen ist diese Quest?"
    },
    journey: {
      kicker: "03 · DER ABLAUF",
      title: "So entsteht euer Abenteuer.",
      intro: "Erzählt uns von eurer Gruppe, euren Lieblingsspielen und euren Vorstellungen. Wir entwickeln daraus ein Spiel, das zu euch, eurem Spielort und eurem Anlass passt.",
      steps: [
        ["Eure Gruppe", "Erzählt uns von eurer Gruppe.", "Alter, Gruppengröße und Anlass helfen uns, das passende Spiel für euch zu finden."],
        ["Euer Spielort", "Garten, Wald oder Burg.", "Gemeinsam finden wir den passenden Ort für euer Abenteuer."],
        ["Euer Spiel", "Questland entwickelt euer Spiel.", "Wir entwickeln ein Spiel, das perfekt zu eurer Gruppe, eurem Spielort und eurem Anlass passt."],
        ["Die Vorbereitung", "Trommelt euer Team zusammen.", "Wir stimmen Termin, Dauer und die letzten Details ab."],
        ["Spielstart", "Das Spiel beginnt.", "Wir bringen Material mit, erklären Regeln und Sicherheit – dann geht’s los."]
      ]
    },
    why: {
      kicker: "04 · WARUM QUESTLAND?",
      title: "Videospiele werden zu echten Erlebnissen.",
      intro: "Was ihr an Videospielen liebt, wird gemeinsam mit eurer Gruppe zu einem echten Erlebnis. Questland verbindet Spielmechaniken aus Videospielen mit Bewegung, Teamarbeit und echten Abenteuern.",
      points: [
        ["GAMEPLAY", "Spielmechaniken wie im Videospiel.", "Klassen, Crafting, NPCs, Bosskämpfe oder Loot – viele Mechaniken aus Videospielen werden bei Questland Teil eines echten Abenteuers."],
        ["CUSTOM", "Jede Gruppe ist anders.", "Deshalb entwickeln wir jedes Spiel individuell – passend zu Alter, Gruppe, Anlass und Spielstil."],
        ["TEAMPLAY", "Vom Bildschirm ins Spielfeld.", "Was euch in Videospielen zum Erfolg führt, hilft euch auch bei Questland: Teamwork, Strategie, Kommunikation und kluge Entscheidungen."],
        ["GAME DESIGN", "Durchdachtes Gamedesign.", "Hinter jedem Abenteuer stecken Erfahrung in Gamedesign und Spielleitung. So entstehen spannende, faire und abwechslungsreiche Spielerlebnisse."]
      ]
    },
    cta: {
      kicker: "BEREIT FÜR EURE QUEST?",
      title: "Startet euer Abenteuer.",
      text: "Erzählt uns von eurer Gruppe, euren Lieblingsspielen und euren Vorstellungen. Gemeinsam entwickeln wir daraus ein Spiel, das perfekt zu euch passt.",
      button: "Abenteuer starten"
    },
    footer: {
      note: "Die Visuals sind illustrative Konzeptdarstellungen.",
      region: "Karlsruhe · Outdoor & Indoor",
      legal: "Impressum",
      privacy: "Datenschutz"
    },
    request: {
      kicker: "QUEST BRIEFING",
      title: "Erzählt uns von eurem Abenteuer.",
      intro: "Je mehr wir über eure Gruppe, eure Lieblingsspiele und euren Spielort wissen, desto besser können wir ein passendes Spiel entwickeln.",
      selectedTitle: "Auswahl des Questgebers",
      noSelection: "Noch keine Questgeber-Auswahl vorhanden. Das ist kein Problem – beschreibt uns einfach, worauf ihr Lust habt.",
      groups: ["Kontakt", "Eure Gruppe", "Eure Spielidee"],
      fields: {
        name: "Name",
        email: "E-Mail",
        phone: "Telefon (optional)",
        audience: "Für wen ist das Spiel?",
        ages: "Welche Altersgruppen spielen mit?",
        size: "Gruppengröße",
        occasion: "Anlass",
        location: "Spielort",
        date: "Terminwunsch",
        message: "Lieblingsspiele, Spielmechaniken und eure Vorstellungen"
      },
      placeholders: {
        occasion: "z. B. Geburtstag, Schullandheim oder Teamevent",
        location: "z. B. eigener Garten, Gelände oder Hilfe bei der Suche",
        date: "z. B. Wochenende im September oder flexibel",
        message: "Welche Spiele mögt ihr? Soll es actionreich, rätsellastig oder eine Mischung werden?"
      },
      privacy: "Ich habe die Datenschutzhinweise gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu.",
      submit: "Quest anfragen",
      required: "Pflichtfeld",
      options: {
        audience: ["Schule oder Camp", "Unternehmen oder Event", "Private Gruppe"],
        size: ["2–5 Personen", "6–20 Personen", "20+ Personen"]
      }
    },
    thanks: {
      kicker: "ANFRAGE GESENDET",
      title: "Eure Quest ist bei uns angekommen.",
      text: "Danke für eure Nachricht. Wir melden uns, um die nächsten Schritte und eure Spielidee gemeinsam zu besprechen.",
      back: "Zurück zur Startseite"
    },
    legalPlaceholder: "Die endgültigen Rechtstexte werden vor der öffentlichen Veröffentlichung ergänzt und rechtlich geprüft."
  },
  en: {
    brand: "QUESTLAND",
    descriptor: "REAL-LIFE GAMES",
    nav: {
      questgiver: "Quest Giver",
      gameTypes: "Game Types",
      journey: "How It Works",
      why: "Why Questland?",
      start: "Start Your Adventure",
      open: "Open menu",
      close: "Close menu"
    },
    hero: {
      eyebrow: "MISSION BRIEFING · QUESTLAND",
      title: "Video games in real life.",
      accent: "The world is your playground.",
      gameplay: "Chase monsters. Capture flags. Solve puzzles. Expose the traitor. And write an adventure of your own.",
      support: "Questland turns real places into interactive adventures for families, friends, schools and companies.",
      find: "Find Your Quest",
      start: "Start Your Adventure",
      objective: "Reach the objective together",
      terrain: "Outdoor & indoor",
      status: "Ready to play",
      tags: ["Teamplay", "Objectives", "Story", "Real World"]
    },
    finder: {
      kicker: "01 · THE QUEST GIVER",
      title: "Every group is different. Let’s find the adventure that fits you.",
      greeting: "Welcome to Questland.",
      start: "Ask the quest giver",
      completion: "Nice! I’ve found some adventures that fit your group.",
      show: "View quests",
      back: "Back",
      next: "Continue",
      selected: "Selected",
      profile: "Your selection",
      questions: [
        {
          id: "audience",
          text: "Who is the game for?",
          options: [
            ["school", "School or camp"],
            ["event", "Company or event"],
            ["private", "Private group"]
          ]
        },
        {
          id: "ages",
          text: "Which age groups are playing?",
          hint: "Choose one or more",
          options: [
            ["5-7", "5–7"],
            ["8-11", "8–11"],
            ["12-15", "12–15"],
            ["16+", "16+"]
          ]
        },
        {
          id: "groupSize",
          text: "How big is your group?",
          options: [
            ["2-5", "2–5 people"],
            ["6-20", "6–20 people"],
            ["20+", "20+ people"]
          ]
        },
        {
          id: "style",
          text: "Which play style fits your group?",
          options: [
            ["action", "Action"],
            ["adventure", "Adventure"],
            ["mix", "A mix"]
          ]
        }
      ]
    },
    questlog: {
      kicker: "02 · GAME TYPES",
      title: "Your quest log.",
      intro: "From cooperative monster hunts to special missions: explore the game types Questland can shape into your game.",
      selectedHeading: "SELECTED FOR YOUR GROUP",
      selectedText: "The quest giver put these game types together for your group.",
      moreHeading: "DISCOVER MORE GAME TYPES",
      allHeading: "ALL GAME TYPES",
      main: "MAIN QUEST",
      alternative: "ALTERNATIVE QUEST",
      details: "Details",
      fitLabel: "Who is this quest for?"
    },
    journey: {
      kicker: "03 · HOW IT WORKS",
      title: "This is how your adventure takes shape.",
      intro: "Tell us about your group, your favourite games and what you have in mind. We develop a game around your group, location and occasion.",
      steps: [
        ["Your group", "Tell us about your group.", "Age, group size and occasion help us find the right game for you."],
        ["Your location", "Garden, forest or castle.", "Together, we find the right place for your adventure."],
        ["Your game", "Questland develops your game.", "We create a game that fits your group, location and occasion perfectly."],
        ["Preparation", "Gather your team.", "We set the date, duration and final details."],
        ["Game start", "The game begins.", "We bring the materials, explain the rules and safety – then you play."]
      ]
    },
    why: {
      kicker: "04 · WHY QUESTLAND?",
      title: "Video games become real experiences.",
      intro: "What you love about video games becomes a shared real-world experience. Questland combines game mechanics with movement, teamwork and genuine adventure.",
      points: [
        ["GAMEPLAY", "Game mechanics from video games.", "Classes, crafting, NPCs, boss fights and loot become part of a real adventure."],
        ["CUSTOM", "Every group is different.", "That is why every game is designed around the age, group, occasion and play style."],
        ["TEAMPLAY", "From the screen to the playing field.", "The same things that help in video games matter here too: teamwork, strategy, communication and smart decisions."],
        ["GAME DESIGN", "Thoughtful game design.", "Every adventure is backed by experience in game design and facilitation, creating fair, varied and exciting play."]
      ]
    },
    cta: {
      kicker: "READY FOR YOUR QUEST?",
      title: "Start your adventure.",
      text: "Tell us about your group, favourite games and the experience you have in mind. Together, we’ll create a game that fits you perfectly.",
      button: "Start Your Adventure"
    },
    footer: {
      note: "The visuals are illustrative concept representations.",
      region: "Karlsruhe · Outdoor & indoor",
      legal: "Legal notice",
      privacy: "Privacy"
    },
    request: {
      kicker: "QUEST BRIEFING",
      title: "Tell us about your adventure.",
      intro: "The more we know about your group, favourite games and location, the better we can shape a game around you.",
      selectedTitle: "Quest giver selection",
      noSelection: "There is no quest-giver selection yet. That’s fine – simply tell us what you would like to experience.",
      groups: ["Contact", "Your group", "Your game idea"],
      fields: {
        name: "Name",
        email: "Email",
        phone: "Phone (optional)",
        audience: "Who is the game for?",
        ages: "Which age groups are playing?",
        size: "Group size",
        occasion: "Occasion",
        location: "Location",
        date: "Preferred date",
        message: "Favourite games, mechanics and what you have in mind"
      },
      placeholders: {
        occasion: "e.g. birthday, school camp or team event",
        location: "e.g. your garden, a site or help finding a place",
        date: "e.g. a weekend in September or flexible",
        message: "Which games do you enjoy? Should it be action-focused, puzzle-led or a mix?"
      },
      privacy: "I have read the privacy information and agree that my details may be processed to respond to this enquiry.",
      submit: "Send quest request",
      required: "Required",
      options: {
        audience: ["School or camp", "Company or event", "Private group"],
        size: ["2–5 people", "6–20 people", "20+ people"]
      }
    },
    thanks: {
      kicker: "REQUEST SENT",
      title: "Your quest has reached us.",
      text: "Thank you for your message. We’ll get in touch to discuss your idea and the next steps.",
      back: "Back to the homepage"
    },
    legalPlaceholder: "The final legal text will be added and reviewed before the public launch."
  }
} as const;

export const content = shared;

export const playTypes: Record<Locale, Record<PlayTypeId, PlayTypeContent>> = {
  de: {
    monsterHunt: {
      title: "Monsterjagd",
      meta: "Kooperativ · PvE · Gemeinsames Ziel",
      teaser: "Ein Monster treibt sein Unwesen. Könnt ihr es finden und besiegen?",
      description: "Monsterjagd ist ein kooperatives Spiel gegen einen oder mehrere NPC-Gegner. Gemeinsam verfolgt ihr ein klares Ziel und müsst eure Aufgabe erfüllen, ohne dem Monster zum Opfer zu fallen.",
      fit: "Perfekt für Gruppen, die lieber gemeinsam als gegeneinander spielen. Teamarbeit, Kommunikation, Beobachtungsgabe und taktisches Denken entscheiden darüber, ob ihr eure Mission erfolgreich abschließt.",
      experiences: ["Spuren verfolgen", "Monster umgehen", "Missionsziel bergen", "Gemeinsam taktisch handeln"],
      variantsLabel: "Mögliche Varianten",
      variants: [
        { title: "Das Waldmonster", description: "Unser Klassiker – ein gefährliches Monster bewacht ein wichtiges Missionsziel." },
        { title: "Zombie-Angriff", description: "Überlebt gemeinsam und erfüllt eure Mission trotz der Bedrohung." }
      ],
      imageAlt: "Kinder und Jugendliche planen im hellen Wald, wie sie ein vom Waldmonster bewachtes Missionsziel bergen."
    },
    teamBattles: {
      title: "Teamkämpfe",
      meta: "Team gegen Team · PvP · Mehrere Runden",
      teaser: "Eure Lieblingsspielmodi aus Videospielen – endlich in der echten Welt.",
      description: "Tretet in spannenden Team-gegen-Team-Duellen gegeneinander an. Unterschiedliche Spielmodi, wechselnde Ziele und taktische Entscheidungen sorgen dafür, dass jede Runde anders verläuft.",
      fit: "Ideal für Gruppen, die Action, Wettbewerb und Teamplay lieben. Von einfachen Spielmodi für Kinder bis hin zu komplexen Klassen-, Heilungs- und Versorgungssystemen für erfahrene Spieler lässt sich der Schwierigkeitsgrad flexibel anpassen.",
      experiences: ["Flaggen erobern", "VIPs eskortieren", "Gebiete halten", "Mehrere Runden spielen"],
      variantsLabel: "Mögliche Varianten",
      variants: [
        { title: "Wasserschlacht", description: "Der Klassiker für jedes Alter." },
        { title: "Capture the Flag", description: "Erobert die gegnerische Flagge und verteidigt eure eigene." },
        { title: "Battle Royale", description: "Jeder kämpft für sich – bis nur noch einer übrig bleibt." },
        { title: "Kill the DJ", description: "Eine besondere VIP-Mission für Festivals und Events." }
      ],
      imageAlt: "Zwei farbig markierte Teams aus Kindern und Jugendlichen spielen auf einer sonnigen Wiese um eine grüne Flagge."
    },
    adventure: {
      title: "Abenteuer",
      meta: "Story · überwiegend PvE · Gemeinsames Ziel",
      teaser: "Erkundet unbekannte Orte, löst Rätsel und erlebt eure eigene Geschichte.",
      description: "Abenteuer verbinden Erkundung, Rätsel, Aufgaben und spannende Begegnungen zu einer fortlaufenden Geschichte. Eure Entscheidungen beeinflussen den Verlauf des Spiels und führen euch Schritt für Schritt ans Ziel.",
      fit: "Für Gruppen, die gerne entdecken, kombinieren und gemeinsam in eine Geschichte eintauchen. Je nach Alter und Spielstil können Abenteuer ruhig und rätselorientiert oder actionreich gestaltet werden.",
      experiences: ["Orte entdecken", "Hinweise kombinieren", "Rätsel lösen", "Entscheidungen treffen"],
      variantsLabel: "Mögliche Varianten",
      variants: [
        { title: "Schatzsuche", description: "Kindgerechte Abenteuer für die jüngsten Entdecker." },
        { title: "Action-Abenteuer", description: "Mehr Kämpfe, mehr Herausforderungen und mehr Adrenalin." },
        { title: "Lost Place Story", description: "Mysteriöse Orte, spannende Rätsel und düstere Geheimnisse." }
      ],
      imageAlt: "Kinder und Jugendliche lösen bei Tageslicht mit Karte, Hinweisen und Scanner ein Rätsel an einer Burgruine."
    },
    deduction: {
      title: "Undercover",
      meta: "Rollen · Social Deduction · Geheime Informationen",
      teaser: "Ein Verräter befindet sich in eurer Gruppe. Könnt ihr ihn rechtzeitig entlarven?",
      description: "Jeder Spieler erhält eine geheime Rolle mit eigenen Zielen. Während einige versuchen, die Mission zu erfüllen, arbeiten andere im Verborgenen gegen die Gruppe. Beobachtung, Kommunikation und Menschenkenntnis sind der Schlüssel zum Erfolg.",
      fit: "Perfekt für Gruppen, die lieber kombinieren als kämpfen. Wer aufmerksam beobachtet, clever argumentiert und die richtigen Schlüsse zieht, hat die besten Chancen, Freund und Feind zu unterscheiden.",
      experiences: ["Geheime Rollen", "Hinweise diskutieren", "Vertrauen prüfen", "Verräter entlarven"],
      variantsLabel: "Mögliche Varianten",
      variants: [
        { title: "Vampirjäger", description: "Social Deduction kombiniert mit kleinen LARP-Elementen." },
        { title: "Geheimagenten", description: "Ein Agentenspiel mit verdeckten Rollen und geheimen Informationen." }
      ],
      imageAlt: "Kinder und Jugendliche diskutieren an einem hellen Feldlager über geheime Rollen und verdächtige Hinweise."
    },
    missions: {
      title: "Spezialmissionen",
      meta: "Mehrstufig · Meist PvE · Komplex",
      teaser: "Mehr Zeit. Mehr Taktik. Mehr Möglichkeiten. Seid ihr bereit für eure größte Herausforderung?",
      description: "Spezialmissionen sind unsere größten und anspruchsvollsten Abenteuer. Mehrere Missionsziele, taktische Entscheidungen und ein abwechslungsreicher Spielverlauf stellen eure Gruppe immer wieder vor neue Herausforderungen.",
      fit: "Ideal für Jugendliche und Erwachsene, die Lust auf ein anspruchsvolleres und taktischeres Spielerlebnis haben. Spezialmissionen belohnen Planung, Teamarbeit und kluge Entscheidungen und bieten deutlich mehr Freiheiten als unsere klassischen Quests.",
      experiences: ["Routen planen", "Mehrere Objectives", "Spielarten kombinieren", "Längere Missionen"],
      variantsLabel: "Beispiel-Quests",
      variants: [
        { title: "Hinter feindlichen Linien", description: "Eskortiert einen VIP sicher durch gefährliches Gebiet." },
        { title: "Zombie-Apokalypse", description: "Findet das Gegenmittel, bevor die Zeit abläuft." }
      ],
      imageAlt: "Jugendliche planen bei goldenem Tageslicht mehrere Missionsziele in einem weitläufigen Gelände."
    }
  },
  en: {
    monsterHunt: {
      title: "Monster Hunt",
      meta: "Cooperative · PvE · Shared objective",
      teaser: "A monster is causing trouble. Can you track it down and defeat it?",
      description: "Monster Hunt is a cooperative game against one or more NPC opponents. Work toward a clear objective and complete the mission without falling victim to the monster.",
      fit: "Perfect for groups that prefer working together. Teamwork, communication, observation and tactical thinking decide whether the mission succeeds.",
      experiences: ["Follow tracks", "Avoid the monster", "Retrieve the objective", "Act as a team"],
      variantsLabel: "Possible variations",
      variants: [
        { title: "The Forest Monster", description: "Our classic: a dangerous creature guards an important mission objective." },
        { title: "Zombie Attack", description: "Survive together and complete the mission despite the threat." }
      ],
      imageAlt: "Children and teenagers plan how to retrieve an objective guarded by a forest monster in bright woodland."
    },
    teamBattles: {
      title: "Team Battles",
      meta: "Team against team · PvP · Several rounds",
      teaser: "Your favourite video-game modes – finally in the real world.",
      description: "Compete in exciting team-against-team rounds. Changing game modes, objectives and tactical choices make every round feel different.",
      fit: "Ideal for groups that love action, competition and teamplay. The difficulty can range from simple children’s modes to classes, healing and supply systems for experienced players.",
      experiences: ["Capture flags", "Escort VIPs", "Hold areas", "Play several rounds"],
      variantsLabel: "Possible variations",
      variants: [
        { title: "Water Battle", description: "A classic for every age." },
        { title: "Capture the Flag", description: "Take the opposing flag while defending your own." },
        { title: "Battle Royale", description: "Every player for themselves until one remains." },
        { title: "Kill the DJ", description: "A special VIP mission for festivals and events." }
      ],
      imageAlt: "Two colour-coded teams of children and teenagers play for a green flag in a sunny meadow."
    },
    adventure: {
      title: "Adventure",
      meta: "Story · Mainly PvE · Shared objective",
      teaser: "Explore unknown places, solve puzzles and experience your own story.",
      description: "Adventures combine exploration, puzzles, tasks and encounters into one continuous story. Your decisions shape the game and lead you step by step toward the objective.",
      fit: "For groups that love discovering, combining clues and becoming part of a story. Adventures can be calm and puzzle-led or full of action.",
      experiences: ["Discover places", "Connect clues", "Solve puzzles", "Make decisions"],
      variantsLabel: "Possible variations",
      variants: [
        { title: "Treasure Hunt", description: "Child-friendly adventures for the youngest explorers." },
        { title: "Action Adventure", description: "More battles, more challenges and more adrenaline." },
        { title: "Lost Place Story", description: "Mysterious places, intriguing puzzles and dark secrets." }
      ],
      imageAlt: "Children and teenagers use a map, clues and a scanner to solve a puzzle at a sunlit castle ruin."
    },
    deduction: {
      title: "Undercover",
      meta: "Roles · Social deduction · Secret information",
      teaser: "There is a traitor in your group. Can you expose them in time?",
      description: "Every player receives a secret role and their own objectives. Some work to complete the mission while others act against the group. Observation, communication and reading people are the keys to success.",
      fit: "Perfect for groups that prefer deduction over combat. Careful observation, smart arguments and good conclusions help separate friend from foe.",
      experiences: ["Secret roles", "Discuss clues", "Question trust", "Expose the traitor"],
      variantsLabel: "Possible variations",
      variants: [
        { title: "Vampire Hunters", description: "Social deduction with light LARP elements." },
        { title: "Secret Agents", description: "An agent game with hidden roles and secret information." }
      ],
      imageAlt: "Children and teenagers at a bright field camp debate secret roles and suspicious evidence."
    },
    missions: {
      title: "Special Missions",
      meta: "Multi-stage · Mostly PvE · Complex",
      teaser: "More time. More tactics. More possibilities. Ready for your biggest challenge?",
      description: "Special Missions are our largest and most demanding adventures. Multiple objectives, tactical decisions and a varied game flow keep presenting the group with new challenges.",
      fit: "Ideal for teenagers and adults looking for a deeper tactical experience. Special Missions reward planning, teamwork and smart choices and offer more freedom than our classic quests.",
      experiences: ["Plan routes", "Multiple objectives", "Combine game types", "Play longer missions"],
      variantsLabel: "Example quests",
      variants: [
        { title: "Behind Enemy Lines", description: "Escort a VIP safely through dangerous territory." },
        { title: "Zombie Apocalypse", description: "Find the antidote before time runs out." }
      ],
      imageAlt: "Teenagers plan several objectives across a large landscape in bright golden-hour light."
    }
  }
};

export function getContent(locale: Locale) {
  return content[locale];
}
