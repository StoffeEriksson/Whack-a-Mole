# Whack-a-Mole

![Landing page image](/assets/readme-images/landing-page.png)
This is my own version of the popular game Wack a Mole that was invented in Japan 1975 as an arcade game.
The game is an fast pace game that tests your reaction time in a fun way!

The game board has 9 holes that randomly spawns a mole and a frog.
The object of the game is to click on as many moles as you can in 30seconds before the timer runs out.
But be careful! A frog is also spawning randomly in some of the holes. If you hit one of does I'ts GAME OVER! 

Visit my website [here](https://stoffeeriksson.github.io/Whack-a-Mole/)

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
![Welcome image](/assets/readme-images/landing-page.png) 
    - The welcome page contains a main header of Wack A Mole
    - A navbar at the top right corner to navigate to game page
    - An about section that explains the rules how to play the game
    - A beutiful background image to capture your eye and a cute Mole looking over the rules.
    - A button to click in the about section tp play the game

* **Game page**
![Game image](/assets/readme-images/game-page.png)
    - Has a navigation link at the top right corner to take you back to the home page
    - Same header as the home page
    - Below the header can we find a timer and current score
    - In the middle of the game page we have the score board that contains 9 holes that spawns the mole and the frog after you hit start game
    - Under the game board I'ts a start and reset button 

* **Navigation bar**
![nav image](/assets/readme-images/nav-bar.png)
    - Navigation bar at the top right corner to navigate between game and home page

* **Score Area**
![about us image](/assets/readme-images/score.png)
    - Is placed above the game board so It's easy to see.


* **Future features**

    - Make diffrent levels of speed to make it harder over time
    - implement a hammer as a mouse so It's more like the original game that a simple click.
    - Sound effects when hitting the mole and the frog and maybe some cool background music.


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


## Testing
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
* The [W3C Markup Validator](https://validator.w3.org/) and [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) were used to validate all HTML pages to look for any syntax errors.
    - W3C Markup Validator found nu errors or warnings. ![HTML Validation](/assets/readme-images/html-validation.png)
    - W3C CSS Validator found no errors. ![CSS Validation](/assets/readme-images/css-validation.png)

### Accessibility 
* Used lighthouse in chrome devtools to check performance.

* Lighthouse reports
    - **Home Page**
    ![Lighthouse report for Home page](/assets/readme-images/home-page-lighthouse.png)
    - **Game page**
    ![Lighthouse report for game page](/assets/readme-images/game-page-lighthouse.png)
   

### Tools Testing
* [Chrome Devtools](https://developer.chrome.com/docs/devtools/)

* Chrome devtools was used to test resposivness to diffrent screen sizes.

### Manual Testing
* Browser Compatibility
    - The website has been tested on following internet browsers:
        - **Google Chrome**
        No issues has been discovered
        - **Microsoft Edge**
        No issues has been discovered

* Device Compatibility
    - The website has been tested on multible screen sizes some of them is:
        - **Iphone SE**
        No issues detected
        - **Galaxy 23 Ultra**
        No issues detected
        - **Ipad Pro**
        No issues detected
        - **Lenovo Thinkpad X1**
        No issues detected

* Common Elements Testing
    - All pages
        - **Home page**
            - Clicking all navlinks at the top right corner works perfect.
            - Clicking play now link at the how to play section.

        - **Navigation Bar**
            - Navlinks between the home page and the game page has been tested and works fine.

        - **Game page**
            - All navlinks at the top right corner works fine. navigates back to the home page.
            - Start button works. Starts the game and the moles and the frog starts spawning correctly.
            - The reset button works good. Resets the game score and the timer back to original state.


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
    - Was used for knowledge how to implement the date section in the booking form.
    - was used to understand how to make the main image cover up the background and make heading text appear in the middle.



## Acknowledgements
* My partner and my wonderful boy for making me take the time to build this project. 
* My family and friends for all the support and review of the design layout.
* To my mentor Marcel for helping me through this project


[Back to the top](#Wack-a-Mole)


  

