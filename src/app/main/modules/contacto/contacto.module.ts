import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { BannerContactoComponent } from './components/banner-contacto/banner-contacto.component';
import { FormContactoComponent } from './components/form-contacto/form-contacto.component';
import { LocalizacaoContactoComponent } from './components/localizacao-contacto/localizacao-contacto.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    BannerContactoComponent,
    FormContactoComponent,
    LocalizacaoContactoComponent,
    SharedModule
  ]
})
export class ContactoModule { }
