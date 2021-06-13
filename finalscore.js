let finalScoreText = document.getElementById("finalScoreText");

let finalScore = localStorage.getItem("finalScore");
let maxQuestions = localStorage.getItem("maxQuestions")
let finalScorePercent = Math.round(finalScore / maxQuestions * 100);


finalScoreText.innerHTML  = (finalScorePercent >= 80) ? `<i class="far fa-grin-stars"></i>Congratulations! You scored ${finalScorePercent}%, You are fearless!`:
(finalScorePercent >= 60 ) ? `<i class="far fa-smile-beam"></i>Well Done! You scored ${finalScorePercent}%, You have no fear!`:
(finalScorePercent >= 40) ? `<i class="far fa-laugh"></i> You scored ${finalScorePercent}%`:
(finalScorePercent >= 20) ? `<i class="far fa-sad-tear"></i> You scored ${finalScorePercent}%, Were you a little scared by this quiz?`:
`<i class="far fa-sad-cry"></i> Oh dear, you only scored ${finalScorePercent}%, This quiz must have terrified you`;