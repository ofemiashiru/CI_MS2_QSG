const navButton = document.querySelector('#nav-button');

navButton.addEventListener('click', () => {
    document.querySelector('#my-nav').classList.toggle('show-nav');

});

const allNavLinks = document.querySelectorAll('#my-nav a');

allNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelector('#my-nav').classList.remove('show-nav');
    });
});