import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';

@Component({
  selector: 'app-projectos-home',
  standalone: true,
  imports: [FontAwesomeModule ],
  templateUrl: './projectos-home.component.html',
  styleUrl: './projectos-home.component.scss'
})
export class ProjectosHomeComponent {
  ngOnInit(): void {
    Aos.init(); // Inicializar AOS
  }
  faArrowRight = faArrowRight;
}
