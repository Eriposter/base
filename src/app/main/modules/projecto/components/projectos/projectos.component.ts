import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from '../../../../../../shared/shared.module';

@Component({
  selector: 'app-projectos',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './projectos.component.html',
  styleUrl: './projectos.component.scss'
})
export class ProjectosComponent {
  faArrowRight = faArrowRight;
}
