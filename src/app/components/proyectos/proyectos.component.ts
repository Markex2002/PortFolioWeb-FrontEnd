import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent {

  projects = [
    {
      title: 'RpgProyect',
      description: 'Created a text-based RPG game in Java as a personal project to strengthen object-oriented programming skills. ' +
        'Implemented game mechanics including, turn-based combat, dungeon mapping, with user interaction through the console.',
      image: 'assets/images/rpgImage.jpg',
      github: 'https://github.com/Markex2002/ProyectoRpg2.0.git',
      demo: ''
    },
    {
      title: 'Final proyect app',
      description: 'Developed a full-stack web application as the capstone project for my Web Application Development program, ' +
        'using Java, Spring Boot, and Angular. Implemented dynamic routing, CRUD operations, and interactive UI components for a responsive user experience.',
      image: 'assets/images/PortfolioProject.jpg',
      github: 'https://github.com/Markex2002/ProyectoIntegrado.git',
      demo: ''
    },




  ];
}
