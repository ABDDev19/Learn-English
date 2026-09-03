// Edit this file to change lessons. Keep the same object structure.
const LESSONS = [
  {
    id: "unit-1",
    unit: "Unit 1",
    title: "Location & Information Questions",
    subtitle: "Use in, at, on, under and over to talk about place.",
    topic: "Prepositions of location + Wh- questions",
    intro: "Learn how to ask where someone or something is and how to give a simple location.",
    sections: [
      {
        title: "Location words",
        pashto: "د ځای لپاره کارېدونکي توري",
        rules: [
          "Use in for something inside a place.",
          "Use at for a point or a specific place.",
          "Use on for a surface.",
          "Use under for something below another thing.",
          "Use over for something above another thing."
        ],
        examples: [
          "The book is in the bag.",
          "She is at school.",
          "The phone is on the table.",
          "The shoes are under the bed.",
          "The lamp is over the desk."
        ]
      },
      {
        title: "Information questions",
        pashto: "د معلوماتو پوښتنې",
        rules: [
          "Common question words include who, what, where, when, why, which, how, and whose.",
          "In simple present questions, use do/does before the subject when a main verb is needed.",
          "Whom is more formal; who is common in conversation."
        ],
        examples: [
          "Where does she work?",
          "What does Sabir register?",
          "How do they go to school?",
          "Who does she call?",
          "Whose book is this?"
        ]
      }
    ]
  },
  {
    id: "unit-2",
    unit: "Unit 2",
    title: "Time, Clock & Months",
    subtitle: "Talk about time, order and the months of the year.",
    topic: "When + time expressions + months",
    intro: "Practice asking when, telling the time, and using before, after and in with months.",
    sections: [
      {
        title: "Time expressions",
        pashto: "د وخت عبارتونه",
        rules: [
          "Use o'clock for exact hours.",
          "Use after and to to describe minutes around the hour.",
          "Use half past for :30 and quarter past/to for :15 and :45.",
          "Use at with noon and night; use in with morning, afternoon and evening.",
          "Use in with months."
        ],
        examples: [
          "It is four o'clock.",
          "It is a quarter past ten.",
          "It is ten to five.",
          "It is half past seven.",
          "We study in September."
        ]
      },
      {
        title: "Before and after",
        pashto: "مخکې او وروسته",
        rules: [
          "Before tells us that one event happens earlier.",
          "After tells us that one event happens later."
        ],
        examples: [
          "I eat breakfast before school.",
          "We play after class.",
          "She calls me after dinner."
        ]
      }
    ]
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
          "For yes/no questions, put am/is/are before the subject."
        ],
        examples: [
          "I am going to study tonight.",
          "She is going to visit her aunt.",
          "They are going to play football.",
          "He is not going to travel tomorrow.",
          "Are you going to read?"
        ]
      }
    ]
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
          "Short answers answer the question directly and do not repeat the Wh-word."
        ],
        examples: [
          "What are you going to study?",
          "Where is she going to work?",
          "When are they going to arrive?",
          "Why is he going to leave?",
          "How are you going to travel?"
        ]
      }
    ]
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
          "For yes/no questions, put was/were before the subject."
        ],
        examples: [
          "I was at home yesterday.",
          "She was tired last night.",
          "We were at school.",
          "They weren't late.",
          "Were you busy yesterday?"
        ]
      }
    ]
  }
];

const CONVERSATIONS = [
  {
    id:"conv-1", category:"Introductions", level:"Easy",
    title:"Meeting a New Classmate", pashtoTitle:"له نوي ټولګیوال سره پېژندنه",
    description:"Practice greeting, giving your name, asking where someone is from, and talking about studies.",
    lines:[
      ["Hamdurahman","Hello! My name is Hamdurahman. What's your name?"],
      ["Kalsoom","Hi! I'm Kalsoom. Nice to meet you."],
      ["Hamdurahman","Nice to meet you, too. Are you a new student?"],
      ["Kalsoom","Yes, I am. This is my first week here."],
      ["Hamdurahman","Where are you from?"],
      ["Kalsoom","I am from Afghanistan. How about you?"],
      ["Hamdurahman","I am from Afghanistan, too. What do you like to study?"],
      ["Kalsoom","I like English because I want to speak with more people."],
      ["Hamdurahman","That's great. Let's practice together!"],
      ["Kalsoom","Yes! That sounds good."]
    ]
  },
  {
    id:"conv-2", category:"Daily Life", level:"Easy",
    title:"Talking About a Daily Routine", pashtoTitle:"د ورځني کارونو په اړه خبرې",
    description:"Practice asking and answering about everyday activities and time.",
    lines:[
      ["Student A","Good morning! What time do you get up?"],
      ["Student B","I get up at seven o'clock."],
      ["Student A","What do you do after breakfast?"],
      ["Student B","I go to class and study English."],
      ["Student A","When do you finish class?"],
      ["Student B","I finish at one o'clock."],
      ["Student A","What do you do in the afternoon?"],
      ["Student B","I read, practice speaking, and help my family."]
    ]
  },
  {
    id:"conv-3", category:"Family", level:"Easy",
    title:"Talking About Family", pashtoTitle:"د کورنۍ په اړه خبرې",
    description:"Practice talking about family members and asking simple questions.",
    lines:[
      ["Amina","Do you have a big family?"],
      ["Farid","Yes, I do. I have three brothers and two sisters."],
      ["Amina","That is a big family! Who is the oldest?"],
      ["Farid","My oldest brother is a teacher."],
      ["Amina","What does your father do?"],
      ["Farid","He works in a small business."],
      ["Amina","Do you live together?"],
      ["Farid","Yes, we live in the same house."]
    ]
  },
  {
    id:"conv-4", category:"School", level:"Easy",
    title:"In the English Classroom", pashtoTitle:"د انګلیسي ټولګي خبرې",
    description:"Practice useful classroom questions and instructions.",
    lines:[
      ["Teacher","Good morning, students."],
      ["Students","Good morning, teacher."],
      ["Teacher","Please open your books to Unit One."],
      ["Student","Which page is Unit One on?"],
      ["Teacher","It starts on page five."],
      ["Student","Can you repeat the question, please?"],
      ["Teacher","Of course. Listen carefully and repeat after me."],
      ["Students","Thank you, teacher."]
    ]
  },
  {
    id:"conv-5", category:"Food", level:"Easy",
    title:"Ordering Breakfast", pashtoTitle:"د ناشتې غوښتل",
    description:"Practice ordering simple food and drinks politely.",
    lines:[
      ["Customer","Good morning. Can I have breakfast, please?"],
      ["Server","Of course. What would you like?"],
      ["Customer","I would like bread, eggs, and tea."],
      ["Server","Would you like sugar in your tea?"],
      ["Customer","Yes, please. Just a little."],
      ["Server","Anything else?"],
      ["Customer","No, thank you. That's all."],
      ["Server","Your breakfast will be ready soon."]
    ]
  },
  {
    id:"conv-6", category:"Shopping", level:"Easy",
    title:"Buying a Shirt", pashtoTitle:"د کميس پېرودل",
    description:"Practice asking about price, color, and size in a shop.",
    lines:[
      ["Customer","Excuse me, how much is this shirt?"],
      ["Shopkeeper","It is ten dollars."],
      ["Customer","Do you have it in blue?"],
      ["Shopkeeper","Yes. What size do you need?"],
      ["Customer","I need a medium size."],
      ["Shopkeeper","Here you are. Would you like to try it on?"],
      ["Customer","Yes, please."],
      ["Customer","It fits well. I will take it."]
    ]
  },
  {
    id:"conv-7", category:"Travel", level:"Beginner",
    title:"At the Bus Station", pashtoTitle:"د بس په تمځای کې",
    description:"Practice asking for a destination, departure time, and ticket.",
    lines:[
      ["Traveler","Excuse me, where does this bus go?"],
      ["Driver","It goes to the city center."],
      ["Traveler","What time does it leave?"],
      ["Driver","It leaves at ten o'clock."],
      ["Traveler","How much is a ticket?"],
      ["Driver","It is two dollars."],
      ["Traveler","Okay. One ticket, please."],
      ["Driver","Here is your ticket. Have a good trip."]
    ]
  },
  {
    id:"conv-8", category:"Time & Plans", level:"Beginner",
    title:"Making a Weekend Plan", pashtoTitle:"د اونۍ پای پلان جوړول",
    description:"Practice future plans with be going to.",
    lines:[
      ["Laila","What are you going to do this weekend?"],
      ["Sahar","I am going to visit my aunt."],
      ["Laila","Where does she live?"],
      ["Sahar","She lives near the park."],
      ["Laila","Are you going to go by bus?"],
      ["Sahar","No, my brother is going to drive me there."],
      ["Laila","What are you going to do after the visit?"],
      ["Sahar","I am going to come home and study English."]
    ]
  },
  {
    id:"conv-9", category:"Weather", level:"Easy",
    title:"Talking About the Weather", pashtoTitle:"د هوا په اړه خبرې",
    description:"Practice describing today's weather and choosing activities.",
    lines:[
      ["Ali","What is the weather like today?"],
      ["Omar","It is sunny and warm."],
      ["Ali","That sounds nice. Is it windy?"],
      ["Omar","A little, but not very windy."],
      ["Ali","Are you going outside?"],
      ["Omar","Yes, I am going to play football this afternoon."],
      ["Ali","Great! I hope you have fun."],
      ["Omar","Thanks. Maybe you can join us."]
    ]
  },
  {
    id:"conv-10", category:"Health", level:"Beginner",
    title:"Feeling Tired", pashtoTitle:"د ستړیا په اړه خبرې",
    description:"Practice a simple conversation about how you feel and what you need.",
    lines:[
      ["Sara","Hi, you look tired today. Are you okay?"],
      ["Maryam","Yes, I am okay, but I did not sleep well."],
      ["Sara","Do you have a headache?"],
      ["Maryam","No, I just feel very tired."],
      ["Sara","You should rest after class."],
      ["Maryam","Yes, I am going to go home early."],
      ["Sara","Drink some water and get some rest."],
      ["Maryam","Thank you. I will."]
    ]
  }
];

const STORIES = [
  {
    id:"story-1",
    title:"The Little Blue Book",
    pashtoTitle:"کوچنی آبي کتاب",
    level:"Beginner",
    text:"Mina has a little blue book. She takes it to school every day. In the morning, she reads one page. After class, she practices five new words with her friend. One day, her teacher asks, “What are you going to study tonight?” Mina smiles and says, “I am going to read my blue book.” Her friend says, “I am going to practice with you.” They go home happy and study together."
  },
  {
    id:"story-2",
    title:"A Visit to the Market",
    pashtoTitle:"بازار ته سفر",
    level:"Beginner",
    text:"Ali is at the market with his sister. They need bread, milk, apples, and water. Ali asks, “How much is the bread?” The shopkeeper answers, “It is two dollars.” After they buy the food, they walk home. Yesterday, Ali was tired, but today he is happy because he can help his family."
  },
  {
    id:"story-3",
    title:"The Helpful Student",
    pashtoTitle:"مرستندوی زده کوونکی",
    level:"Beginner",
    text:"Sara is a helpful student. She comes to school early. Her books are on the desk and her bag is under the chair. She helps her friend find a pencil. Then the teacher asks, “Where is your notebook?” Sara says, “It is in my bag.” After class, Sara is going to visit the library. She wants to read a simple English story."
  }
];
