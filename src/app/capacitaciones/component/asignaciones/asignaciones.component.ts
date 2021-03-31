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
  dsInstructores = new MatTableDataSource;
  dsAlumnos = new MatTableDataSource;


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
          console.log(this.dsInstructores.data);

        }
        );

    this.usuariosService.getUsPerCapByRol('alumno')
      .then(report => 
        {
          this.dsAlumnos.data = report as any[]
          console.log(this.dsAlumnos.data);

        }
        );  
    

    // this.changeDetectorRef.detectChanges();

  }

  asignarInstructor(personaId: number){
    console.log(personaId)
  }
  quitarInstructor(personaId: number){
    console.log(personaId)
  }
  asignarAlumno(personaId: number){
    console.log(personaId)
  }
  quitarAlumno(personaId: number){
    console.log(personaId)
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
