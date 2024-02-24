document.addEventListener('DOMContentLoaded', () => {
    const flags = document.querySelectorAll('.lang-flag');


    flags.forEach(flag => {
        flag.addEventListener('click', () => {
            const lang = flag.getAttribute('data-lang');
            console.log('Cambio de idioma a: ', lang); // Esto debe aparecer en la consola cuando hagas clic en una bandera
            changeLanguage(lang);
            updateActiveFlag(lang);
        });
    });


    function changeLanguage(lang) {
        const texts = {
            es: {
                aboutTitle: "Sobre mí",
                aboutContent: "Soy un apasionado por la tecnología y la seguridad digital, mi viaje educacional me ha llevado a explorar el emocionante mundo de la programación, las bases de datos y la ciberseguridad. Como entusiasta de la informática, disfruto de la resolución de problemas complejos y de encontrar soluciones creativas para proteger la información vital. Mi amor por la precisión y la estrategia también se extiende a mi tiempo libre, donde me sumerjo en el emocionante universo de Counter-Strike: Global Offensive (CSGO). Este juego no solo me permite desarrollar habilidades de trabajo en equipo y toma de decisiones bajo presión, sino que también refleja mi compromiso con la mejora continua y la excelencia. Estoy en constante búsqueda de desafíos que me permitan expandir mis conocimientos en tecnología y seguridad, así como contribuir de manera significativa a la protección de datos y sistemas en un mundo cada vez más digitalizado. Mi objetivo es mantenerme actualizado con las últimas tendencias en ciberseguridad y utilizar mi pasión por la programación y las bases de datos para enfrentar los desafíos tecnológicos actuales y futuros.",
                projectsTitle: "Proyectos",
                skillsTitle: "Habilidades",
                educationTitle: "Educación",
                heroText: "Hola, soy Arturo",
                heroSubtitle: "Desarrollador Full Stack",
                footerText: "&copy; 2023 - Arturo. Todos los derechos reservados.",
                verProyectos: "Ver Proyecto",
                dam:"Grado Superior Desarrollo de Aplicaciones Multiplataforma",
                DDBBADMIN: "Administrador de Bases de Datos Oracle",
                EUSAJAVA: "Curso de Desarrollo Web con Java",
                BACHILLER: "Bachiller de Ciencias"
            },
            en: {
                aboutTitle: "About Me",
                aboutContent: "I am passionate about technology and digital security; my educational journey has taken me through the exciting world of programming, databases, and cybersecurity. As a computer enthusiast, I enjoy solving complex problems and finding creative solutions to protect vital information. My love for precision and strategy also extends to my free time, where I dive into the thrilling universe of Counter-Strike: Global Offensive (CSGO). This game not only allows me to develop teamwork skills and decision-making under pressure but also reflects my commitment to continuous improvement and excellence. I am constantly looking for challenges that allow me to expand my knowledge in technology and security, as well as contribute significantly to the protection of data and systems in an increasingly digitalized world. My goal is to stay up to date with the latest trends in cybersecurity and use my passion for programming and databases to meet current and future technological challenges.",
                projectsTitle: "Projects",
                skillsTitle: "Skills",
                educationTitle: "Education",
                heroText: "Hello, I'm Arturo",
                heroSubtitle: "Full Stack Developer",
                footerText: "&copy; 2023 - Arturo. All rights reserved.",
                verProyectos: "See Project",
                dam: "Cross-platform application development",
                DDBBADMIN: "Oracle Database Administrator ",
                EUSAJAVA: "Web Development Course with Java",
                BACHILLER:"Bachelor of Science"
            }
        };

        // Ahora actualizamos los textos en la página
        const aboutMe = document.querySelector('.aboutMe');
        if (aboutMe) aboutMe.textContent = texts[lang].aboutTitle;

        const projectsTitleA = document.querySelector('.projectsTitleA');
        if (projectsTitleA) projectsTitleA.textContent = texts[lang].projectsTitle;

        const DAM = document.querySelector('#DAM p');
        if (DAM) DAM.textContent = texts[lang].dam;

        const DDBBADMIN = document.querySelector('#DDBBADMIN p');
        if (DDBBADMIN) DDBBADMIN.textContent = texts[lang].DDBBADMIN;

        const EUSAJAVA = document.querySelector('#EUSAJAVA p');
        if (EUSAJAVA) EUSAJAVA.textContent = texts[lang].EUSAJAVA;

        const BACHILLER = document.querySelector('#BACHILLER p');
        if (BACHILLER) BACHILLER.textContent = texts[lang].BACHILLER;



        const aboutH2 = document.querySelector('#about h2');
        if (aboutH2) aboutH2.textContent = texts[lang].aboutTitle;
        const aboutP = document.querySelector('#about p');
        if (aboutP) aboutP.textContent = texts[lang].aboutContent;
        const projectsH2 = document.querySelector('#projects h2');
        if (projectsH2) projectsH2.textContent = texts[lang].projectsTitle;
        const educationTitle = document.querySelector('#educacion h2');
        if (educationTitle) educationTitle.textContent = texts[lang].educationTitle;
        const heroH1 = document.querySelector('#hero h1');
        if (heroH1) heroH1.textContent = texts[lang].heroText;
        const heroP = document.querySelector('#hero p');
        if (heroP) heroP.textContent = texts[lang].heroSubtitle;
        const skillsH2 = document.querySelector('#skills h2');
        if (skillsH2) skillsH2.textContent = texts[lang].skillsTitle;

        // Actualizar el texto de los enlaces de proyecto
        document.querySelectorAll('.project-link').forEach(link => {
            link.textContent = texts[lang].verProyectos;
        });
        // Actualizar el texto del pie de página
        const footerP = document.querySelector('footer p');
        if (footerP) footerP.innerHTML = texts[lang].footerText;
    }

});

// Función para actualizar la bandera activa
function updateActiveFlag(lang) {
    flags.forEach(flag => {
        if (flag.getAttribute('data-lang') === lang) {
            flag.classList.add('active');
        } else {
            flag.classList.remove('active');
        }
    });

    changeLanguage('es');
}

