# QuickShot Game
(Developer: Femi Ashiru)

![QuickShot Website Responsive Image](docs/am-i-responsive-1.png)
![QuickShot Game Responsive Image](docs/am-i-responsive-2.png)

[Live Project](https://ofemiashiru.github.io/CI_MS2_QSG/)

## Table of Content

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requrements and Expectations](#user-requrements-and-expectations)
    3. [User Stories](#user-stories)
    4. [Scope](#scope)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colour)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks and Tools](#frameworks-and-tools)
5. [Features](#features)
6. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [Accessibility](#accessibility)
    4. [Performance](#performance)
    5. [Responsiveness](#responsiveness)
    6. [Device testing](#performing-tests-on-various-devices)
    7. [Browser compatibility](#browser-compatability)
    8. [Testing user stories](#testing-user-stories) 
8. [Bugs](#Bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Acknowledgements](#acknowledgements)


## Project Goals 

### User Goals
- Play QuickShot game.
- Save Score to the leaderboard.
- Contact Quickshot Site Owner.

### Site Owner Goals
- Allow users to play QuickShot game.
- Receive messages from QuickShot players.
- Show users the top ten QuickShot Players.

## User Experience

### Target Audience
- People who are fans of nostalgic 80s games. 
- People who are fans of shoot and aim games.
- People who are competitive and relish a challenge.

### User Requrements and Expectations

- Easy to use navigation that is responsive.
- Be able to easily browse between sections of the site and the game.
- All links to work as expected.
- Appealing design that works well on both desktop and mobile devices.
- Be able to play game on Mobile, tablet and desktop device.
- Be able to contact QuickShot game site.
- Accessibility.

### User Stories

#### First-time User 
1. I want to play the QuickShot game.
2. I want to save my score on the leaderboard.
3. I want to see the leaderboard.
4. I want to contact QuickShot game site.

#### Returning User
5. I want to see all the top ten scores.
6. I want to be able to see if I can top the leaderboard.
7. I want to be able to contact QuickShot game site.

#### Site Owner 
8. I want users to be able to play QuickShot game on mobile, tablet and desktop.
9. I want users to be able to save their score to the leaderboard.
10. I want users to be able to see the top ten scores.
11. I want users to be able to contact us.
12. I do not want users to use browser back button if they are looking for a page that does not exist.
13. Inform users that the game will be coming to App store and Google Play soon

## Scope

The scope of the project in it’s first release is defined by the following features:

- Simple navigation that allows user to navigate between sections of the site and the game. 
- Game page that allows user to play game, see how to play game, save score to the leaderboard and navigate back to main site.
- Allow user to see their score on the leaderboard if they have reached the top ten.
- Allow users to see the top ten players on the leaderboard.
- Contact form to allow users to send queries. The form is fully functional using EmailJS and will not submit unless all fields are filled out.
- An error page (404.html) that appears when visiting a page that does not exist with navigation above.
- Clear and simple favicon icon to help users identify the site.

Features to be built in future releases:

- Addition of social media links when QuickShot develop their social media platforms.
- Active links to Apples App store and Google Plays store when the game becomes available on these platforms.

## Design

### Design Choices
QuickShot was designed to have an old school 80s game look that adopted some of the layout from 80s game displays creating a sense of nostalgia. The site is a simple scrolling page as it didn't need to be too complex and is simply made to advertise the game, display the leaderboard and give user the facility to send messages. The game design has a similar look to an old Nintendo game as I was looking to show how modern technology can still give users a sense of nostalgia while playing.

### Colour

For the colour scheme I opted for an army fatigue palete of greens and browns to match the theme of the game.

![Colour Scheme](docs/features/colour-scheme.png)

### Fonts

The main headings of the site and game use Press Start 2P with a fallback of sans-serif to mimick the look of 80s games. This font is also used on the navigation. For the body text of the site I opted for the Oswald font which also has a fallback of sans-serif. Both fonts were imported using Google Fonts API.

### Structure
The main site is structured with different sections for each page . Both main site and game are responsive in nature and have been tested on the industry standard width of 320px.

The website consists of 6 main pages:
- Home page which shows what the site is about, featured albums, and the various subscription options
- Artist page which allows users to browse the artist they want to listen to by letter and shows the top three featured artists
- Genre page which allows users to browse the artist they want to listen to by genre
- Events page which allows users to see the latest events and navigate to their corresponding sites
- News page which allows users to see and keep up with the latest news
- Contact page which allows users to contact the business and locate the office

### Wireframes

<details><summary>index.html</summary>
<img src="docs/wireframes/index.png" alt="index wireframe">
</details>
<details><summary>game.html</summary>
<p>Game Home</p>
<img src="docs/wireframes/game_home.png" alt="game home wireframe">
<p>How to play</p>
<img src="docs/wireframes/how_to_play.png" alt="game how to play wireframe">
<p>Game Display</p>
<img src="docs/wireframes/game_display.png" alt="game display wireframe">
<p>Game Over Screen</p>
<img src="docs/wireframes/game_over_screen.png" alt="game over screen wireframe">
</details>
<details><summary>404.html</summary>
<img src="docs/wireframes/404.png" alt="404 wireframe"> 
</details>

## Technologies Used

### Languages
- HTML
- CSS
- JavaScript

### Frameworks and Tools
- Bootstrap v4.5 - simply for base css
- Git
- GitHub
- Gitpod
- Balsamiq
- Ezgif.com
- Google Fonts
- Adobe Color
- Font Awesome
- Favicon<span>.</span>io

## Features

### Logo Navigation and Search bar
- Navigation and Logo remains consistent on each page apart from game page (link to main site on game)
- Navigation is fully responsive and collapses when window is resized
- Navigation allows users to easily navigate from section to section and from main site to game
- Logo in Navigation takes user back to the home page

<p>Nav on Desktop</p>

![Logo Navigation on Desktop](docs/features/feature-navigation-bar-1.png)

<p>Nav on Tablet(Closed)</p>

![Logo Navigation on Tablet (Closed)](docs/features/feature-navigation-bar-2.png)

<p>Nav on Tablet(Open)</p>

![Logo Navigation and Tablet (Open)](docs/features/feature-navigation-bar-3.png)

<p>Nav on Mobile(Open)</p>

![Logo Navigation and Mobile (Open)](docs/features/feature-navigation-bar-4.png)

### Hero Section
- Greets user on entering the site and displays game on different screen sizes
- Shows user that QuickShot game will be coming soon on App store and Google Play (User story - 13)

![Hero Section](docs/features/feature-hero.png)

### About Section
- Informs user of what the QuickShot game is about 

![About Section](docs/features/feature-about.png)

### Leaderboard Section
- Informs users of the top ten players (User story - 3, 10)

![Leaderboard Section](docs/features/feature-leaderboard.png)

### Contact Section
- Allows users to send queries and messages to site owner (User story - 4, 7, 11)

![Contact Section](docs/features/feature-contact.png)

### Footer
- Features on main site 
![Footer](docs/features/feature-footer.png)

### 404 Page
- Allow users to navigate back to site without the use of back button on browser when visiting a page that does not exist (User story - 19)

![404 page](docs/features/feature-404.png)

## Validation

### HTML Validation
The W3C Markup Validation Service was used to validate the HTML of the website. 

index.html [results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fofemiashiru.github.io%2FCI_MS2_QSG%2Findex.html) - No Errors Found

game.html [results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fofemiashiru.github.io%2FCI_MS2_QSG%2Fgame.html) - No Errors Found

404.html [results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fofemiashiru.github.io%2FCI_MS2_QSG%2F404.html) - No Errors Found

### CSS Validation
The W3C Jigsaw CSS Validation Service was used to validate the CSS of the website.
After testing the whole sites CSS and my own custom CSS all pages passed with no errors, however, there were a number of warnings present that were related to the webkit css extensions used.

whole site [results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fofemiashiru.github.io%2FCI_MS2_QSG%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) - No Errors Found

custom css [results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fofemiashiru.github.io%2FCI_MS2_QSG%2Fassets%2Fcss%2Fstyle.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#warnings) - No Errors Found


### Accessibility
The WAVE WebAIM web accessibility tool was used to ensure the website met accessibility standards. 

index.html [results](https://wave.webaim.org/report#/https://ofemiashiru.github.io/CI_MS2_QSG/index.html) - No Errors Found.

game.html [results](https://wave.webaim.org/report#/https://ofemiashiru.github.io/CI_MS2_QSG/game.html) - No Errors Found.

404.html [results](https://wave.webaim.org/report#/https://ofemiashiru.github.io/CI_MS2_QSG/404.html) - No Errors Found.

### Performance 
Google Lighthouse Tool was used to test the performance of the website. 
<details><summary>Home</summary>
<img src="docs/validation/performance/lighthouse-performance-index.png" alt="lighthouse for index">
</details>
<details><summary>Game</summary>
<img src="docs/validation/performance/lighthouse-performance-game.png" alt="lighthouse for game">
</details>
<details><summary>404</summary>
<img src="docs/validation/performance/lighthouse-performance-404.png" alt="lighthouse for 404">
</details>

### Performing tests on various devices 
The website was tested on the following devices:
- Apple Macbook Pro M1
- Apple iPhone 11
- Xiaomi Mi 11 Lite

### Browser compatability
The website was tested on the following browsers:
- Google Chrome
- Safari
- Mozilla Firefox
- Microsoft Edge

### Responsiveness
The website is completely responsive and has been tested on mobile, tablet and desktop:

<details><summary>Mobile, Tablet and Desktop</summary>
<p>Part One</p>
<img src="docs/responsiveness/respsonsiveness-part-one.gif" alt="Responsiveness Part One">
<p>Part Two</p>
<img src="docs/responsiveness/respsonsiveness-part-two.gif" alt="Responsiveness Part Two">
</details>




### Testing user stories

1. I want to locate favourite artists by letter or genre

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Artists and Genre Page | Navigate to Artists or Genre page and use letter or genre links to locate artist | Page opens and links successfully narrow down location of desired artist | Works as expected |

<details><summary>Screenshots</summary>
<p>Artists</p>
<img src="docs/user-story-testing/user-story-1-13-artists.png">
<p>Genre</p>
<img src="docs/user-story-testing/user-story-1-13-genre.png">
</details>

2. I want to know the different subscription prices

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Home Page | Scroll down to the subscriptions section and observe prices | Page scrolls to desired section and prices clearly visible | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-2.png">
</details>

3. I want to see the latest events

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Events Page | Navigate to Events page and hover over desired events revealing information | Page opens and each event reveals information when hovered over | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-3.png">
</details>

4. I want to see the latest news

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| News Page | Navigate to News page and click article box | Page opens and shows all news, each article box navigates to relevant article when clicked | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-4p1-14.png">
<img src="docs/user-story-testing/user-story-4p2-14.png">
</details>


5. I want to be able to download the AfrobeatsLib app from the App store or Google Play store

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Hero Section | Click on App store and Google Play buttons | Buttons should open new tab with relevant store | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-5.png">
</details>

6. I want to be able to sign up to AfrobeatsLib

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Navigation Bar | Click on Login or Register buttons| Buttons should open up modals for Login and Register | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-6.png">
</details>

7. I want to sign up to AfrobeatsLib Mailing list

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Stay Connected section on all pages(Footer)| Fill in input boxes and click submit| Input boxes submitted only when all are filled in and opens response page | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-7-17.png">
</details>


8. I want to see all the latest events and be able to visit their corresponding pages

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Events Page| Click on each event| Each event should open a new tab with connected event | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-8.png">
</details>

9. I want to see the latest featured albums and artists

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Home Page and Artists Page| Click on page link to reveal featured albums and artists at top of page| Featured albums and artists should appear and be able to be clicked to navigate to corresponding album/artist | Works as expected |

<details><summary>Screenshots</summary>
<p>Featured Albums</p>
<img src="docs/user-story-testing/user-story-9p1.png">
<p>Featured Artists</p>
<img src="docs/user-story-testing/user-story-9p2.png">
</details>

10. I want to be able to contact AfrobeatsLib

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Contact Page| Click on contact page link enter information and click send message| Input boxes submitted only when all are filled in and opens response page | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-10.png">
</details>

11. I want to interact with AfrobeatsLib on their social media platform

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Stay Connected section on all pages (Footer)| Click on social media links in Stay Connected section| Social media links should open new tabs with relevant pages | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-11.png">
</details>

12. I want to leave a comment on the news articles

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| News - Each article page| Click link to view artcle, scroll down, enter information and click post comment| Input boxes submitted only when all are filled in and opens response page | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-12p1.png">
<img src="docs/user-story-testing/user-story-12p2.png">
</details>


13. I want users to be able to find and listen to their favourite Afrobeats artists

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Artists and Genre Page | Navigate to Artists or Genre page and use letter or genre links to locate artist | Page opens and links successfully narrow down location of desired artist | Works as expected |

<details><summary>Screenshots</summary>
<p>Artists</p>
<img src="docs/user-story-testing/user-story-1-13-artists.png">
<p>Genre</p>
<img src="docs/user-story-testing/user-story-1-13-genre.png">
</details>

14. I want users to be able to be kept up to date with latest events and news

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| News Page | Navigate to News page and click article | Page opens and shows all news, each article navigates to relevant article | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-4p1-14.png">
<img src="docs/user-story-testing/user-story-4p2-14.png">
</details>


| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Events Page | Navigate to Events page and hover over desired events revealing information | Page opens and each event reveals information when hovered over | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-3.png">
</details>

15. I want users to be able to contact us

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Contact Page| Click on contact page link enter information and click send message| Input boxes submitted only when all are filled in and opens response page | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-10.png">
</details>

16. I want users to be able to download our app on App store and Google Play store

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Hero Section | Click on App store and Google Play buttons | Buttons should open new tab with relevant store | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-5.png">
</details>

17. I want users to sign up to our mailing list

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Stay Connected section on all pages/Footer| Fill in input boxes and click submit| Input boxes submitted only when all are filled in and opens response page | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-7-17.png">
</details>

18. I want our site to be prepared to launch our own in house music player 

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Music Player fixed at the bottom on all pages| Check all pages to see if Music player is present| All pages should have the Music Player present but disabled ready for future implementation | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-18.png">
</details>

19. I do not want users to use browser back button if they are looking for a page that does not exist 

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| 404 Page| Enter incorrect URI in address bar|404 page should appear with Header and footer as well as a button that prompts user to go back to previous page | Works as expected |

<details><summary>Screenshots</summary>
<img src="docs/user-story-testing/user-story-19.png">
</details>


## Bugs

- No visible bugs to speak of

## Deployment

Deployed using GitHub Pages using the following steps:
1. Whilst in GitHub repository navigate to the Settings tab
2. On the left hand menu select Pages
3. Scroll to "Branch" tap none to show the different options and select "main"
4. Click save and the site will be published. You will see "Your site is live at https://ofemiashiru.github.io/CI_MS2_QSG/"

You can also fork the repository by:
1. Navigating to the GitHub repository
2. Click on "Fork" button in top right hand corner (Please note you must be signed in to Fork a repository)

You can clone the repository by:
1. Navigating to GitHub repository 
2. Locate the "Code" button above the file list and click it 
3. Select if you prefer to clone using HTTPS, SSH, or Github CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash
5. Change the current working directory to where you wish to clone the directory
6. Type ```git clone``` and paste in the URL from the clipboard e.g ```$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)```
7. Press Enter to create your local clone in your chosen folder.

## Credits
Images not referenced below are owned by the Developer.

### Media

[Cross hair used for cursor](assets/images/crosshair.png), taken from [Flaticon - created by xnimrodx](https://www.flaticon.com/free-icons/crosshair)

[QuickShot logo](assets/favicon/android-chrome-512x512.png), taken from [Favicon.io](https://favicon.io/emoji-favicons/direct-hit)

### Code

- Used [Compart](https://www.compart.com/en/unicode/U+2022) to add appropriate Unicode for bullet points in game

- Used [w3schools.com](https://www.w3schools.com/jsref/met_win_setinterval.asp) to aid in using setInterval function

- Used [w3schools.com](https://www.w3schools.com/jsref/met_win_clearinterval.asp) to aid in using clearInterval function

- Used [w3schools.com](https://www.w3schools.com/jsref/met_document_removeeventlistener.asp) to aid in using the removeEventListener function

- Used [w3schools.com](https://www.w3schools.com/cssref/pr_scroll-behavior.php) to help with adding smooth scrolling to index.html

- Used [w3schools.com](https://www.w3schools.com/cssref/pr_class_cursor.php), [stackoverflow.com - show custom cursor](https://stackoverflow.com/questions/6623769/css-custom-cursor-doesnt-work-in-ff-chrome ) and [stackoverflow.com - centre cursor](https://stackoverflow.com/questions/19560878/css-change-custom-cursor-image-origin-hotspot-to-center) to create a custom cursor, to help show a custom cursor and to centre the custom cursor

- Used [w3schools.com](https://www.w3schools.com/cssref/css3_pr_box-shadow.php) to help add box shadows to images

- Used [stackoverflow.com](https://stackoverflow.com/questions/3186688/drop-shadow-for-png-image-in-css) to help add drop shadows to PNGs

- Used [w3schools.com](https://www.w3schools.com/css/css3_animations.asp) to add animation to the game labels when a target is hit

- Used [w3schools.com](https://www.w3schools.com/howto/howto_css_modals.asp) to assist with creating modals on game.html

- Used [w3schools.com](https://www.w3schools.com/css/css_grid.asp) to assist with using grid layout in CSS

- Used [w3schools.com](https://www.w3schools.com/css/css3_transitions.asp) to assist with using transitions in CSS

- Used [w3schools.com](https://www.w3schools.com/jsref/prop_win_localstorage.asp) to assist with saving and retrieving data from the local storage, and [stackoverflow.com](https://stackoverflow.com/questions/40843773/localstorage-keeps-overwriting-my-data) to stop the local storage data from being overwritten with new data

- Used [w3schools.com](https://www.w3schools.com/howto/howto_js_redirect_webpage.asp) to assist with redirecting to a new page

## Acknowledgements

I would like to take the opportunity to thank:
- Mo Shami for coninued mentorship, guidance and support throughout this project. 
- Iris Smok for continued encouragement whilst working on this project.
- and all the Teaching and Non-teaching Personnel at Code Institute.