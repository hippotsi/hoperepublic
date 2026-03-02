





const quizzes = [
  {
    id: "general-knowledge",
    title: "General Knowledge Challenge",
    category: "General",
    description: "Test your brain power with these questions.",
    
    questions: [
      {
        id: 1,
        difficulty: "easy",
        question: "What is the capital of North Dakota?",
        options: ["Bismarck", "Fargo", "Grand Forks", "Minot"],
        answer: "Bismarck"
      },
      {
        id: 2,
        difficulty: "easy",
        question: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "HighText Machine Language",
          "Hyperlinks and Text Markup Language",
          "Home Tool Markup Language"
        ],
        answer: "HyperText Markup Language"
      },
      {
        id: 3,
        difficulty: "easy",
        question: "Which language runs in a web browser?",
        options: ["Python", "C++", "JavaScript", "Java"],
        answer: "JavaScript"
      },
      {
        id: 4,
        difficulty: "easy",
        question: "What sporting brand does Cristiano Ronaldo wear?",
        options: ["Nike", "New Balance", "Adidas", "Puma"],
        answer: "Nike"
      },
      {
        id: 5,
        difficulty: "easy",
        question: "What is the capital of the United Kingdom?",
        options: ["London", "Manchester", "Liverpool", "Birmingham"],
        answer: "London"
      },


      


      // =======   Add a comma above at the last curly bracket and add more questions; remember, all IDs are numbers only and not strings, remember to check for repeated IDs and counter check everything... Thank you! -Your Captain   =======
      {
        id: 1,
        difficulty: "easy",
        question: "Which club won the first Premier League title in 1992-93?",
        options: ["Manchester United", "Arsenal", "Liverpool", "Chelsea"],
        answer: "Manchester United"
      },
      {
        id: 2,
        difficulty: "easy",
        question: "Which team is nicknamed 'The Gunners'?",
        options: ["Chelsea", "Arsenal", "Tottenham Hotspur", "Everton"],
        answer: "Arsenal"
      },
      {
        id: 3,
        difficulty: "easy",
        question: "Which club won the Premier League in the 2003-04 season without losing a match?",
        options: ["Manchester City", "Chelsea", "Arsenal", "Manchester United"],
        answer: "Arsenal"
      },
      {
        id: 4,
        difficulty: "easy",
        question: "Which team won the Premier League title in the 2015-16 season in a surprise victory?",
        options: ["Leicester City", "Liverpool", "Tottenham Hotspur", "Arsenal"],
        answer: "Leicester City"
      },
      {
        id: 5,
        difficulty: "easy",
        question: "Which club has won the most Premier League titles?",
        options: ["Manchester United", "Chelsea", "Manchester City", "Liverpool"],
        answer: "Manchester United"
      },
      {
        id: 6,
        difficulty: "easy",
        question: "Which player is the Premier League's all-time top scorer?",
        options: ["Wayne Rooney", "Harry Kane", "Alan Shearer", "Sergio Aguero"],
        answer: "Alan Shearer"
      },
      {
        id: 7,
        difficulty: "easy",
        question: "Which team plays its home matches at Anfield?",
        options: ["Everton", "Liverpool", "West Ham United", "Aston Villa"],
        answer: "Liverpool"
      },
      {
        id: 8,
        difficulty: "easy",
        question: "Which club is based at Stamford Bridge?",
        options: ["Chelsea", "Fulham", "Crystal Palace", "Brighton"],
        answer: "Chelsea"
      },
      {
        id: 9,
        difficulty: "easy",
        question: "Which club won the Premier League in the 2019-20 season?",
        options: ["Manchester City", "Liverpool", "Chelsea", "Arsenal"],
        answer: "Liverpool"
      },
      {
        id: 10,
        difficulty: "easy",
        question: "Which manager led Manchester United to multiple Premier League titles in the 1990s and 2000s?",
        options: ["Arsene Wenger", "Jose Mourinho", "Sir Alex Ferguson", "Pep Guardiola"],
        answer: "Sir Alex Ferguson"
      },
      {
        id: 11,
        difficulty: "easy",
        question: "Which club won the Premier League title in 2022-23?",
        options: ["Arsenal", "Manchester City", "Liverpool", "Chelsea"],
        answer: "Manchester City"
      },
      {
        id: 12,
        difficulty: "easy",
        question: "Which club is nicknamed 'The Reds' and is based in Manchester?",
        options: ["Liverpool", "Manchester United", "Nottingham Forest", "Southampton"],
        answer: "Manchester United"
      },
      {
        id: 13,
        difficulty: "easy",
        question: "Which team won the Premier League in 2017-18 with a record 100 points?",
        options: ["Manchester City", "Chelsea", "Liverpool", "Tottenham Hotspur"],
        answer: "Manchester City"
      },
      {
        id: 14,
        difficulty: "easy",
        question: "Which London club won the Premier League in 2004-05 under Jose Mourinho?",
        options: ["Arsenal", "Tottenham Hotspur", "Chelsea", "West Ham United"],
        answer: "Chelsea"
      },
      {
        id: 15,
        difficulty: "easy",
        question: "Which club's home stadium is the Etihad Stadium?",
        options: ["Manchester United", "Manchester City", "Leeds United", "Newcastle United"],
        answer: "Manchester City"
      },
      {
        id: 16,
        difficulty: "easy",
        question: "Which club won back-to-back Premier League titles in 2007-08 and 2008-09?",
        options: ["Manchester United", "Chelsea", "Arsenal", "Liverpool"],
        answer: "Manchester United"
      },
      {
        id: 17,
        difficulty: "easy",
        question: "Which club is nicknamed 'The Blues' and plays at Goodison Park?",
        options: ["Chelsea", "Everton", "Manchester City", "Leicester City"],
        answer: "Everton"
      },
      {
        id: 18,
        difficulty: "easy",
        question: "Which player scored 32 goals in the 2017-18 season to win the Golden Boot?",
        options: ["Mohamed Salah", "Harry Kane", "Jamie Vardy", "Raheem Sterling"],
        answer: "Mohamed Salah"
      },
      {
        id: 19,
        difficulty: "easy",
        question: "Which club won the Premier League title in 2013-14?",
        options: ["Liverpool", "Manchester City", "Chelsea", "Arsenal"],
        answer: "Manchester City"
      },
      {
        id: 20,
        difficulty: "easy",
        question: "Which club returned to the Premier League and won the title in 2015-16?",
        options: ["Leicester City", "Norwich City", "Watford", "Burnley"],
        answer: "Leicester City"
      },
      {
        id: 21,
        difficulty: "easy",
        question: "Which club won the Premier League in 1997-98?",
        options: ["Arsenal", "Manchester United", "Chelsea", "Leeds United"],
        answer: "Arsenal"
      },
      {
        id: 22,
        difficulty: "easy",
        question: "Which stadium is home to Tottenham Hotspur since 2019?",
        options: ["Wembley Stadium", "Tottenham Hotspur Stadium", "Emirates Stadium", "London Stadium"],
        answer: "Tottenham Hotspur Stadium"
      },
      {
        id: 23,
        difficulty: "easy",
        question: "Which club won the Premier League title in 2014-15?",
        options: ["Chelsea", "Manchester City", "Arsenal", "Manchester United"],
        answer: "Chelsea"
      },
      {
        id: 24,
        difficulty: "easy",
        question: "Which team is known as 'The Magpies'?",
        options: ["Newcastle United", "Fulham", "Brighton", "Burnley"],
        answer: "Newcastle United"
      },
      {
        id: 25,
        difficulty: "easy",
        question: "Which player scored the famous last-minute goal to secure Manchester City's 2011-12 title?",
        options: ["Sergio Aguero", "Carlos Tevez", "David Silva", "Yaya Toure"],
        answer: "Sergio Aguero"
      },
      {
        id: 26,
        difficulty: "easy",
        question: "Which club won the Premier League in 2001-02?",
        options: ["Arsenal", "Manchester United", "Liverpool", "Chelsea"],
        answer: "Arsenal"
      },
      {
        id: 27,
        difficulty: "easy",
        question: "Which club finished second behind Arsenal's Invincibles in 2003-04?",
        options: ["Chelsea", "Manchester United", "Liverpool", "Leeds United"],
        answer: "Chelsea"
      },
      {
        id: 28,
        difficulty: "easy",
        question: "Which club won the Premier League in 1999-2000?",
        options: ["Manchester United", "Arsenal", "Leeds United", "Chelsea"],
        answer: "Manchester United"
      },
      {
        id: 29,
        difficulty: "easy",
        question: "Which club is based at the Emirates Stadium?",
        options: ["Arsenal", "Tottenham Hotspur", "Chelsea", "Crystal Palace"],
        answer: "Arsenal"
      },
      {
        id: 30,
        difficulty: "easy",
        question: "Which team won the Premier League in 2020-21?",
        options: ["Manchester City", "Liverpool", "Manchester United", "Chelsea"],
        answer: "Manchester City"
      },
      {
        id: 31,
        difficulty: "easy",
        question: "Which club won the Premier League title in 1994-95?",
        options: ["Blackburn Rovers", "Manchester United", "Arsenal", "Liverpool"],
        answer: "Blackburn Rovers"
      },
      {
        id: 32,
        difficulty: "easy",
        question: "Which club is known as 'The Hammers'?",
        options: ["West Ham United", "Sheffield United", "Aston Villa", "Brentford"],
        answer: "West Ham United"
      },
      {
        id: 33,
        difficulty: "easy",
        question: "Which club won the Premier League in 2009-10?",
        options: ["Chelsea", "Manchester United", "Arsenal", "Tottenham Hotspur"],
        answer: "Chelsea"
      },
      {
        id: 34,
        difficulty: "easy",
        question: "Which club won the Premier League in 2016-17?",
        options: ["Chelsea", "Manchester City", "Tottenham Hotspur", "Liverpool"],
        answer: "Chelsea"
      },
      {
        id: 35,
        difficulty: "easy",
        question: "Which club won the Premier League in 1995-96?",
        options: ["Manchester United", "Newcastle United", "Arsenal", "Leeds United"],
        answer: "Manchester United"
      },
      {
        id: 36,
        difficulty: "easy",
        question: "Which player won the Golden Boot in 2018-19 sharing it with Mane and Aubameyang?",
        options: ["Mohamed Salah", "Sadio Mane", "Pierre-Emerick Aubameyang", "Harry Kane"],
        answer: "Mohamed Salah"
      },
      {
        id: 37,
        difficulty: "easy",
        question: "Which club won the Premier League in 1998-99, completing the treble season?",
        options: ["Manchester United", "Arsenal", "Chelsea", "Liverpool"],
        answer: "Manchester United"
      },
      {
        id: 38,
        difficulty: "easy",
        question: "Which club won the Premier League in 2006-07?",
        options: ["Manchester United", "Chelsea", "Arsenal", "Liverpool"],
        answer: "Manchester United"
      },
      {
        id: 39,
        difficulty: "easy",
        question: "Which club won the Premier League in 2012-13?",
        options: ["Manchester United", "Manchester City", "Chelsea", "Arsenal"],
        answer: "Manchester United"
      },
      {
        id: 40,
        difficulty: "easy",
        question: "Which club won four consecutive Premier League titles from 2020-21 to 2023-24?",
        options: ["Manchester City", "Liverpool", "Chelsea", "Arsenal"],
        answer: "Manchester City"
      }
  




    ]
  }
];

module.exports = quizzes;






