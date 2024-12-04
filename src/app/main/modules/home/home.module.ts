import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from "./components/banner/banner.component";
import { SobreComponent } from "./components/sobre/sobre.component";
import { ServicosHomeComponent } from "./components/servicos-home/servicos-home.component";
import { ProjectosHomeComponent } from "./components/projectos-home/projectos-home.component";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BannerComponent,
    SobreComponent,
    ServicosHomeComponent,
    ProjectosHomeComponent
]
})
export class HomeModule { }
