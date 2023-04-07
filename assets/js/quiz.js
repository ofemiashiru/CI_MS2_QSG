/*jshint esversion: 8 */

let quiz;
let questionCount = 0;
let score = 0;

/*
* async function that makes call to the quiz API
*/
async function getQuiz(){

    let data;

    const response = await fetch('https://opentdb.com/api.php?amount=10&category=15&type=boolean');

    data = await response.json();

    return data;
}

/**
 * function to start the quiz
*/
function startQuiz(){
    questionCount = 0;
    score = 0;
    document.querySelector('#quiz-inner').classList.add('hide');
    document.querySelector('#quiz-inner-quiz').classList.remove('hide');
    document.querySelector('#quiz-final-socre').classList.add('hide');

    getQuiz()
    .then(data => {
        quiz = data.results;
        nextQuestion(questionCount);
    })
    .catch((error) => {
        console.error('Error: ', error);
    });

}

/**
 * function to take user to the next question
 * @param {number} count - takes the current number of the APIs question 
 */ 
function nextQuestion(count){
    // Display question number and question
    document.querySelector('.question-number').innerHTML = `${count + 1} / ${quiz.length}`;
    document.querySelector('#quiz-inner-quiz h5').innerHTML = quiz[count].question;
    
    let correctAnswer = quiz[count].correct_answer; // get the correct answer from api response
    let allAnswers = [quiz[count].incorrect_answers, correctAnswer]; // get correct answers and spread in new array
    
    allAnswers.sort().reverse(); //sort and reverse so True is always first

    displayAnswers(allAnswers);

    // Create submit answer button
    let submitBtn = document.createElement('input');
    let newDiv = document.createElement('div');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('value', 'Submit Answer');
    submitBtn.setAttribute('id', 'submit-answer-btn');
    submitBtn.classList.add('submit-answer');
    newDiv.appendChild(submitBtn);
    document.querySelector('#answer-display').appendChild(newDiv);
    
}

/**
 * function that displays all the possible answers 
 * @param {array} possibleAnswers - all the possible answers from API call
 * */ 
function displayAnswers(possibleAnswers){
    //add answers to the DOM
    let displayAnswers = possibleAnswers.map((answer, i) => {
        return `
            <div class="each-answer">
                <input type="radio" id="answer${i}" name="all_answers" value="${answer}">
                <label for="answer${i}">${answer}</label><br>
            </div>
            `;
    });

    document.querySelector('#answer-display').innerHTML = displayAnswers.join('');

    // True and false buttons
    document.querySelectorAll('.each-answer label').forEach((label)=>{
        label.addEventListener('click', function(){
            let choice = this.innerHTML;
            switch (choice) {
                case 'True':
                    this.classList.add('good','chosen');
                    document.querySelectorAll('.each-answer label')[1].classList.remove('good', 'chosen');
                    break;
                case 'False':
                    this.classList.add('good', 'chosen');
                    document.querySelectorAll('.each-answer label')[0].classList.remove('good', 'chosen');
                    break;
                default:
                    console.error('Error: An error has occurred');
                    break;
            }
        });
    });

}

/**
 * function to compare the users answer to the APIs correct answer 
 * and gives feedback based on whether it is wrong or right
 * @param {string} user - this is the users choice true or false
 * @param {string} correct - this is the correct answer from the API called
 * */ 
function checkAnswer(user, correct){
    let message;
    let answerClass;
    if(user === correct){
        message = 'Correct answer';
        answerClass = 'right-answer';
        score += 1;
    } else {
        message = 'Incorrect answer';
        answerClass = 'wrong-answer';
    }

    document.querySelector('#answer-feedback').innerHTML = message;
    document.querySelector('#answer-feedback').classList.add(answerClass);

    setTimeout(function(){
        document.querySelector('#answer-feedback').classList.remove(answerClass);
    }, 2000);
}

/**
 * function to get the quiz total score
*/
function getTotalScore(){
    document.querySelector('#quiz-inner-quiz').classList.add('hide');
    document.querySelector('#answer-feedback').innerHTML = '';
    document.querySelector('#quiz-final-socre').classList.remove('hide');
    document.querySelector('#quiz-final-socre h4').innerHTML = score;

    let message;

    if(score >= 7){
        message = 'Well done! You really know your games!';
    } else if(score >= 4 && score <= 6){
        message = 'Not bad, not bad!';
    } else  if(score < 4){
        message = 'You\'ve got some brushing up to do!';
    }

    document.querySelector('#final-feedback').innerHTML = message;

}

// Button to start the quiz adds event listener to start the quiz
document.querySelector('#start-quiz').addEventListener('click', function(){     
    startQuiz(); 
});

// Submit answer after answer is chosen
document.querySelector('#answer-display').addEventListener('submit', function(e){
    e.preventDefault();

    let userAnswer = e.target.elements.all_answers.value;

    // Handles the user has not selecting an answer (non-input)
    if(!userAnswer){
        document.querySelector('#answer-feedback').innerHTML = '> Please select True or False! <';
        return;
    }
    
    
    if(questionCount < quiz.length - 1){

        checkAnswer(userAnswer ,quiz[questionCount].correct_answer);
    
        // Disable buttons and inputs while checking answer so user does not resubmit
        for(let i = 0; i < this.elements.length; i++){
            this.elements[i].setAttribute('disabled', 'true');
        }
    
         // Increase question count
        questionCount++;
    
        setTimeout(function(){
            nextQuestion(questionCount);
            document.querySelector('#answer-feedback').innerHTML = '';
        }, 2000);

    } else {

        checkAnswer(userAnswer ,quiz[questionCount].correct_answer);
    
        // Disable buttons and inputs while checking answer so user does not resubmit
        for(let i = 0; i < this.elements.length; i++){
            this.elements[i].setAttribute('disabled', 'true');
        }

        setTimeout(function(){
            getTotalScore();
        }, 3000);
    }

});

// restarts the quiz
document.querySelector('#restart-quiz').addEventListener('click', startQuiz);