// variables
let questionsEl = document.getElementById("questions");
let choiceOne = document.getElementById("choiceOne");
let choiceTwo = document.getElementById("choiceTwo");
let choiceThree = document.getElementById("choiceThree");
let choiceFour = document.getElementById("choiceFour");
let startBtn = document.querySelector("#start");
let submitBtn = document.getElementById("submit");
let clearBtn = document.getElementById("clear");
let timerEl = document.getElementById("timer");
let resultEnd = document.getElementById("result");
let startContainer = document.getElementById("startContainer");
let endContainer = document.getElementById("endContainer");
let questionColumn = document.getElementById("questionColumn");
let highScoreColumn = document.getElementById("highScoreColumn");
let endScreen = document.getElementById("endscrn");

let countdown = 60;
let questions = [
  {
    title: "Where can you find Elephants?",
    choices: [
      "Africa and Europe",
      "North and South America",
      "Australia",
      "Asia & Africa",
    ],
    answer: "Asia & Africa",
  },
  {
    title: "How long can Elephants live for?",
    choices: ["10 years", "20 years", "50 years", "70 years"],
    answer: "70 years",
  },
  {
    title: "On average, how long can elephants be pregnant for?",
    choices: ["24 months", "12 months", "6 months", "22 months"],
    answer: "22 months",
  },
  {
    title: "How do Elephants communicate wih each other?",
    choices: ["Voice call", "scent", "infrasonic rumbling", "All of the above"],
    answer: "All of the above",
  },
  {
    title: "How many hours a day do elephants spend eating?",
    choices: ["24 hours", "12 hours", "18 hours", "5 hours"],
    answer: "18 hours",
  },
];
let currentQuestion = 0;
let sndCorrect = new Audio("../codequiz/assets/sound/correct.wav");
let sndWrong = new Audio("../codequiz/assets/sound/wrong.wav");

function beginQuix() {
  startContainer.setAttribute("class", "hide");
  questionColumn.setAttribute("class", "container");
  resultEnd.setAttribute("class", "result");
  endScreen.removeAttribute("class");

  countdown = 60;
  currentQuestion = 0;
  timerStart();
  questionChoices();
}

function questionChoices() {
  let previousAnswer = this.textContent;
  if (currentQuestion != 0) {
    if (previousAnswer == questions[currentQuestion - 1].answer) {
      resultEnd.textContent = "correct!";
      sndCorrect.play();
      console.log("correct");
    } else {
      resultEnd.textContent = "wrong!";
      sndWrong.play();
      console.log("incorrect");
      countdown -= 10;
    }
  }
  if (currentQuestion < 5) {
    questionsEl.textContent = questions[currentQuestion].title;
    choiceOne.textContent = questions[currentQuestion].choices[0];
    choiceTwo.textContent = questions[currentQuestion].choices[1];
    choiceThree.textContent = questions[currentQuestion].choices[2];
    choiceFour.textContent = questions[currentQuestion].choices[3];
  }
  // move to next question
  currentQuestion++;
}
function timerStart() {
  let interval = setInterval(function () {
    time.textContent = countdown;
    countdown--;
    if (countdown <= 0 || currentQuestion > 5) {
      clearInterval(interval);
      questionColumn.setAttribute("class", "hide");
      startContainer.setAttribute("class", "container");
      resultEnd.setAttribute("class", "hide");
    }
  }, 1000);
}

startBtn.addEventListener("click", beginQuix);
choiceOne.addEventListener("click", questionChoices);
choiceTwo.addEventListener("click", questionChoices);
choiceThree.addEventListener("click", questionChoices);
choiceFour.addEventListener("click", questionChoices);

// hide start page to show final score and enter initials
//end of quiz
function quizEnd() {
  clearInterval(timerId);
  startContainer.setAttribute("class", "hide");
  endScreen.setAttribute("class", "container");
}

function clockTick() {
  // update time
  time--;
  timerEl.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}
