import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElementAsis {
  nombre: string;
  position: number;
  apellido: string;
  fecha: string;

}

const ELEMENT_DATA_ASIS: PeriodicElementAsis[] = [
  { position: 1, nombre: 'Computación Básica', apellido: 'Fundacion XXXXX', fecha: '15/04/2021' },

];

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  constructor() { }
  displayedColumnsAsis: string[] = ['position', 'nombre', 'apellido', 'fecha'];
  dataSourceAsis = new MatTableDataSource(ELEMENT_DATA_ASIS);


  ngOnInit(): void {
  }

}
