const theBody = document.querySelector('body');
let moveTargets
let timer
let speed

/**
 * function that sets the speed of how quickly the targets move
 * */ 
function setSpeed(score){
    speed = 1000;
    if(score > 59){
        speed -= 500
        console.log(speed)
    } else if(score > 49){
        speed -= 400;
        console.log(speed)
    } else if(score > 39){
        speed -= 300;
        console.log(speed)
    } else if(score > 29){
        speed -= 200;
        console.log(speed)
    } else if(score > 19){
        speed -= 100;
        console.log(speed)
    }
    return speed
}

/**
 * function which is an event called when a target is hit
 * */ 
function hitTarget(){
    let targetHit = this.classList[1];
    let x = this.style.left;
    let y = this.style.top;

    let currentScore = parseInt(document.querySelector('#score').innerHTML);
    let currentBullets = parseInt(document.querySelector('#bullets').innerHTML);
    let currentTime = parseInt(document.querySelector('#timer').innerHTML);


    switch(targetHit){
        case 'good':
            hitTargetFeedback('+5', x, y);
            document.querySelector('#score').innerHTML = currentScore + 5;
            document.querySelector('#timer').innerHTML = currentTime + 5;
            break;

        case 'bad':
            hitTargetFeedback('-2', x, y);
            document.querySelector('#score').innerHTML = currentScore - 2;
            break;

        case 'normal':
            hitTargetFeedback('+1', x, y);
            document.querySelector('#score').innerHTML = currentScore + 1;
            document.querySelector('#timer').innerHTML = currentTime + 1;
            break;

        case 'add-bullet':
            hitTargetFeedback('+1&#8226;', x, y);
            document.querySelector('#bullets').innerHTML = currentBullets + 2;
            break;

        default:
            console.log('Error');
    }          
}

/**
 * function used to display feedback to user when a target is hit
 * */ 
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

/**
 * function used to generate the random targets on the display
 * */ 
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
    }, setSpeed(document.querySelector('#score').innerHTML))
}

/**
 * function used to deplete bullets when they are used
 * if bullets hit zero then we call the gameOver() function
 * */ 
function useBullets(){

    document.querySelector('#bullets').innerHTML -= 1;
    if(bullets.innerHTML == 0){
        gameOver();
    }

}

/**
 * function used to create a countdown for the overall game
 * */ 
function countDown(){
    
    if(document.querySelector('#timer').innerHTML == 0){
        gameOver();
    } else {
        document.querySelector('#timer').innerHTML -= 1
    }
}

/**
 * function used to start all the elements in the game
 * */ 
function startGame(){

    document.querySelector('#bullets').innerHTML = 5;
    document.querySelector('#timer').innerHTML = 20;
    document.querySelector('#score').innerHTML = 0;

    theBody.addEventListener('click', useBullets);
    timer = setInterval(countDown, 1000);
    moveTargets = setInterval(generateRandomTargets, setSpeed(document.querySelector('#score').innerHTML));
    
}

/**
 * function to display gameOver modal and clear all intervals
 * */ 
function gameOver(){
    console.log(gameOverReason())
    theBody.removeEventListener('click', useBullets);
    clearInterval(moveTargets);
    clearInterval(timer);
}

/**
 * function used to show the reason a players game is over
 * */ 
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

/**
 * function used to open the game menu
 * */ 
function openGameMenu(){

}


startGame()