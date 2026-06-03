// creating an array and passing the number, questions, options, and answers
let questions = [
  // === SUBJECT 1: GENERAL KNOWLEDGE (Questions 1-6) ===
  {
    numb: 1,
    question: "What is 2+2?",
    answer: "4",
    options: ["-2", "5", "4", "1"]
  },
  {
    numb: 2,
    question: "Who are you?",
    answer: "Human",
    options: ["Animal", "Human", "Male", "Female"]
  },
  {
    numb: 3,
    question: "Where do you find god?",
    answer: "In Parents",
    options: ["In Statue", "In Temple", "In Everyone", "In Parents"]
  },
  {
    numb: 4,
    question: "What is the correct website domain you find this Quiz Code?",
    answer: "www.riturajps.in",
    options: ["www.google.in", "www.riturajps.com", "t.me/riturajps", "www.riturajps.in"]
  },
  {
    numb: 5,
    question: "What does Three Zero Four Four Means?",
    answer: "Can't Say",
    options: ["0004444", "3044", "3,0,4,4", "Can't Say"]
  },
  {
    numb: 6,
    question: "Which language is primarily used for web development styling?",
    answer: "CSS",
    options: ["HTML", "CSS", "Python", "C++"]
  },

  // === SUBJECT 2: SCIENCE (Questions 7-12) ===
  {
    numb: 7,
    question: "What gas do plants absorb from the atmosphere for photosynthesis?",
    answer: "Carbon Dioxide",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"]
  },
  {
    numb: 8,
    question: "What is the chemical symbol for water?",
    answer: "H2O",
    options: ["CO2", "H2O", "NaCl", "O2"]
  },
  {
    numb: 9,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
    options: ["Venus", "Mars", "Jupiter", "Saturn"]
  },
  {
    numb: 10,
    question: "What is the hardest natural substance on Earth?",
    answer: "Diamond",
    options: ["Gold", "Iron", "Diamond", "Quartz"]
  },
  {
    numb: 11,
    question: "Which organ is responsible for pumping blood throughout the human body?",
    answer: "Heart",
    options: ["Lungs", "Brain", "Liver", "Heart"]
  },
  {
    numb: 12,
    question: "What is the primary source of energy for Earth's climate system?",
    answer: "The Sun",
    options: ["The Moon", "The Sun", "Geothermal Core", "Wind"]
  },

  // === SUBJECT 3: HISTORY (Questions 13-18) ===
  {
    numb: 13,
    question: "Who was the first President of the United States?",
    answer: "George Washington",
    options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"]
  },
  {
    numb: 14,
    question: "In which year did World War I begin?",
    answer: "1914",
    options: ["1914", "1918", "1939", "1945"]
  },
  {
    numb: 15,
    question: "Which ancient civilization built the Great Pyramids of Giza?",
    answer: "Egyptians",
    options: ["Romans", "Greeks", "Mayans", "Egyptians"]
  },
  {
    numb: 16,
    question: "Who was known as the 'Maid of Orleans'?",
    answer: "Joan of Arc",
    options: ["Marie Antoinette", "Joan of Arc", "Queen Elizabeth I", "Cleopatra"]
  },
  {
    numb: 17,
    question: "The Renaissance period primarily originated in which country?",
    answer: "Italy",
    options: ["France", "England", "Germany", "Italy"]
  },
  {
    numb: 18,
    question: "Who discovered America in 1492?",
    answer: "Christopher Columbus",
    options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "Marco Polo"]
  },

  // === SUBJECT 4: GEOGRAPHY (Questions 19-24) ===
  {
    numb: 19,
    question: "What is the capital city of France?",
    answer: "Paris",
    options: ["London", "Rome", "Berlin", "Paris"]
  },
  {
    numb: 20,
    question: "Which is the largest ocean on Earth?",
    answer: "Pacific Ocean",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"]
  },
  {
    numb: 21,
    question: "Which river is the longest in the world?",
    answer: "Nile River",
    options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"]
  },
  {
    numb: 22,
    question: "Which continent is the Sahara Desert located in?",
    answer: "Africa",
    options: ["Asia", "Africa", "Australia", "South America"]
  },
  {
    numb: 23,
    question: "What is the highest mountain peak in the world?",
    answer: "Mount Everest",
    options: ["K2", "Mount Kangchenjunga", "Mount Everest", "Mount Kilimanjaro"]
  },
  {
    numb: 24,
    question: "Which country is both an island and a continent?",
    answer: "Australia",
    options: ["Greenland", "Australia", "Iceland", "Madagascar"]
  },

  // === SUBJECT 5: TECHNOLOGY (Questions 25-30) ===
  {
    numb: 25,
    question: "What does CPU stand for?",
    answer: "Central Processing Unit",
    options: ["Central Process Unit", "Computer Processing Unit", "Central Processing Unit", "Control Processing Unit"]
  },
  {
    numb: 26,
    question: "Who is co-founder of Microsoft?",
    answer: "Bill Gates",
    options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"]
  },
  {
    numb: 27,
    question: "Which company developed the Android operating system?",
    answer: "Google",
    options: ["Apple", "Microsoft", "Google", "Samsung"]
  },
  {
    numb: 28,
    question: "What is the main purpose of a firewall in computer networks?",
    answer: "Security",
    options: ["Data Storage", "Security", "Increasing Speed", "Web Browsing"]
  },
  {
    numb: 29,
    question: "Which programming language is known as the 'backbone of the web' alongside HTML and CSS?",
    answer: "JavaScript",
    options: ["Python", "Java", "PHP", "JavaScript"]
  },
  {
    numb: 30,
    question: "What does 'WWW' stand for in a website URL?",
    answer: "World Wide Web",
    options: ["World Wide Web", "Word Wide Wave", "Western Washington Web", "World Wide Work"]
  }
];
