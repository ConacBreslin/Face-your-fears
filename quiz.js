

let currentQuestionNumber = 0;
let score = 0;
let availableQuesions = [];
let maxQuestions = 10;
let phobia = document.getElementById("questionArea");
let optionA = document.getElementById("optionA");
let optionB = document.getElementById("optionB");
let optionC = document.getElementById("optionC");
let optionD = document.getElementById("optionD");



// Code to pick new questions
function renderQuestion (){
    currentQuestionNumber ++;
    let questionIndex = Math.floor(Math.random() * availableQuestions.length);
    console.log(questionIndex);
    currentQuestion = availableQuestions[questionIndex];
    console.log(currentQuestion);
    phobia.innerHTML = `<p>${currentQuestion.phobia} is the fear of ...</p>`;
    optionA.innerHTML = `<p>${currentQuestion.choiceA.icon}</p>
    <p>${currentQuestion.choiceA.name}</p>`
    optionB.innerHTML = `<p>${currentQuestion.choiceB.icon}</p>
    <p>${currentQuestion.choiceB.name}</p>`
    optionC.innerHTML = `<p>${currentQuestion.choiceC.icon}
    <p>${currentQuestion.choiceC.name}</p></p>`
    optionD.innerHTML = `<p>${currentQuestion.choiceD.icon}
    <p>${currentQuestion.choiceD.name}</p></p>`

    
      }


//code to run all steps of quiz
function startQuiz(){
    console.log("Quiz started");
    score = 0;
    console.log(score);
    currentQuestionNumber = 0;
    console.log(currentQuestionNumber);
    availableQuestions = [...questions];
    console.log(availableQuestions);
    renderQuestion()
    
}




 


startQuiz();
