// handles the burger menu on home page
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');


//when burger menu clicked show menu and show close button
openMenu.addEventListener('click', function() {
    document.querySelector('#my-nav').classList.add('show-nav');
    openMenu.classList.remove('show');
    openMenu.classList.add('hide');
    closeMenu.classList.remove('hide');
    closeMenu.classList.add('show');

});

// when close is clicked close menu and show burger menu
closeMenu.addEventListener('click', function() {
    document.querySelector('#my-nav').classList.remove('show-nav');
    openMenu.classList.remove('hide');
    openMenu.classList.add('show');
    closeMenu.classList.remove('show');
    closeMenu.classList.add('hide');

});

// closes menu when individual link is clicked
const allNavLinks = document.querySelectorAll('#my-nav a');

allNavLinks.forEach( function(link) {
    link.addEventListener('click', function() {
        document.querySelector('#my-nav').classList.remove('show-nav');
        openMenu.classList.remove('hide');
        openMenu.classList.add('show');
        closeMenu.classList.remove('show');
        closeMenu.classList.add('hide');
    });
});

// closes menu when on a bigger screen and resets to burger menu
window.addEventListener('resize', function() {
    if(window.screen.width > 1093){
        document.querySelector('#my-nav').classList.remove('show-nav');
        openMenu.classList.remove('hide');
        openMenu.classList.add('show');
        closeMenu.classList.remove('show');
        closeMenu.classList.add('hide');

    }
});

// targets play now buttons to open the game link
document.querySelectorAll('.play-now-btn').forEach( function(btn) {
    btn.addEventListener('click', function() {
        window.location.href = 'game.html';
    });
});