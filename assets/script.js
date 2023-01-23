// Selects element by class
let timeEl = document.querySelector("#secLeft");
let startButton = document.querySelector("#startGame")
let leftCard = document.querySelector(".left")
// Global variables
let secondsLeft = 5;
let correctAnswers = "";
let wrongAnswers = "";
let counter = 0;
let theQuestions = [
    {
        question: "What year was javascript founded?",

        answers: {
            a: '1985',
            b: '1995',
            c: '2005',
            d: '2015',
        },

        correctAnswer: 'b'
    },

    {
        question: "What notation is used to declare a variable?",

        answers: {
            a: "let",
            b: "bet",
            c: "set",
            d: "pet",
        },

        correctAnswer: "a"
    },

    {
        question: "What is a bug in javascript?",

        answers: {
            a: "an insect on screen",
            b: "a nagging partner",
            c: "anything that causes the program to run incorrectly",
            d: "a hidden microphone",
        },

        correctAnswer: "c"

    },
]
// for (let i = 0; i < x; i++) {
//       // Enter code that will get run ‘x’ amount of times
//     }
function showQuestions() {
    let activeQuestion = theQuestions[counter]
    let questionElement = document.createElement("p");
    questionElement.setAttribute("class","question");
    questionElement.textContent = activeQuestion.question;
    leftCard.appendChild(questionElement);
}

function showAnswers() {
    let activeAnswer = theQuestions[counter];
    let answerElement = document.createElement("p");
    answerElement.setAttribute("class","answer");
    answerElement.textContent = activeAnswer.answers;
    leftCard.appendChild(answerElement);
}

function gameStart() {
    setTime();
    showQuestions();
    showAnswers();
}

function setTime() {
  // Sets interval in variable
  let timerInterval = setInterval(function() {
    secondsLeft--; //Decrements time left by 1
    timeEl.textContent = secondsLeft + " seconds remaining until failure.";

    if(secondsLeft === 0) {
        timeEl.textContent = "Failure"
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    
    }

  }, 1000);
}



startButton.addEventListener("click", gameStart);