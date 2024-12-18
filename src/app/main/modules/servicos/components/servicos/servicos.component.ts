import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss'
})
export class ServicosComponent {
  ngOnInit(): void {
    Aos.init(); // Inicializar AOS
  }
}
