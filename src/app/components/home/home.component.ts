import { Component } from '@angular/core';
import {AboutMeComponent} from "../about-me/about-me.component";
import {ProyectosComponent} from "../proyectos/proyectos.component";
import {ContactoComponent} from "../contacto/contacto.component";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutMeComponent,
    ProyectosComponent,
    ContactoComponent,
    NavBarComponent,
    HeaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
