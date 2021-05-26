import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Capacitaciones } from '../../../models/capacitaciones.model';
import { CapacitacionesService } from '../../../services/capacitaciones.service';

import { ClaseService } from '@app/services/clase.service'

@Component({
  selector: 'app-agregarclase',
  templateUrl: './agregarclase.component.html',
  styleUrls: ['./agregarclase.component.scss']
})
export class AgregarclaseComponent implements OnInit {
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

    // Iniciales
    form: FormGroup;
    id: string;
    isAddMode: boolean =  true;

    public capacitacion: Capacitaciones = { nombre: '' };


  constructor(
    private clasesService: ClaseService,
    private capacitacionesService: CapacitacionesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getCapacitacion(this.id);
    // if (this.claseId){
    //   this.isAddMode = false;
    //   this.getClase(this.ClaseId);
    // }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      fecha: ['', [Validators.required]],
      observaciones: [''],
      capacitacionId: [0]
    });
  }

  onSubmit(){
    // if(this.isAddMode){
      this.agregarClase();
    // }else{
    //   this.editarClase(this.id);
    // }
  }

  private async getCapacitacion(id) {
    try {
      await this.capacitacionesService.getCapacitacion(id)
        .then(report => {
          console.log(report);
          this.capacitacion = report;
          });
    } catch (error) {
      console.log(error);
    }  
  }

  agregarClase(){
    if (this.form.valid) {
      this.form.controls['capacitacionId'].setValue(this.id);
      console.log('form.value: ', this.form.value);
      const clase= this.form.value;
      this.clasesService.crearClase(clase)
        .then(
          res => {
            this.formGroupDirective.resetForm(),
              console.log('res: ',res);
          }
        )
        .catch(err => console.error(err));
    }
  }

  editarClase(id){

  }


}
