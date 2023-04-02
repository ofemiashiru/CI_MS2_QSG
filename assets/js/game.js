/*jshint esversion: 6 */

const gameDisplay = document.querySelector('#game-display');
const allTargets = document.querySelector('#all-targets');
let moveTargets;
let timer;
let speed;

/**
 * function that sets the speed of how quickly the targets move based on the player score
 * @param {number} score - the current score of the player.
 * */ 
function setSpeed(score){
    speed = 1000;
    if(score > 59){
        speed -= 500;
    } else if(score > 49){
        speed -= 400;
    } else if(score > 39){
        speed -= 300;
    } else if(score > 29){
        speed -= 200;
    } else if(score > 19){
        speed -= 100;
    }
    return speed;
}

/**
 * function which is the event called when a target is hit
 * when hit the switch statement determines the outcome based on the targets class
 * function takes no parameters
 * */ 
function hitTarget(){
    let targetHit = this.classList[1];
    let x = this.style.left;
    let y = this.style.top;

    let currentScore = parseInt(document.querySelector('.score').innerHTML);
    let currentBullets = parseInt(document.querySelector('.bullets').innerHTML);
    let currentTime = parseInt(document.querySelector('.time').innerHTML);

    switch(targetHit){
        case 'good':
            hitTargetFeedback('+5', x, y);
            document.querySelector('.score').innerHTML = currentScore + 5;
            document.querySelector('.time').innerHTML = currentTime + 5;
            break;

        case 'bad':
            hitTargetFeedback('-2', x, y);
            document.querySelector('.score').innerHTML = currentScore - 2;
            break;

        case 'normal':
            hitTargetFeedback('+1', x, y);
            document.querySelector('.score').innerHTML = currentScore + 1;
            document.querySelector('.time').innerHTML = currentTime + 1;
            break;

        case 'add-bullet':
            hitTargetFeedback('+1&#8226;', x, y);
            document.querySelector('.bullets').innerHTML = currentBullets + 2;
            break;

        default:
            console.log('Error - Something appears to have gone wrong');
    }          
}

/**
 * function used to display feedback to user when a target is hit
 * each target will display something different based on what is passed in
 * @param {string} feedback - message displayed when target is hit.
 * @param {string} x - x position in pixels to display message.
 * @param {string} y - y position in pixels to display message.
 * */ 
function hitTargetFeedback(feedback, x, y){

    let hitLabel = document.createElement('div');
    hitLabel.classList.add('hit-label');
    hitLabel.style.position = 'absolute';
    hitLabel.style.top = y;
    hitLabel.style.left = x;
    allTargets.appendChild(hitLabel);

    setTimeout(function(){
        allTargets.removeChild(hitLabel);
    }, 900);

    hitLabel.innerHTML = feedback;
}

/**
 * function used to generate the random targets on the display
 * also adds event listenener and removes it based on setSpeed function
 * function takes no parameters
 * */ 
function generateRandomTargets(){

    const targets = ['good','bad','add-bullet','normal'];
    const randomTarget = targets[Math.floor(Math.random() * targets.length)];
    const y = Math.floor(Math.random() * (gameDisplay.clientHeight - 40));
    const x = Math.floor(Math.random() * (gameDisplay.clientWidth - 40));

    //generate random target
    let newTarget = document.createElement('div');
    newTarget.classList.add('target', `${randomTarget}`); //adds the target class from the generated randomTarget
    newTarget.style.top = `${y}px`; // adds position Y to top style property
    newTarget.style.left = `${x}px`; // adds position X to left style property
    allTargets.appendChild(newTarget); // append newTarget to the DOM

    //add event listener to target
    newTarget.addEventListener('click', hitTarget);

    //remove event listener and target after time based on setSpeed() function
    setTimeout(function(){
        allTargets.removeChild(newTarget);
        newTarget.removeEventListener('click', hitTarget);
    }, setSpeed(document.querySelector('.score').innerHTML));
}

/**
 * function used to deplete bullets when they are used
 * if bullets hit zero then we call the gameOver() function
 * function takes no parameters
 * */ 
function useBullets(){
    let bullets = document.querySelector('.bullets').innerHTML;
    document.querySelector('.bullets').innerHTML = --bullets;

    if(bullets === 0){
        gameOver();
    }

}

/**
 * function used to create a countdown for the overall game
 * function takes no parameters
 * */ 
function countDown(){
    let time = document.querySelector('.time').innerHTML;
    document.querySelector('.time').innerHTML = --time;

    if(time === 0){
        gameOver();
    }
}

/**
 * function used to start all the elements in the game
 * function takes no parameters
 * */ 
function startGame(){
    // set game to default stat values
    document.querySelector('.bullets').innerHTML = 5;
    document.querySelector('.time').innerHTML = 20;
    document.querySelector('.score').innerHTML = 0;

    gameDisplay.addEventListener('click', useBullets);
    timer = setInterval(countDown, 1000);
    
    // takes a callback to generatedRandomTargets and sets speed using the setSpeed() function
    moveTargets = setInterval(generateRandomTargets, setSpeed(document.querySelector('.score').innerHTML));
    
}

/**
 * function used to show the reason a players game is over
 * function takes no parameters
 * */ 
function gameOverReason(){

    let reason;
    
    if(document.querySelector('.time').innerHTML == 0){
        reason = 'You ran out of time!';
    } else if(document.querySelector('.bullets').innerHTML == 0){
        reason = 'You ran out of bullets!';
    } else {
        reason = 'Try harder!';
    }
    return reason;

}

/**
 * function to display gameOver modal and clear all intervals
 * function takes no parameters
 * */ 
function gameOver(){

    clearInterval(timer);
    clearInterval(moveTargets);
    gameDisplay.removeEventListener('click', useBullets);

    //show game over modal
    document.querySelector('#game-over-modal').classList.add('show');
    document.querySelector('#game-over-modal').classList.remove('remove');

    //run gameOverReason function
    document.querySelector('#game-over-reason').innerHTML = gameOverReason();

    // display final score
    let finalSscore = document.querySelector('.score').innerHTML;
    document.querySelector('#final-score-form').elements.finalScore.value = finalSscore;

    // get Restart and Back home buttons
    let gameOverBtns = document.querySelectorAll('#game-over-content > button');
    
    gameOverBtns.forEach( function(btn) {
        btn.addEventListener('click', function(){

            if(this.id === 'restart-game-btn'){
                window.location.replace('game.html');

            } else if(this.id === 'game-over-back-home'){
                window.location.replace('index.html');
            }
        });
    });
    
}


/**
 * function used to open the game menu
 * function takes no parameters
 * */ 
function openGameMenu(){

    document.querySelector('#start-game-modal').classList.add('show');
    document.querySelector('#start-game-modal').classList.remove('remove');
    let gameMenuBtns = document.querySelectorAll('#start-game-content button');
    
    //create event listener for each button on Game Menu
    gameMenuBtns.forEach( function(btn) {
        btn.addEventListener('click', function(){

            if(this.id === 'start-game-btn'){

                document.querySelector('#start-game-modal').classList.remove('show');
                document.querySelector('#start-game-modal').classList.add('remove');
    
                startGame();
    
            } else if(this.id === 'how-to-play-btn'){

                let howToPlayBtn = document.querySelector('#how-to-play-btn');
                //toggle text of the button when clicked
                howToPlayBtn.innerHTML === 'How to play' ? 
                    howToPlayBtn.innerHTML = 'Hide' : 
                    howToPlayBtn.innerHTML = 'How to play';
                
                //Toggle aria-label when button is clicked
                howToPlayBtn.getAttribute('aria-label') === 'Show how to play' ? 
                    howToPlayBtn.setAttribute('aria-label', 'Hide how to play') :
                    howToPlayBtn.setAttribute('aria-label', 'Show how to play');

                //toggle class on instructions to show/hide instructions
                document.querySelector('#how-to-play').classList.toggle('show-instructions');
               
            } else if(this.id ==='back-home'){

                window.location.replace('index.html');
            }
        });
    });

}

openGameMenu();