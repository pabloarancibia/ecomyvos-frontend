import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// !Crear esto!
// import { Usuarios } from '../../../models/usuarios.model';
// import { UsuariosService } from '../../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  // datos para la tabla
  // ELEMENT_DATA: Usuarios[] = null;
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'cuil', 'nombreusuario', 'nombrerol', 'acción'];
  // dataSource = new MatTableDataSource<Usuarios>(this.ELEMENT_DATA);

  constructor() { 
    // private usuariosService: UsuariosService) { } 
  }

  ngOnInit(): void {
    // this.getAllUsuarios();
  }

  // public getAllUsuarios() {
  //   this.usuariosService.getUsuarios()
  //     .then(report => this.dataSource.data = report as Usuarios[]);
  // }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  // }



}
