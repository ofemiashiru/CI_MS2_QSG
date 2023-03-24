const theBody = document.querySelector('body');
let moveTargets
let timer

function hitTarget(){
    let targetHit = this.classList[1];
    let x = this.style.left;
    let y = this.style.top;
    

    switch(targetHit){
        case 'good':
            hitTargetFeedback(targetHit, x, y)
            break;
        case 'bad':
            hitTargetFeedback(targetHit, x, y)
            break;
        case 'normal':
            hitTargetFeedback(targetHit, x, y)
            break;
        case 'add-bullet':
            hitTargetFeedback(targetHit, x, y)
            break;
        default:
            console.log('Error');
    }          
}

function hitTargetFeedback(feedback, x, y){

    let hitLabel = document.createElement('div');
    hitLabel.classList.add('hit-label');
    hitLabel.style.position = 'absolute';
    hitLabel.style.top = y
    hitLabel.style.left = x
    theBody.appendChild(hitLabel);

    setTimeout(function(){
        theBody.removeChild(hitLabel)
    }, 900);

    hitLabel.innerHTML = feedback
}


function generateRandomTargets(){

    const arr = ['good','bad','add-bullet','normal'];
    const randomTarget = arr[Math.floor(Math.random() * arr.length)];
    const y = Math.floor(Math.random() * theBody.clientHeight);
    const x = Math.floor(Math.random() * theBody.clientWidth);

    //generate random target
    let newTarget = document.createElement('div');
    newTarget.classList.add('target', `${randomTarget}`); //adds the target class from the generated randomTarget
    newTarget.style.top = `${y}px`; // adds position Y to top style property
    newTarget.style.left = `${x}px`; // adds position X to left style property
    theBody.appendChild(newTarget); // append newTarget to the DOM

    //add event listener to target
    newTarget.addEventListener('click', hitTarget);

    setTimeout(function(){
        theBody.removeChild(newTarget);
        newTarget.removeEventListener('click', hitTarget)
    },1000)
}

function useBullets(){

    document.querySelector('#bullets').innerHTML -= 1;
    if(bullets.innerHTML == 0){
        gameOver();
    }

}

function countDown(){
    
    if(document.querySelector('#timer').innerHTML == 0){
        gameOver();
    } else {
        document.querySelector('#timer').innerHTML -= 1
    }
}


function startGame(){

    document.querySelector('#bullets').innerHTML = 5;
    document.querySelector('#timer').innerHTML = 5;

    timer = setInterval(countDown, 1000);

    theBody.addEventListener('click', useBullets);
    
    moveTargets = setInterval(generateRandomTargets, 1000);
    
}

function gameOver(){
    console.log(gameOverReason())
    theBody.removeEventListener('click', useBullets);
    clearInterval(moveTargets);
    clearInterval(timer);
}

function gameOverReason(){
    let reason;
    if(document.querySelector('#timer').innerHTML == 0){
        reason = 'You ran out of time!'
    } else if(document.querySelector('#bullets').innerHTML == 0){
        reason = 'You ran out of bullets!'
    } else {
        reason = 'Try harder!'
    }
    return reason
}


function openGameMenu(){

}


startGame()