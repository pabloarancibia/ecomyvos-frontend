import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapacitacionesRoutingModule } from './capacitaciones-routing.module';
import { CapacitacionesComponent } from './component/capacitaciones/capacitaciones.component';
import { AgregarcapacitacionComponent } from './component/agregarcapacitacion/agregarcapacitacion.component';
import { VercapacitacionComponent } from './component/vercapacitacion/vercapacitacion.component';

import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsignacionesComponent } from './component/asignaciones/asignaciones.component';
import { MapaformularioComponent } from './component/mapaformulario/mapaformulario.component';
import { MapadetalleComponent } from './component/mapadetalle/mapadetalle.component';


@NgModule({
  declarations: [
    CapacitacionesComponent,
    AgregarcapacitacionComponent,
    VercapacitacionComponent,
    AsignacionesComponent,
    MapaformularioComponent,
    MapadetalleComponent,
  ],
  imports: [
    CommonModule,
    CapacitacionesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CapacitacionesModule { }
