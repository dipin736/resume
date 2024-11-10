import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  timeline = [
    {
      date: '2017',
      title: 'Kannur University - 2017',
      description: 'I completed B-Tech Mechanical Engineeringat Kannur University.',
      showDetails: false
    },
    {
      date: '2023',
      title: 'Started Working at Quest Innovative Solutions',
      description: 'I joined as a Software Developer.',
      showDetails: false
    },
    {
      date: '2024',
      title: 'Started Working as a Freelancer',
      description: 'Remote.',
      showDetails: false
    }
  ];

  toggleDetails(event: any): void {
    event.showDetails = !event.showDetails;
  }
}
