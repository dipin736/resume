import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = [
    {
      title: 'Online Book Store',
      description: 'A Django-based web application offering robust book management, user authentication, cart functionality. manage your bookstore online with ease.',
      image: 'Safeimagekit-resized-img (3).png',  
      link: 'https://dipinbookstore.pythonanywhere.com/'
    },
    {
      title: 'Todo App',
      description: 'A simple Todo application built with React.',
      image: 'Screenshot 2023-12-24 174104.png',  
      link: 'https://todo-app-2ksd.onrender.com/'
    },
    {
      title: 'Quiz-App',
      description: 'This is a simple quiz application developed using Django and React. The project allows users to register, take quizzes, and view their scores.',
      image: 'Safeimagekit-resized-img (5).png',  
      link: 'https://github.com/dipin736/Online-Quiz-App'
    }
  ];
}
