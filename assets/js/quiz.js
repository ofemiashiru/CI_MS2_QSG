/*jshint esversion: 8 */

/*
* async function that makes call to the quiz API
*/
async function getQuiz(){

    let data;

    const response = await fetch('https://opentdb.com/api.php?amount=10&category=15&type=multiple');

    data = await response.json();

    return data;
}

/**
 * function to display the questions from the API call
 * @param {object} quiz - the quiz response from the API call
 */
function displayQuestions(quiz){
    let questions = quiz.results;
    let count = 0;
    
    while(count < questions.length){
        console.log(count + 1);
        count++;
    }
}

document.querySelector('#start-quiz').addEventListener('click', function(){
    
    document.querySelector('#quiz-inner').classList.add('hide');
    document.querySelector('#quiz-inner-quiz').classList.remove('hide');

    getQuiz()
    .then( data => {
        displayQuestions(data);
    });

});


