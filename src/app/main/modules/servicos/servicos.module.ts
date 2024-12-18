import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicosRoutingModule } from './servicos-routing.module';
import { ServicosComponent } from './components/servicos/servicos.component';
import { BannerServicosComponent } from "./components/banner-servicos/banner-servicos.component";
import { ServicosCardsComponent } from "./components/servicos-cards/servicos-cards.component";


@NgModule({
  declarations: [
    ServicosComponent
  ],
  imports: [
    CommonModule,
    ServicosRoutingModule,
    BannerServicosComponent,
    ServicosCardsComponent
]
})
export class ServicosModule { }
