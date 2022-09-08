var timerEl = document.querySelector('.timer');
var startEl = document.querySelector('#begin');
var results = document.querySelector('.results');

var firstQuestion = document.querySelector('#question-one');
var secondQuestion = document.querySelector('#question-two');
var thirdQuestion = document.querySelector('#question-three');
var fourthQuestion = document.querySelector('#question-four');

var secondsLeft = 300
var score = 0

function beginQuiz() {
    startEl.setAttribute('style', 'display:none;')
    firstQuestion.setAttribute('style', 'display:block;')
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds to go";

        if(secondsLeft === 0) {
            clearInterval(timerInterval)
            timerEl.textContent = "Time is up"
            firstQuestion.setAttribute('style', 'display:none;')
            secondQuestion.setAttribute('style', 'display:none;')
            thirdQuestion.setAttribute('style', 'display:none;')
            fourthQuestion.setAttribute('style', 'display:none;')
            results.textContent = "You have scored " + score + " out of 4"
            saveScore()

        }
    }, 1000)
}

        function incorrectOne() {
            firstQuestion.setAttribute('style', 'display:none;')
            secondQuestion.setAttribute('style', 'display:block;')
        }
        
        function correctOne() {
            firstQuestion.setAttribute('style', 'display:none;')
            secondQuestion.setAttribute('style', 'display:block;')
            score++
        }
        
        function incorrectTwo() {
            secondQuestion.setAttribute('style', 'display:none;')
            thirdQuestion.setAttribute('style', 'display:block;')
        }
        
        function correctTwo() {
            secondQuestion.setAttribute('style', 'display:none;')
            score++
            thirdQuestion.setAttribute('style', 'display:block;')
        }
        
        function incorrectThree() {
            thirdQuestion.setAttribute('style', 'display:none')
            fourthQuestion.setAttribute('style', 'display:block;')
        }
        
        function correctThree() {
            thirdQuestion.setAttribute('style', 'display:none')
            score++
            fourthQuestion.setAttribute('style', 'display:block;')
        }
        
        function incorrectFour() {
            fourthQuestion.setAttribute('style', 'display:none')
            clearTimeout(beginQuiz)
            timerEl.textContent = "Quiz complete"
            secondsLeft = 0
            results.textContent = "You have scored " + score + " out of 4";
            saveScore()
        }
        
        function correctFour() {
            fourthQuestion.setAttribute('style', 'display:none')
            clearTimeout(beginQuiz)
            timerEl.textContent = "Quiz complete"
            secondsLeft = 0
            score++
            results.textContent = "You have scored " + score + " out of 4"
            saveScore()
        }

        function saveScore() {
            var initials = prompt("Enter your initials to have your score saved!")

            if (initials != null) {
                localStorage.setItem(initials, score)
            }
        }

startEl.addEventListener("click", beginQuiz);