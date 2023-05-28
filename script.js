 // Fonction pour activer la classe "active" sur l'élément en cours de vue
 function setActive() {
     const sections = document.querySelectorAll('section'); // Sélectionne tous les éléments <section>
     const scrollPosition = window.pageYOffset; // Récupère la position de défilement actuelle
     sections.forEach(section => {
       const sectionTop = section.offsetTop; // Récupère la position de la section en haut de la page
       const sectionHeight = section.clientHeight; // Récupère la hauteur de la section
       if (scrollPosition >= sectionTop - sectionHeight / 3) {
         const sectionId = section.getAttribute('id'); // Récupère l'ID de la section
         const links = document.querySelectorAll('nav a'); // Sélectionne tous les éléments <a> dans la barre de navigation
         links.forEach(link => {
           link.classList.remove('active'); // Supprime la classe "active" de tous les liens de la barre de navigation
           if (link.getAttribute('href') === `#${sectionId}`) {
             link.classList.add('active'); // Ajoute la classe "active" au lien correspondant à la section en cours de vue
           }
         });
       }
     });
   }
  
   // Événement de défilement de la page
   window.addEventListener('scroll', setActive);  

/* ================================== scroll sections active link=================================== */

// let section = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//   section.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach(links => {
//         links.classList.remove("active");
//         document.querySelector("header nav a[herf*=" + id + "]").classList.add("active");
//       });
//     }
//   });
// };

/* ================================== Menu deroulant =================================== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
  // menuIcon.getAttribute('src') = "" optionnel
  navbar.classList.toggle('active');
};

function exit(){
  navbar.classList.remove("active");

}



// ===================================== Scroll reveal =================================

ScrollReveal(
  {
    reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
  }
);
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ==================================== Typed js ======================================

const typed =new Typed(
  '.change',
  {
    strings: ['Web Development', 'Graphic Design', 'Digital Marketing'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  }
)


