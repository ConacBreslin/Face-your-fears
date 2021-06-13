let finalScoreText = document.getElementById("finalScoreText");
let phunnyFauxbiaText = document.getElementById("phunnyFauxbia");



let finalScore = localStorage.getItem("finalScore");
let maxQuestions = localStorage.getItem("maxQuestions")
let finalScorePercent = Math.round(finalScore / maxQuestions * 100);
let phunnyFauxbias = ['Nomophobia - The fear not having a working mobile phone', 
'Aibohphobia - The Fear of Palindromes', 
'Anachrophobia - The fear of being unstuck in time', 
'Anatidaephobia - The fear that somewhere, somehow, a duck is watching you', 
'Luposlipaphobia – The fear of being pursued by timber wolves around a kitchen table while wearing socks on a newly waxed floor', 
'Arachibutyrophobia – The fear of peanut butter sticking to the roof of your mouth', 'Linonophobia - The fear of String', 
'Keanuphobia – The fear of the actor Keanu Reeves', 
'Kinemortophobia – The fear of Zombies', 
'Zemmiphobia - Fear of the Great Mole Rat',
'Pogonophobia – The fear of Beards'];
let phunnyFauxbiaIndex = Math.floor(Math.random() * phunnyFauxbias.length);
console.log(phunnyFauxbiaIndex)
let randomPhunnyFauxbia = phunnyFauxbias[phunnyFauxbiaIndex];
console.log(randomPhunnyFauxbia);




finalScoreText.innerHTML  = (finalScorePercent >= 80) ? `<p><i class="far fa-grin-stars"></i>Congratulations! You scored ${finalScorePercent}%, You are fearless!</p>`:
(finalScorePercent >= 60 ) ? `<p><i class="far fa-smile-beam"></i>Well Done! You scored ${finalScorePercent}%, You have no fear!</p>`:
(finalScorePercent >= 40) ? `<p><i class="far fa-laugh"></i> You scored ${finalScorePercent}%</p>`:
(finalScorePercent >= 20) ? `<p><i class="far fa-sad-tear"></i> You scored ${finalScorePercent}%, Were you a little scared by this quiz?</p>`:
`<p><i class="far fa-sad-cry"></i> Oh dear, you only scored ${finalScorePercent}%, This quiz must have terrified you</p>`;

phunnyFauxbiaText.innerHTML = `<p>Here is a random Phunny Fauxbia for you <br>"${randomPhunnyFauxbia}"</p>`
