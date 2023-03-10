let gameDisplay = document.querySelector('#game-display')

//.trim() method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
const game = {
    time: document.querySelector('#time').innerHTML.trim(),
    score: document.querySelector('#score').innerHTML.trim(),
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
