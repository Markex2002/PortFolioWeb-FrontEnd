import { Component } from '@angular/core';
import {NgParticlesModule} from "ng-particles";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    NgParticlesModule
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
