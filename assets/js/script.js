var timerEl = document.querySelector('.timer')
var startEl = document.querySelector('#begin')
var firstQuestion = document.querySelector('#question-one')
var secondQuestion = document.querySelector('#question-two')
var thirdQuestion = document.querySelector('#question-three')
var fourthQuestion = document.querySelector('#question-four')
var resultOne = document.querySelector('.question-one-result')
var resultTwo = document.querySelector('.question-two-result')
var resultThree = document.querySelector('.question-three-result')
var resultFour = document.querySelector('.question-four-result')

var secondsLeft = 300

function beginQuiz() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds to go";

        if(secondsLeft === 0) {
            clearInterval(timerInterval)
            timerEl.textContent = "Tough luck! Care to try again?"
        }
    }, 1000)
}


startEl.addEventListener("click", beginQuiz)