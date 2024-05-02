import { Injectable } from '@angular/core';

interface LanguageTexts {
    [key: string]: {
        aboutTitle: string;
        aboutContent: string;
        projectsTitle: string;
        skillsTitle: string;
        educationTitle: string;
        heroText: string;
        heroSubtitle: string;
        footerText: string;
        verProyectos: string;
        dam: string;
        DDBBADMIN: string;
        EUSAJAVA: string;
        BACHILLER: string;
    };
}

@Injectable({
  providedIn: 'root'
})
export class StringsService {
  private texts: LanguageTexts = {
    es: {
      aboutTitle: "Sobre mí",
      aboutContent: "Soy un apasionado por la tecnología y la seguridad digital, mi viaje educacional me ha llevado a explorar el emocionante mundo de la programación, las bases de datos y la ciberseguridad. Como entusiasta de la informática, disfruto de la resolución de problemas complejos y de encontrar soluciones creativas para proteger la información vital. Mi amor por la precisión y la estrategia también se extiende a mi tiempo libre, donde me sumerjo en el emocionante universo de Counter-Strike: Global Offensive (CSGO). Este juego no solo me permite desarrollar habilidades de trabajo en equipo y toma de decisiones bajo presión, sino que también refleja mi compromiso con la mejora continua y la excelencia. Estoy en constante búsqueda de desafíos que me permitan expandir mis conocimientos en tecnología y seguridad, así como contribuir de manera significativa a la protección de datos y sistemas en un mundo cada vez más digitalizado. Mi objetivo es mantenerme actualizado con las últimas tendencias en ciberseguridad y utilizar mi pasión por la programación y las bases de datos para enfrentar los desafíos tecnológicos actuales y futuros.",
      projectsTitle: "Proyectos",
      skillsTitle: "Habilidades",
      educationTitle: "Educación",
      heroText: "Hola, soy Arturo",
      heroSubtitle: "Desarrollador Full Stack",
      footerText: "2023 - Arturo. Todos los derechos reservados.",
      verProyectos: "Ver Proyecto",
      dam: "Grado Superior Desarrollo de Aplicaciones Multiplataforma",
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
      footerText: "2023 - Arturo. All rights reserved.",
      verProyectos: "See Project",
      dam: "Cross-platform application development",
      DDBBADMIN: "Oracle Database Administrator",
      EUSAJAVA: "Web Development Course with Java",
      BACHILLER: "Bachelor of Science"
    }
  };

  constructor() { }

  getTexts(lang: string = 'en'): any {
    return this.texts[lang];
  }
}
