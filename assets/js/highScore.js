const submitHighScore = (form) =>{
    // get all information from the form and store it in an object
    let gamerName = form.gamer.value;
    let gamerScore = form.finalScore.value;
    let newScore = {[gamerName]:gamerScore};

    // store it in the local storage without overwriting
    let highScores = JSON.parse(localStorage.getItem("newScore")) || [];
    highScores.push(newScore);
    localStorage.setItem("newScore", JSON.stringify(highScores));

    // empty text box after save
    document.querySelector('#gamer').value = ''

    // after saving redirect to the leaderboard on index.html
    setTimeout(function(){
        // redirect to leaderboard after half a second
        window.location.replace('index.html#leaderboard-section');
    }, 500)

    return false;
}

