import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// import { Usuarios } from '../../../models/usuarios.model';
// import { Personas } from '../../../models/personas.model';
// import { Roles } from '../../../models/roles.model';

import { UsuariosService } from '../../../services/usuarios.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  
  datos: [];

  // datos para la tabla
  // ELEMENT_DATA: Usuarios[] = null;
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'cuil', 'nombreusuario', 'nombrerol', 'accion'];
  // dataSource = new MatTableDataSource<Usuarios>(this.ELEMENT_DATA);
  
  dataSource = new MatTableDataSource;

  constructor(
    private usuariosService: UsuariosService,
    

  ){ }

  ngOnInit(): void {
    this.getDatos()
  }

  public getDatos() {
    this.usuariosService.getUsPerRol()
      //.then(report => this.dataSource.data = report as Usuarios[]);
      .then(report => this.dataSource.data = report);

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
