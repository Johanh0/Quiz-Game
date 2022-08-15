// DARK MODE 
let darkModeContainer = document.querySelector(`.dark-mode-container`);
let darkModeBtn = document.querySelector(`.dark-mode-btn`);
let html = document.querySelector(`html`);
let mode = false;

darkModeContainer.addEventListener(`click`, darkMode);

function darkMode(){

    if (mode === false) {
        // CHANGE COLOR 
        html.style.backgroundColor = `#27272A`;
        html.style.color = `white`;

        // CHANGE BG OF SWITCH 
        darkModeContainer.style.backgroundImage = `url(../assets/bgDark.svg)`;
        darkModeBtn.style.backgroundImage = `url(../assets/btnMoon.svg)`;


        // MOVE SWITCH 
        darkModeBtn.style.transform = `translateX(180%)`;

        mode = true;
    } else if (mode === true){
        // CHANGE COLOR 
        html.style.backgroundColor = `white`;
        html.style.color = `black`;

        // CHANGE BG OF SWITCH 
        darkModeContainer.style.backgroundImage = `url(../assets/bgLight.svg)`;
        darkModeBtn.style.backgroundImage = `url(../assets/btnSun.svg)`;

        // MOVE SWITCH 
        darkModeBtn.style.transform = `none`;

        mode = false;
    }
};


