import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare var WOW: any; // Para o `wow.min.js`
declare var $: any;   // Para o `jquery` (se necessário)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'base';

  ngOnInit(): void {
    // Inicializar WOW.js
    new WOW().init();

    // Inicializar CounterUp
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  }
}
