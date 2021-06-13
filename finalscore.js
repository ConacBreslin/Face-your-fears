let finalScoreText = document.getElementById("finalScoreText");


let finalScore = localStorage.getItem("finalScore");
let maxQuestions = localStorage.getItem("maxQuestions")
let finalScorePercent = Math.round(finalScore / maxQuestions * 100);



finalScoreText.innerHTML  = (finalScorePercent >= 80) ? `<p><i class="far fa-grin-stars"></i>Congratulations! You scored ${finalScorePercent}%, You are fearless!</p>`:
(finalScorePercent >= 60 ) ? `<p><i class="far fa-smile-beam"></i>Well Done! You scored ${finalScorePercent}%, You have no fear!</p>`:
(finalScorePercent >= 40) ? `<p><i class="far fa-laugh"></i> You scored ${finalScorePercent}%</p>`:
(finalScorePercent >= 20) ? `<p><i class="far fa-sad-tear"></i> You scored ${finalScorePercent}%, Were you a little scared by this quiz?</p>`:
`<p><i class="far fa-sad-cry"></i> Oh dear, you only scored ${finalScorePercent}%, This quiz must have terrified you</p>`;

