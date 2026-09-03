// EDIT THIS FILE when you want to add or change lessons.
// You can add Unit 6, Unit 7, etc. without changing script.js.
const units = [
  {
    id: 1,
    title: "Prepositions & Information Questions",
    preview: "under, over, at, in • who, what, where, when, why, which, how, whose",
    sections: [
      {title:"Prepositions: under, over, at, in", definition:"These prepositions show the location of something.", pashto:"دا حروف اضافه د یو شي ځای یا موقعیت ښيي.", examples:["The cat is under the desk.","My pen is in my bag.","The birds fly over the cloud.","Ali sits at the table."]},
      {title:"Information questions in simple present", definition:"Put a Wh word (who, what, where, when, why, which, how, whose) in front of a yes/no question to form an information question.", pashto:"د معلوماتي پوښتنې لپاره د who, what, where, when, why, which, how, whose څخه یو Wh word د yes/no پوښتنې په پیل کې وکاروئ.", examples:["Does she work at a bank? → Where does she work?","Do they help students? → Whom do they help?","Does Sabir register the names? → What does Sabir register?","Do they go to school by bus? → How do they go to school?","Does she call her sister? → Who does she call?"]},
      {title:"Note", definition:"Whom is used in formal writing for an object. Who is commonly used in conversation.", pashto:"Whom په رسمي لیکنو کې د object لپاره کارېږي. Who په خبرو اترو کې ډېر عام دی.", examples:[]}
    ]
  },
  {
    id: 2,
    title: "When, Time & Months",
    preview: "when • before/after • clock time • parts of the day • 12 months",
    sections: [
      {title:"When", definition:"When is used to ask about time.", pashto:"When د وخت په اړه د پوښتنې لپاره کارېږي.", examples:["When do you go to class? → At 7 in the morning.","When does Mustafa start English class? → After this Friday.","When do they arrive in Kabul? → On 4th of July, 2022."]},
      {title:"Before & after", definition:"Before and after show the order of actions.", pashto:"Before او after د کړنو ترتیب ښيي.", examples:[]},
      {title:"Time expressions", definition:"What time is it? asks about time. O'clock shows complete hours. After shows passed minutes. To shows remaining minutes. Half means 30 minutes. Quarter means 15 minutes.", pashto:"What time is it? د وخت پوښتنه کوي. O'clock بشپړ ساعت ښيي. After تېرې شوې دقیقې ښيي. To پاتې دقیقې ښيي. Half دېرش دقیقې او quarter پنځلس دقیقې معنا لري.", examples:["It is 4 o'clock. → 04:00","It is fifteen after ten. → 10:15","It is ten to five. → 04:50","It is half past seven. → 07:30","It is quarter to twelve. → 11:45","Official time: It is ten twenty. → 10:20"]},
      {title:"Parts of the day", definition:"Use at with noon and night. Use in with the morning, the afternoon, and the evening.", pashto:"له noon او night سره at وکاروئ. له morning، afternoon او evening سره in وکاروئ.", examples:[]},
      {title:"Months", definition:"There are twelve months: January, February, March, April, May, June, July, August, September, October, November, December. Use in with months.", pashto:"د کال دولس میاشتې دي. له میاشتو سره in کارېږي.", examples:[]}
    ]
  },
  {
    id: 3,
    title: "Future: Be Going To",
    preview: "am/is/are going to • future plans • negatives • yes/no questions",
    sections: [
      {title:"Be going to", definition:"Be means is, am, are. Be going to shows an action in the future. Use the simple form of the verb.", pashto:"Be د is، am، are په معنا کارېږي. Be going to د راتلونکي عمل ښودلو لپاره کارېږي. له going to وروسته د فعل ساده بڼه راځي.", examples:["I am going to buy a laptop next month.","She is going to order food online tomorrow.","They are going to go to the park next week."]},
      {title:"Future time expressions", definition:"Examples include tomorrow, tomorrow morning, tomorrow afternoon, next week, next month, and next year.", pashto:"د راتلونکي وخت بېلګې: سبا، سبا سهار، سبا ماسپښین، راتلونکې اوونۍ، راتلونکې میاشت او راتلونکی کال.", examples:[]},
      {title:"Negative", definition:"Use not after the be verb. Is not = isn't. Are not = aren't.", pashto:"not د be verb وروسته راځي. Is not لنډه بڼه isn't او are not لنډه بڼه aren't ده.", examples:["She is not going to invite you tomorrow.","They are not going to prepare for the exam next day.","I am not going to help you tonight."]},
      {title:"Yes/no questions", definition:"Put the be verb before the subject.", pashto:"په yes/no پوښتنو کې be verb د subject څخه مخکې راځي.", examples:["Is he going to paint that wall tomorrow?","Are they going to eat at a restaurant next day?","Am I going to write an email?"]}
    ]
  },
  {
    id: 4,
    title: "Information Questions: Going To",
    preview: "who, what, where, when, why, which, how, whose + going to",
    sections: [
      {title:"Information questions", definition:"Use a Wh word at the beginning of information questions with be going to.", pashto:"د be going to معلوماتي پوښتنو په پیل کې Wh word وکاروئ.", examples:["Who is going to help you?","Whom is Iqbal going to call?","How are you going to write a topic?","When is she going to watch TV?","Where are we going to visit Ali?"]},
      {title:"Short answers", definition:"In short answers, don't repeat any word from the question.", pashto:"په لنډو ځوابونو کې د پوښتنې کلمې مه تکراروئ.", examples:["Who is she going to help? → Ali.","Whom is Iqbal going to call? → You.","How are you going to write a topic? → With your help.","When is she going to watch TV? → At 7 pm.","Where are we going to visit Ali? → At bank."]}
    ]
  },
  {
    id: 5,
    title: "Past of Be: Was & Were",
    preview: "was/were • past time expressions • negatives • questions • short answers",
    sections: [
      {title:"Was & were", definition:"Be means is, am, are. The past of be is was, were. Use was with I, he, she, it. Use were with we, you, they.", pashto:"Be د is، am، are په معنا کارېږي. د be تېر وخت was او were دي. Was له I, he, she, it سره او were له we, you, they سره کارېږي.", examples:["I was a clerk last year.","She was single last month.","He was at home yesterday.","They were alive last year.","We were absent last Friday.","You were at hospital at 4 pm."]},
      {title:"Past time expressions", definition:"Use expressions such as yesterday, yesterday morning, last night, last week, and last month.", pashto:"د تېر وخت لپاره yesterday، yesterday morning، last night، last week او last month په شان عبارتونه کارېږي.", examples:[]},
      {title:"Negative", definition:"Add not to was or were.", pashto:"د was یا were لپاره د منفي جملې په جوړولو کې not ورزیات کړئ.", examples:["She wasn't happy last week.","They weren't at bank last Friday."]},
      {title:"Yes/no questions", definition:"Put was or were in the first position.", pashto:"Was یا were د پوښتنې په لومړي ځای کې راولئ.", examples:["Was she at her village last month?","Were they at your home last night?"]},
      {title:"Short answers", definition:"Affirmative answers end with was/were. Negative answers end with wasn't/weren't.", pashto:"مثبت لنډ ځوابونه په was/were او منفي لنډ ځوابونه په wasn't/weren't پای ته رسېږي.", examples:["Was Ali a student last year? → Yes, he was.","Was Ali a student last year? → No, he wasn't."]},
      {title:"Information questions", definition:"Put the Wh word first.", pashto:"Wh word د معلوماتي پوښتنې په لومړي ځای کې راولئ.", examples:["Where was she yesterday?","When was your birthday?","How were they last night?","What was in your bag?","Who was your teacher?"]}
    ]
  }
];