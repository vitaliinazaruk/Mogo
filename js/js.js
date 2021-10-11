const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__menu");
const navLink = document.querySelectorAll(".nav__link");
var accordionOpenClass = 'accordion--open';
var accordionToggleClassName = 'accordion-toggle';
var accordions = document.querySelectorAll('.accordion');
var prevArrow = document.querySelector('.reviews__prev');
var nextArrow = document.querySelector('.reviews__next');
var arrowPrev = document.querySelector('.prev');
var arrowNext= document.querySelector('.next');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



function closeAllAccordions() {
    accordions.forEach(function(accordion) {
        accordion.classList.remove(accordionOpenClass)
    })
}


function handleClick(event) {
    closeAllAccordions();
    if (event.target.classList.contains(accordionToggleClassName)){
        if (this.classList.contains(accordionOpenClass)) {
            this.classList.remove(accordionOpenClass)
        }
        else {
            this.classList.add(accordionOpenClass);
        }
    }
}

accordions.forEach(function(element) {
    element.addEventListener('click', handleClick)
})


$(document).ready(function(){
    $('.reviews__carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: prevArrow,
        nextArrow: nextArrow,
    });

    $('.carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: arrowPrev,
        nextArrow: arrowNext,
    });

});
