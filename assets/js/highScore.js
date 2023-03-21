localStorage.clear()

const submitHighScore = (form) =>{
    let gamerName = form.gamer.value;
    let gamerScore = form.finalScore.value;
    let newScore = {[gamerName]:gamerScore};
    //stop code overwriting localStorage https://stackoverflow.com/questions/40843773/localstorage-keeps-overwriting-my-data
    let highScores = JSON.parse(localStorage.getItem("newScore")) || [];
    highScores.push(newScore);
    localStorage.setItem("newScore", JSON.stringify(highScores));

    return false
}

