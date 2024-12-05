import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'sobre',
        loadChildren: () =>
          import('./modules/sobre/sobre.module').then((m) => m.SobreModule),
      },
      {
        path: 'projecto',
        loadChildren: () =>
          import('./modules/projecto/projecto.module').then((m) => m.ProjectoModule),
      },
      {
        path: 'contacto',
        loadChildren: () =>
        import('./modules/contacto/contacto.module').then((m) => m.ContactoModule),

    },

    ],
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
