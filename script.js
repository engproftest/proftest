const questions = [
  {
    question: "What are you most interested in?",
    options: [
      "Web Application Development",
      "Mobile application development",
      "Data Analysis",
      "Cybersecurity",
    ],
  },
  {
    question: "What is your preferred field of work?",
    options: ["Frontend", "Backend", "Databases", "Network Security"],
  },
  {
    question: "What would you like to do in your job?",
    options: [
      "Creating interfaces",
      "Writing code",
      "Analyzing data",
      "Protecting against hackers",
    ],
  },
  {
    question: "What skills do you already have?",
    options: [
      "HTML, CSS, JavaScript",
      "Java, Kotlin, Swift",
      "SQL, Python, R",
      "Firewalls, Penetration testing",
    ],
  },
  {
    question: "What is your experience in IT?",
    options: [
      "No experience",
      "Little experience (less than 1 year)",
      "Moderate experience (1-3 years)",
      "Extensive experience (more than 3 years)",
    ],
  },
  {
    question: "Which programming languages do you know?",
    options: [
      "HTML, CSS, JavaScript",
      "Java, Kotlin, Swift",
      "Python, R, SQL",
      "C++, C#, Ruby, PHP",
      "Others",
    ],
  },
  {
    question: "What do you prefer: frontend or backend?",
    options: ["Frontend", "Backend", "Full-stack"],
  },
];

let currentQuestion = 0;
let userAnswers = [];

const questionElem = document.getElementById("question");
const optionsElem = document.getElementById("options");
const restartBtn = document.getElementById("restart-btn");
const resultElem = document.getElementById("result");
const resultContainer = document.getElementById("result-container");

function showQuestion(questionIndex) {
  const question = questions[questionIndex];
  questionElem.textContent = question.question;
  optionsElem.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => {
      userAnswers[questionIndex] = index;
      if (questionIndex < questions.length - 1) {
        showQuestion(questionIndex + 1);
      } else {
        showResult();
      }
    });
    optionsElem.appendChild(button);
  });
}

function showResult() {
  const professions = [
    "Web Developer",
    "Mobile Developer",
    "Data Analyst",
    "Cybersecurity Specialist",
  ];
  const userScore = userAnswers.reduce((sum, answer) => sum + answer, 0);
  const professionIndex = Math.floor(userScore / questions.length);
  resultElem.textContent = professions[professionIndex];
  resultContainer.style.display = "block";
  restartBtn.style.display = "block";
}

restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  userAnswers = [];
  resultContainer.style.display = "none";
  restartBtn.style.display = "none";
  showQuestion(currentQuestion);
});

showQuestion(currentQuestion);
