const timeSpan = document.querySelector(`.timer`);
const timePElement = document.querySelector(`.nav-p`);
const navAElement = document.querySelector(`.nav-a`);
const initialSection = document.querySelector(`.initial-section`);
const questionSection = document.querySelector(`.questions-section`);
const scoreSection = document.querySelector(`.score-section`);
const scoreInput = document.querySelector(`.score-input`);
const scoreBtn =document.querySelector(`.score-btn`);
const score = document.querySelector(`.score`);
const startBtn = document.querySelector(`.main-btn`);
const questionElement = document.querySelector(`.question-p`);
const questionBtns = document.querySelector(`.btn-answer`);
const btn1 = document.querySelector(`.btn1`);
const btn2 = document.querySelector(`.btn2`);
const btn3 = document.querySelector(`.btn3`);
const btn4 = document.querySelector(`.btn4`);
const messegeInTheAnswer = document.querySelector(`.confirm-answer`)
const viewScoreSection = document.querySelector(`.view-scores-section`);
const ulScoresList = document.querySelector(`.scores-list`);
let time = 75;
let finallyScore;
let interval;
let questionNumber = 0;
let randomQuestion , currentQuestion;
let userToSave;
let nameToSave;
let scoreToSave;
const questions = [
    {
        question: `Commonly used data types DO not include:`,
        answers: [
            {text: `Strings`, correct: false},
            {text: `Boolenas`, correct: false},
            {text: `Alerts`, correct: true},
            {text: `Numbers`, correct: false},
        ]
    },
    {
        question: `The condition in an if / else statements is enclosed with _____.`,
        answers: [
            {text: `Parenthesis`, correct: true},
            {text: `Curly brackets`, correct: false},
            {text: `Quotes`, correct: false},
            {text: `Square brackets`, correct: false},
        ]
    },
    {
        question: `Arrays in Javascript can be used to store _____.`,
        answers: [
            {text: `Numbers and strings`, correct: false},
            {text: `Other arrays`, correct: false},
            {text: `Booleans`, correct: false},
            {text: `All of the above`, correct: true},
        ]
    },
    {
        question: `Strings values must be enclosed within _____. When being assigned to variables.`,
        answers: [
            {text: `Commas`, correct: false},
            {text: `Quotes`, correct: true},
            {text: `Curly brackets`, correct: false},
            {text: `Parenthesis`, correct: false},
        ]
    },
    {
        question: `A very useful tool used during development and debugging for printing content to the debugger is:`,
        answers: [
            {text: `JavaScript`, correct: false},
            {text: `Termina/Bash`, correct: false},
            {text: `For loops`, correct: false},
            {text: `Console.log`, correct: true},
        ]
    },
];

startBtn.addEventListener(`click`, startGame);
btn1.addEventListener(`click`, checkAnswer1);
btn2.addEventListener(`click`, checkAnswer2);
btn3.addEventListener(`click`, checkAnswer3);
btn4.addEventListener(`click`, checkAnswer4);
scoreBtn.addEventListener(`click`, saveScore);

function startGame () {
    initialSection.classList.add(`hide`);
    questionSection.classList.remove(`hide`);

    startTime();
    questionsLogic();
};

function startTime() { 
    timePElement.classList.remove(`hide`);
        interval = setInterval( () => {
        if ( time >= 0 ) {
            timeSpan.innerText = time;
            time--;
        } else if ( time <= 0 ) {
            console.log(`done`);
            clearInterval(interval)
        }
    }, 1000);
 };

function questionsLogic () {

    if ( questionNumber <= 4 ) {
        questionElement.innerText = questions[questionNumber].question;
        btn1.innerText = questions[questionNumber].answers[0].text;
        btn2.innerText = questions[questionNumber].answers[1].text;
        btn3.innerText = questions[questionNumber].answers[2].text;
        btn4.innerText = questions[questionNumber].answers[3].text;

        btn1.dataset.correct = questions[questionNumber].answers[0].correct;
        btn2.dataset.correct = questions[questionNumber].answers[1].correct;
        btn3.dataset.correct = questions[questionNumber].answers[2].correct;
        btn4.dataset.correct = questions[questionNumber].answers[3].correct;

        questionNumber++;
    } else if ( questionNumber > 4 ){
        finallyScore = time;
        score.innerText = finallyScore;
        timeSpan.innerText = finallyScore;
        clearInterval(interval)
        questionSection.classList.add(`hide`);
        scoreSection.classList.remove(`hide`);
        questionNumber = 0;
    }
};

function checkAnswer1() {
    if (btn1.dataset.correct === `true`) {
        messegeInTheAnswer.classList.remove(`hide`)
        messegeInTheAnswer.innerText = `Correct!`;
        questionsLogic();
    } else if (btn1.dataset.correct != `true`) {
        time = time -10;
        messegeInTheAnswer.classList.remove(`hide`)
        messegeInTheAnswer.innerText = `Incorrect!`;
        questionsLogic();
    }
};

function checkAnswer2() {
    if (btn2.dataset.correct === `true`) {
        messegeInTheAnswer.classList.remove(`hide`)
        messegeInTheAnswer.innerText = `Correct!`;
        questionsLogic();
    } else if (btn2.dataset.correct != `true`) {
        time = time -10;
        messegeInTheAnswer.classList.remove(`hide`)
        messegeInTheAnswer.innerText = `Incorrect!`;
        questionsLogic();
    }
};

function checkAnswer3() {
    if (btn3.dataset.correct === `true`) {
        messegeInTheAnswer.classList.remove(`hide`)
        messegeInTheAnswer.innerText = `Correct!`;
        questionsLogic();
    } else if (btn3.dataset.correct != `true`) {
        time = time -10;
        messegeInTheAnswer.classList.remove(`hide`)
        messegeInTheAnswer.innerText = `Incorrect!`;
        questionsLogic();
    }
};

function checkAnswer4() {
    if (btn4.dataset.correct === `true`) {
        messegeInTheAnswer.classList.remove(`hide`);
        messegeInTheAnswer.innerText = `Correct!`;
        questionsLogic();
    } else if (btn4.dataset.correct != `true`) {
        time = time -10;
        messegeInTheAnswer.classList.remove(`hide`)
        messegeInTheAnswer.innerText = `Incorrect!`;
        questionsLogic();
    }
};

function saveScore () {

    const randomId = () => {
        const mathRandom = Math.floor(Math.random() * (100000 - 10000) + 10000);
        return mathRandom;
    }

    let id = randomId();

    if ( scoreInput.value === `` ) {

        alert(`You have to put a name`);

    } else {

        userToSave = {
            name: scoreInput.value,
            score: time
        }
    
        userToSave = JSON.stringify(userToSave);
        localStorage.setItem(`user_${id}`, userToSave)
    
        scoreInput.value = ``;
        scoreSection.classList.add(`hide`);
        viewScoreSection.classList.remove(`hide`);

        let nameScore = localStorage.getItem(`user_${id}`);
        nameScore = JSON.parse(nameScore);
        console.log(nameScore);

        nameToSave = nameScore.name;
        scoreToSave = nameScore.score;

        createElementsForScore();
    };

};

function createElementsForScore () {

    const createLi = document.createElement(`li`);
    const createPName = document.createElement(`p`);
    const createPSocre = document.createElement(`p`);
    
    createPName.classList.add(`nameScore`);
    createPSocre.classList.add(`scoreNumber`);

    createPName.innerText = nameToSave;
    createPSocre.innerText = scoreToSave;

    ulScoresList.appendChild(createLi);
    createLi.appendChild(createPName);
    createLi.appendChild(createPSocre);


    ulScoresList.appendChild(createLi);
    createLi.appendChild(createPName);
    createLi.appendChild(createPSocre);

    timePElement.classList.add(`hide`);
    navAElement.classList.add(`hide`);

    time = 75;
}

const  btnBack = document.querySelector(`.btn-back`);

navAElement.addEventListener(`click`, viewScore);
btnBack.addEventListener(`click`, goBack);

function goBack () { 
    viewScoreSection.classList.add(`hide`);
    initialSection.classList.remove(`hide`);
    navAElement.classList.remove(`hide`);
 };

 function viewScore () {
    event.preventDefault()
    viewScoreSection.classList.remove(`hide`);
    initialSection.classList.add(`hide`);
    navAElement.classList.add(`hide`);
 }