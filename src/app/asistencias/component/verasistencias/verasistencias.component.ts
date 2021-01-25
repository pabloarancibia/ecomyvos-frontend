import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  nombre: string;
  position: number;
  organizacion: string;
  ubicacion: string;
  fecha: string;
}
export interface PeriodicElementAsis {
  nombre: string;
  position: number;
  apellido: string;
  cuil: number;
  fecha: string;
  fecha1: string;
  fecha2: string;
  fecha3: string;
  porcentaje: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, nombre: 'Computación Básica', organizacion: 'Fundación Crecer', ubicacion: 'B° Provincias Unidas - Mz5 Pc66', fecha: '15/02/2021' },
];

const ELEMENT_DATA_ASIS: PeriodicElementAsis[] = [
  { position: 1, nombre: 'Pedro', apellido: 'Perez', cuil: 1212312312, fecha: 'P', fecha1: 'P', fecha2: 'P', fecha3: 'P',porcentaje: 100 },
  { position: 2, nombre: 'Pedro', apellido: 'Perez', cuil: 1212312312, fecha: 'P', fecha1: 'P', fecha2: 'P', fecha3: 'P',porcentaje: 100 },
  { position: 3, nombre: 'Pedro', apellido: 'Perez', cuil: 1212312312, fecha: 'P', fecha1: 'P', fecha2: 'P', fecha3: 'P',porcentaje: 100 },
  { position: 4, nombre: 'Pedro', apellido: 'Perez', cuil: 1212312312, fecha: 'P', fecha1: 'P', fecha2: 'P', fecha3: 'P',porcentaje: 100 },
  { position: 5, nombre: 'Pedro', apellido: 'Perez', cuil: 1212312312, fecha: 'P', fecha1: 'P', fecha2: 'P', fecha3: 'P',porcentaje: 100 },
  { position: 6, nombre: 'Pedro', apellido: 'Perez', cuil: 1212312312, fecha: 'P', fecha1: 'P', fecha2: 'P', fecha3: 'P',porcentaje: 100 },
  { position: 7, nombre: 'Pedro', apellido: 'Perez', cuil: 1212312312, fecha: 'P', fecha1: 'P', fecha2: 'P', fecha3: 'P',porcentaje: 100 },
  { position: 8, nombre: 'Pedro', apellido: 'Perez', cuil: 1212312312, fecha: 'P', fecha1: 'P', fecha2: 'P', fecha3: 'P',porcentaje: 100 },
];


@Component({
  selector: 'app-verasistencias',
  templateUrl: './verasistencias.component.html',
  styleUrls: ['./verasistencias.component.scss']
})
export class VerasistenciasComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'nombre', 'organizacion', 'ubicacion', 'fecha'];
  displayedColumnsAsis: string[] = ['position', 'nombre', 'apellido', 'cuil', 'fecha', 'fecha1', 'fecha2', 'fecha3', 'porcentaje'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSourceAsis = new MatTableDataSource(ELEMENT_DATA_ASIS);


  // tslint:disable-next-line: typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }

}
