//Elements of the page sepearte to the questions
var timerEl = document.querySelector('.timer');
var startEl = document.querySelector('#begin');
var results = document.querySelector('.results');

//The questions on the quiz
var firstQuestion = document.querySelector('#question-one');
var secondQuestion = document.querySelector('#question-two');
var thirdQuestion = document.querySelector('#question-three');
var fourthQuestion = document.querySelector('#question-four');

//Numerical information within the page
var secondsLeft = 300
var score = 0

//The function that begins the quiz
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
//Functions connected to your answer to the first question
        function incorrectOne() {
            firstQuestion.setAttribute('style', 'display:none;')
            secondQuestion.setAttribute('style', 'display:block;')
        }
        
        function correctOne() {
            firstQuestion.setAttribute('style', 'display:none;')
            secondQuestion.setAttribute('style', 'display:block;')
            score++
        }
        
        //Functions relating to your answer to the second question
        function incorrectTwo() {
            secondQuestion.setAttribute('style', 'display:none;')
            thirdQuestion.setAttribute('style', 'display:block;')
        }
        
        function correctTwo() {
            secondQuestion.setAttribute('style', 'display:none;')
            score++
            thirdQuestion.setAttribute('style', 'display:block;')
        }
        
        //Functions relating to your answer to the third question
        function incorrectThree() {
            thirdQuestion.setAttribute('style', 'display:none')
            fourthQuestion.setAttribute('style', 'display:block;')
        }
        
        function correctThree() {
            thirdQuestion.setAttribute('style', 'display:none')
            score++
            fourthQuestion.setAttribute('style', 'display:block;')
        }
        
        //Functions relating to your answer to the final question
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

        //The function that saves your score
        function saveScore() {
            var initials = prompt("Enter your initials to have your score saved!")

            if (initials != null) {
                localStorage.setItem(initials, score)
            }
        }

//The Event listener for the start quiz button
startEl.addEventListener("click", beginQuiz);