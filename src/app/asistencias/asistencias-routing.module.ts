import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerasistenciasComponent } from './component/verasistencias/verasistencias.component';

const routes: Routes = [
  {
    path: '/',
    component: VerasistenciasComponent
  },
  {
    path: 'ver',
    component: VerasistenciasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsistenciasRoutingModule { }
