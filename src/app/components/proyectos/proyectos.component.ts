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
      description: 'A personal proyect I did to try and make a text based Rpg made purely on Java.',
      image: 'assets/images/rpgImage.jpg',
      github: 'https://github.com/Markex2002/ProyectoRpg2.0.git',
      demo: ''
    },
    {
      title: 'Final proyect app',
      description: 'A full-stack website I did as my final proyect for my web developer degree, using Java, SpringBoot and Angular between others.',
      image: 'assets/images/PortfolioProject.jpg',
      github: 'https://github.com/Markex2002/ProyectoIntegrado.git',
      demo: ''
    },




  ];
}
