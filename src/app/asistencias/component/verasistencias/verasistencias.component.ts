import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { Capacitaciones } from "../../../models/capacitaciones.model";
import { CapacitacionesService } from "../../../services/capacitaciones.service";
import { UsuariosService } from '../../../services/usuarios.service';



@Component({
  selector: 'app-verasistencias',
  templateUrl: './verasistencias.component.html',
  styleUrls: ['./verasistencias.component.scss']
})
export class VerasistenciasComponent implements OnInit {

  // usuario seleccionado y capacitacion actual
  data = {
    usuarioId: 0,
    capacitacionId: 0
  }

  public capacitacion: Capacitaciones;
  displayedColumnsAsis: string[] = ['position', 'nombre', 'apellido', 'accion'];
  dataSourceAsis = new MatTableDataSource;



  constructor(
    private capacitacionesService: CapacitacionesService,
    private activeRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private usuariosService: UsuariosService,
  ) { }

  ngOnInit(): void {
    this.getCapacitacion(); 

  }

  public getCapacitacion() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    console.log(id);
    try {
      this.capacitacionesService.getCapacitacion(id)
        .then(report => {
          this.capacitacion = report,   
          console.log(this.capacitacion);

          // CARGO LOS DATA SETS
          // this.cargaDs();
          });
          
    } catch (error) {
        // console.log(error);
    }
  }

  

  // tslint:disable-next-line: typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceAsis.filter = filterValue.trim().toLowerCase();
  }

  

}
