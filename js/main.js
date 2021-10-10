let menuButton=document.querySelector(".menu-bton");
let sidebar=document.querySelector(".nav-menu-left");

menuButton.addEventListener('click',(event)=>{
sidebar.classList.toggle('menu-show')
console.log(menuButton);
console.log(sidebar)
sidebar.style.transform="traslateX(-20px)"

});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards-one',{delay: 500});
ScrollReveal().reveal('.news-cards-two',{delay: 500});
ScrollReveal().reveal('.cards-banner-two',{delay: 500});
ScrollReveal().reveal('.cards-banner-one',{delay: 500});