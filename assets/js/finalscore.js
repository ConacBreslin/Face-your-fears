//Code on line 2 from teamtreehouse.com to help resolve jshint errors
// jshint esversion: 6
let finalScoreText = document.getElementById("finalScoreText");
let phunnyFauxbiaText = document.getElementById("phunnyFauxbia");
let finalScore = localStorage.getItem("finalScore");
let maxQuestions = localStorage.getItem("maxQuestions");
let finalScorePercent = Math.round((finalScore / maxQuestions) * 100);
let phunnyFauxbias = [
    '"Nomophobia" - The fear not having a working mobile phone.',
    '"Aibohphobia"- The Fear of Palindromes.',
    '"Anachrophobia" - The fear of being unstuck in time.',
    '"Anatidaephobia" - The fear that somewhere, somehow, a duck is watching you.',
    '"Luposlipaphobia" – The fear of being pursued by timber wolves around a kitchen table while wearing socks on a newly waxed floor.',
    '"Arachibutyrophobia" – The fear of peanut butter sticking to the roof of your mouth',
    "Linonophobia - The fear of String.",
    '"Keanuphobia" – The fear of the actor Keanu Reeves.',
    '"Kinemortophobia" – The fear of Zombies.',
    '"Zemmiphobia" - Fear of the Great Mole Rat.',
    '"Pogonophobia" – The fear of Beards.',
    '"Condylacousticophobia" - The fear of the sound of cracking knuckles.',
    '"Gowiththeflowbia" - The fear of being relaxed.',
    '"Arachnurinalphobia" - The fear of spiders in your toilet.',
    '"Hippopotomonstrosesquippedaliophobia" - The fear of long words.',
    '"Abcdefghijklmnoqrstuvwxyzphobia" - The fear of a single missing letter.',
    '"Arachnurinalphobia" - The fear of spiders in your toilet.',
];
let phunnyFauxbiaIndex = Math.floor(Math.random() * phunnyFauxbias.length);
let randomPhunnyFauxbia = phunnyFauxbias[phunnyFauxbiaIndex];

//Display final score as percent with appropriate message
finalScoreText.innerHTML  = 
(finalScorePercent >= 80) ? `<p><i class="far fa-grin-stars"></i> Congratulations! You scored ${finalScorePercent}%. You are frighteningly good!</p>`:
(finalScorePercent >= 60 ) ? `<p><i class="far fa-smile-beam"></i> Well Done! You scored ${finalScorePercent}%. That is scarily good!</p>`:
(finalScorePercent >= 40) ? `<p><i class="far fa-laugh"></i> You scored ${finalScorePercent}%. I'm afraid to say you could do better.</p>`:
(finalScorePercent >= 20) ? `<p><i class="far fa-sad-tear"></i> Oh dear, you scored ${finalScorePercent}%, You did horror-ifically.</p>`:
`<p><i class="far fa-sad-cry"></i> Oh dear, you got a ph-'oh oh'-bia by scoring ${finalScorePercent}%.</p>`;

    
//Display funny phobia
phunnyFauxbiaText.innerHTML = `<p>Here is a Phunny Fauxbia for you <br> ${randomPhunnyFauxbia} </p>`;
