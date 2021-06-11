import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';

import { GchartsRoutingModule } from './gcharts-routing.module';
import { PrincipalComponent } from './component/principal/principal.component';

import { DashComponent } from './component/dash/dash.component';
import { MaterialModule } from '@app/material/material.module';
import { BarCapAsisComponent } from './component/bar-cap-asis/bar-cap-asis.component';
import { TimelineCapsComponent } from './component/timeline-caps/timeline-caps.component';
import { PieGenerosComponent } from './component/pie-generos/pie-generos.component';



@NgModule({
  declarations: [PrincipalComponent, DashComponent, BarCapAsisComponent, TimelineCapsComponent, PieGenerosComponent],
  imports: [
    CommonModule,
    GchartsRoutingModule,
    GoogleChartsModule,
    MaterialModule
  ]
})
export class GchartsModule { }
