import { Component, HostListener, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import AOS from 'aos';
import { StringsService } from '../services/strings.service';
import { environment } from '../../environments/environment';

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

@Component({
  selector: 'app-main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit {

  inviteLink: string = environment.inviteNexusBot;

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2,
    private stringsService: StringsService  // Inyecta el servicio aquí
  ) {}
  /**
   * PARTE SCROLL VISUALIZACION
   */
  ngAfterViewInit(): void {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const progressContainers = this.el.nativeElement.querySelectorAll('.progress-container');
    progressContainers.forEach((container: Element) => {
      const rect = container.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        const skillFill = container.querySelector('.skill-fill');
        if (skillFill instanceof HTMLElement) {
          this.renderer.addClass(skillFill, 'start-fill');
        }
      }
    });
  }
  public texts: any;

  ngOnInit(): void {
    const flags = document.querySelectorAll('.lang-flag');
    flags.forEach((flag: Element) => {
      flag.addEventListener('click', () => {
        const lang = flag.getAttribute('data-lang');
        if (typeof lang === 'string') {
          this.changeLanguage(lang);
        }
      });
    });
    this.texts = this.stringsService.getTexts('en');  // Asegúrate de llamar a este método correctamente
  }

  changeLanguage(lang: string): void {
    // Actualizar 'texts' con el nuevo idioma
    this.texts = this.stringsService.getTexts(lang);
  
    // Ahora actualizamos los textos en la página
    const aboutMe = document.querySelector('.aboutMe') as HTMLElement;
    if (aboutMe) aboutMe.textContent = this.texts.aboutTitle;
  
    const projectsTitleA = document.querySelector('.projectsTitleA') as HTMLElement;
    if (projectsTitleA) projectsTitleA.textContent = this.texts.projectsTitle;
  
    const DAM = document.querySelector('#DAM p') as HTMLElement;
    if (DAM) DAM.textContent = this.texts.dam;
  
    const DDBBADMIN = document.querySelector('#DDBBADMIN p') as HTMLElement;
    if (DDBBADMIN) DDBBADMIN.textContent = this.texts.DDBBADMIN;
  
    const EUSAJAVA = document.querySelector('#EUSAJAVA p') as HTMLElement;
    if (EUSAJAVA) EUSAJAVA.textContent = this.texts.EUSAJAVA;
  
    const BACHILLER = document.querySelector('#BACHILLER p') as HTMLElement;
    if (BACHILLER) BACHILLER.textContent = this.texts.BACHILLER;
  
    const aboutH2 = document.querySelector('#about h2') as HTMLElement;
    if (aboutH2) aboutH2.textContent = this.texts.aboutTitle;
  
    const aboutP = document.querySelector('#about p') as HTMLElement;
    if (aboutP) aboutP.textContent = this.texts.aboutContent;
  
    const projectsH2 = document.querySelector('#projects h2') as HTMLElement;
    if (projectsH2) projectsH2.textContent = this.texts.projectsTitle;
  
    const educationTitle = document.querySelector('#educacion h2') as HTMLElement;
    if (educationTitle) educationTitle.textContent = this.texts.educationTitle;
  
    const heroH1 = document.querySelector('#hero h1') as HTMLElement;
    if (heroH1) heroH1.textContent = this.texts.heroText;
  
    const heroP = document.querySelector('#hero p') as HTMLElement;
    if (heroP) heroP.textContent = this.texts.heroSubtitle;
  
    const skillsH2 = document.querySelector('#skills h2') as HTMLElement;
    if (skillsH2) skillsH2.textContent = this.texts.skillsTitle;
  
    // Actualizar el texto de los enlaces de proyecto
    document.querySelectorAll('.project-link').forEach((link: Element) => {
      (link as HTMLAnchorElement).textContent = this.texts.verProyectos;
    });
  
    // Actualizar el texto del pie de página
    const footerP = document.querySelector('footer p') as HTMLParagraphElement;
    if (footerP) footerP.innerHTML = this.texts.footerText;
  }
  

  updateActiveFlag(lang: string, flags: NodeListOf<Element>): void {
    flags.forEach((flag: Element) => {
        if (flag.getAttribute('data-lang') === lang) {
            flag.classList.add('active');
        } else {
            flag.classList.remove('active');
        }
    });
}
}





