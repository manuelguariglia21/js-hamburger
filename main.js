//Seleziono il menu

const hamburger = document.querySelector('.header-right i');
const mobileNav = document.querySelector('.hamburger-menu');
const close = document.querySelector('.close');
console.log(hamburger);

//open mobile menu
hamburger.addEventListener('click', function(){
    console.log('Aperto');
    mobileNav.classList.add('active');
  });

//close mobile menu
close.addEventListener('click', function(){
    console.log('Chiuso');
    mobileNav.classList.remove('active');
  });
