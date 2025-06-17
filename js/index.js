let prevScrollPos = window.pageYOffset;
let navBottom = document.querySelector(".navigation-bottom");
let menu = document.querySelector(".menu-hamburger");
let menuItems = document.querySelector('.menu-container');
let allContainer = document.querySelector('.all-container');
let maincontent = document.querySelector('.main-content');

window.addEventListener('scroll', scrollEvent);
function scrollEvent() {
    const currentScrollPos = window.pageYOffset;
    const maxHeight = document.documentElement.scrollHeight;
    if (currentScrollPos > prevScrollPos) {
        if (window.scrollY + window.innerHeight >= (maxHeight - 20)) {
            navBottom.classList.remove("hidden-nav-bottom");
        } else {
            navBottom.classList.add("hidden-nav-bottom");
        }
    } else {
        navBottom.classList.remove("hidden-nav-bottom");
    }
    prevScrollPos = currentScrollPos;
}

function menuFunction() {
    if (menu.classList.contains('hamburger-active')) {
        menu.classList.remove('hamburger-active');
        menu.classList.add('menu-hamburger');
        menuItems.classList.add('hidden-menu');
        allContainer.classList.remove('hidden-menu');
    } else {
        menuItems.classList.remove('hidden-menu');
        allContainer.classList.add('hidden-menu');
        menu.classList.add("hamburger-active");
        menu.classList.remove('menu-hamburger');

    }
}

menu.addEventListener("click", menuFunction);

//menu darkmode js//

const toggle = document.getElementById('mode-toggle');
const body = document.body;

toggle.addEventListener('change', function () {
    if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// check for saved user preference, if any, on load of the website
document.addEventListener('DOMContentLoaded', (event) => {
    const darkMode = localStorage.getItem('darkMode');

    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
        toggle.checked = true;
    }
});


