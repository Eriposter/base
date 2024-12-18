import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';

@Component({
  selector: 'app-testemunhos',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './testemunhos.component.html',
  styleUrl: './testemunhos.component.scss'
})
export class TestemunhosComponent {
  ngOnInit(): void {
    Aos.init(); // Inicializar AOS
  }
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  faArrowRight = faArrowRight;

}
