
//Menu Responsive


const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("nav-visible");

})

cerrar.addEventListener("click", () => {
    nav.classList.remove("nav-visible");
})


// Cambiar Idioma Ingles
const botonEn = document.getElementById("boton-en");
if (botonEn) {
    botonEn.addEventListener("click", () => {
        cambiarIdioma_en();
    });
}

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
            Frontend Developer
        </h1>
        <a 
            href="https://drive.google.com/file/d/1zOVQYlDrSJgscWJDwFw_1UltoQqOjORl/view?usp=sharing"
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
    document.querySelector(".sobre-mi__text").textContent = "Student of the Programming Technique degree at Utn, I am studying the last semester, I am passionate about music, soccer and programming.";

    // Sección de Proyectos
    document.querySelector(".title-proyectos").textContent = "Projects";
    document.querySelector(".title-webb").textContent = "Web Projects";
    document.querySelector(".title-pythonn").textContent = "Python Projects";


    document.getElementById("proyecto-2-titulo").textContent = "Online Store";
    document.getElementById("proyecto-3-titulo").textContent = "Music Festival Page";
    document.getElementById("proyecto-4-titulo").textContent = "Automatic Weather App";
    document.getElementById("proyecto-5-titulo").textContent = "Manual Weather App";
    document.getElementById("proyecto-6-titulo").textContent = "Coffee Blog";


    document.getElementById("proyecto-python-1-titulo").textContent = "Reservation System - MVC and POO"; 
    document.getElementById("proyecto-python-2-titulo").textContent = "Python Games"; 
    document.getElementById("proyecto-python-3-titulo").textContent = "Patient Management System - MVC and POO"; 
    // Sección de Skills
    document.querySelector(".title-skills h1").textContent = "Skills";
    document.querySelector(".title-skills h2").textContent = " My programming languages, frameworks, technologies and tools";
    const titleLenguajes = document.querySelectorAll(".title-lenguajes");
    titleLenguajes[0].textContent = "Programming Languages";
    titleLenguajes[1].textContent = "Frameworks & Libraries";
    titleLenguajes[2].textContent = "Technologies & Tools";

    // Sección de Certificados
    const titleCertificates = document.querySelector(".title-certificates h1");
    titleCertificates.textContent = "Certificates";

    // Sección de Contacto
    const titleContact = document.querySelector(".contact-title h1");
    titleContact.textContent = "Contact";

    const contactText = document.querySelector(".contact-h3 h2");
    contactText.textContent = "¡ Call me, write me an e-mail, or connect and chat with me on Linkedin !";

    const footer_content = document.querySelector(".footer-container");
    footer_content.innerHTML = `
        <p> Created by <a href="https://github.com/Mateomelano">Mateomelano</a> - Copyright © All Rights Reserved</p>
    `;

}


// Cambiar Idioma Ingles
const botonEs = document.getElementById("boton-es");
if (botonEs) {
    botonEs.addEventListener("click", () => {
        cambiarIdioma_es();
    });
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
            Frontend Developer
        </h1>
        <a 
            href="https://drive.google.com/file/d/1MnaAfbE7QFHA8cYgeXH52gXkmVmPlBaU/view?usp=sharing"
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
    document.querySelector(".sobre-mi__text").textContent = "Estudiante de la carrera Tecnicatura en Programacion en la Utn, estoy cursando el ultimo cuatrimestre, me apasiona la musica, el futbol y la programación.";

    // Sección de Proyectos
    document.querySelector(".title-proyectos").textContent = "Proyectos";
    document.querySelector(".title-webb").textContent = "Proyectos Web";
    document.querySelector(".title-pythonn").textContent = "Proyectos Python";


    document.getElementById("proyecto-2-titulo").textContent = "Tienda Online";
    document.getElementById("proyecto-3-titulo").textContent = "Sitio Festival de Musica";
    document.getElementById("proyecto-4-titulo").textContent = "Aplicación de Clima Automática";
    document.getElementById("proyecto-5-titulo").textContent = "Aplicación de Clima Manual";
    document.getElementById("proyecto-6-titulo").textContent = "Blog de Cafe";


    document.getElementById("proyecto-python-1-titulo").textContent = "Sistemas de Reservas - MVC y POO"; 
    document.getElementById("proyecto-python-2-titulo").textContent = "Juegos Python"; 
    document.getElementById("proyecto-python-3-titulo").textContent = "Consulta de Pacientes - MVC y POO"; 
    // Sección de Skills
    document.querySelector(".title-skills h1").textContent = "Skills";
    document.querySelector(".title-skills h2").textContent = "Mis lenguajes de programación, librerías, tecnologías y herramientas";
    const titleLenguajes = document.querySelectorAll(".title-lenguajes");
    titleLenguajes[0].textContent = "Lenguajes";
    titleLenguajes[1].textContent = "Librerias & Frameworks";
    titleLenguajes[2].textContent = "Tecnologías & Herramientas";

    // Sección de Certificados
    const titleCertificates = document.querySelector(".title-certificates h1");
    titleCertificates.textContent = "Certificados";

    // Sección de Contacto
    const titleContact = document.querySelector(".contact-title h1");
    titleContact.textContent = "Contacto";

    const contactText = document.querySelector(".contact-h3 h2");
    contactText.textContent = "¡ Llámame, escribime un correo, o conecta y chatea conmigo en Linkedin !";

    const footer_content = document.querySelector(".footer-container");
    footer_content.innerHTML = `
        <p> Creado por <a href="https://github.com/Mateomelano">Mateomelano</a> - Copyright © All Rights Reserved</p>
    `;

}


//Boton Dark Mode

const swith = document.querySelector('.switch')

swith.addEventListener('click', e => {
    swith.classList.toggle('active')
    document.body.classList.toggle('active')
})


//Link Activo
const navLink = document.querySelectorAll('.nav__link');

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav__link');
    
    links.forEach(function (link) {
      link.addEventListener('click', function (event) {
        links.forEach(function (item) {
          item.classList.remove('nav__link__active');
        });
        this.classList.add('nav__link__active');
      });
    });
  });

  