console.log("hello form the script");
let displayQuestionNumbers = document.getElementById("displayQuestionNumbers");
console.log(displayQuestionNumbers);
displayQuestionNumbers.addEventListener("click", displayQuestionsWanted);
let questionsWanted = document.getElementsByClassName("questionsWanted");

function displayQuestionsWanted(){
    for (let i of questionsWanted){
        console.log("displayQuestionsWanted clicked")
    i.classList.remove("d-none");
 
    console.log(true) 
}
    }
 