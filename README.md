# Whack-a-Mole

![Landing page image](/assets/readme-images/wack-a-mole-project.png)
This is my own version of the popular game Wack a Mole that was invented in Japan 1975 as an arcade game.
The game is an fast pace game that tests your reaction time in a fun way!

The game board has 9 holes that randomly spawns a mole and a frog.
The object of the game is to click on as many moles as you can in 30seconds before the timer runs out.
But be careful! A frog is also spawning randomly in some of the holes. If you hit one of does I'ts GAME OVER! 

Visit my website [here](https://stoffeeriksson.github.io/Whack-a-Mole/)

## Table of Contents

1. [UX](#ux)
   1. [Project Goals](#project-goals)
   2. [User Stories](#user-stories)
   3. [Color Scheme](#color-scheme)
   4. [Typography](#typography)
   5. [Wireframes](#wireframes)
2. [Features](#features)
   1. [General](#general)
   2. [Welcome Image](#welcome-image)
   3. [Game Page](#game-page)
   4. [Navigation Bar](#navigation-bar)
   5. [Score Area](#score-area)
   6. [Future Features](#future-features)
3. [Technologies Used](#technologies-used)
   1. [Languages Used](#languages-used)
   2. [Frameworks, Libraries and Programs Used](#frameworks-libraries-and-programs-used)
4. [Testing](#testing)
   1. [Automation Testing](#automation-testing)
   2. [Manual Testing](#manual-testing)
   3. [Testing User Stories](#testing-user-stories)
   4. [Code Validation](#code-validation)
   5. [Accessibility](#accessibility)
   6. [Tools Testing](#tools-testing)
5. [Finished Product](#finished-product)
6. [Deployment](#deployment)
   1. [GitHub Pages](#github-pages)
7. [Credits](#credits)
   1. [Content](#content)
   2. [Code](#code)
8. [Acknowledgements](#acknowledgements)

## UX

### Project Goals

* Make a fun game that is easy to understand

* Give the player a fun experince in a classic way

* Give the player room to improve with score to match every new game

* Give the player options to play on diffrent devices

 
### User Stories

* As a Player, I want to be able to play and have fun!

* As a Player, I want to be able to se my score in real time

* As a Player, I want to be able to reset and play again

* As a Player, I want to be able to read an instruction of how to play the game

* As a Player, I want to be able to navigate the website easy

### Color Scheme 
![Color scheme](/assets/readme-images/color-palette.png)

The main text on the website has the color of black or white to make sure its easy to read. all buttons has a hover effect with the color of lime green #91C93E and the about section at the home page has the background color of light blue #A4D9F1.

### Typography

The main font I'm using in this project is 'Original Surfer' and has a fallback font of Roboto and Sans-serif.

### Wireframes

[Balsamiq](https://balsamiq.com/) has been used to plan the project and show it in the readme file.

Page | Desktop version | Mobile version
--- | ---| ---
Index | ![desktop index image](/assets/wireframes/desktop-home-page.png) | ![mobile index image](/assets/wireframes/mobile-home%20page.png)
Game | ![desktop game image](/assets/wireframes/desktop-game-page.png) | ![mobile game image](/assets/wireframes/mobile-game-page.png) 


## Features
### General
* Website resposive to all screen sizes

* Similar color choices and image structure used in all websites

* **Welcome page**
![Welcome Image](/assets/readme-images/landing-page.png) 
    - The welcome page contains a main header of Wack A Mole
    - A navbar at the top right corner to navigate to game page
    - An about section that explains the rules how to play the game
    - A beutiful background image to capture your eye and a cute Mole looking over the rules.
    - A button to click in the about section tp play the game

* **Game page**
![Game page](/assets/readme-images/game-page.png)
    - Has a navigation link at the top right corner to take you back to the home page
    - Same header as the home page
    - Below the header can we find a timer and current score
    - In the middle of the game page we have the score board that contains 9 holes that spawns the mole and the frog after you hit start game
    - Under the game board I'ts a start and reset button 
    - Has a hammer as a cursor, when hitting mole and the frog a sound effect is being played.

* **Navigation bar**
![Navigation bar](/assets/readme-images/nav-bar.png)
    - Navigation bar at the top right corner to navigate between game and home page

* **Score Area**
![Score Area](/assets/readme-images/score.png)
    - Is placed above the game board so It's easy to see.


* **Future features**

    - Make diffrent levels of speed to make it harder over time
    


## Technologies Used
### Languages Used
* [HTML5](https://en.wikipedia.org/wiki/HTML5)
* [CSS3](https://en.wikipedia.org/wiki/CSS)
* [Java Script](https://www.javascript.com/)

### Frameworks, Libraries and Programs Used
* [Google Fonts](https://fonts.google.com/)
    - was used to import fonts 'Original Surfer' and Roboto to the style.css file. The fonts were used throughout the page


* [TinyPNG](https://tinypng.com/)
    - was used to make the file sizes of the images smaller.

* [VSCODE](https://code.visualstudio.com/)
    - was used to write all the code and push to github pages

* [GitHub](https://github.com/)
    - was used to store the project after pushing from vscode.

* [Balsamiq](https://balsamiq.com/)
    - was used to plan out the project and visuilize how it would look on diffrent screen sizes.

* [Chrome Devtools](https://developer.chrome.com/docs/devtools/)
    - was used under the development process to see bugs and various screens sizes.

* [W3C Markup Validator](https://validator.w3.org/)
    - was used to validate my HTML file.

* [M3C CSS Validator](https://jigsaw.w3.org/css-validator/)
    - was used to validate my CSS file.

* [JSHint](https://jshint.com/)
    - Was used to validate JavaScript code


## Testing
### Automation Testing
Automation testing is a type of testing which we use tools to do the testing for us. It's much faster than the manual testing a human can do.
* Automation testing:
    - It relies entirely on pre-scripted test which runs automatically to compare actual results with expected results.
    - Automation testing helps the tester determine whether the application performs as expected or not.
    - It allows the execution of repetitive tasks and regression tests.
    - Automation requires manual effort to create initial testing scripts.
* Benefits of using automation testing:
    - Finds more bugs
    - Reduce time for regression tests
    - The process can be recorded
    - No fatigue
    - Increased test coverage
* Limitations of Automation Testing
    - Difficult to inspect visual elements
    - High cost.
    - Test maintenance is costly.
    - Not false proof
    - Trained employees required

No automated test has been used in this project.

### Manual Testing
Manual testing is type of testing which we don't use any programs or tool to to de testing.
* We use manual testing for:
    - Functionalities.
    - User Interface.
    - Website Behavior.
    - Application Behavior.
    - User Acceptance.
    - User Experience.

* Benefits of manual testing
    - Easy hiring: In manual testing, anyone can test so it helps in easy hiring.
    - Fast feedback: Manual testing helps to provide fast and accurate feedback.
    - Versatile: Manual test cases can be applied to many test cases.
    - Flexible: Manual testing is flexible as it can adapt easily to changes in the user interface.
    - Less expensive: Manual testing is less expensive as one does not need to spend a budget on automation tools and processes

* Limitations of Manual Testing
    - Not all defects detected: In manual cases, there is no assurance that there will be 100% test coverage as a result some of the defects may not be detected.
    - High expertise: Although manual testing can be done by anyone, in some complex cases high expertise is required.
    - Lots of time: Manual testing times extensive activity. It requires a lot of time to manually develop test cases so that all the functionalities are covered and tested.
    - Cannot be recorded: Manual testing process cannot be recorded so it is not possible to reuse the manual test cases.
    - Less reliable: Manual testing is less reliable as it is conducted by humans and all test cases are designed by humans so there are chances for human error.

In this project I have only used manually testing to look for bugs and fixes.


### Testing User Stories
* As a Player, I want to be able to play and have fun!
    - The Game is easy to understand and fun to play!
    

* As a Player, I want to be able to se my score in real time
    - The game has a live updated score sheet you can see when you play. It updates every time you hit the mole.

*  As a Player, I want to be able to reset and play again
    - The Game has a reset Button to push under the game section that you can click at anytime to reset the timer and the score.

* As a Player, I want to be able to read an instruction of how to play the game
    - The Home page has It's own section that explains how to play the game.

* As a Player, I want to be able to navigate the website easy
    - The website has a navigationbar at the top right corner to easy navigate between the home and the game page.

### Code Validation
* The [W3C Markup Validator](https://validator.w3.org/) and [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) were used to validate all HTML pages to look for any syntax errors. The [JSHints JavaScript Code Quality Tool](https://jshint.com/) was used to validate Java Script code.
    - W3C Markup Validator found nu errors or warnings. ![HTML Validation](/assets/readme-images/html-validation.png)
    - W3C CSS Validator found no errors. ![CSS Validation](/assets/readme-images/css-validation.png)
    - JSHints JavaScript Code Quality Tool found no errors. ![Java Script validation](/assets/readme-images/js-validation.png)

### Accessibility 
* Used lighthouse in chrome devtools to check performance.

* Lighthouse reports
    - **Home Page**
    ![Lighthouse report for Home page](/assets/readme-images/home-page-lighthouse.png)
    - **Game page**
    ![Lighthouse report for game page](/assets/readme-images/game-page-lighthouse.png)
   

### Tools Testing
* [Chrome Devtools](https://developer.chrome.com/docs/devtools/)
    - Chrome devtools was used to test resposivness to diffrent screen sizes and explore and modify HTML and CSS styles.
* [Am I Responsive?](https://ui.dev/amiresponsive)
    - Was being used to check the responsivness to diffrent screen sizes.


### Manual Testing

* Browser Compatibility

Browser | Outcome | Pass/Fail  
--- | --- | ---
Google Chrome | No appearance, responsiveness nor functionality issues.| Pass
Safari | No appearance, responsiveness nor functionality issues. | Pass
Mozilla Firefox | Scrollbar is visible even though it should be hidden. <br>No responsiveness nor functionality issues.| Pass
Microsoft Edge | No appearance, responsiveness nor functionality issues. | Pass

* Device compatibility

Device | Outcome | Pass/Fail
--- | --- | ---
Lenovo thinkpad x1" | No appearance, responsiveness nor functionality issues. | Pass
Asus PG32UCDM | No appearance, responsiveness nor functionality issues. | Pass
iPad Pro 12.9" | No appearance, responsiveness nor functionality issues. | Pass
iPad Pro 10.5" | No appearance, responsiveness nor functionality issues. | Pass
iPhone 12pro | No appearance, responsiveness nor functionality issues. | Pass
iPhone 7 | No appearance, responsiveness nor functionality issues. | Pass


* Common Elements Testing

    - General

    Feature | Outcome | Pass/Fail
    --- | --- | ---
    Navigation Bar | Hover effect and links are working as expected. | Pass
    Navigation link in about section | Hover effect and links working as expected. | Pass 

    - About Section
    
    Feature | Outcome | Pass/Fail
    --- | --- | ---
    Play Game Button | Hover effect work and link to game section when button is clicked work as expected. | Pass
    Play link at top right corner | Hover effect and link to game page works as expected. | Pass
    
    - Game Page

    Feature | Outcome | Pass/Fail
    --- | --- | ---
    Player Score | Increase by 10 when player clicks the Mole | Pass
    Player Feedback | Displays the correct outcome of text If time is up our game over. | Pass
    Start Button | Clicking start button works as expected. launch game. Hover effect works as expected. | Pass
    Reset Button | Hover effect work as expected and game resets and score and timer resets to default. | Pass
    Timer | Timer works as expected. when game is started time counts down from 30. When 0 is reached Times up gets displayed | Pass
    Frog | If player clicks the frog the text Game over shows and the players score is shown | Pass
    Mole | Hitting the mole gives you an increase of 10 ponts | Pass
    Spawning | The Mole and the frog is spawned randomly inside the holes as expected. Makes sure they never spawn inside the same hole. | Pass
    Sound effect | Hitting the frog you get a bash effect to notice you hit the mole. And hitting the frog will give you a sound effect of game over | Pass

  ## Finished Product

 Page | Desktop version | Mobile version
--- | ---| ---
Index | ![desktop index image](/assets/readme-images/desktop-home-page-finish.png) | ![mobile index image](/assets/readme-images/mobile-home-page-finish.png)
Game | ![desktop game image](/assets/readme-images/desktop-game-page-finish.png) | ![mobile game image](/assets/readme-images/mobile-game-page-finish.png) 





## Deployment
* This website is written and deployed in VSCode and commited and pushed to GitHub

### GitHub Pages
* Here are the steps to deploy this website to GitHub Pages from its GitHub repository:
    1. Log in to GitHub and locate the [GitHub Repository](https://github.com/).
    2. At the top of the Repository, locate the Settings button on the menu.
    3. Scroll down the Settings page until you locate the Pages section.
    4. Under Source, click the dropdown called None and select Master Branch.
    5. The page will refresh automatically and generate a link to your website.



## Credits
### Content
All content was written by me.

### Code
* [W3Schools](https://www.w3schools.com/) 
    - Was used at a regurlary basis to make sure im understanding the meaning of the code.
    
## Acknowledgements
* My partner and my wonderful boy for making me take the time to build this project. 
* My family and friends for all the support and review of the design layout.
* To my mentor Marcel for helping me through this project


[Back to the top](#Wack-a-Mole)


  

