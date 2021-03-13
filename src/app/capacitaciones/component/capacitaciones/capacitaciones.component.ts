import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Capacitaciones } from '../../../models/capacitaciones.model';
import { CapacitacionesService } from '../../../services/capacitaciones.service';

@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.component.html',
  styleUrls: ['./capacitaciones.component.scss']
})
export class CapacitacionesComponent implements OnInit {
  ELEMENT_DATA: Capacitaciones[] = null;
  displayedColumns: string[] = ['id', 'nombre', 'convenio', 'direccion', 'fechainicio', 'accion'];
  dataSource = new MatTableDataSource<Capacitaciones>(this.ELEMENT_DATA);



  constructor(
    private capacitacionesService: CapacitacionesService) { }

  ngOnInit(): void {
    // this.capacitacionesService.getCapacitaciones().then((allCapacitaciones) => {
    // this.capacitaciones = allCapacitaciones;
    // console.log(this.capacitaciones);
    // });

    this.getAllCapacitaciones();
  }

  public getAllCapacitaciones() {
    this.capacitacionesService.getCapacitaciones()
      .then(report => this.dataSource.data = report as Capacitaciones[]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

}


