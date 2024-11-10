import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatChipsModule, MatIconModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  technicalSkills = [
    {
      category: 'Back-End Development',
      skills: [
        { name: 'Python', rating: 4 },
        { name: 'Django (Django REST Framework)', rating: 5 },
        { name: 'Flask', rating: 3 },
        { name: 'FastAPI', rating: 4 }
      ]
    },
    {
      category: 'Front-End Development',
      skills: [
        { name: 'HTML', rating: 5 },
        { name: 'CSS', rating: 4 },
        { name: 'JavaScript', rating: 4 },
        { name: 'TypeScript', rating: 5 },
        { name: 'Angular (Angular Material, RxJS)', rating: 5 },
        { name: 'React (React Redux)', rating: 4 },
        { name: 'jQuery', rating: 3 },
        { name: 'Bootstrap', rating: 4 }
      ]
    },
    {
      category: 'Database Management',
      skills: [
        { name: 'MySQL', rating: 4 },
        { name: 'MongoDB', rating: 3 }
      ]
    },
    {
      category: 'Version Control and Collaboration',
      skills: [
        { name: 'Git', rating: 5 },
        { name: 'GitHub', rating: 5 },
        { name: 'Jira', rating: 4 }
      ]
    },
    {
      category: 'Cloud Computing',
      skills: [
        { name: 'AWS (EC2)', rating: 4 },
        { name: 'AWS (RDS)', rating: 4 }
      ]
    }
  ];

  softSkills = ['Communication', 'Leadership', 'Teamwork'];

  stars(rating: number) {
    return new Array(5).fill(0).map((_, index) => index < rating);
  }
}
