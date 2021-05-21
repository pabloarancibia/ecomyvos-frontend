import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  // Iniciales
  form: FormGroup;
  id: string;
  isAddMode: boolean =  true;

  constructor(
    private capacitacionesService: CapacitacionesService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  // toppings = new FormControl();

  // toppingList: string[] = ['TGD', 'Correo Electrónico', 'Computación', 'Internet'];

  ngOnInit(): void { 
    this.id = this.activatedRoute.snapshot.params['id'];
    if (this.id){
      this.isAddMode = false;
      this.getCapacitacion(this.id);
    }
  }

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
      lat: [''],
      lon: [''],
    });
  }

  latlon(e): void {
    console.log(e);
    // tslint:disable: no-string-literal
    this.form.controls['lat'].setValue(e.lat);
    this.form.controls['lon'].setValue(e.lon);
  }

  onSubmit(){
    if(this.isAddMode){
      this.agregarCapacitacion();
    }else{
      this.editarCapacitacion(this.id);
    }
  }

  agregarCapacitacion(): void {
    // event.preventDefault();
    if (this.form.valid) {
      console.log(this.form.value);
      const capacitacion = this.form.value;
      this.capacitacionesService.crearCapacitacion(capacitacion)
        .then(
          res => {
            this.formGroupDirective.resetForm(),
              console.log(res),
              this.router.navigate(['capacitaciones']);

          }
        )
        .catch(err => console.error(err));
    }

  }
  private editarCapacitacion(id){
    this.capacitacionesService.modificarCapacitacion(id,this.form.value)
    .then(res=>{
      this.router.navigate(['capacitaciones']);
    })
    .catch(err=>console.log(err));

  }
  private async getCapacitacion(id) {
    try {
      await this.capacitacionesService.getCapacitacion(id)
        .then(report => {
          console.log(report);
          this.capacitacion = report;
          this.form.patchValue(report);

          });
    } catch (error) {
      console.log(error);
    }
    
}
}
