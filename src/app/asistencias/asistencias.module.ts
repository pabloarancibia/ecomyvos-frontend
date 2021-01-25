import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsistenciasRoutingModule } from './asistencias-routing.module';
import { VerasistenciasComponent } from './component/verasistencias/verasistencias.component';
import { MaterialModule } from "./../material/material.module";


@NgModule({
  declarations: [VerasistenciasComponent],
  imports: [
    CommonModule,
    AsistenciasRoutingModule,
    MaterialModule,

  ]
})
export class AsistenciasModule { }
