import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Capacitaciones } from '../../../models/capacitaciones.model';
import { CapacitacionesService } from '../../../services/capacitaciones.service';
import { TemasService } from '../../../services/temas.service';


import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, } from '@angular/core';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';


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

  // Chips / Tags
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  // temaCtrl = new FormControl();
  filteredTemas: Observable<string[]>;

  temas: string[] = [];
  allTemas: string[] = []; //= ['Internet', 'Email', 'Office', 'Pasaporte Chaco'];
  allTemasObject: any[];

  @ViewChild('temaInput') temaInput: ElementRef<HTMLInputElement>;


  constructor(
    private capacitacionesService: CapacitacionesService,
    private temasService: TemasService,
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

    // traigo temas para mostrar en el form control correspondiente
    this.getTemas();
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
      temaCtrl: new FormControl(),
      temasFrmCtrl: new FormControl(),

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

      this.form.controls['temasFrmCtrl'].setValue(this.temas);

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

  // TAGS

  private async getTemas() {
    try {
      await this.temasService.getTemas()
        .then(report => {
          
          this.allTemasObject = report;
          for (let x in this.allTemasObject){
            this.allTemas[x] = this.allTemasObject[x]['nombre'];
          }
          this.cargarControl();

          // this.form.patchValue(report);
          });
    } catch (error) {
      console.log(error);
    }  
  }

  private cargarControl(){
    //this.filteredTemas = this.temaCtrl.valueChanges.pipe(
    this.filteredTemas = this.form.get('temaCtrl').valueChanges.pipe(
      startWith(null),
      map((tema: string | null) => tema ? this._filter(tema) : this.allTemas.slice()));
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our tema
    if (value) {
      // this.form.controls['temas'].setValue(value);
      this.temas.push(value);
    }

    // Clear the input value
    //event.chipInput!.clear();
     event.input!.value = '';

    // this.temaCtrl.setValue(null);
    this.form.get('temaCtrl').setValue(null);
  }

  remove(tema: string): void {
    const index = this.temas.indexOf(tema);
    
    


    if (index >= 0) {
      this.temas.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.temas.push(event.option.viewValue);
    this.temaInput.nativeElement.value = '';
    this.form.get('temaCtrl').setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTemas.filter(tema => tema.toLowerCase().includes(filterValue));
  }

}
