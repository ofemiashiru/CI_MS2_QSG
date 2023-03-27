
/**
 * function that saves the score of the current user
 * @param {event} e - the event passed into the function when submit event occurs
 * */ 
function submitHighScore(e) {
    e.preventDefault();

    // get all information from the form and store it in an object
    let gamerName = e.target.elements.gamer.value;
    let gamerScore = e.target.elements['final-score'].value;
    let newScore = {[gamerName]:gamerScore};

    // store it in the local storage without overwriting
    let highScores = JSON.parse(localStorage.getItem("newScore")) || [];
    highScores.push(newScore);
    localStorage.setItem("newScore", JSON.stringify(highScores));

    // empty text box after save
    document.querySelector('#gamer').value = '';

    // after saving redirect to the leaderboard on index.html
    setTimeout(function(){
        // redirect to leaderboard after half a second
        window.location.replace('index.html#leaderboard-section');
    }, 500);

}

document.querySelector('#final-score-form').addEventListener('submit', submitHighScore);