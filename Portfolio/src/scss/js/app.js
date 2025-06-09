//Menu Responsive

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("nav-visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("nav-visible");
});


const botonIdioma = document.getElementById("boton-idioma");
const iconoBandera = document.getElementById("icono-bandera");

// Definimos las rutas correctas de las banderas
const banderaES = "./build/img/bandera-españa.svg";
const banderaEN = "./build/img/reinounido-bandera.svg";

// 🔹 Al cargar la página, aseguramos que el src es EXACTAMENTE el esperado
window.addEventListener("load", () => {
    iconoBandera.setAttribute("src", banderaES);
});

botonIdioma.addEventListener("click", () => {
    if (iconoBandera.getAttribute("src") === banderaES) {
        iconoBandera.setAttribute("src", banderaEN); // Cambia a bandera UK
        cambiarIdioma_en(); // Cambia el idioma a inglés
    } else {
        iconoBandera.setAttribute("src", banderaES); // Cambia a bandera España
        cambiarIdioma_es(); // Cambia el idioma a español
    }
});

function cambiarIdioma_en() {
  // Header
  const home = document.getElementById("Home-nav");
  const sobremi = document.getElementById("Sobremi-nav");
  const proyectos = document.getElementById("Proyectos-nav");
  const skills = document.getElementById("Skills-nav");
  const certificados = document.getElementById("Certificados-nav");
  const contacto = document.getElementById("Contacto-nav");

  home.textContent = "Home";
  sobremi.textContent = "About Me";
  sobremi.textContent = "Projects";

  skills.textContent = "Skills";
  certificados.textContent = "Certificates";
  contacto.textContent = "Contact";

  // Sección de Inicio
  const primeraParte = document.querySelector(".first-part");
  primeraParte.innerHTML = ` 
        <h1 class="title">
            Hi, <br />
            I'm <span class="title-color">Mateo</span> <br />
            Junior Developer
        </h1>
        <a 
            href="https://drive.google.com/file/d/1x0mFiwizd0lr5cQvdeyF7HzdjKvusq3R/view?usp=sharing"
            target="_blank"
            class="button cv"
            >Resume</a
        >

        <div class="home__social">
            <a href="https://www.linkedin.com/in/mateo-melano-8148b22a3/" target="_blank" class="home__social-icon"
            ><i class="bx bxl-linkedin"></i
            ></a>
            <a href="https://github.com/Mateomelano" target="_blank" class="home__social-icon"
            ><i class="bx bxl-github"></i
            ></a>
            <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mateomelano2003@gmail.com"
            class="home__social-icon"
            target="_blank"
            ><i class="bx bxl-gmail"></i
            ></a>
        </div>
    
    `;
  // Sección de Sobre Mí
  document.querySelector(".sobre-mi__title").textContent = "About Me";
  document.querySelector(".sobre-mi__title2").textContent = "I'm Mateo Melano";
  document.querySelector(".sobre-mi__text").textContent =
    "Graduated from the U.T.N.'s Programming Technician program. Currently working on the Suprasoft development team.";

  // Sección de Proyectos
  document.querySelector(".title-proyectos").textContent = "Projects";
  document.querySelector(".title-webb").textContent = "Web Projects";
  //document.querySelector(".title-pythonn").textContent = "Python Projects";

  document.getElementById("proyecto-2-titulo").textContent = "Online Store";
  document.getElementById("proyecto-3-titulo").textContent =
    "Music Festival Page";
  document.getElementById("proyecto-4-titulo").textContent =
    "Lacteos La Estancia Web";
  document.getElementById("proyecto-5-titulo").textContent =
    "Lubricantes Alvear Suppliers Website";
  document.getElementById("proyecto-6-titulo").textContent = "Coffee Blog";

  //document.getElementById("proyecto-python-1-titulo").textContent =
   // "Reservation System - MVC and POO";
  //document.getElementById("proyecto-python-2-titulo").textContent =
  //  "Python Games";
  //document.getElementById("proyecto-python-3-titulo").textContent =
    //"Patient Management System - MVC and POO";
  // Sección de Skills
  document.querySelector(".title-skills h1").textContent = "Skills";
  document.querySelector(".title-skills h2").textContent =
    " My programming languages, frameworks, technologies and tools";

  //Seccion Vieja
  //const titleLenguajes = document.querySelectorAll(".title-lenguajes");
  //titleLenguajes[0].textContent = "Programming Languages";
  //titleLenguajes[1].textContent = "Frameworks & Libraries";
  //titleLenguajes[2].textContent = "Technologies & Tools";

  // Sección de Certificados
  const titleCertificates = document.querySelector(".title-certificates h1");
  titleCertificates.textContent = "Certificates";

  const certificateTitles = document.querySelectorAll(
    ".certificates-container h4"
  );
  certificateTitles[0].textContent = "University Degree";
  certificateTitles[1].textContent = "Participation in C.N.E.S.I.";
  certificateTitles[2].textContent = "Node.js Course";
  certificateTitles[3].textContent = "SQL Course";
  certificateTitles[4].textContent = "Web Development Course";
  certificateTitles[5].textContent = "Python Course";

  // Sección de Contacto
  const titleContact = document.querySelector(".contact-title h1");
  titleContact.textContent = "Contact";

  const contactText = document.querySelector(".contact-h3 h2");
  contactText.textContent =
    "¡ Call me, write me an e-mail, or connect and chat with me on Linkedin !";

  const footer_content = document.querySelector(".footer-container");
  footer_content.innerHTML = `
        <p> Created by <a href="https://github.com/Mateomelano">Mateomelano</a> - Copyright © All Rights Reserved</p>
    `;
}


function cambiarIdioma_es() {
  // Header
  const homees = document.getElementById("Home-nav");
  const sobremies = document.getElementById("Sobremi-nav");
  const proyectos = document.getElementById("Proyectos-nav");
  const skillses = document.getElementById("Skills-nav");
  const certificadoses = document.getElementById("Certificados-nav");
  const contactoes = document.getElementById("Contacto-nav");

  homees.textContent = "Inicio";
  sobremies.textContent = "Sobre Mi";
  proyectos.textContent = "Proyectos";
  skillses.textContent = "Skills";
  certificadoses.textContent = "Certificados";
  contactoes.textContent = "Contacto";

  // Sección de Inicio
  const primeraParte = document.querySelector(".first-part");
  primeraParte.innerHTML = ` 
        <h1 class="title">
            Hola, <br />
            Soy <span class="title-color">Mateo</span> <br />
            Junior Developer
        </h1>
        <a 
            href="https://drive.google.com/file/d/1NVn8XJGzzIT1uHYQBiEk44dgkdOyjrnr/view?usp=sharing"
            target="_blank"
            class="button cv"
            >Ver CV</a
        >

        <div class="home__social">
            <a href="https://www.linkedin.com/in/mateo-melano-8148b22a3/" target="_blank" class="home__social-icon"
            ><i class="bx bxl-linkedin"></i
            ></a>
            <a href="https://github.com/Mateomelano" target="_blank" class="home__social-icon"
            ><i class="bx bxl-github"></i
            ></a>
            <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mateomelano2003@gmail.com"
            class="home__social-icon"
            target="_blank"
            ><i class="bx bxl-gmail"></i
            ></a>
        </div>
    
    `;

  // Sección de Sobre Mí
  document.querySelector(".sobre-mi__title").textContent = "Sobre Mi";
  document.querySelector(".sobre-mi__title2").textContent = "Soy Mateo Melano";
  document.querySelector(".sobre-mi__text").textContent =
    "Egresado de la carrera Tecnicatura en Programacion en la U.T.N. Actualmente trabajando en el equipo de desarrollo de Suprasoft.";

  // Sección de Proyectos
  document.querySelector(".title-proyectos").textContent = "Proyectos";
  document.querySelector(".title-webb").textContent = "Proyectos Web";
  //document.querySelector(".title-pythonn").textContent = "Proyectos Python";

  document.getElementById("proyecto-2-titulo").textContent = "Tienda Online";
  document.getElementById("proyecto-3-titulo").textContent =
    "Sitio Festival de Musica";
  document.getElementById("proyecto-4-titulo").textContent =
    "Lacteos La Estancia Web";
  document.getElementById("proyecto-5-titulo").textContent =
    "Web Proveedores Lubricantes Alvear";
  document.getElementById("proyecto-6-titulo").textContent = "Blog de Cafe";

  //document.getElementById("proyecto-python-1-titulo").textContent =
    //"Sistemas de Reservas - MVC y POO";
  //document.getElementById("proyecto-python-2-titulo").textContent =
    //"Juegos Python";
  //document.getElementById("proyecto-python-3-titulo").textContent =
    //"Consulta de Pacientes - MVC y POO";
  // Sección de Skills
  document.querySelector(".title-skills h1").textContent = "Skills";
  document.querySelector(".title-skills h2").textContent =
    "Mis lenguajes, frameworks, tecnologías y herramientas";

  //Seccion Vieja
  //const titleLenguajes = document.querySelectorAll(".title-lenguajes");
  //titleLenguajes[0].textContent = "Lenguajes";
  //titleLenguajes[1].textContent = "Librerias & Frameworks";
  //titleLenguajes[2].textContent = "Tecnologías & Herramientas";

  // Sección de Certificados
  const titleCertificates = document.querySelector(".title-certificates h1");
  titleCertificates.textContent = "Certificados";
  const certificateTitles = document.querySelectorAll(
    ".certificates-container h4"
  );
  certificateTitles[0].textContent = "Participación en C.N.E.S.I.";
  certificateTitles[1].textContent = "Curso Node.js";
  certificateTitles[2].textContent = "Curso SQL";
  certificateTitles[3].textContent = "Curso Desarrolo Web";
  certificateTitles[4].textContent = "Curso Python";
  certificateTitles[5].textContent = "Titulo Universitario";

  // Sección de Contacto
  const titleContact = document.querySelector(".contact-title h1");
  titleContact.textContent = "Contacto";

  const contactText = document.querySelector(".contact-h3 h2");
  contactText.textContent =
    "¡ Llámame, escribime un correo, o conecta y chatea conmigo en Linkedin !";

  const footer_content = document.querySelector(".footer-container");
  footer_content.innerHTML = `
        <p> Creado por <a href="https://github.com/Mateomelano">Mateomelano</a> - Copyright © All Rights Reserved</p>
    `;
}

//Boton Dark Mode

const swith = document.querySelector(".switch");

swith.addEventListener("click", (e) => {
  swith.classList.toggle("active");
  document.body.classList.toggle("active");
});

//Link Activo
const navLink = document.querySelectorAll(".nav__link");

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav__link");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      links.forEach(function (item) {
        item.classList.remove("nav__link__active");
      });
      this.classList.add("nav__link__active");
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("#imagen-certificado");
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);
  
  images.forEach(image => {
      image.addEventListener("click", function () {
          lightbox.classList.add("active");
          const img = document.createElement("img");
          img.src = image.src;
          while (lightbox.firstChild) {
              lightbox.removeChild(lightbox.firstChild);
          }
          lightbox.appendChild(img);
      });
  });
  
  lightbox.addEventListener("click", function () {
      lightbox.classList.remove("active");
  });
});


//Efecto Imagen
const image = document.querySelector(".imagen1");


image.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = image.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 15; 
    const y = (e.clientY - top - height / 2) / 15;

    image.style.transform = `rotateX(${y}deg) rotateY(${x}deg) scale(0.99)`;
});

image.addEventListener("mouseleave", () => {
    image.style.transform = "rotateX(0) rotateY(0) scale(1)";
});

const image2 = document.querySelector(".imagen2");

image2.addEventListener("mousemove", (e) => {
    const { left, top, width, height } = image2.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 1;  
    const y = (e.clientY - top - height / 2) / 1;  

    image2.style.transform = `rotateX(${y}deg) rotateY(${x}deg) scale(0.95)`; 
});

image2.addEventListener("mouseleave", () => {
    image2.style.transform = "rotateX(0) rotateY(0) scale(1)";
});