import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectoRoutingModule } from './projecto-routing.module';
import { ProjectoComponent } from './components/projecto/projecto.component';
import { BannerProjectoComponent } from './components/banner-projecto/banner-projecto.component';


@NgModule({
  declarations: [
    ProjectoComponent
  ],
  imports: [
    CommonModule,
    ProjectoRoutingModule,
    BannerProjectoComponent
  ]
})
export class ProjectoModule { }
