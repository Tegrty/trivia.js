// Selects element by class
let timeEl = document.querySelector("#secLeft");
let startButton = document.querySelector("#startGame")
let leftCard = document.querySelector(".left")
let answerContainer = document.querySelector(".answer-container")
let cards = document.querySelector(".card")
let input = document.querySelector("#input")
// Global variables
let secondsLeft = 15;
let correctAnswers = 0;
let wrongAnswers = 0;
let counter = 0;
let theQuestions = [
    {
        question: "What year was javascript founded?",

        answers: [
             '1985',
             '1995',
             '2005',
             '2015',
        ],

        correctAnswer: '1995'
    },

    {
        question: "What notation is used to declare a variable?",

        answers: [
             "let",
             "bet",
             "set",
             "pet",
    ],

        correctAnswer: "let"
    },

    {
        question: "What is a bug in javascript?",

        answers: [
             "an insect on screen",
             "a nagging partner",
             "anything that causes the program to run incorrectly",
             "a hidden microphone",
        ],

        correctAnswer: "anything that causes the program to run incorrectly"

    },
]

function showQuestions() {
    let activeQuestion = theQuestions[counter]
    let questionElement = document.createElement("p");
    questionElement.setAttribute("class","question");
    questionElement.textContent = activeQuestion.question;
    leftCard.appendChild(questionElement);
}

function showAnswers() {
    let activeAnswer = theQuestions[counter];
    for (var i = 0; i < activeAnswer.answers.length; i++) {
         let answerElement = document.createElement("button");
    answerElement.setAttribute("class","answer");
    answerElement.textContent = activeAnswer.answers[i]
    leftCard.appendChild(answerElement);
    answerElement.addEventListener("click", checkAnswer);

    }
   
function checkAnswer(event) {
    let activeAnswer = theQuestions[counter];
    if (event.target.textContent != activeAnswer.correctAnswer) {
        
        secondsLeft = secondsLeft - 5
        console.log(wrongAnswers++)
    }
    else {
        
        console.log(correctAnswers++)
    }
    counter++
    showQuestions();
    showAnswers();

}


    // let list = document.createElement('ul')

    // for (var i = 0; i < answers.length; i++) {
    //     var item = document.createElement('li');

    //     item.appendChild(document.textContent(answers[i]));

    //     list.appendChild(item);
    // }


}

function gameOver() {
    cards.setAttribute("class", "hide-element");
    input.removeAttribute("class");
}

function endQuestions() {
    if(correctAnswers + wrongAnswers >= 3) {
    gameOver()
}
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

    if(secondsLeft <= 0) {
        timeEl.textContent = "Enter your initials for High score"
        gameOver()
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    
    }

  }, 1000);
}



startButton.addEventListener("click", gameStart);