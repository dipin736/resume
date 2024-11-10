import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education = [
    { degree: ' B-Tech Mechanical Engineering', institution: 'Kannur University ', graduationDate: '2017' },
    { degree: ' CLASS XII -COMPUTER SCIENCE', institution: 'Cknss', graduationDate: '2013' },
  ];
}
