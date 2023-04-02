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

let quiz;
let questionCount = 0;

// This adds event listener to start the quiz
document.querySelector('#start-quiz').addEventListener('click', function(){ 
    document.querySelector('#quiz-inner').classList.add('hide');
    document.querySelector('#quiz-inner-quiz').classList.remove('hide');
    
});

getQuiz()
.then(data => {
    quiz = data.results;
})
.then(() => {
    nextQuestion();
})
.catch((error) => {
    console.error('Error: ', error);
});

function nextQuestion(count = 0){
    // Display question number and question
    document.querySelector('.question-number').innerHTML = `${count + 1} / ${quiz.length}`;
    document.querySelector('#quiz-inner-quiz h5').innerHTML = quiz[count].question;
    
    let correctAnswer = quiz[count].correct_answer; // get the correct answer from api response
    let allAnswers = [quiz[count].incorrect_answers, correctAnswer]; // get correct answers and spread in new array
    
    allAnswers.sort().reverse(); //sort and reverse so True is always first

    //add answers to the DOM
    let displayAnswers = allAnswers.map((answer, i) => {
        return `
            <div class="each-answer">
                <input type="radio" id="answer${i}" name="all_answers" value="${answer}" required>
                <label for="answer${i}">${answer}</label><br>
            </div>`;
    });

    document.querySelector('#answer-display').innerHTML = displayAnswers.join('');

    // Create the next button if there are more questions if not then create check score btn
    let nextBtn = document.createElement('input');
    nextBtn.setAttribute('type', 'submit');
    nextBtn.setAttribute('value', 'Submit Answer');
    nextBtn.classList.add('submit-answer');
    document.querySelector('#answer-display').appendChild(nextBtn);

    // Increase question count
    questionCount++;
}

document.querySelector('#answer-display').addEventListener('submit', function(e){
    e.preventDefault();
    console.log('true', e.target.elements[0].checked);
    console.log('false', e.target.elements[1].checked);
    nextQuestion(questionCount);
});