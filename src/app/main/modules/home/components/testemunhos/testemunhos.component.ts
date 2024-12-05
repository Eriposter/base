import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testemunhos',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './testemunhos.component.html',
  styleUrl: './testemunhos.component.scss'
})
export class TestemunhosComponent {
  faAngleRight = faAngleRight;
  faAngleLeft = faAngleLeft;
  faArrowRight = faArrowRight;

}
