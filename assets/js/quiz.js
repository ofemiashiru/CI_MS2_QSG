/*jshint esversion: 8 */

/*
* async function that makes call to the quiz API
*/
async function getQuiz(){

    let data;

    const response = await fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple');

    data = await response.json();

    return data;
}

async function isAnswered(){


}

document.querySelector('#start-quiz').addEventListener('click', function(){
    
    document.querySelector('#quiz-inner').classList.add('hide');
    document.querySelector('#quiz-inner-quiz').classList.remove('hide');

    getQuiz()
    .then(data => {

        let quiz = data.results;
        
        console.log(quiz);
        
        for(let i = 0; i < quiz.length; i++){
            // Display question number and question
            document.querySelector('.question-number').innerHTML = `${i + 1} / ${quiz.length}`;
            document.querySelector('#quiz-inner-quiz h5').innerHTML = quiz[i].question;

            let allAnswers = [...quiz[i].incorrect_answers]; // get correct answers and spread in new array
            let correctAnswer = quiz[i].correct_answer; // get the correct answer from api response
            let randNumber = Math.floor(Math.random() * 4); // choose a random number between 0 and 3

            allAnswers.splice(randNumber,0, correctAnswer); // choose a random position for the correct answer to go

            let displayAnswers = allAnswers.map((answer, i) => {
                return `
                    <div class="each-answer">
                        <input type="radio" id="answer${i}" name="all_answers" value="${answer}">
                        <label for="answer${i}">${answer}</label><br>
                    </div>`;
            });

            document.querySelector('#answer-display').innerHTML = displayAnswers.join('');
        }
        
    });

});


