import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// import { Usuarios } from '../../../models/usuarios.model';
// import { Personas } from '../../../models/personas.model';
import { Roles } from '../../../models/roles.model';

import { UsuariosService } from '../../../services/usuarios.service';
import { RolesService } from '../../../services/roles.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  public roles: Roles[];

  // datos para la tabla
  // ELEMENT_DATA: Usuarios[] = null;
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'cuil', 'nombreusuario', 'nombrerol', 'accion', 'eliminar'];
  // dataSource = new MatTableDataSource<Usuarios>(this.ELEMENT_DATA);
  
  dataSource = new MatTableDataSource;

  constructor(
    private usuariosService: UsuariosService,
    private rolesService: RolesService,
    private changeDetectorRef: ChangeDetectorRef

  ){ }

  ngOnInit(): void {
    this.getDatos()
    this.getRoles()
  }

  public getDatos() {
    this.usuariosService.getUsPerRol()
      //.then(report => this.dataSource.data = report as Usuarios[]);
      .then(report => 
        {
          this.dataSource.data = report,
          this.changeDetectorRef.detectChanges();
        }
        );

  }

  public getRoles(){
    this.rolesService.getRoles()
      .then(data=>
       { 
         this.roles = data
         
      }
    );
  }

  asignarRol(uId, e: Event){
    const data = {
      'usuarioId':uId,
      'nombrerol': e
    }
    this.usuariosService.asignarRol(data)
    .then(res=>
      this.getDatos()
      );
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**eliminar usuario */
  eliminarUsuario(id: number){
    if(confirm("Está seguro que desea eliminar el usuario "
    +id+" (esta acción no se puede revertir) ")) {
        const data = {
          'usuarioId':id,
          'estado':'eliminado'
        };
        this.usuariosService.modificarUsuario(data)
          .then(res=>
            this.getDatos()
          );
    }
  }
}
