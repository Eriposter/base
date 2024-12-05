import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreRoutingModule } from './sobre-routing.module';
import { SobreComponent } from './components/sobre/sobre.component';
import { BannerSobreComponent } from './components/banner-sobre/banner-sobre.component';
import { SharedModule } from '../../../../shared/shared.module';
import { ProcessosComponent } from "./components/processos/processos.component";
import { SobreNosComponent } from "./components/sobre-nos/sobre-nos.component";
import { MissaoComponent } from './components/missao/missao.component';


@NgModule({
  declarations: [
    SobreComponent
  ],
  imports: [
    CommonModule,
    SobreRoutingModule,
    BannerSobreComponent,
    SharedModule,
    ProcessosComponent,
    SobreNosComponent,
    MissaoComponent
]
})
export class SobreModule { }
