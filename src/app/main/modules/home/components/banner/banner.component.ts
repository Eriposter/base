import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  ngOnInit(): void {
    Aos.init(); // Inicializar AOS
  }
}
