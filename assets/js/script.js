let gameDisplay = document.querySelector('#game-display')

const game = {
    time: document.querySelector('#time').innerHTML,
    score: document.querySelector('#score').innerHTML,
    isOver: false
}

//setInterval() function https://www.w3schools.com/jsref/met_win_setinterval.asp
//clearInterval() function https://www.w3schools.com/jsref/met_win_clearinterval.asp
function countDown(){
    
    if(!game.isOver){
        document.querySelector('#time').innerHTML = `${game.time--}`

        if(game.time === -1){ // changed to minus one as 0 displays 1 on timer 
            game.isOver = true
        }

    } else {
        clearInterval(timer)
        console.log('game over')
    }
}

let timer = setInterval(countDown, 1000)
