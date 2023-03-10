let gameDisplay = document.querySelector('#game-display')

//.trim() method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
const game = {
    time: document.querySelector('#time').innerHTML.trim(),
    score: document.querySelector('#score').innerHTML.trim()
}
//setInterval() function https://www.w3schools.com/jsref/met_win_setinterval.asp
function countDown(){
    document.querySelector('#time').innerHTML = `${game.time--}`
}

setInterval(countDown, 1000)
