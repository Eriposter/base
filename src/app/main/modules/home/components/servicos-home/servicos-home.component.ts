import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faRobot } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';


@Component({
  selector: 'app-servicos-home',
  standalone: true,
  imports: [FontAwesomeModule ],
  templateUrl: './servicos-home.component.html',
  styleUrl: './servicos-home.component.scss'
})
export class ServicosHomeComponent {
  ngOnInit(): void {
    Aos.init(); // Inicializar AOS
  }
  faCoffee = faCoffee;
  faRobot = faRobot;
}
