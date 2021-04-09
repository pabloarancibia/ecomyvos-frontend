import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
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

  // usuario seleccionado y capacitacion actual
  data = {
    usuarioId: 0,
    capacitacionId: 0
  }

  public capacitacion: Capacitaciones;

  displayedColumnsInst: string[] = ['position', 'nombreusuario', 'nombre', 'apellido', 'cuil', 'email', 'accion'];
  displayedColumnsAlu: string[] = ['position', 'nombreusuario', 'nombre', 'apellido', 'cuil', 'email', 'accion'];
  displayedColumnsMulti: string[] = ['position', 'nombreusuario', 'nombre', 'apellido', 'cuil', 'email', 'accion'];
  
  dsInstructores = new MatTableDataSource;
  dsAlumnos = new MatTableDataSource;
  dsMultiplicadores = new MatTableDataSource;



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
          this.cargaDs();
          });
          
    } catch (error) {
        // console.log(error);
    }
  }

  /**
   * Cargo los DataSets
   */
  public async cargaDs(){
    this.usuariosService.getUsPerCapByRol('instructor')
      .then(async report => 
        {
          // Verifico relacion con capacitacion actual
          let res = await this.inThisCap(report);

          // Cargo el data set
          this.dsInstructores.data = res as any[]
          
        }
        );

    this.usuariosService.getUsPerCapByRol('alumno')
      .then(async report => 
        {
          // Verifico relacion con capacitacion actual
          let res = await this.inThisCap(report);

          this.dsAlumnos.data = res as any[]

        }
        );

    this.usuariosService.getUsPerCapByRol('multiplicador')
      .then(async report => 
        {
          // Verifico relacion con capacitacion actual
          let res = await this.inThisCap(report);

          this.dsMultiplicadores.data = res as any[]

        }
        );  
    

    this.changeDetectorRef.detectChanges();

  }

  /**
   * Verifico qué usuario está relacionado
   * con la capacitación actual.
   * @param report objeto con usuarios
   * @returns objeto con usuarios + inThisCap
   */
  private inThisCap(report: object){
    // Recorro usuarios
    for (let user in report ){
      // asigno valor false por defecto
      report[user]['inThisCap'] = false;
      // Recorro capacitaciones de cada usuario
      for (let cap in report[user]['Capacitacions'] ){
        // verifico si esa cap es igual a la cap actual 
        if (report[user]['Capacitacions'][cap]['id'] === this.capacitacion.id){
          // Usuario es instructor
          report[user]['inThisCap'] = true;
        }
      }
    }
    return report;
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

  // isInstructor: boolean = false;
  // public async marcaInstructor(valor: boolean){
  //   await this.delay(2000);
  //   this.isInstructor = valor;
  //   console.log(this.isInstructor)
  // }
  

}
