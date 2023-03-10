let gameDisplay = document.querySelector('#game-display')

gameDisplay.addEventListener('click', function(e){
    console.log(e)
})
//.trim() function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
const game = {
    time: document.querySelector('#time').innerHTML.trim(),
    score: document.querySelector('#score').innerHTML.trim()
}

function countDown(){
    document.querySelector('#time').innerHTML = `${game.time--}`
}

setInterval(countDown, 1000)
