import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-agregarcapacitacion',
  templateUrl: './agregarcapacitacion.component.html',
  styleUrls: ['./agregarcapacitacion.component.scss']
})
export class AgregarcapacitacionComponent implements OnInit {

  constructor() { }
  toppings = new FormControl();

  toppingList: string[] = ['TGD', 'Correo Electrónico', 'Computación', 'Internet'];

  ngOnInit(): void {
  }
}
