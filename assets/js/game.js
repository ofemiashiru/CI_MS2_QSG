// New game Object
const game = {
    isOver: false
};

// get the gameDisplay and store it as a variable
const gameDisplay = document.querySelector('#game-display');
//location of all targets on DOM
const allTargets = document.querySelector('#all-targets');

// Get X and Y axis totals for game display
let gameDisplayXAxis = gameDisplay.clientWidth - 20;
let gameDisplayYAxis = gameDisplay.clientHeight - 20;

//update gameDisplay size when user resizes screen
window.addEventListener('resize', function(){
    gameDisplayXAxis = gameDisplay.clientWidth - 20;
    gameDisplayYAxis = gameDisplay.clientHeight - 20;
});


//Setup new Game --
function startNewGame(){
    const newGame = {
      time: 20,
      score: 0,
      bullets: 5,
      speed: 1000,
      targets: ['good', 'bad', 'add-bullet', 'normal']
    };

    if(!game.isOver){

        document.querySelector('#time').innerHTML = newGame.time;
        document.querySelector('#score').innerHTML = newGame.score;
        document.querySelector('#bullets').innerHTML = newGame.bullets;
        document.querySelector('#game-over-modal').classList.add('remove');
        document.querySelector('#game-over-modal').classList.remove('show');
    }



    //Generate random target
    function generateRandomTargets(){

        //genrate the random game.target which correspnds to the class in style.css
        let randomTarget =  newGame.targets[Math.floor(Math.random() * 4)]; 

        //generate random x and y positions
        let randomX = Math.floor(Math.random() * (gameDisplayXAxis - 20) + 20); // numbers between 20 and x display width
        let randomY = Math.floor(Math.random() * (gameDisplayYAxis - 20) + 20); // numbers between 20 and y display height
        
        //Create physical target in DOM
        let newTarget = document.createElement('div');
        newTarget.classList.add('target', `${randomTarget}`); //adds the target class from the generated randomTarget
        newTarget.style.top = `${randomY}px`; // adds position Y to top style property
        newTarget.style.left = `${randomX}px`; // adds position X to left style property
        allTargets.appendChild(newTarget); // append newTarget to the DOM
        
        //Add event Listener to each target, when clicked each target will respond based on the class/game.targets
        function hitTarget(){

            //function that displays feedback from a hit target
            function hitTargetFeedback(feedback){

                let label = document.createElement('div');
                label.classList.add('label');
                label.style.top = `${randomY}px`;
                label.style.left = `${randomX}px`;
                allTargets.appendChild(label);
    
                setTimeout(function(){
                    allTargets.removeChild(label)
                }, 800);

                label.innerHTML = feedback
            }


            // this.classList.add('remove'); 
            allTargets.removeChild(this);// remove target when hit

            if(this.classList[1] === newGame.targets[0]){ //good target is hit
                
                document.querySelector('#time').innerHTML = newGame.time += 5;
                document.querySelector('#score').innerHTML = newGame.score += 5;
                
                hitTargetFeedback('+5');

            } else if(this.classList[1] === newGame.targets[1]) { //bad target is hit
                
                document.querySelector('#score').innerHTML = newGame.score -= 2;

                hitTargetFeedback('-2');

            } else if(this.classList[1] === newGame.targets[2]) { //addBullet target is hit
                
                document.querySelector('#bullets').innerHTML = newGame.bullets += 2;

                // use unicode for bullet https://www.compart.com/en/unicode/U+2022
                hitTargetFeedback('+1&#8226;');

            } else if(this.classList[1] === newGame.targets[3]){ //Normal target is hit
                
                document.querySelector('#time').innerHTML = newGame.time += 1;
                document.querySelector('#score').innerHTML = newGame.score += 1;

                hitTargetFeedback('+1');

            }
        }
        newTarget.addEventListener('click', hitTarget);

        //Remove target after specified time
        setTimeout(function(){
            allTargets.removeChild(newTarget);
            newTarget.removeEventListener('click', hitTarget);
        }, newGame.speed);

    }
    //setInterval() function https://www.w3schools.com/jsref/met_win_setinterval.asp
    let generatedTarget = setInterval(generateRandomTargets, newGame.speed);

    //Increase level/hardness of game
    function increaseLevel(score){
        if(score > 59){
            newGame.speed -= 20
        } else if(score > 49){
            newGame.speed -= 15;
        } else if(score > 39){
            newGame.speed -= 10;
        } else if(score > 29){
            newGame.speed -= 5;
        } else if(score > 19){
            newGame.speed --;
        }
    }

    //Countdown -
    function countDown(){
        increaseLevel(newGame.score);
        if(!game.isOver){
            document.querySelector('#time').innerHTML = `${--newGame.time}`;// moved -- before variable to action decrement first 

            if(newGame.time === 0){ 
                game.isOver = true;
            }

        } else {

            gameOver();

        }
    }
    //setInterval() function https://www.w3schools.com/jsref/met_win_setinterval.asp
    let timer = setInterval(countDown, 1000);

    //Use Bullet --
    function fireBullet(){
        document.querySelector('#bullets').innerHTML = `${--newGame.bullets}`;
        if(newGame.bullets === 0){

            game.isOver = true;

        }

        if(game.isOver){

            gameOver();
        
        }
    }
    gameDisplay.addEventListener('click', fireBullet);

    //function to check reason for game over
    function gameOverReason(){
        let reason;
        if(newGame.time < 1){
            reason = 'You ran out of time!'
        } else if(newGame.bullets < 1){
            reason = 'You ran out of bullets!'
        } else {
            reason = 'Try harder!'
        }
        return reason
    }

    //Game Over --
    function gameOver(){
        //clearInterval() function https://www.w3schools.com/jsref/met_win_clearinterval.asp
        clearInterval(timer);
        clearInterval(generatedTarget);

        //removeEventListener https://www.w3schools.com/jsref/met_document_removeeventlistener.asp
        gameDisplay.removeEventListener('click', fireBullet);

        //show game over modal
        document.querySelector('#game-over-modal').classList.add('show');
        document.querySelector('#game-over-modal').classList.remove('remove');

        //run gameOverReason function
        document.querySelector('#game-over-reason').innerHTML = gameOverReason();

        //display final score
        document.querySelector('#final-score span').innerHTML = newGame.score
    }
}


// Game Menu
function openGameMenu(){

    document.querySelector('#start-game-modal').classList.add('show');
    document.querySelector('#start-game-modal').classList.remove('remove');
    let gameMenuBtns = document.querySelectorAll('#start-game-content button');
    
    //create event listener for each button on Game Menu
    gameMenuBtns.forEach((btn) => {
        btn.addEventListener('click', function(){
            if(this.id === 'start-game-btn'){

                document.querySelector('#start-game-modal').classList.remove('show');
                document.querySelector('#start-game-modal').classList.add('remove');
    
                startNewGame();
    
            } else if(this.id === 'how-to-play-btn'){
                
               document.querySelector('#how-to-play').classList.toggle('show-instructions');
               
            } 
        });
    });

}

openGameMenu();


//Restart the game
document.querySelector('#restart-game-btn').addEventListener('click', function(){
    game.isOver = false;
    startNewGame();
});