
let prevScrollPos = window.pageYOffset;
let navBottom = document.querySelector(".navigation-bottom");
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