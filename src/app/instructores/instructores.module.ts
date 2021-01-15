import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructoresRoutingModule } from './instructores-routing.module';
import { InstructoresComponent } from './component/instructores/instructores.component';
import { AgregarinstructorComponent } from './component/agregarinstructor/agregarinstructor.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [InstructoresComponent, AgregarinstructorComponent],
  imports: [
    CommonModule,
    InstructoresRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InstructoresModule { }
