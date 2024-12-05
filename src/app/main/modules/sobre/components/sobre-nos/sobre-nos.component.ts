import { Component } from '@angular/core';
import { SharedModule } from '../../../../../../shared/shared.module';
import * as Aos from 'aos'; // Importar a biblioteca AOS

@Component({
  selector: 'app-sobre-nos',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './sobre-nos.component.html',
  styleUrl: './sobre-nos.component.scss'
})
export class SobreNosComponent {
  ngOnInit(): void {
    Aos.init(); // Inicializar AOS
  }
}
