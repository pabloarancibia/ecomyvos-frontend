import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { Capacitaciones } from '../../../models/capacitaciones.model';
import { CapacitacionesService } from '../../../services/capacitaciones.service';


@Component({
  selector: 'app-agregarcapacitacion',
  templateUrl: './agregarcapacitacion.component.html',
  styleUrls: ['./agregarcapacitacion.component.scss']
})
export class AgregarcapacitacionComponent implements OnInit {
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  public capacitacion: Capacitaciones = { nombre: '' };

  // Form+
  form: FormGroup;

  constructor(
    private capacitacionesService: CapacitacionesService,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  // toppings = new FormControl();

  // toppingList: string[] = ['TGD', 'Correo Electrónico', 'Computación', 'Internet'];

  ngOnInit(): void { }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      convenio: [''],
      localidad: [''],
      circuito: [''],
      direccion: [''],
      fechainicio: ['', [Validators.required]],
      fechafin: ['', [Validators.required]],
      horainicio: [''],
      horafin: [''],
      conectividad_up: [0],
      conectividad_down: [0],
      observaciones: [''],
      latitud: [''],
      longitud: [''],
    });
  }

  latlon(e): void {
    console.log(e);
    // tslint:disable: no-string-literal
    this.form.controls['latitud'].setValue(e.lat);
    this.form.controls['longitud'].setValue(e.lon);
  }

  agregarCapacitacion(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      console.log(this.form.value);
      const capacitacion = this.form.value;
      this.capacitacionesService.crearCapacitacion(capacitacion)
        .then(
          res => {
            this.formGroupDirective.resetForm(),
              console.log(res);

          }
        )
        .catch(err => console.error(err));
    }

  }

}
