import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';

import { GchartsRoutingModule } from './gcharts-routing.module';
import { PrincipalComponent } from './component/principal/principal.component';


@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    CommonModule,
    GchartsRoutingModule,
    GoogleChartsModule
  ]
})
export class GchartsModule { }
