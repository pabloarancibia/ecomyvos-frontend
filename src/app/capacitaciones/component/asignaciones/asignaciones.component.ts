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

/**
 * @title Asignacion de Instructores y Alumnos
 */
@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.scss']
})
export class AsignacionesComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'nombre', 'organizacion', 'ubicacion', 'fecha'];
  displayedColumnsInst: string[] = ['position', 'nombre', 'apellido', 'cuil', 'email', 'accion'];
  displayedColumnsAlu: string[] = ['position', 'nombre', 'apellido', 'cuil', 'email', 'accion'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  // tslint:disable-next-line: typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }

}
