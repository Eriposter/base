import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from "./components/banner/banner.component";
import { SobreComponent } from "./components/sobre/sobre.component";


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BannerComponent,
    SobreComponent
]
})
export class HomeModule { }
