import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosComponent } from './component/alumnos/alumnos.component';
import { VerasistenciasComponent } from './component/verasistencias/verasistencias.component';
import { AuthGuard } from "./../guards/auth.guard";

const routes: Routes = [
  {
    path: '/',
    component: VerasistenciasComponent,
    canActivate: [AuthGuard],
        data: {
            role: ['admin','instructor']
        }
  },
  {
    path: 'ver/:id',
    component: VerasistenciasComponent,
    canActivate: [AuthGuard],
        data: {
            role: ['admin','instructor']
        }
  },
  {
    path: 'alumnos',
    component: AlumnosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsistenciasRoutingModule { }
