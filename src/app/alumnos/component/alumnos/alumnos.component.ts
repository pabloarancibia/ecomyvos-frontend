import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  nombre: string;
  position: number;
  organizacion: string;
  ubicacion: string;
  fecha: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, nombre: 'Computación Básica', organizacion: 'Fundación Crecer', ubicacion: 'B° Provincias Unidas - Mz5 Pc66', fecha: '15/02/2021' },
];

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  constructor() { }
  displayedColumnsAlu: string[] = ['position', 'nombre', 'apellido', 'cuil', 'email', 'accion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
