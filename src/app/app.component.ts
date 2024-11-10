import { Component, HostListener, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import jsPDF from 'jspdf';
import { HeaderComponent } from "../header/header.component";
import { ExperienceComponent } from "../experience/experience.component";
import { EducationComponent } from "../education/education.component";
import { SkillsComponent } from "../skills/skills.component";
import { HobbiesComponent } from "../hobbies/hobbies.component";
import { ContactComponent } from "../contact/contact.component";
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { TimelineComponent } from '../timeline/timeline.component';
import * as html2canvas from 'html2canvas';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ExperienceComponent, EducationComponent, SkillsComponent, HobbiesComponent, ContactComponent, PortfolioComponent, TimelineComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  scrollToSection(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.handleScroll();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (isPlatformBrowser(this.platformId)) {
      this.handleScroll();
    }
  }

  private handleScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section: Element) => {
        const element = section as HTMLElement;
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (typeof IntersectionObserver !== 'undefined') {
        const options = {
          rootMargin: '0px 0px -10% 0px', 
          threshold: 0.1, 
        };
        const observer = new IntersectionObserver(this.onIntersection, options);
  
        document.querySelectorAll('.section').forEach(section => {
          observer.observe(section);
        });
      }
    }
  }
  
  onIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  };
  

  async generatePDF() {
    const pdf = new jsPDF('p', 'mm', 'a4');
    const resumeContainer = document.querySelector('.resume-container') as HTMLElement;

    if (resumeContainer) {
        const canvas = await html2canvas.default(resumeContainer, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');

        const imgWidth = 210; 
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let position = 0;
        
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);

        while (position + imgHeight >= 297) { 
            position -= 297; 
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        }

        pdf.save('resume.pdf');
    }
}

}
