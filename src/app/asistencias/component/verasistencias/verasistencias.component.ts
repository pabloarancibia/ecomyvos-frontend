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
    capacitacionId: 0,
    nombrerol: ''
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
    this.getData(); 

  }

  public getData() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    const capid: number =+ id;
    console.log(capid);
    this.data.capacitacionId = capid;
    this.data.nombrerol = 'alumno'
    try {
      this.capacitacionesService.alumnosClasesAsistencias(id)
        .then(report => {
          // this.data = report,   
          console.log(report);

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
