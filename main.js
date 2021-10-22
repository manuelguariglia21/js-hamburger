//Seleziono il menu

const hamburger = document.querySelector('.header-right i');
const mobileNav = document.querySelector('.hamburger-menu');
console.log(hamburger);

//click
hamburger.addEventListener('click', function(){
    console.log('ho cliccato');
    mobileNav.classList.add('active');
  });
