let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  // Toggle navbar
  navbar.classList.toggle("active");

  // Switch icon
  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
};



const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });

  // Sticky header
  header.classList.toggle("sticky", window.scrollY > 100);
});
menuIcon.classList.remove('fa-bars');
navbar.classList.remove("active");

  ScrollReveal({
     reset: true ,
     distance:'80px',
     duration:2000,
     Delay:200
    });
    ScrollReveal().reveal(' .intro_section ,.skill_section h2, .project_section h2, .contact h2', { origin: 'top' });
     ScrollReveal().reveal('  .profile_image, .skill_container, .project_box ,.about_content , .contact form', { origin: 'bottom' });
     ScrollReveal().reveal(' .intro_section h1 , .about_content h3', { origin: 'left' });
     ScrollReveal().reveal(' .intro_section p, .about_content p' , { origin: 'right' });

 var typed = new Typed(".auto-type", {
  strings: ["FullStack Developer", "Frontend Developer", "Backend Developer", "Web Enthusiast"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
