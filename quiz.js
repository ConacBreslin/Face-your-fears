let phobia = document.getElementById("questionArea");
let optionA = document.getElementById("A");
let optionB = document.getElementById("B");
let optionC = document.getElementById("C");
let optionD = document.getElementById("D");
let counter = document.getElementById("timeRemainingArea");
let options = document.getElementsByClassName("option");
let playerPickNumber = document.getElementById("playerPickNumber");
let pickMax = document.getElementById("pickMax");
let form = document.getElementById("pickForm");
let hudQuestion = document.getElementById("hudQuestion");
let hudScore = document.getElementById("hudScore");
let progressBarFull = document.getElementById("progressBarFull")

var correctAnswer;
let currentQuestionNumber = 0;
let score = 0;
let availableQuesions = [];
let maxQuestions;
let TIMER;
let questionTime = 10;
let gaugeWidth = 150;
let gaugeUnit = gaugeWidth / questionTime;
let classToApply;

// set maximum number of questions
pickMax.addEventListener("click", setMaxNumber);

function setMaxNumber(event) {
    event.preventDefault();
    maxQuestions = playerPickNumber.value;
    console.log(maxQuestions);
    if (maxQuestions <= 20) {
        pickForm.classList.add("d-none");
        startQuiz();
    }else{
        alert("You must pick a number between 1 and 20");
    }

}
// funtion to display question and options and increase current question number
function renderQuestion() {
    if (currentQuestionNumber >= maxQuestions) {
        //go to finalscore page
        return window.location.assign('/finalscore.html')
    }
    currentQuestionNumber++;
    hudQuestion.innerText = `Question: ${currentQuestionNumber}/${maxQuestions}`;
    //UpdateProgressBar
    progressBarFull.style.width = `${(currentQuestionNumber/maxQuestions) * 100}%`;
    let questionIndex = Math.floor(Math.random() * availableQuestions.length); // create a random number based on number of questions available

    currentQuestion = availableQuestions[questionIndex];

    phobia.innerHTML = `<p>${currentQuestion.phobia} is the fear of ...</p>`; // set phobia to be guessed
    optionA.innerHTML = `<p>${currentQuestion.choiceA.icon}</p><p>${currentQuestion.choiceA.name}</p>`

    optionB.innerHTML = `<p>${currentQuestion.choiceB.icon}</p><p>${currentQuestion.choiceB.name}</p>`

    optionC.innerHTML = `<p>${currentQuestion.choiceC.icon}</p><p>${currentQuestion.choiceC.name}</p>`

    optionD.innerHTML = `<p>${currentQuestion.choiceD.icon}</p><p>${currentQuestion.choiceD.name}</p>`
    // sets four different options 
    correctAnswer = currentQuestion.correct
    availableQuestions.splice(questionIndex, 1); //remove question used from available question array

    addEventListenersToOptions();
}


function addEventListenersToOptions() {
    for (let i of options) {
        i.addEventListener('click', checkAnswer);
    }
}

function checkAnswer(event) {
    let targetValue = event.currentTarget.id;
    let targetElement = event.currentTarget;
       
    if (targetValue === correctAnswer) {
        score++;
        hudScore.innerText = `${score}`;
        classToApply = "correct";
        classToApply = "correct";
        targetElement.classList.add(classToApply);
        setTimeout(function(event){ targetElement.classList.remove(classToApply); renderQuestion();}, 1000)
    } else {
        classToApply = "incorrect";
        targetElement.classList.add(classToApply);
        setTimeout(function(event){ targetElement.classList.remove(classToApply); renderQuestion(); }, 1000)
            
    } 
    }






//code to run all steps of quiz
function startQuiz() {

    score = 0;

    currentQuestionNumber = 0;

    availableQuestions = [...questions]; // move all questions from question.js to available questions array

    renderQuestion(); // display question and options and increase current question number
    renderCounter(); // display time remaining for each question
    TIMER = setInterval(renderCounter, 1000); // call timer every second
    

}


startQuiz();
