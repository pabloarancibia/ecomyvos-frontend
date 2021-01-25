import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificadosRoutingModule } from './certificados-routing.module';
import { GenerarcertificadoComponent } from './component/generarcertificado/generarcertificado.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [GenerarcertificadoComponent],
  imports: [
    CommonModule,
    CertificadosRoutingModule,
    MaterialModule
  ]
})
export class CertificadosModule { }
