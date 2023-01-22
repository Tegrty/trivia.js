// Selects element by class
let timeEl = document.querySelector("#secLeft");
let startButton = document.querySelector("#startGame")
// Global variables
let secondsLeft = 5;
let correctAnswers = "";
let wrongAnswers = "";
let theQuestions = [
    {
        question1: "What year was javascript founded?",

        answers1: {
            a: '1985',
            b: '1995',
            c: '2005',
            d: '2015',
        },

        correctAnswer1: 'b'
    },

    {
        question2: "What notation is used to declare a variable?",

        answers2: {
            a: "let",
            b: "bet",
            c: "set",
            d: "pet",
        },

        correctAnswer2: "a"
    },

    {
        question3: "What is a bug in javascript?",

        answers3: {
            a: "an insect on screen",
            b: "a nagging partner",
            c: "anything that causes the program to run incorrectly",
            d: "a hidden microphone",
        },

        correctAnswer3: "c"

    },
]

function showQuestions() {

}

function gameStart() {
    setTime();

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