import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ExperienceDetailDialogComponentComponent } from '../app/experience-detail-dialog.component/experience-detail-dialog.component.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  experiences = [
    {
      title: 'Freelance Full-Stack Developer',
      company: 'Self-Employed',
      dates: '2024-present',
      location: 'Remote',
      description: [
        'Developed a Python-based solution to convert Chinese text into English, processing files for translation tasks.',
        'Created scripts to automate translation, improving accuracy and efficiency with large datasets.',
        'Followed project requirements to deliver high-quality solutions on time.',
        ' Developed a desktop-responsive dashboard in React, integrated with client-provided APIs for dynamic data.',
        'Implemented sidebar navigation and authentication features using React Router and Context API.',
      ]
    },
    {
      title: 'Software Engineer Trainee',
      company: 'Quest Innovative Solutions Pvt. Ltd',
      dates: '2023-2024',
      location: 'Kannur',
      description: [
        'Worked as a Trainee Software Engineer, actively participating in projects involving Python.',
        'Engineered and deployed backend solutions using Python, Django/Flask frameworks.',
        'Spearheaded the development of interactive frontend websites using Angular, HTML, CSS, and JavaScript.'
      ]
    }
  ];
  
  constructor(private dialog: MatDialog) {}

  openJobDetails(job: any) {
    console.log('Opening job details:', job);  
    this.dialog.open(ExperienceDetailDialogComponentComponent, {
      data: job,
      width: '600px',
    });
  }
  
}
