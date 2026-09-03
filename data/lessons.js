// Edit this file to change lessons. Keep the same object structure.
const LESSONS = [
  {
    id: "unit-1",
    unit: "Unit 1",
    title: "Location & Information Questions",
    subtitle: "Use in, at, on, under and over to talk about place.",
    topic: "Prepositions of location + Wh- questions",
    intro:
      "Learn how to ask where someone or something is and how to give a simple location.",
    sections: [
      {
        title: "Location words",
        pashto: "د ځای لپاره کارېدونکي توري",
        rules: [
          "Use in for something inside a place.",
          "Use at for a point or a specific place.",
          "Use on for a surface.",
          "Use under for something below another thing.",
          "Use over for something above another thing.",
        ],
        examples: [
          "The book is in the bag.",
          "She is at school.",
          "The phone is on the table.",
          "The shoes are under the bed.",
          "The lamp is over the desk.",
        ],
      },
      {
        title: "Information questions",
        pashto: "د معلوماتو پوښتنې",
        rules: [
          "Common question words include who, what, where, when, why, which, how, and whose.",
          "In simple present questions, use do/does before the subject when a main verb is needed.",
          "Whom is more formal; who is common in conversation.",
        ],
        examples: [
          "Where does she work?",
          "What does Sabir register?",
          "How do they go to school?",
          "Who does she call?",
          "Whose book is this?",
        ],
      },
    ],
  },
  {
    id: "unit-2",
    unit: "Unit 2",
    title: "Time, Clock & Months",
    subtitle: "Talk about time, order and the months of the year.",
    topic: "When + time expressions + months",
    intro:
      "Practice asking when, telling the time, and using before, after and in with months.",
    sections: [
      {
        title: "Time expressions",
        pashto: "د وخت عبارتونه",
        rules: [
          "Use o'clock for exact hours.",
          "Use after and to to describe minutes around the hour.",
          "Use half past for :30 and quarter past/to for :15 and :45.",
          "Use at with noon and night; use in with morning, afternoon and evening.",
          "Use in with months.",
        ],
        examples: [
          "It is four o'clock.",
          "It is a quarter past ten.",
          "It is ten to five.",
          "It is half past seven.",
          "We study in September.",
        ],
      },
      {
        title: "Before and after",
        pashto: "مخکې او وروسته",
        rules: [
          "Before tells us that one event happens earlier.",
          "After tells us that one event happens later.",
        ],
        examples: [
          "I eat breakfast before school.",
          "We play after class.",
          "She calls me after dinner.",
        ],
      },
    ],
  },
  {
    id: "unit-3",
    unit: "Unit 3",
    title: "Future with Be Going To",
    subtitle: "Talk about plans and future actions.",
    topic: "am / is / are + going to",
    intro: "Use be going to for plans and intentions in the future.",
    sections: [
      {
        title: "Form",
        pashto: "جوړښت",
        rules: [
          "Use am, is, or are + going to + base verb.",
          "After going to, use the simple/base form of the verb.",
          "For negative statements, put not after am/is/are.",
          "For yes/no questions, put am/is/are before the subject.",
        ],
        examples: [
          "I am going to study tonight.",
          "She is going to visit her aunt.",
          "They are going to play football.",
          "He is not going to travel tomorrow.",
          "Are you going to read?",
        ],
      },
    ],
  },
  {
    id: "unit-4",
    unit: "Unit 4",
    title: "Future Information Questions",
    subtitle: "Ask what, where, when, why and how about future plans.",
    topic: "Wh- questions with be going to",
    intro: "Build useful questions about future plans and activities.",
    sections: [
      {
        title: "Question pattern",
        pashto: "د پوښتنې جوړښت",
        rules: [
          "Put the Wh-word first.",
          "Then use am/is/are, the subject, going to, and the base verb.",
          "Short answers answer the question directly and do not repeat the Wh-word.",
        ],
        examples: [
          "What are you going to study?",
          "Where is she going to work?",
          "When are they going to arrive?",
          "Why is he going to leave?",
          "How are you going to travel?",
        ],
      },
    ],
  },
  {
    id: "unit-5",
    unit: "Unit 5",
    title: "Past of Be: Was & Were",
    subtitle: "Talk about people, places and situations in the past.",
    topic: "was / were + past time expressions",
    intro: "Use was and were to describe past states, places and situations.",
    sections: [
      {
        title: "Was and were",
        pashto: "د تېر وخت لپاره was او were",
        rules: [
          "Use was with I, he, she, and it.",
          "Use were with we, you, and they.",
          "Use wasn't and weren't for negative statements.",
          "For yes/no questions, put was/were before the subject.",
        ],
        examples: [
          "I was at home yesterday.",
          "She was tired last night.",
          "We were at school.",
          "They weren't late.",
          "Were you busy yesterday?",
        ],
      },
    ],
  },

  {
    id: "unit-6",
    unit: "Unit 6",
    title: "Singular & Plural Nouns",
    subtitle: "Talk about one person, place, thing, or more than one.",
    topic: "Singular and plural nouns",
    intro: "Learn how to use nouns for one thing and for two or more things.",
    sections: [
      {
        title: "Singular nouns",
        pashto: "مفرد نومونه",
        rules: [
          "A singular noun refers to one person, place, animal, or thing.",
          "Many singular nouns use a or an when they are not specific.",
          "Use an before a vowel sound.",
        ],
        examples: [
          "I have a book.",
          "She is a student.",
          "He ate an apple.",
          "There is a teacher in the room.",
        ],
      },
      {
        title: "Plural nouns",
        pashto: "جمع نومونه",
        rules: [
          "Most nouns become plural by adding s.",
          "Some nouns use es after certain endings.",
          "Some nouns have irregular plural forms.",
        ],
        examples: [
          "I have two books.",
          "There are three classes.",
          "She has two watches.",
          "The children are outside.",
        ],
      },
    ],
  },

  {
    id: "unit-7",
    unit: "Unit 7",
    title: "Count & Non-Count Nouns",
    subtitle:
      "Learn the difference between things you can count and things you cannot.",
    topic: "Count nouns and non-count nouns",
    intro: "Use count and non-count nouns correctly in everyday conversations.",
    sections: [
      {
        title: "Count nouns",
        pashto: "د شمېرلو وړ نومونه",
        rules: [
          "Count nouns can be counted individually.",
          "They can have singular and plural forms.",
          "Use numbers with count nouns.",
        ],
        examples: [
          "I have one pen.",
          "She bought three apples.",
          "There are five students.",
          "I need two chairs.",
        ],
      },
      {
        title: "Non-count nouns",
        pashto: "نه شمېرل کېدونکي نومونه",
        rules: [
          "Non-count nouns usually describe substances, materials, or general ideas.",
          "They normally do not have a plural form.",
          "Use some or much with many non-count nouns.",
        ],
        examples: [
          "I need some water.",
          "There is rice on the table.",
          "We don't have much time.",
          "She needs some information.",
        ],
      },
    ],
  },

  {
    id: "unit-8",
    unit: "Unit 8",
    title: "Possessive Nouns",
    subtitle: "Show who owns something.",
    topic: "Possession with apostrophes",
    intro: "Learn how to say that something belongs to a person or group.",
    sections: [
      {
        title: "Showing possession",
        pashto: "د ملکیت څرګندول",
        rules: [
          "Use apostrophe + s for possession with a singular noun.",
          "Use an apostrophe after a regular plural noun ending in s.",
          "Use possessive forms to show ownership or relationships.",
        ],
        examples: [
          "This is Ahmad's book.",
          "That is my sister's phone.",
          "The students' classroom is upstairs.",
          "Where is the teacher's office?",
        ],
      },
    ],
  },

  {
    id: "unit-9",
    unit: "Unit 9",
    title: "Pronouns",
    subtitle: "Use short words instead of repeating nouns.",
    topic: "Subject, object and possessive pronouns",
    intro:
      "Practice using I, you, he, she, it, we, they and other common pronouns.",
    sections: [
      {
        title: "Subject pronouns",
        pashto: "فاعلي ضمیرونه",
        rules: [
          "Subject pronouns tell us who performs an action.",
          "Use I, you, he, she, it, we, and they.",
        ],
        examples: [
          "I study English.",
          "She works at a school.",
          "They play football.",
          "We live in Kabul.",
        ],
      },
      {
        title: "Object pronouns",
        pashto: "مفعولي ضمیرونه",
        rules: [
          "Object pronouns receive an action.",
          "Common forms include me, you, him, her, it, us, and them.",
        ],
        examples: [
          "She called me.",
          "I helped him.",
          "They invited us.",
          "We saw them yesterday.",
        ],
      },
    ],
  },

  {
    id: "unit-10",
    unit: "Unit 10",
    title: "Be Verbs",
    subtitle: "Use am, is, and are to describe people and things.",
    topic: "am / is / are",
    intro:
      "Learn how to describe identity, condition, location, and situations.",
    sections: [
      {
        title: "Present be verbs",
        pashto: "د اوسني وخت be فعلونه",
        rules: [
          "Use am with I.",
          "Use is with he, she, and it.",
          "Use are with you, we, and they.",
          "Use not to make negative sentences.",
        ],
        examples: [
          "I am ready.",
          "He is my friend.",
          "She is happy.",
          "They are at home.",
          "We are not late.",
        ],
      },
    ],
  },

  {
    id: "unit-11",
    unit: "Unit 11",
    title: "Action Verbs",
    subtitle: "Talk about actions people do every day.",
    topic: "Action verbs",
    intro: "Learn common verbs for speaking about everyday activities.",
    sections: [
      {
        title: "Common actions",
        pashto: "عام کړني فعلونه",
        rules: [
          "Action verbs describe something a person or thing does.",
          "Use the base verb after do and does in questions.",
          "Use the correct verb form with the subject.",
        ],
        examples: [
          "I wash my face.",
          "She walks to school.",
          "They play football.",
          "Do you speak English?",
          "Does he work here?",
        ],
      },
    ],
  },

  {
    id: "unit-12",
    unit: "Unit 12",
    title: "Adjectives",
    subtitle: "Describe people, places, animals, and things.",
    topic: "Describing words",
    intro: "Use adjectives to give more information about nouns.",
    sections: [
      {
        title: "Using adjectives",
        pashto: "صفتونه",
        rules: [
          "Adjectives describe nouns.",
          "An adjective can come before a noun.",
          "An adjective can also come after a be verb.",
        ],
        examples: [
          "She has a beautiful dress.",
          "He is tall.",
          "This is a small house.",
          "The food is delicious.",
          "My teacher is kind.",
        ],
      },
    ],
  },

  {
    id: "unit-13",
    unit: "Unit 13",
    title: "Comparative & Superlative Adjectives",
    subtitle: "Compare people, places, and things.",
    topic: "Comparatives and superlatives",
    intro: "Learn how to compare two or more things.",
    sections: [
      {
        title: "Comparatives",
        pashto: "د پرتله کولو صفتونه",
        rules: [
          "Use a comparative adjective to compare two things.",
          "Many short adjectives use -er.",
          "Use than when making a comparison.",
        ],
        examples: [
          "Ali is taller than Omar.",
          "This book is cheaper than that one.",
          "My car is faster than yours.",
        ],
      },
      {
        title: "Superlatives",
        pashto: "تر ټولو غوره صفتونه",
        rules: [
          "Use a superlative to compare three or more things.",
          "Many short adjectives use -est.",
          "Use the before a superlative adjective.",
        ],
        examples: [
          "Ali is the tallest student.",
          "This is the biggest room.",
          "She is the fastest runner.",
        ],
      },
    ],
  },

  {
    id: "unit-14",
    unit: "Unit 14",
    title: "Adverbs",
    subtitle: "Explain how, when, or where an action happens.",
    topic: "Adverbs",
    intro: "Use adverbs to give more information about actions.",
    sections: [
      {
        title: "Common adverbs",
        pashto: "قیدونه",
        rules: [
          "Adverbs can describe how an action happens.",
          "Many adverbs ending in -ly describe the way an action happens.",
          "Adverbs can also describe time or frequency.",
        ],
        examples: [
          "She speaks slowly.",
          "He drives carefully.",
          "I always study at night.",
          "They arrived early.",
          "We often play football.",
        ],
      },
    ],
  },

  {
    id: "unit-15",
    unit: "Unit 15",
    title: "Simple Present",
    subtitle: "Talk about habits, routines, and facts.",
    topic: "Simple present tense",
    intro: "Use the simple present to talk about regular actions and facts.",
    sections: [
      {
        title: "Present habits",
        pashto: "د اوسني ساده وخت عادتونه",
        rules: [
          "Use the base verb with I, you, we, and they.",
          "Add s or es to many verbs with he, she, and it.",
          "Use do and does to make questions.",
          "Use do not and does not for negative statements.",
        ],
        examples: [
          "I study every day.",
          "She works in a school.",
          "They play football.",
          "Does he speak English?",
          "I don't drink coffee.",
          "She doesn't watch TV.",
        ],
      },
    ],
  },

  {
    id: "unit-16",
    unit: "Unit 16",
    title: "Progressive & Perfect Tenses",
    subtitle: "Talk about actions happening now and completed experiences.",
    topic: "Progressive and perfect forms",
    intro:
      "Learn the basic difference between actions in progress and completed actions.",
    sections: [
      {
        title: "Present progressive",
        pashto: "د اوسني دوامدار وخت",
        rules: ["Use am/is/are + verb-ing for an action happening around now."],
        examples: [
          "I am studying now.",
          "She is cooking dinner.",
          "They are playing football.",
        ],
      },
      {
        title: "Present perfect",
        pashto: "د اوسني کامل وخت",
        rules: [
          "Use have/has + past participle.",
          "Use it for experiences or actions connected to the present.",
        ],
        examples: [
          "I have finished my work.",
          "She has visited Herat.",
          "They have already eaten.",
        ],
      },
    ],
  },

  {
    id: "unit-17",
    unit: "Unit 17",
    title: "Perfect Progressive",
    subtitle: "Talk about actions that have continued over time.",
    topic: "Perfect progressive tense",
    intro:
      "Learn how to describe an action that started in the past and continued for a period of time.",
    sections: [
      {
        title: "Present perfect progressive",
        pashto: "اوسنی کامل دوامدار وخت",
        rules: [
          "Use have/has been + verb-ing.",
          "Use for to describe a period of time.",
          "Use since to describe the starting point.",
        ],
        examples: [
          "I have been studying for two hours.",
          "She has been working since morning.",
          "They have been waiting for thirty minutes.",
        ],
      },
    ],
  },

  {
    id: "unit-18",
    unit: "Unit 18",
    title: "Irregular Verbs",
    subtitle: "Learn common past forms that do not use regular -ed.",
    topic: "Irregular past verbs",
    intro: "Practice common irregular verbs used in everyday English.",
    sections: [
      {
        title: "Common irregular verbs",
        pashto: "نامنظم فعلونه",
        rules: [
          "Irregular verbs do not always form the past by adding -ed.",
          "Learn common past forms as vocabulary.",
        ],
        examples: [
          "I go to school every day. / I went yesterday.",
          "She eats breakfast. / She ate breakfast earlier.",
          "They see the teacher. / They saw the teacher.",
          "He takes the bus. / He took the bus.",
        ],
      },
    ],
  },

  {
    id: "unit-19",
    unit: "Unit 19",
    title: "Gerunds",
    subtitle: "Use -ing forms as nouns after common expressions.",
    topic: "Gerunds",
    intro:
      "Learn how activities can be used as subjects or after certain verbs and expressions.",
    sections: [
      {
        title: "Using gerunds",
        pashto: "Gerund یا د ing بڼه",
        rules: [
          "A gerund is an -ing form used like a noun.",
          "Some verbs are commonly followed by gerunds.",
          "Gerunds can be the subject of a sentence.",
        ],
        examples: [
          "Swimming is good exercise.",
          "I enjoy reading.",
          "She likes cooking.",
          "Learning English takes practice.",
        ],
      },
    ],
  },

  {
    id: "unit-20",
    unit: "Unit 20",
    title: "Infinitives",
    subtitle: "Use to + verb to talk about actions, plans, and purposes.",
    topic: "Infinitives with to",
    intro: "Practice using infinitives in common speaking patterns.",
    sections: [
      {
        title: "To + base verb",
        pashto: "مصدر فعل",
        rules: [
          "An infinitive commonly uses to + base verb.",
          "Use infinitives after many common verbs.",
          "Infinitives can explain purpose.",
        ],
        examples: [
          "I want to learn English.",
          "She needs to study.",
          "He decided to travel.",
          "I went to the store to buy bread.",
        ],
      },
    ],
  },

  {
    id: "unit-21",
    unit: "Unit 21",
    title: "Active & Passive Voice",
    subtitle: "Understand who does an action and what receives it.",
    topic: "Active and passive voice",
    intro: "Learn the difference between active and passive sentences.",
    sections: [
      {
        title: "Active voice",
        pashto: "معلوم حالت",
        rules: ["In active voice, the subject performs the action."],
        examples: [
          "The teacher teaches English.",
          "Ali opened the door.",
          "The student wrote the answer.",
        ],
      },
      {
        title: "Passive voice",
        pashto: "مجهول حالت",
        rules: [
          "In passive voice, the focus is on the person or thing receiving the action.",
          "Use a form of be + past participle.",
        ],
        examples: [
          "English is taught by the teacher.",
          "The door was opened by Ali.",
          "The answer was written by the student.",
        ],
      },
    ],
  },

  {
    id: "unit-22",
    unit: "Unit 22",
    title: "Statements, Commands & Requests",
    subtitle: "Use English for facts, instructions, and strong suggestions.",
    topic: "Indicative and imperative mood",
    intro: "Learn simple sentence types used in everyday communication.",
    sections: [
      {
        title: "Statements",
        pashto: "خبري جملې",
        rules: ["Use statements to give information or describe something."],
        examples: [
          "I am a student.",
          "She lives here.",
          "The class starts at nine.",
        ],
      },
      {
        title: "Commands and requests",
        pashto: "امر او غوښتنې",
        rules: [
          "Use the base verb to give a simple command.",
          "Use please to make many commands more polite.",
        ],
        examples: [
          "Open the door.",
          "Please sit down.",
          "Listen carefully.",
          "Please speak slowly.",
        ],
      },
    ],
  },

  {
    id: "unit-23",
    unit: "Unit 23",
    title: "Auxiliary Verbs: Be, Do & Have",
    subtitle:
      "Use helping verbs to build questions, negatives, and different tenses.",
    topic: "Auxiliary verbs",
    intro: "Understand how be, do, and have help build English sentences.",
    sections: [
      {
        title: "Helping verbs",
        pashto: "مرستندویه فعلونه",
        rules: [
          "Be helps form progressive and passive structures.",
          "Do helps form many simple present and past questions and negatives.",
          "Have helps form perfect tenses.",
        ],
        examples: [
          "She is studying.",
          "Do you work here?",
          "He does not understand.",
          "I have finished.",
          "They have arrived.",
        ],
      },
    ],
  },

  {
    id: "unit-24",
    unit: "Unit 24",
    title: "Will, Would, Shall & Should",
    subtitle:
      "Talk about future ideas, polite requests, advice, and possibilities.",
    topic: "Will / would / shall / should",
    intro:
      "Practice useful helping verbs for future statements, requests, and advice.",
    sections: [
      {
        title: "Will and would",
        pashto: "Will او Would",
        rules: [
          "Use will for many future statements and decisions.",
          "Would is often used for polite requests and hypothetical situations.",
        ],
        examples: [
          "I will call you tomorrow.",
          "She will help us.",
          "Would you open the door?",
          "I would like some water.",
        ],
      },
      {
        title: "Should",
        pashto: "Should د مشورې لپاره",
        rules: ["Use should to give advice or say what is a good idea."],
        examples: [
          "You should study every day.",
          "He should see a doctor.",
          "We should leave early.",
        ],
      },
    ],
  },

  {
    id: "unit-25",
    unit: "Unit 25",
    title: "Can, Could, May, Might & Must",
    subtitle: "Talk about ability, permission, possibility, and necessity.",
    topic: "Modal verbs",
    intro: "Learn common modal verbs for useful everyday communication.",
    sections: [
      {
        title: "Ability and permission",
        pashto: "توانایي او اجازه",
        rules: [
          "Use can to talk about ability or informal permission.",
          "Use could for past ability and polite requests.",
          "May can be used for formal permission.",
        ],
        examples: [
          "I can swim.",
          "Can I come in?",
          "Could you help me?",
          "May I ask a question?",
        ],
      },
      {
        title: "Possibility and necessity",
        pashto: "امکان او اړتیا",
        rules: [
          "Use might to describe possibility.",
          "Use must to express strong necessity.",
        ],
        examples: [
          "It might rain today.",
          "She might come later.",
          "You must wear a seat belt.",
          "We must finish this work.",
        ],
      },
    ],
  },

  {
    id: "unit-26",
    unit: "Unit 26",
    title: "Prepositions: On, At & In",
    subtitle: "Use common prepositions for time and place.",
    topic: "On / at / in",
    intro: "Build on your knowledge of location and time prepositions.",
    sections: [
      {
        title: "Time",
        pashto: "د وخت لپاره on، at او in",
        rules: [
          "Use at for specific clock times.",
          "Use on for days and dates.",
          "Use in for months, years, and longer periods.",
        ],
        examples: [
          "The class starts at 8:00.",
          "I will visit you on Monday.",
          "She was born in 2005.",
          "We travel in July.",
        ],
      },
    ],
  },

  {
    id: "unit-27",
    unit: "Unit 27",
    title: "Prepositions: Of, To & For",
    subtitle:
      "Use common prepositions to show relationships, direction, and purpose.",
    topic: "Of / to / for",
    intro: "Practice three very common English prepositions.",
    sections: [
      {
        title: "Of, to and for",
        pashto: "Of، To او For",
        rules: [
          "Of can show relationships or belonging.",
          "To can show direction or a destination.",
          "For can show purpose or who receives something.",
        ],
        examples: [
          "The door of the room is open.",
          "I am going to school.",
          "This gift is for you.",
          "She went to the market.",
          "I bought a book for my brother.",
        ],
      },
    ],
  },

  {
    id: "unit-28",
    unit: "Unit 28",
    title: "Prepositions: With, Over & By",
    subtitle: "Describe connection, position, method, and people involved.",
    topic: "With / over / by",
    intro: "Learn three useful prepositions for everyday speaking.",
    sections: [
      {
        title: "With",
        pashto: "With",
        rules: [
          "Use with to show that people or things are together.",
          "Use with to describe the tool used for an action.",
        ],
        examples: [
          "I went with my friend.",
          "She cuts the bread with a knife.",
        ],
      },
      {
        title: "Over and by",
        pashto: "Over او By",
        rules: [
          "Over can describe position above something.",
          "By can describe a method or the person responsible for an action.",
        ],
        examples: [
          "The picture is over the sofa.",
          "We traveled by bus.",
          "The book was written by the author.",
        ],
      },
    ],
  },

  {
    id: "unit-29",
    unit: "Unit 29",
    title: "Coordinating Conjunctions",
    subtitle: "Connect words and ideas with and, but, or, so, and more.",
    topic: "Coordinating conjunctions",
    intro: "Learn how to connect simple ideas naturally.",
    sections: [
      {
        title: "Connecting ideas",
        pashto: "د جملو او نظریاتو نښلول",
        rules: [
          "Use and to add information.",
          "Use but to show contrast.",
          "Use or to give choices.",
          "Use so to show a result.",
        ],
        examples: [
          "I study English and Pashto.",
          "He is tired but he is working.",
          "Do you want tea or coffee?",
          "It was raining, so we stayed home.",
        ],
      },
    ],
  },

  {
    id: "unit-30",
    unit: "Unit 30",
    title: "Subordinating Conjunctions",
    subtitle:
      "Connect a main idea with a reason, time, condition, or contrast.",
    topic: "Subordinating conjunctions",
    intro: "Use because, when, if, although, and other words to connect ideas.",
    sections: [
      {
        title: "Reasons and conditions",
        pashto: "دلیل او شرط",
        rules: [
          "Use because to give a reason.",
          "Use if to describe a condition.",
          "Use when to connect events in time.",
          "Use although to show contrast.",
        ],
        examples: [
          "I stayed home because I was tired.",
          "I will call you when I arrive.",
          "If it rains, we will stay home.",
          "Although he was tired, he continued working.",
        ],
      },
    ],
  },

  {
    id: "unit-31",
    unit: "Unit 31",
    title: "Conjunctive Adverbs",
    subtitle: "Connect ideas and show relationships between sentences.",
    topic: "Conjunctive adverbs",
    intro:
      "Learn words such as however, therefore, and also for clearer communication.",
    sections: [
      {
        title: "Connecting sentences",
        pashto: "د جملو نښلوونکي قیدونه",
        rules: [
          "Use however to show contrast.",
          "Use therefore to show a result.",
          "Use also to add information.",
        ],
        examples: [
          "I wanted to go. However, I was busy.",
          "He studied hard. Therefore, he passed.",
          "She speaks English. Also, she speaks Arabic.",
        ],
      },
    ],
  },

  {
    id: "unit-32",
    unit: "Unit 32",
    title: "Articles: A, An & The",
    subtitle: "Use articles correctly when talking about people and things.",
    topic: "Indefinite and definite articles",
    intro: "Learn when to use a, an, and the in everyday sentences.",
    sections: [
      {
        title: "A and an",
        pashto: "A او An",
        rules: [
          "Use a before a consonant sound.",
          "Use an before a vowel sound.",
          "Use a or an when talking about one non-specific thing.",
        ],
        examples: [
          "I need a pen.",
          "She is a teacher.",
          "He ate an orange.",
          "I saw an interesting movie.",
        ],
      },
      {
        title: "The",
        pashto: "The",
        rules: [
          "Use the when the listener knows which person or thing you mean.",
          "Use the for a specific person or thing.",
        ],
        examples: [
          "Please close the door.",
          "The teacher is in the classroom.",
          "I bought a book. The book is interesting.",
        ],
      },
    ],
  },

  {
    id: "unit-33",
    unit: "Unit 33",
    title: "Interjections",
    subtitle: "Express surprise, happiness, pain, or other strong feelings.",
    topic: "Interjections",
    intro: "Learn short expressions that make spoken English more natural.",
    sections: [
      {
        title: "Common expressions",
        pashto: "د احساساتو څرګندونې",
        rules: [
          "Interjections can express strong or sudden feelings.",
          "They are common in conversations.",
        ],
        examples: [
          "Wow! That is beautiful.",
          "Oh! I forgot my phone.",
          "Great! We won the game.",
          "Oops! I made a mistake.",
          "Hey! Wait for me.",
        ],
      },
    ],
  },

  {
    id: "unit-34",
    unit: "Unit 34",
    title: "Capitalization",
    subtitle: "Learn when English letters should be capitalized.",
    topic: "Capital letters",
    intro: "Use capital letters correctly in writing.",
    sections: [
      {
        title: "When to capitalize",
        pashto: "د لویو تورو کارول",
        rules: [
          "Capitalize the first word of a sentence.",
          "Capitalize names of people and places.",
          "Capitalize days and months.",
          "Always write the pronoun I with a capital letter.",
        ],
        examples: [
          "My name is Ahmad.",
          "I live in Afghanistan.",
          "We study English on Monday.",
          "She was born in January.",
          "I like reading.",
        ],
      },
    ],
  },

  {
    id: "unit-35",
    unit: "Unit 35",
    title: "Grammar for Everyday Speaking",
    subtitle: "Put the grammar you learned into real conversations.",
    topic: "Practical grammar review",
    intro:
      "Review important grammar patterns through simple everyday questions and answers.",
    sections: [
      {
        title: "Daily conversation",
        pashto: "د ورځني خبرو اترو تمرین",
        rules: [
          "Use simple grammar patterns when speaking.",
          "Focus on communicating the idea clearly.",
          "Practice questions and answers aloud.",
          "Combine different grammar topics in real conversations.",
        ],
        examples: [
          "Where do you live?",
          "What are you doing now?",
          "What did you do yesterday?",
          "What are you going to do tomorrow?",
          "Have you finished your homework?",
          "Can you help me?",
          "Why are you late?",
          "What time does the class start?",
        ],
      },
    ],
  },
];

//

//
const CONVERSATIONS = [
  {
    id: "conv-1",
    category: "Introductions",
    level: "Easy",
    title: "Meeting a New Classmate",
    pashtoTitle: "له نوي ټولګیوال سره پېژندنه",
    description:
      "Practice greeting, giving your name, asking where someone is from, and talking about studies.",
    lines: [
      ["Hamdurahman", "Hello! My name is Hamdurahman. What's your name?"],
      ["Kalsoom", "Hi! I'm Kalsoom. Nice to meet you."],
      ["Hamdurahman", "Nice to meet you, too. Are you a new student?"],
      ["Kalsoom", "Yes, I am. This is my first week here."],
      ["Hamdurahman", "Where are you from?"],
      ["Kalsoom", "I am from Afghanistan. How about you?"],
      ["Hamdurahman", "I am from Afghanistan, too. What do you like to study?"],
      ["Kalsoom", "I like English because I want to speak with more people."],
      ["Hamdurahman", "That's great. Let's practice together!"],
      ["Kalsoom", "Yes! That sounds good."],
    ],
  },
  {
    id: "conv-2",
    category: "Daily Life",
    level: "Easy",
    title: "Talking About a Daily Routine",
    pashtoTitle: "د ورځني کارونو په اړه خبرې",
    description:
      "Practice asking and answering about everyday activities and time.",
    lines: [
      ["Student A", "Good morning! What time do you get up?"],
      ["Student B", "I get up at seven o'clock."],
      ["Student A", "What do you do after breakfast?"],
      ["Student B", "I go to class and study English."],
      ["Student A", "When do you finish class?"],
      ["Student B", "I finish at one o'clock."],
      ["Student A", "What do you do in the afternoon?"],
      ["Student B", "I read, practice speaking, and help my family."],
    ],
  },
  {
    id: "conv-3",
    category: "Family",
    level: "Easy",
    title: "Talking About Family",
    pashtoTitle: "د کورنۍ په اړه خبرې",
    description:
      "Practice talking about family members and asking simple questions.",
    lines: [
      ["Amina", "Do you have a big family?"],
      ["Farid", "Yes, I do. I have three brothers and two sisters."],
      ["Amina", "That is a big family! Who is the oldest?"],
      ["Farid", "My oldest brother is a teacher."],
      ["Amina", "What does your father do?"],
      ["Farid", "He works in a small business."],
      ["Amina", "Do you live together?"],
      ["Farid", "Yes, we live in the same house."],
    ],
  },
  {
    id: "conv-4",
    category: "School",
    level: "Easy",
    title: "In the English Classroom",
    pashtoTitle: "د انګلیسي ټولګي خبرې",
    description: "Practice useful classroom questions and instructions.",
    lines: [
      ["Teacher", "Good morning, students."],
      ["Students", "Good morning, teacher."],
      ["Teacher", "Please open your books to Unit One."],
      ["Student", "Which page is Unit One on?"],
      ["Teacher", "It starts on page five."],
      ["Student", "Can you repeat the question, please?"],
      ["Teacher", "Of course. Listen carefully and repeat after me."],
      ["Students", "Thank you, teacher."],
    ],
  },
  {
    id: "conv-5",
    category: "Food",
    level: "Easy",
    title: "Ordering Breakfast",
    pashtoTitle: "د ناشتې غوښتل",
    description: "Practice ordering simple food and drinks politely.",
    lines: [
      ["Customer", "Good morning. Can I have breakfast, please?"],
      ["Server", "Of course. What would you like?"],
      ["Customer", "I would like bread, eggs, and tea."],
      ["Server", "Would you like sugar in your tea?"],
      ["Customer", "Yes, please. Just a little."],
      ["Server", "Anything else?"],
      ["Customer", "No, thank you. That's all."],
      ["Server", "Your breakfast will be ready soon."],
    ],
  },
  {
    id: "conv-6",
    category: "Shopping",
    level: "Easy",
    title: "Buying a Shirt",
    pashtoTitle: "د کميس پېرودل",
    description: "Practice asking about price, color, and size in a shop.",
    lines: [
      ["Customer", "Excuse me, how much is this shirt?"],
      ["Shopkeeper", "It is ten dollars."],
      ["Customer", "Do you have it in blue?"],
      ["Shopkeeper", "Yes. What size do you need?"],
      ["Customer", "I need a medium size."],
      ["Shopkeeper", "Here you are. Would you like to try it on?"],
      ["Customer", "Yes, please."],
      ["Customer", "It fits well. I will take it."],
    ],
  },
  {
    id: "conv-7",
    category: "Travel",
    level: "Beginner",
    title: "At the Bus Station",
    pashtoTitle: "د بس په تمځای کې",
    description:
      "Practice asking for a destination, departure time, and ticket.",
    lines: [
      ["Traveler", "Excuse me, where does this bus go?"],
      ["Driver", "It goes to the city center."],
      ["Traveler", "What time does it leave?"],
      ["Driver", "It leaves at ten o'clock."],
      ["Traveler", "How much is a ticket?"],
      ["Driver", "It is two dollars."],
      ["Traveler", "Okay. One ticket, please."],
      ["Driver", "Here is your ticket. Have a good trip."],
    ],
  },
  {
    id: "conv-8",
    category: "Time & Plans",
    level: "Beginner",
    title: "Making a Weekend Plan",
    pashtoTitle: "د اونۍ پای پلان جوړول",
    description: "Practice future plans with be going to.",
    lines: [
      ["Laila", "What are you going to do this weekend?"],
      ["Sahar", "I am going to visit my aunt."],
      ["Laila", "Where does she live?"],
      ["Sahar", "She lives near the park."],
      ["Laila", "Are you going to go by bus?"],
      ["Sahar", "No, my brother is going to drive me there."],
      ["Laila", "What are you going to do after the visit?"],
      ["Sahar", "I am going to come home and study English."],
    ],
  },
  {
    id: "conv-9",
    category: "Weather",
    level: "Easy",
    title: "Talking About the Weather",
    pashtoTitle: "د هوا په اړه خبرې",
    description: "Practice describing today's weather and choosing activities.",
    lines: [
      ["Ali", "What is the weather like today?"],
      ["Omar", "It is sunny and warm."],
      ["Ali", "That sounds nice. Is it windy?"],
      ["Omar", "A little, but not very windy."],
      ["Ali", "Are you going outside?"],
      ["Omar", "Yes, I am going to play football this afternoon."],
      ["Ali", "Great! I hope you have fun."],
      ["Omar", "Thanks. Maybe you can join us."],
    ],
  },
  {
    id: "conv-10",
    category: "Health",
    level: "Beginner",
    title: "Feeling Tired",
    pashtoTitle: "د ستړیا په اړه خبرې",
    description:
      "Practice a simple conversation about how you feel and what you need.",
    lines: [
      ["Sara", "Hi, you look tired today. Are you okay?"],
      ["Maryam", "Yes, I am okay, but I did not sleep well."],
      ["Sara", "Do you have a headache?"],
      ["Maryam", "No, I just feel very tired."],
      ["Sara", "You should rest after class."],
      ["Maryam", "Yes, I am going to go home early."],
      ["Sara", "Drink some water and get some rest."],
      ["Maryam", "Thank you. I will."],
    ],
  },
];

const STORIES = [
  {
    id: "story-1",
    title: "The Little Blue Book",
    pashtoTitle: "کوچنی آبي کتاب",
    level: "Beginner",
    text: "Mina has a little blue book. She takes it to school every day. In the morning, she reads one page. After class, she practices five new words with her friend. One day, her teacher asks, “What are you going to study tonight?” Mina smiles and says, “I am going to read my blue book.” Her friend says, “I am going to practice with you.” They go home happy and study together.",
  },
  {
    id: "story-2",
    title: "A Visit to the Market",
    pashtoTitle: "بازار ته سفر",
    level: "Beginner",
    text: "Ali is at the market with his sister. They need bread, milk, apples, and water. Ali asks, “How much is the bread?” The shopkeeper answers, “It is two dollars.” After they buy the food, they walk home. Yesterday, Ali was tired, but today he is happy because he can help his family.",
  },
  {
    id: "story-3",
    title: "The Helpful Student",
    pashtoTitle: "مرستندوی زده کوونکی",
    level: "Beginner",
    text: "Sara is a helpful student. She comes to school early. Her books are on the desk and her bag is under the chair. She helps her friend find a pencil. Then the teacher asks, “Where is your notebook?” Sara says, “It is in my bag.” After class, Sara is going to visit the library. She wants to read a simple English story.",
  },
];
