// New game Object
const game = {
    time: 10,
    score: 0,
    bullets: 5,
    speed: 900,
    isOver: false,
    targets: ['good', 'bad', 'add-bullet', 'nothing']
};

// get the gameDisplay and store it as a variable
let gameDisplay = document.querySelector('#game-display');

// Get X and Y axis totals for game display
let gameDisplayXAxis = gameDisplay.clientWidth - 20;
let gameDisplayYAxis = gameDisplay.clientHeight - 20;

//Setup new Game --
function startNewGame(){

    if(!game.isOver){
        game.time = 10;
        game.score = 0;
        game.bullets = 5;
        
        document.querySelector('#time').innerHTML = game.time;
        document.querySelector('#score').innerHTML = game.score;
        document.querySelector('#bullets').innerHTML = game.bullets;
        document.querySelector('#game-over-modal').classList.add('remove');
        document.querySelector('#game-over-modal').classList.remove('show');
    }



    //Generate random target
    function generateRandomTargets(){

        //genrate the random game.target which correspnds to the class in style.css
        let randomTarget =  game.targets[Math.floor(Math.random() * 4)]; 

        //generate random x and y positions
        let randomX = Math.floor(Math.random() * (gameDisplayXAxis - 20) + 20); // numbers between 20 and x display width
        let randomY = Math.floor(Math.random() * (gameDisplayYAxis - 20) + 20); // numbers between 20 and y display height
        
        //Create physical target in DOM
        let newTarget = document.createElement('div');
        newTarget.classList.add('target', `${randomTarget}`); //adds the target class from the generated randomTarget
        newTarget.style.top = `${randomY}px`; // adds position Y to top style property
        newTarget.style.left = `${randomX}px`; // adds position X to left style property
        gameDisplay.appendChild(newTarget) // append newTarget to the DOM
        
        //Add event Listener to each target, when clicked each target will respond based on the class/game.targets
        function hitTarget(){

            if(this.classList[1] === game.targets[0]){ //good target is hit
                
                document.querySelector('#time').innerHTML = game.time += 5;
                document.querySelector('#score').innerHTML = game.score += 5;

            } else if(this.classList[1] === game.targets[1]) { //bad target is hit
                
                document.querySelector('#score').innerHTML = game.score -= 2;

            } else if(this.classList[1] === game.targets[2]) { //addBullet target is hit
                
                document.querySelector('#bullets').innerHTML = game.bullets += 2;

            } else if(this.classList[1] === game.targets[3]){ //A nothing target is hit
                
                console.log('A nothing was clicked')

            }
        }
        newTarget.addEventListener('click', hitTarget)

        //Remove target after specified time
        setTimeout(function(){
            document.querySelector('.target').classList.add('remove');
            document.querySelector('.target').classList.remove('target');
            newTarget.removeEventListener('click', hitTarget);
        }, game.speed)

    }
    //setInterval() function https://www.w3schools.com/jsref/met_win_setinterval.asp
    let generatedTarget = setInterval(generateRandomTargets, game.speed);



    //Countdown -
    function countDown(){
        
        if(!game.isOver){
            document.querySelector('#time').innerHTML = `${--game.time}`;// moved -- before variable to action decrement first 
            //document.querySelector('#score').innerHTML = `${game.score+= 2}`

            if(game.time === 0){ 
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
        document.querySelector('#bullets').innerHTML = `${--game.bullets}`;
        if(game.bullets === 0){

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
        if(game.time === 0){
            reason = 'You ran out of time!'
        } else if(game.bullets === 0){
            reason = 'You ran out of bullets!'
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
        document.querySelector('#final-score span').innerHTML = game.score
    }
}

// Game Menu
function openGameMenu(){

    document.querySelector('#start-game-modal').classList.add('show');
    let gameMenuBtns = document.querySelectorAll('#start-game-content button');
    
    //create event listener for each button on Game Menu
    gameMenuBtns.forEach((btn) => {
        btn.addEventListener('click', function(){
            if(this.id === 'start-game-btn'){
                document.querySelector('#start-game-modal').classList.remove('show');
                document.querySelector('#start-game-modal').classList.add('remove');
    
                startNewGame();
    
            } else if(this.id === 'how-to-play-btn'){
                console.log('game instructions')
            }
        })
    })

}

openGameMenu();

//Restart the game
document.querySelector('#restart-game-btn').addEventListener('click', function(){
    game.isOver = false;
    startNewGame();
})
