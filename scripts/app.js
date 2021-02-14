const navTriggerEl = document.querySelector(".hamburger");
const navEl = document.querySelector("nav");
const contenEl = document.querySelector(".content");
const hamburgerBarsEl = document.getElementsByTagName("span");

function toggleNav(){
    navTriggerEl.addEventListener("click",function(){
        navEl.classList.toggle("open");
        contenEl.classList.toggle("shift");
        animateHamburgers();
    })
}

function animateHamburgers(){
    for (let item of hamburgerBarsEl){
        item.classList.toggle("change");
    }
}
toggleNav(); 