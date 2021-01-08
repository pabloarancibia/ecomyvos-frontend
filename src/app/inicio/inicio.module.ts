import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [InicioComponent,],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MaterialModule
  ],
  exports: []
})
export class InicioModule { }
