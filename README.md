# The Music Quiz 

![alt text](assets/images/amiresponsive.png 'Different page on screen devices')


## Overview

‘The Music Quiz’ is a fun interactive quiz targeted specifically at music lovers. The website aims to offer a simple but fun way for users from test their music knowledge against questions from all eras of music.

You can view the website here - [The Music Quiz](https://ianokane1.github.io/The-Music-Quiz/)

## Aims
The aim of this website is to provide an easy to access, fun and interactive quiz for music lovers of all ages. Questions range from 70's until present day. User’s scores are displayed so users can try to compete against their own score, answering more correct questions and therefore developing their music knowledge. 

## User Expectations

As the primary target audience for the site is people with musical knowledge, the following user expectations were considered when creating the site:
* Easy to access, simple and clear
* Responsive as users will be accessing on multiple devices
* Questions in quiz should be relevant to all music topics
* Dynamic real-time feedback should be presented to users so they are aware of correct and incorrect answers

## Colour schemes 

I opted to display an image of a DJ in the background. The title will maintain a white color throughout. A light purple transparant background was used, rgba(117, 117, 165, 0.77), so question and answer options are visible. I used a gold background color for the answer options, #ffbe0b, to add more style. No other colors were used throughout. 

## Fonts

Georgia, 'Times New Roman', Times, serif was used for the title "The Music Quiz". 
Cinzel Decorative was used for everthing else.

## Wireframes 

### Mobile Landing Page

![alt text](assets/images/moblanding.png 'mob landing')

### Mobile Quiz Page

![alt text](assets/images/mobquiz.png 'mob quiz')

### Mobile Score Page

![alt text](assets/images/mobscore.png 'mob score Page')

### Desktop Landing Page

![alt text](assets/images/landingpagewireframe.png 'Landing Page')

### Desktop Quiz Page

![alt text](assets/images/quizpagewireframe.png'desktop quiz page')


### Desktop Score Page

![alt text](assets/images/scorepagewireframe.png 'desktop Score Page ')

### Desktop Feedback page

![alt text](assets/images/feedbackwireframe.png'desktop Feedback page')

## Features 

### Landing Page

### Landing navigation

The Landing page features some animation using (https://animate.style/). A short introductory follows as well as the instructions. Underneath we have a "let's Dance" button to commecnce the quiz.

![alt text](assets/images/landingpage.png 'landing page') 

### Quiz Page

The quiz page retains the animated style used in landing page. We then have a question followed by four answers labelled A-D. Upon selecting the correct answer, the answer option will turn green. The same applies to an incorrect answer which will of course display red. Underneath we have a 'Next' button just in case the user wishes to skip. Underneath the 'Next' button we show what question the user in on out of the 15 available. Lastly, four social media links which will bring the user the the relevant page. Each button is interactive and features a hover effect. See below for image.

![alt text](assets/images/quizpage.png'Quiz Page')

### Background

The background image, which is featured on all pages, is a DJ in a booth. image taken from (https://coolwallpapers.me/)

![alt text](assets/images/studio.png)

### Footer

The bottom of each page features a footer with four social media links which will bring the user the the relevant page. Each button is interactive and features a hover effect.

## Score counter

After anwering the 15th question the user will be given their score. The user can choose to play again, check the correct answers or provide feedback. 

![alt text](assets/images/scorepage.png 'score counter')

### Check Answers

Upon selecting 'check answers' the user will be shown a list of the correct answers. See below

![alt text](assets/images/answers.png 'check answers')


### Feedback

If the user wishes to provide feedback, a feedback page is available. See below

![alt text](assets/images/ 'feedback')


## Technologies used 

* HTML5 – for structuring the website
* CSS3 – for styling the website
* Javascript - for the functionality of the game
* Balsamiq – for wireframes of the site
* Googlefonts – Cinzel Decorative
* Font awesome – for site icons
* W3C Markup and Jigsaw validation - used to test and validate the HTML and CSS
* Jshint - used to test and validate the javascript files
* Animate - for animation throughout


## Testing

### Landing Page
Feature | Test | Outcome
--- | --- | ---
Let's Dance button | Play button to link to game | Pass

### Quiz Page
Feature | Test | Outcome
--- | --- | ---
Question | Question appears | pass 
Question | New question to generate each time a question is answered | Pass
Multiple Choice Answers | Answers to highlight when hovered over | Pass
Multiple Choice Answers | Answers to highlight green if correct and red if incorrect | Pass
Final question | Final question to link to a 'gameover' page | Pass
Next question| Next question to skip current question | Pass
Question counter | Question counter to update in real-time | Pass
The Music Quiz | The Music Quiz button takes user back to landing page | Pass


### Score Page
Feature | Test | Outcome
--- | --- | ---
Score update | Users locally stored score to be displayed | Pass
Back to quiz button | Back to quiz button takes user back to first question | Pass
Check Answers button | Check Answers button takes user to answerbank | Pass
Feedback button | Feedback button takes user to Feedback page | Pass
Hover | All buttons have hover effect | Pass
The Music Quiz | The Music Quiz button takes user back to landing page | Pass

### Check Answers
Feature | Test | Outcome
--- | --- | ---
Answerbank | All correct answers are displayed correctly | Pass
Back to quiz button | Back to quiz button takes user back to first question | Pass
Feedback button | Feedback button takes user to Feedback page | Pass
Hover | All buttons have hover effect | Pass
The Music Quiz | The Music Quiz button takes user back to landing page | Pass

### Form
Feature | Test | Outcome
--- | --- | ---
Form | Form to require users to submit all required information | Pass
Form | Form to accurately submit all data to form dump| Pass
Send button | Send button sends data to form dump  | Pass
Back to quiz button | Back to quiz button takes user back to first question | Pass
The Music Quiz | The Music Quiz button takes user back to landing page | Pass

### Footer 

Feature | Test | Outcome
--- | --- | ---
Footer | Footer to stay stuck at bottom of page | Pass
Social media links | Icons to highlight when hovered over | Pass
Social media links | Links to open in a new page when clicked on | Pass

## Manuel Testing

### Browser Responsiveness 

Device | Test | Outcome
--- | --- | ---
Firefox, Google Chrome, Safari | responsive with no functionality issues | Pass
Chrome developer tools | responsive with no functionality issues | Pass
Firefox developer tools | responsive with no functionality issues | Pass

### Device responsiveness 

Device | Test | Outcome
--- | --- | ---
Samsung s21 | responsive with no functionality issues | Pass
Ipad (7th Generation) | responsive with no functionality issues | Pass
Iphone 12 | responsive with no functionality issues | Pass
Huawei p30 | responsive with no functionality issues | Pass
Huawei laptop | responsive with no functionality issues | Pass

## W3C Validator Tools

W3C Validator was used to check for error within my HTML code. The following errors were presented.

### Landing Page
![alt text](assets/images/ 'Landing page unvalidated')
![alt text](assets/images/'Landing page validated')

### Quiz Page
[alt text](assets/images/ 'Quiz page unvalidated')
![alt text](assets/images/ 'Quiz page validated')

### Feedback Page 
[alt text](assets/images/ 'Feedback unvalidated')
![alt text](assets/images/ 'Feedback validated')

## CSS Validator 

The CSS passed through the validator without any errors. 

![alt text](assets/images/'css validated')

## Javascript Validating 

### script.js

Some errors were found when passing the script.js file through JSHint. see below

![alt text](assets/images/'script jshint unvalidated')
![alt text](assets/images/ 'script jshint validated')

## Lighthouse 

Lighthouse was utilised to test the performance, accessibility, best practices and SEO of the website.
See below for image

![alt text](assets/images/ 'lighthouse')

## Deployment 

The site was developed using Gitpod, which was then committed and pushed to GitHub.
The site was deployed to GitHub pages. The following steps were used to deploy :

* In the GitHub repository, navigate to the Settings tab
* Select the Pages sub-menu
* From the source section drop-down menu, select the Master Branch, and then hit save
* Once the master branch has been selected, the page provided a link to the live website.

The link to the live website is [here](https://ianokane1.github.io/The-Music-Quiz/)

## Credits

* The background image for the site was taken from (https://coolwallpapers.me/)

* Three youtube tutorials were used to kick start and support the quiz project in regards to the javascript https://www.youtube.com/watch?v=riDzcEQbX6kand & https://www.youtube.com/watch?v=TLuGPBeBo_g & https://www.youtube.com/watch?v=f4fB9Xg2JEY

* https://stackoverflow.com/ was used to help find solutions to problems

Lastly, Thanks to my Marcel Mulders for his guidance through this project.

[Go to the top](#The Music Quiz)