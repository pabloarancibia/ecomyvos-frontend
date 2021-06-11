import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
// import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';

/**
 * ngx-material-timepicker 
 */
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    MatDividerModule,
    MatSelectModule,
    // MatTableDataSource,
    MatTableModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatGridListModule,
    LayoutModule

  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    MatDividerModule,
    MatSelectModule,
    // MatTableDataSource,
    MatTableModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatGridListModule,
    LayoutModule

  ]
})
export class MaterialModule { }
