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

  data = {
    usuarioId: 0,
    capacitacionId: 0
  }

  public capacitacion: Capacitaciones;
  // public personas: Personas[];
  // ELEMENT_DATA: Personas[] = null;
  displayedColumnsInst: string[] = ['position', 'nombreusuario', 'nombre', 'apellido', 'cuil', 'email', 'accion'];
  displayedColumnsAlu: string[] = ['position', 'nombreusuario', 'nombre', 'apellido', 'cuil', 'email', 'accion'];
  displayedColumnsMulti: string[] = ['position', 'nombreusuario', 'nombre', 'apellido', 'cuil', 'email', 'accion'];
  
  dsInstructores = new MatTableDataSource;
  dsAlumnos = new MatTableDataSource;
  dsMultiplicadores = new MatTableDataSource;



  constructor(
    private capacitacionesService: CapacitacionesService,
    // private personasService: PersonasService,
    private activeRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private usuariosService: UsuariosService,


  ) { }

  ngOnInit(): void {
    this.getCapacitacion(); 
    this.cargaDs();
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

  public async cargaDs(){
    this.usuariosService.getUsPerCapByRol('instructor')
      .then(report => 
        {
          this.dsInstructores.data = report as any[]

        }
        );

    this.usuariosService.getUsPerCapByRol('alumno')
      .then(report => 
        {
          this.dsAlumnos.data = report as any[]

        }
        );

    this.usuariosService.getUsPerCapByRol('multiplicador')
      .then(report => 
        {
          this.dsMultiplicadores.data = report as any[]
          console.log(this.dsMultiplicadores.data);

        }
        );  
    

    this.changeDetectorRef.detectChanges();

  }

  /**
   * Asignar capacitacion a usuario
   * @param usuarioId 
   */
  asignarCapacitacion(usuarioId: number){
    this.data.capacitacionId = this.capacitacion.id;
    this.data.usuarioId = usuarioId;

    this.usuariosService.asignarCapacitacion(this.data)
    .then(res=>{
      this.cargaDs()
    });
  }

  /**
   * Quitar capacitacion a usuario
   * @param usuarioId 
   */
  quitarCapacitacion(usuarioId: number){
    this.data.capacitacionId = this.capacitacion.id;
    this.data.usuarioId = usuarioId;

    this.usuariosService.quitarCapAUs(this.data)
    .then(res=>{
      this.cargaDs()
    });
  }


  applyFilterInst(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dsInstructores.filter = filterValue.trim().toLowerCase();
  }
  applyFilterAl(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dsAlumnos.filter = filterValue.trim().toLowerCase();
  }

}
