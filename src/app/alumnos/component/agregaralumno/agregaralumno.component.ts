import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-agregaralumno',
  templateUrl: './agregaralumno.component.html',
  styleUrls: ['./agregaralumno.component.scss']
})
export class AgregaralumnoComponent implements OnInit {

  constructor() { }

  toppings = new FormControl();

  toppingList: string[] = [
    'Nombre | Organizacion | Ubicación | Fecha',
    'Computación básica | Fundación Crecer | B° Provincias Unidas | 15/02/2021',
    'Nombre | Organizacion | Ubicación | Fecha',
    'Nombre | Organizacion | Ubicación | Fecha',
    'Nombre | Organizacion | Ubicación | Fecha',
    'Nombre | Organizacion | Ubicación | Fecha'];

  ngOnInit(): void {
  }

}
