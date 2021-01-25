import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregaralumnoComponent } from './component/agregaralumno/agregaralumno.component';
import { AlumnosComponent } from './component/alumnos/alumnos.component';
import { DetallealumnoComponent } from './component/detallealumno/detallealumno.component';

const routes: Routes = [
  {
    path: '',
    component: AlumnosComponent
  },
  {
    path: 'agregar',
    component: AgregaralumnoComponent
  },
  {
    path: 'detalle',
    component: DetallealumnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
