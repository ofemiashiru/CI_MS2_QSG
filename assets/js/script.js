const game = {
    time: document.querySelector('#time').innerHTML,
    score: 0,
    bullets: document.querySelector('#bullets').innerHTML,
    isOver: false
}
// $(document).ready(function() {

    let gameDisplay = document.querySelector('#game-display')

    
    //Use Bullet
    function fireBullet(){
        document.querySelector('#bullets').innerHTML = `${--game.bullets}`
        if(game.bullets === 0){

            game.isOver = true
            //removeEventListener https://www.w3schools.com/jsref/met_document_removeeventlistener.asp
            gameDisplay.removeEventListener('click', fireBullet)
        }
    }
    gameDisplay.addEventListener('click', fireBullet)

    //Countdown
    //setInterval() function https://www.w3schools.com/jsref/met_win_setinterval.asp
    //clearInterval() function https://www.w3schools.com/jsref/met_win_clearinterval.asp
    function countDown(){
        
        if(!game.isOver){
            document.querySelector('#time').innerHTML = `${--game.time}`// moved -- before variable to action decrement first 
            //document.querySelector('#score').innerHTML = `${game.score+= 2}`
    
            if(game.time === 0){ 
                game.isOver = true
            }

        } else {
            clearInterval(timer)
            console.log('game over')
        }
    }

    let timer = setInterval(countDown, 1000)
// })