let prevScrollPos = window.pageYOffset;
let navBottom=document.querySelector(".navigation-bottom");
let menu = document.querySelector(".menu-hamburger");
window.addEventListener('scroll',scrollEvent);
function scrollEvent() {
  const currentScrollPos = window.pageYOffset;
  const maxHeight = document.documentElement.scrollHeight;
  if (currentScrollPos > prevScrollPos) {
      if (window.scrollY + window.innerHeight >= (maxHeight-20)) {
        navBottom.classList.remove("hidden");
  }else{
        navBottom.classList.add("hidden");
  }
  } else {
    navBottom.classList.remove("hidden");
  }
  prevScrollPos = currentScrollPos;
}

function menuFunction(){
    if(menu.classList.contains('hamburger-active')){
        menu.classList.remove('hamburger-active');
        menu.classList.add('menu-hamburger');
    }else{
        menu.classList.remove('menu-hamburger');
        menu.classList.add("hamburger-active");
    }
}

menu.addEventListener("click", menuFunction);
