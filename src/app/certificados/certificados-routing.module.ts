import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerarcertificadoComponent } from './component/generarcertificado/generarcertificado.component';

const routes: Routes = [
  {
    path:'',
    component:GenerarcertificadoComponent
  },
  {
    path:'generar',
    component:GenerarcertificadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificadosRoutingModule { }
