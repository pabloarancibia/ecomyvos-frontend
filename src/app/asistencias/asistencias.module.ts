import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsistenciasRoutingModule } from './asistencias-routing.module';
import { VerasistenciasComponent } from './component/verasistencias/verasistencias.component';
import { MaterialModule } from "./../material/material.module";
import { AlumnosComponent } from './component/alumnos/alumnos.component';


@NgModule({
  declarations: [VerasistenciasComponent, AlumnosComponent],
  imports: [
    CommonModule,
    AsistenciasRoutingModule,
    MaterialModule,

  ]
})
export class AsistenciasModule { }
