import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './component/alumnos/alumnos.component';
import { AgregaralumnoComponent } from './component/agregaralumno/agregaralumno.component';

import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetallealumnoComponent } from './component/detallealumno/detallealumno.component';



@NgModule({
  declarations: [AlumnosComponent, AgregaralumnoComponent, DetallealumnoComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AlumnosModule { }
