import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregaralumnoComponent } from './component/agregaralumno/agregaralumno.component';
import { AlumnosComponent } from './component/alumnos/alumnos.component';

const routes: Routes = [
  {
    path: '',
    component: AlumnosComponent
  },
  {
    path: 'agregar',
    component: AgregaralumnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
