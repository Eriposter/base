import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationEnd, Event } from '@angular/router';
import { ViewportScroller } from '@angular/common';

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

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Inicializar WOW.js
    new WOW().init();

    // Inicializar CounterUp
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
    // Controlar o scroll ao mudar de rota
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]); // Scroll ao topo
      }
    });

    setTimeout(() => {
      // Força a atualização de alterações fora do ciclo normal
      this.cdr.detectChanges();
    }, 0);
  }
}
