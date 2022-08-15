const initialSection = document.querySelector(`.initial-section`);
const questionSection = document.querySelector(`.questions-section`);
const mainBtn = document.querySelector(`.main-btn`);
const navTime = document.querySelector(`.nav-p`);
const confirAwsner = document.querySelector(`.confirm-awnser`);
const questionP = document.querySelector(`.question-p`);
const btnAnwser = document.querySelector(`.btn-awnser`);
const btn1 = document.querySelector(`.btn1`)
const btn2 = document.querySelector(`.btn2`)
const btn3 = document.querySelector(`.btn3`)
const btn4 = document.querySelector(`.btn4`)

//QUESTIONS

const questions = [
    {
        question: `Commonly used data types DO Not onclude:`,
        right: `Alerts`,
        wrong1: `Booleans`,
        wrong2: `Strings`,
        wrong3: `Numbers`
    },
    {
        question: `Commonly `,
        right: `Aler`,
        wrong1: `Bleans`,
        wrong2: `trings`,
        wrong3: `Nubers`
    }
]

mainBtn.addEventListener(`click`, startQuiz);

function startQuiz(){
    //MAKING APPEAR AND CHANGE THE SCREEN
    initialSection.style.display = `none`;
    questionSection.style.display = `flex`;
    navTime.style.display = `block`;

    //SETUP TIME
    const spanTime = document.querySelector(`.timer`); 
    let time = 75;

    let startTime = setInterval(() => {
        spanTime.innerText = time;
        time--;
        if (time < 0) clearInterval(startTime);
    }, 1000);
    
       //SETUP QUESTIONS
       questionP.textContent = questions[0].question;
       btn1.innerText = questions[0].right;
       btn2.innerText = questions[0].wrong1;
       btn3.innerText = questions[0].wrong2;
       btn4.innerText = questions[0].wrong3; 
    
       btnAnwser.addEventListener(`click`, alert);

       function alert() { alert(`hey`) }
};