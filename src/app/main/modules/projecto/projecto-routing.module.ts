import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectoComponent } from './components/projecto/projecto.component';

const routes: Routes = [
  {
    path:'',
    component: ProjectoComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectoRoutingModule { }
