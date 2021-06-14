let phobia = document.getElementById("questionArea");
let optionA = document.getElementById("A");
let optionB = document.getElementById("B");
let optionC = document.getElementById("C");
let optionD = document.getElementById("D");
let timeRemaining = document.getElementById("timeRemainingArea");
let options = document.getElementsByClassName("option");
let playerPickNumber = document.getElementById("playerPickNumber");
let pickMax = document.getElementById("pickMax");
let pickForm = document.getElementById("pickForm");
let hudQuestion = document.getElementById("hudQuestion");
let hudScore = document.getElementById("hudScore");
let progressBarFull = document.getElementById("progressBarFull");
let quizArea = document.getElementById("quizArea");

var correctAnswer;
let currentQuestionNumber = 0;
let currentQuestion;
let score = 0;
let availableQuesions = [];
let maxQuestions;
let classToApply;
let count = 15;
let questionTime = 15;
let timer;

// set maximum number of questions

pickMax.addEventListener("click", setMaxNumber);

function setMaxNumber(event) {
    event.preventDefault();
    maxQuestions = playerPickNumber.value;
    if (maxQuestions <= 20) {
        pickForm.classList.add("d-none");
        quizArea.classList.remove("d-none");
            } else {
        alert("You must pick a number between 1 and 20");
    }
}
//add event listeners to Options

addEventListenersToOptions();

function addEventListenersToOptions() {
    for (let i of options) {
        i.addEventListener('click', checkAnswer);
    }
}

// function to display question and options,increase current question number and update progressbar in hud, 

function renderQuestion() {
    if (currentQuestionNumber >= maxQuestions) {
        console.log(score);
        localStorage.setItem("finalScore", score);
        localStorage.setItem("maxQuestions", maxQuestions);
        //go to finalscore page
        return window.location.assign('/finalscore.html');
    }
    count = questionTime;
    currentQuestionNumber++;
    hudQuestion.innerText = `Question ${currentQuestionNumber} of ${maxQuestions}`;
    //UpdateProgressBar
    progressBarFull.style.width = `${(currentQuestionNumber/maxQuestions) * 100}%`;
    let questionIndex = Math.floor(Math.random() * availableQuestions.length); // create a random number based on number of questions available
    currentQuestion = availableQuestions[questionIndex];
    phobia.innerHTML = `<p>${currentQuestion.phobia} is the fear of ...</p>`; // set phobia to be guessed
    optionA.innerHTML = `<p>${currentQuestion.choiceA.icon}</p><p>${currentQuestion.choiceA.name}</p>`;
    optionB.innerHTML = `<p>${currentQuestion.choiceB.icon}</p><p>${currentQuestion.choiceB.name}</p>`;
    optionC.innerHTML = `<p>${currentQuestion.choiceC.icon}</p><p>${currentQuestion.choiceC.name}</p>`;
    optionD.innerHTML = `<p>${currentQuestion.choiceD.icon}</p><p>${currentQuestion.choiceD.name}</p>`;
    // sets four different options 
    correctAnswer = currentQuestion.correct;
    availableQuestions.splice(questionIndex, 1); //remove question used from available question array
}

// function to set time remaining for each question
function renderTimeRemaining() {
    if (count <= questionTime && count >= 0) {
        timeRemaining.innerHTML = `<p>Time remaining for this question is ${count} seconds</p>`;
        count -= 1;
    } else {
        renderQuestion();
    }
}

// function to check answer, increase score if correct, temporarily change answer backgound, display score in hud
function checkAnswer(event) {
    let targetValue = event.currentTarget.id;
    let targetElement = event.currentTarget;
    if (targetValue === correctAnswer) {
        score++;
        hudScore.innerText = `${score}`;
        classToApply = "correct";
        targetElement.classList.add(classToApply);
        setTimeout(function (event) {
            targetElement.classList.remove(classToApply);
            renderQuestion();
        }, 1000);
    } else {
        classToApply = "incorrect";
        targetElement.classList.add(classToApply);
        setTimeout(function (event) {
            targetElement.classList.remove(classToApply);
            renderQuestion();
        }, 1000);
    }
}

//code to run all steps of quiz

function startQuiz() {
    score = 0;
    currentQuestionNumber = 0;
    // move all questions from question.js to available questions array
    availableQuestions = [...questions];
    // display question and options and increase current question number
    renderQuestion();
    // renderCounter(); // display time remaining for each question
  
    // call renderTimeRemaining every second
    timer = setInterval(renderTimeRemaining, 1000); 
   
}

startQuiz();