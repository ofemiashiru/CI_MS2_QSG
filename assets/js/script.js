const game = {
    time: 10,
    score: 0,
    bullets: 3,
    isOver: false,
    targets: ['good', 'bad', 'addBullet', 'nothing']
};


let gameDisplay = document.querySelector('#game-display')

//Setup new Game --
document.querySelector('#time').innerHTML = game.time;
document.querySelector('#score').innerHTML = game.score;
document.querySelector('#bullets').innerHTML = game.bullets;

//Generate random target
function generateRandomTargets(){
   let target =  game.targets[Math.floor(Math.random() * 4)]
   console.log(target)
}
//setInterval() function https://www.w3schools.com/jsref/met_win_setinterval.asp
let generatedTarget = setInterval(generateRandomTargets, 500)

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

//Game Over --
function gameOver(){
    //clearInterval() function https://www.w3schools.com/jsref/met_win_clearinterval.asp
    clearInterval(timer);
    clearInterval(generatedTarget);

    //removeEventListener https://www.w3schools.com/jsref/met_document_removeeventlistener.asp
    gameDisplay.removeEventListener('click', fireBullet);

    console.log('game over');
}
