import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';


import { Capacitaciones } from "../../../models/capacitaciones.model";
import { CapacitacionesService } from "../../../services/capacitaciones.service";

import { UsuariosService } from '../../../services/usuarios.service';

// import { Personas } from "../../../models/personas.model";
// import { PersonasService } from "../../../services/personas.service";


/**
 * @title Asignacion de Instructores y Alumnos
 */
@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.scss']
})
export class AsignacionesComponent implements OnInit {

  public capacitacion: Capacitaciones;
  // public personas: Personas[];
  // ELEMENT_DATA: Personas[] = null;
  displayedColumnsInst: string[] = ['position', 'nombre', 'apellido', 'cuil', 'email', 'accion'];
  displayedColumnsAlu: string[] = ['position', 'nombre', 'apellido', 'cuil', 'email', 'accion'];
  dataSource = new MatTableDataSource;
  dsInstructores = new MatTableDataSource;

  constructor(
    private capacitacionesService: CapacitacionesService,
    // private personasService: PersonasService,
    private activeRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private usuariosService: UsuariosService,


  ) { }


  applyFilterInst(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  applyFilterAl(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.getCapacitacion(); 
    this.getDatos();
  }

  public async getCapacitacion() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    console.log(id);
    try {
      await this.capacitacionesService.getCapacitacion(id)
        .then(report => {
          this.capacitacion = report,
          
          console.log(this.capacitacion);
          });
          
    } catch (error) {
        // console.log(error);
    }
  }

  public getDatos() {
    this.usuariosService.getUsPerRol()
      //.then(report => this.dataSource.data = report as Usuarios[]);
      .then(report => 
        {
          this.dsInstructores.data = report,
          this.changeDetectorRef.detectChanges();
        }
        );

  }

}
