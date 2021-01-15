import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-agregarinstructor',
  templateUrl: './agregarinstructor.component.html',
  styleUrls: ['./agregarinstructor.component.scss']
})
export class AgregarinstructorComponent implements OnInit {

  constructor() { }

  toppings = new FormControl();

  toppingList: string[] = [
    'Nombre ',
    'Nombre | Organización | Ubicación | Fecha',
    'Nombre | Organización | Ubicación | Fecha',
    'Nombre | Organización | Ubicación | Fecha',
    'Nombre | Organización | Ubicación | Fecha',
    'Nombre | Organización | Ubicación | Fecha'];

  ngOnInit(): void {
  }

}
