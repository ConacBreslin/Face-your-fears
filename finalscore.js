let finalScoreText = document.getElementById("finalScoreText");

let finalScore = localStorage.getItem("finalScore");
let maxQuestions = localStorage.getItem("maxQuestions")
let finalScorePercent = finalScore / maxQuestions * 100;
console.log(finalScorePercent);

//finalScoreText.innerHTML = `You scored (${finalScore} / ${maxQuestions} * 100) %`