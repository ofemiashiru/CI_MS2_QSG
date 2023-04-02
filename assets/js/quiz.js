/*jshint esversion: 8 */

/*
* async function that makes call to the quiz API
*/
async function getQuiz(){

    let data;

    const response = await fetch('https://opentdb.com/api.php?amount=10&category=15&type=boolean');

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
        
        for(let i = 0; i < quiz.length; i++){
            // Display question number and question
            document.querySelector('.question-number').innerHTML = `${i + 1} / ${quiz.length}`;
            document.querySelector('#quiz-inner-quiz h5').innerHTML = quiz[i].question;

            let correctAnswer = quiz[i].correct_answer; // get the correct answer from api response
            let allAnswers = [quiz[i].incorrect_answers, correctAnswer]; // get correct answers and spread in new array
            
            allAnswers.sort().reverse(); //sort and reverse so True is always first

            //add answers to the dom
            let displayAnswers = allAnswers.map((answer, i) => {
                return `
                    <div class="each-answer">
                        <input type="radio" id="answer${i}" name="all_answers" value="${answer}">
                        <label for="answer${i}">${answer}</label><br>
                    </div>`;
            });

            document.querySelector('#answer-display').innerHTML = displayAnswers.join('');

            // Create the next button if there are more questions if not then create check score btn
            if(i < quiz.length - 2){
                let nextBtn = document.createElement('input');
                nextBtn.setAttribute('type', 'submit');
                nextBtn.setAttribute('value', 'Submit Answer');
                nextBtn.classList.add('submit-answer');
                document.querySelector('#answer-display').appendChild(nextBtn);
            } else {
                let checkScoreBtn = document.createElement('input');
                checkScoreBtn.setAttribute('type', 'submit');
                checkScoreBtn.setAttribute('value', 'Check Score');
                checkScoreBtn.classList.add('submit-answer');
                document.querySelector('#answer-display').appendChild(checkScoreBtn);
            }



        }
        
    });

});


