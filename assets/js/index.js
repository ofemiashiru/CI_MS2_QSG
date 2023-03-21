// get all the high scores from local storage and parse as JSON
const highScores = JSON.parse(localStorage.newScore);
console.log(highScores)
//generate High Scores

let table = document.querySelector('#scoreboard-inner');

const scoreRows = highScores.map(each => {
    for(key of Object.keys(each)){
        return (`
                <div>${key}</div>
                <div>${each[key]}</div>`
        )
    }
});


table.innerHTML += scoreRows.join('');

// handles the burger menu on home page
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');


//when burger menu clicked show menu and show close button
openMenu.addEventListener('click', () => {
    document.querySelector('#my-nav').classList.add('show-nav');
    openMenu.classList.remove('show');
    openMenu.classList.add('hide');
    closeMenu.classList.remove('hide');
    closeMenu.classList.add('show');

});

// when close is clicked close menu and show burger menu
closeMenu.addEventListener('click', () => {
    document.querySelector('#my-nav').classList.remove('show-nav');
    openMenu.classList.remove('hide');
    openMenu.classList.add('show');
    closeMenu.classList.remove('show');
    closeMenu.classList.add('hide');

});

// closes menu when individual link is clicked
const allNavLinks = document.querySelectorAll('#my-nav a');

allNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelector('#my-nav').classList.remove('show-nav');
        openMenu.classList.remove('hide');
        openMenu.classList.add('show');
        closeMenu.classList.remove('show');
        closeMenu.classList.add('hide');
    });
});

// closes menu when on a bigger screen and resets to burger menu
window.addEventListener('resize', () => {
    if(window.screen.width > 1093){
        document.querySelector('#my-nav').classList.remove('show-nav');
        openMenu.classList.remove('hide');
        openMenu.classList.add('show');
        closeMenu.classList.remove('show');
        closeMenu.classList.add('hide');

    }
});