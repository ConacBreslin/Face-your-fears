# **Face Your Fears - A Quiz about Phobias**
Phobias are a common pub quiz category and this quiz was designed to give players an easy and fun way to test their knowledge of the definitions of phobias.  
[Face Your Fears main page image](assets/images/banner.png)
## Visit the deployed website
[[Face Your Fears website]"Visit the deployed site here")](https://conacbreslin.github.io/Face-your-fears/)
## User Experience (UX)
A player would want to test their knowledge of phobias' definitions.
On visiting the site they should be able to 
1. Easily and intuitively understand what the quiz is about.
2. Easily and intuitively understand how to start play.
3. Easily and intuitively understand how to pick how many questions they want to answer in the quiz.
4. Easily and intuitively understand how to answer the questions.
5. Understand when the answer correctly.
6. See the correct answer if they answer incorrectly.
7. Follow their progress  throughout the quiz.
8. Follow their score  throughout the quiz.
9. Clearly undestand their perforance on the final page.
10. Be able to  play again or quit the page at the end.
## Strategy
The quiz should be a simple and attractive design with sufficient interactivity to engage players of any age or ability.

Objective Requirement;         To get players to play the quiz and to want to return again in the future.

Functional requirements; 	    To provide a bank of relevent questions, a means of the players testing themselves, a means of recording players progress through the quiz, a means of recording and displaying their score, a means of indicating how much time they have remaining on each question. A way to display correct answer if they answer incorrectly. A way to display the final result.

Non-functional requirements; 	The quiz should be simple, attractive and intuitive to facilitate players of any age or technical ability.
## Structure
The quiz will have 3 pages, A welcome page, a quiz page and a page for the final result. The quiz should automatically usher the player through all the stages of the quiz once they start through to the end. At the end they should be able to quit or replay.
## Skeleton
The welcome page  explains what the quiz is about and how to play and a button to get started. 
The quiz page starts with the player picking how many questions they want to answer, the quiz then automatically displays a question, a progress bar to indicate the players progress thought the quiz, a tally of their score and  a timer for each question. Once the player selects an answer the quiz will check the answer, update the score, progress and timer, display the correct answer if they aswer incorrectly  and display a new question until the player has answered the number of questions they initially selected.
The wireframes can be seen here [mobile](assets/mobilewireframe.png) and [desktop](assets/wireframes/desktopwireframe.png).
## Surface/Design
### Imagery
The welcome page from [pexels.com](https://pexels.com/) and was chosen to convey the theme of the quiz.
### Colour scheme
It was important to keep the colour scheme of the quiz extremely simple, but not too stark. Information on the psychology of colours [website here] indicate that a blue suggests steadfastness, dependability,and wisdom, so in keeping with both these onjectives very pale blue was chosen for teh backgound with a darker blue for the font colour.
### Typography
Information on the psychology of fonts [website here] indicated that a sans serif font suggests The Metrohobic font was selected in [Google Fonts](https://fonts.google.com/) for its clarity and its name's resonance with the quiz's theme!
## Features
- Responsiveness on all device sizes.
- A button on first page to bring you to the quiz page.
- An input at the start of the quiz to allow the player to select the number of questions they want to answer up to a maximum.
- A means of displaying a random question and four answer options from the question bank and then removing that question from the question bank to avoid duplication.
- A means of capturing the players response to the question, checking if it is correct and feeding that information to the score tally.
- A means of displaying the player's progress through the quiz that updates after each question.
- A means of displaying the player's score through the quiz that updates after each question.
- A means of displaying the player's time remaining for each question. 
- A means of displaying the final result and a buttons to allow the player to play again or quit.
## Future features
In the future might
- link to an API to provide the question bank rather than having a large question bank on the site.
- provide a high score option.
## Languages used
[HTML5](https://en.wikipedia.org/wiki/HTML5)

[CSS](https://en.wikipedia.org/wiki/CSS)

[JavaScript](https://en.wikipedia.org/wiki/JavaScript)
## Frameworks, Libraries and online resources used
- [Balsamiq](https://balsamiq.com/wireframes/) was used to create the wireframes.
- Gits's [gitpod](https://www.gitpod.io/) was used for writing and editing code, and for submitting and pushing to GitHub.
- [GitHub](https://github.com/) was used for storing the code after being pushed from Git.
- [Bootstrap 5.0.1](https://getbootstrap.com/) was used for responsiveness and styling.
- [Google Fonts](https://fonts.google.com/) was used to import the ‘Metrophobic’ font into the style.css file.
- Photos were used from 
- Colours were identified in photos using [IMAGECOLORPICKER.com](https://imagecolorpicker.com/).
- Colour palette was generated using [coolors.co](https://coolors.co/).
- Foreground/Brackgound contrast as checked using [contrast-ratio.com](https://contrast-ratio.com/).
The favicon was downloaded from [favicon.io](https://favicon.io/favicon-generator/)
- tutorials from [XV.com](https://www.), [XV.com](https://www.), [XV.com](https://www.) were followed in designing the features of the quiz.
## Testing
### Validation.
- HTML.The quiz’s html validation was tested by [validator.w3.org](https://validator.w3.org/). The errors identified and fixes are documented [here](assets/images/html-validator-testing.png).  The errors identified and fixes are documented [here](assets/images/jigsaw-testing.png).
- Lighthouse Audits. The quiz’s Performance, Accessibility, Best Practices and SEO were assessed by [Chrome Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) and the results of this are [here](assets/images/lighthouse-report.png).
- Manual Testing. Extensive use was made of console.log() at every step of the functionality development and each time an error was noted it was addressed ebfore proceeedinging.
The quiz was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
It was viewed on a variety of devices. Friends and family members reviewed the quiz to identify bugs and give feedback on user experience. The code was submitted for peer-review in Code Institutes peer-code-review channel in [slack.com](https://app.slack.com/). 
### Testing User Stories from User Experience (UX) Section.
1. Easily and intuitively understand what the quiz is about;
    - On entering the site the player sees a welcome page with a title and  a clear explanation of what the quiz is about.
2. Easily and intuitively understand how to start play
    - The welcome page includes short clear instructions on how to play and a button that brings the player to the quiz page. 
3. Easily and intuitively understand how to pick how many questions they want in the quiz;
    - Before displaying the quiz questions the quiz lets they player pick teh maximum number of questions they want to answer. ONly when they have done this does do the quiz questions appear.
4. Easily and intuitively understand how to answer the questions;
    - The Question is clearly displayed at the top of the page and the four options appear clearly like cards.
5. Follow their progress easily throughout the quiz;
    - The questions display and the associated progress bar clearly indicate how far through the quiz the player has progressed.
6. Follow their score easily throughout the quiz.
    - The correct score is displayed throughout the quiz.
7. Clearly undestand their perforamnce on the final page.
    - When the quiz is over the final page gives they player their final score percentage with an appropriately attached message.
8. Be able to easily play again or quit the page at the end.
    The final results page has buttons to allw the player to quit or play again.
## Changes over course of development
## Known Bugs
## Deployment
## Credits
- I took much inspiration from the following quiz tutorials on quizes [Code Explained](https://www.youtube.com/watch?v=49pYIMygIcU), [James Q Quick ](https://www.youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx), [Code Explained](https://www.youtube.com/watch?v=49pYIMygIcU), [Brian Design](https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=2850s).
The favicon emoji originated from [](https://twemoji.twitter.com/)
## Acknowledgements
I would like to thank my mentor Chris Quinn whose advice is always perfectly judged.
I would like to thank many tutors in Code Institute for being unfailingly helpful and nice, in particular Sean, John, Jo,. 
I would like to thank Auke from Code Institute for her [excellent presentation](https:) on preparation for MS2 projects that helped me enourmously is getting started.
I would like to thank my fearless family and friends for support and feedback and on the quiz.

