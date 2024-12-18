import { Component } from '@angular/core';
import { faArrowRight, faSolarPanel } from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from '../../../../../../shared/shared.module';

@Component({
  selector: 'app-servicos-cards',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './servicos-cards.component.html',
  styleUrl: './servicos-cards.component.scss'
})
export class ServicosCardsComponent {
  faSolarPanel = faSolarPanel;
  faArrowRight = faArrowRight;
}
