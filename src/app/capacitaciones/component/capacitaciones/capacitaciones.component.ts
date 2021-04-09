import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '../../../services/auth.service';

import { Capacitaciones } from '../../../models/capacitaciones.model';
import { CapacitacionesService } from '../../../services/capacitaciones.service';
import { UsuariosService } from '../../../services/usuarios.service';


@Component({
  selector: 'app-capacitaciones',
  templateUrl: './capacitaciones.component.html',
  styleUrls: ['./capacitaciones.component.scss']
})
export class CapacitacionesComponent implements OnInit {
  ELEMENT_DATA: Capacitaciones[] = null;
  displayedColumns: string[] = ['id', 'nombre', 'convenio', 'direccion', 'fechainicio', 'accion'];
  dataSource = new MatTableDataSource<Capacitaciones>(this.ELEMENT_DATA);

  data = {
    capacitacionId: 0
  }

  capacitacionesUsuario: Capacitaciones[] = null;
  

  constructor(
    private capacitacionesService: CapacitacionesService,
    private usuariosService: UsuariosService,
    private changeDetectorRef: ChangeDetectorRef,
    public authService: AuthService
    ) { }

  ngOnInit(): void {
    this.getCapsUsRegistrado();
  }

  /**
   * Trae capacitaciones de usuario registrado
   * luego llama a getAll
   */
   public getCapsUsRegistrado(){

    this.usuariosService.getCapsUsRegistrado()
    .then(res=>
      {
         this.capacitacionesUsuario = res.Capacitaciones
         // ahora traigo todas las capacitaciones
         this.getAllCapacitaciones()
         
      }
      );
    
  
  }


  /**
   * Traigo todas las capacitaciones existentes
   */
  public getAllCapacitaciones() {
    this.capacitacionesService.getCapacitaciones()
      .then(async caps => 
        {
          // verifico de cada cap si tiene a usuario actual
          let res = await this.haveThisUser(caps);
          
          //cargo ds con caps + haveThisUser
          this.dataSource.data = res as Capacitaciones[]
          
        });
  
    this.changeDetectorRef.detectChanges();

    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  
  /**
   * Verifico qué cap está relacionada
   * con user actual.
   * @param report objeto con caps
   * @returns objeto con caps + haveThisUser
   */
   private haveThisUser(report: object){
    // Recorro caps
    for (let cap in report ){
      // asigno valor false por defecto
      report[cap]['haveThisUser'] = false;
      
      // Recorro caps del user
      for (let capUs in this.capacitacionesUsuario ){
        // verifico si cap usuario es igual a la cap fila 
        if (this.capacitacionesUsuario[capUs]['id'] === report[cap]['id']){
          // Cap tiene a user actual
          report[cap]['haveThisUser'] = true;
        }
      }
    }
    return report;
  }
  
/**
   * Inscripcion Alumno registrado
   * @param capacitacionId 
   */
  Inscribirse(capacitacionId:number){
    this.data.capacitacionId = capacitacionId;
    this.usuariosService.inscripcionAlumno(this.data)
    .then(res=>{
      
      this.getCapsUsRegistrado();
    }).catch(err=>console.log(err));
  }

  /**
   * Desinscripcion Alumno registrado
   * @param capacitacionId 
   */
  quitarInscripcion(capacitacionId:number){
    this.data.capacitacionId = capacitacionId;
    this.usuariosService.quitarInscripcion(this.data)
    .then(res=>{
      this.getCapsUsRegistrado()
    }).catch(err=>console.log(err));
  }

}


