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
    // this.capacitacionesService.getCapacitaciones().then((allCapacitaciones) => {
    // this.capacitaciones = allCapacitaciones;
    // console.log(this.capacitaciones);
    // });

    this.getAllCapacitaciones();
    this.getCapsUsRegistrado();
  }

  public getAllCapacitaciones() {
    this.capacitacionesService.getCapacitaciones()
      .then(report => 
        {
          this.dataSource.data = report as Capacitaciones[]
          
        });
    this.changeDetectorRef.detectChanges();
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  /**
   * Traer capacitaciones usuario registrado
   */
  getCapsUsRegistrado(){

    this.usuariosService.getCapsUsRegistrado()
    .then(res=>
      {
         this.capacitacionesUsuario = res.Capacitaciones
         
         console.log(res)
      }
      );
  }
  
/**
   * Inscripcion Alumno registrado
   * @param capacitacionId 
   */
  Inscribirse(capacitacionId:number){
    this.data.capacitacionId = capacitacionId;
    this.usuariosService.inscripcionAlumno(this.data)
    .then(res=>{
      this.getAllCapacitaciones()
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
      this.getAllCapacitaciones()
    }).catch(err=>console.log(err));
  }

}


