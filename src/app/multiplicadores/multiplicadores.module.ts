import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiplicadoresRoutingModule } from './multiplicadores-routing.module';
import { MultiplicadoresComponent } from './component/multiplicadores/multiplicadores.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [MultiplicadoresComponent],
  imports: [
    CommonModule,
    MultiplicadoresRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class MultiplicadoresModule { }
