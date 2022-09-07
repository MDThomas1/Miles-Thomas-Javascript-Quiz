var timerEl = document.querySelector('.timer')
var startEl = document.querySelector('#begin')
var results = document.querySelector('.results')

var firstQuestion = document.querySelector('#question-one')
var secondQuestion = document.querySelector('#question-two')
var thirdQuestion = document.querySelector('#question-three')
var fourthQuestion = document.querySelector('#question-four')

var resultOne = document.querySelector('.question-one-result')
var resultTwo = document.querySelector('.question-two-result')
var resultThree = document.querySelector('.question-three-result')
var resultFour = document.querySelector('.question-four-result')

var wrongOne = document.querySelectorAll('#one-wrong')
var rightOne = document.querySelectorAll('#one-right')
var wrongTwo = document.querySelectorAll('#two-wrong')
var rightTwo = document.querySelectorAll('#two-right')
var wrongThree = document.querySelectorAll('#three-wrong')
var rightThree = document.querySelectorAll('#three-right')
var wrongFour = document.querySelectorAll('#four-wrong')
var rightFour = document.querySelectorAll('#four-right')

var secondsLeft = 300
var score = 0

function beginQuiz() {
    var timerInterval = setInterval(function() {
        startEl.setAttribute('style', 'display:none;')
        firstQuestion.setAttribute('style', 'display:block;')

        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds to go";

        function incorrectOne() {
            wrongOne.setAttribute('style', 'display:none;')
            rightOne.setAttribute('style', 'display:none')
            resultOne.textContent = "Incorrect, the answer is option 3"
            secondQuestion.setAttribute('style', 'display:block')
        }
        
        function correctOne() {
            wrongOne.setAttribute('style', 'display:none;')
            rightOne.setAttribute('style', 'display:none')
            resultOne.textContent = "That is correct"
            secondQuestion.setAttribute('style', 'display:block')
        }
        
        function incorrectTwo() {
            wrongTwo.setAttribute('style', 'display:none;')
            rightTwo.setAttribute('style', 'display:none')
            resultTwo.textContent = "Incorrect, the answer is option 1"
            thirdQuestion.setAttribute('style', 'display:block')
        }
        
        function correctTwo() {
            wrongTwo.setAttribute('style', 'display:none;')
            rightTwo.setAttribute('style', 'display:none')
            resultTwo.textContent = "That is correct"
            thirdQuestion.setAttribute('style', 'display:block')
        }
        
        function incorrectThree() {
            wrongThree.setAttribute('style', 'display:none;')
            rightThree.setAttribute('style', 'display:none')
            resultThree.textContent = "Incorrect, the answer is option 2"
            fourthQuestion.setAttribute('style', 'display:block')
        }
        
        function correctThree() {
            wrongThree.setAttribute('style', 'display:none;')
            rightThree.setAttribute('style', 'display:none')
            resultThree.textContent = "That is correct"
            fourthQuestion.setAttribute('style', 'display:block')
        }
        
        function incorrectFour() {
            wrongFour.setAttribute('style', 'display:none;')
            rightFour.setAttribute('style', 'display:none')
            resultFour.textContent = "Incorrect, the answer is option 3"
            clearInterval(timerInterval)
            results.textContent = "You have scored " + score + " out of 4"
        }
        
        function correctFour() {
            wrongFour.setAttribute('style', 'display:none;')
            rightFour.setAttribute('style', 'display:none')
            resultFour.textContent = "That is correct"
            clearInterval(timerInterval)
            results.textContent = "You have scored " + score + " out of 4"
        }
    
        wrongOne.addEventListener("click", incorrectOne);
    
        rightOne.addEventListener("click", correctOne);
    
        wrongTwo.addEventListener("click", incorrectTwo);
    
        rightTwo.addEventListener("click", correctTwo);
    
        wrongThree.addEventListener("click", incorrectThree);
    
        rightThree.addEventListener("click", correctThree);
    
        wrongFour.addEventListener("click", incorrectFour);
    
        rightFour.addEventListener("click", correctFour);

        if(secondsLeft === 0) {
            clearInterval(timerInterval)
            timerEl.textContent = "Time is up"
            startEl.setAttribute('style', 'display:block;')
            firstQuestion.setAttribute('style', 'display:none')
            secondQuestion.setAttribute('style', 'display:none')
            thirdQuestion.setAttribute('style', 'display:none')
            fourthQuestion.setAttribute('style', 'display:none')
        }



    }, 1000)
}

startEl.addEventListener("click", beginQuiz);