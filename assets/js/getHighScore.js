// add if statement to only generate highScore if the localStorage length is greater than 0
if(localStorage.length > 0){

    // get all the high scores from local storage and parse as JSON
    const highScores = JSON.parse(localStorage.newScore);

    //Sort the high Scores
    highScores.sort(function(a, b){ 
        return Object.values(b) - Object.values(a);
    });

    //get the top ten scores after they are sorted
    const topTenScores = highScores.slice(0,10);

    //generate High Scores on the leader board
    const table = document.querySelector('#scoreboard-inner');

    const scoreRows = topTenScores.map( function(each) {
        for(let key of Object.keys(each)){
            return (`
                    <div>${key.length > 10 ? key.substring(0, 10)+'...' : key}</div>
                    <div>${each[key]}</div>`
            );
        }
    });

    table.innerHTML += scoreRows.join('');
}