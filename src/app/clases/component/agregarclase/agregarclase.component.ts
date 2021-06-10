import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  ELEMENT_DATA: any[] = null;
  displayedColumns: string[] = ['id', 'fecha', 'observaciones', 'accion'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);


    // Iniciales // id = capacitacionId
    form: FormGroup;
    id: string;
    isAddMode: boolean =  true;
    claseIdForEdit: number;

    public capacitacion: Capacitaciones = { nombre: '' };


  constructor(
    private clasesService: ClaseService,
    private capacitacionesService: CapacitacionesService,
    private formBuilder: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getCapacitacion(this.id);
    this.traerClases(this.id);
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
    if(this.isAddMode){
      this.agregarClase();
    }else{
      this.editarClase(this.claseIdForEdit);
    }
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
      // console.log('form.value: ', this.form.value);
      const clase= this.form.value;
      this.clasesService.crearClase(clase)
        .then(
          res => {
            this.formGroupDirective.resetForm(),
            this.traerClases(this.id)
          }
        )
        .catch(err => console.error(err));
    }
  }

  asignarValoresEdit(claseId: number, fecha: string, observaciones: string){
    this.isAddMode = false
    this.form.controls['fecha'].setValue(fecha)
    this.form.controls['observaciones'].setValue(observaciones)
    this.claseIdForEdit = claseId
  }

  editarClase(claseId: number){
    if (this.form.valid) {
      this.form.controls['capacitacionId'].setValue(this.id);
      const clase= this.form.value;
      this.clasesService.modificarClase(claseId, clase)
        .then(
          res => {
            this.formGroupDirective.resetForm(),
            this.isAddMode = true,
            this.traerClases(this.id)
          }
        )
        .catch(err => console.error(err));
    }
  }

  cancelarEdit(){
    this.formGroupDirective.resetForm();
    this.isAddMode = true
  }

 eliminarClase(claseId: number){
    if(confirm("Está seguro que desea eliminar la clase id:"
      +claseId+" (esta acción no se puede revertir) ")) 
      {
        this.clasesService.eliminarClase(claseId).then(
          res=>{
            this.traerClases(this.id)
          }
        )
    }
  }

  private traerClases(capId){
    this.clasesService.getClasesByCap(capId).then(res=>{
      console.log(res)
      this.dataSource.data = res
    })
    this.changeDetectorRef.detectChanges();
  }


}
