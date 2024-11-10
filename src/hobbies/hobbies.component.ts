import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [MatChipsModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent {
  hobbies = ['Reading', 'Traveling', 'Photography'];
  
  showHobbies = true;  

  toggleHobbiesVisibility() {
    this.showHobbies = !this.showHobbies;  
  }
}
