import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { Capacitaciones } from "../../../models/capacitaciones.model";
import { CapacitacionesService } from "../../../services/capacitaciones.service";
import { UsuariosService } from '../../../services/usuarios.service';
import * as moment from 'moment';




@Component({
  selector: 'app-verasistencias',
  templateUrl: './verasistencias.component.html',
  styleUrls: ['./verasistencias.component.scss']
})
export class VerasistenciasComponent implements OnInit {

  data:any = [];
  columns:any = [];

  public capacitacion: Capacitaciones;
  displayedColumnsAsis: string[] = ['position', 'nombre', 'apellido'];
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
    
    try {
      this.capacitacionesService.alumnosClasesAsistencias(id)
        .then(report => {
          this.data = report,   
          console.log(this.data);

           let obj = {};
          for (let c of this.data['cap']['Clases']){
            // for (let f of this.data['cap']['Clases'][c]){
              obj[c.id] = c.fecha + '('+c.id+') ';
            // }
           }
           console.log(obj)
           this.columns.push(obj);
           obj = {};
           console.log('columns', this.columns)

          for (let ca in this.columns[0]){
            let dateString = this.columns[0][ca];  
            let momentVariable = moment(dateString, 'YYYY-MM-DD');  
            let stringvalue = momentVariable.format('DD-MM-YYYY'); 
            this.displayedColumnsAsis.push( stringvalue + ' ('+ca+')')
          }
          console.log('dcA', this.displayedColumnsAsis)

          
          // CARGO LOS DATA SETS

          let forCol = {}

          //recorro filas existentes
          for (let ds of this.data.Usuarios){
            
          // recorro columnas existentes
            for (let dc in this.displayedColumnsAsis){
              //
              forCol[this.displayedColumnsAsis[dc]] = ds.cap
            }
          }
          console.log(forCol)

          this.dataSourceAsis.data = this.data.cap;
          console.log('ds', this.dataSourceAsis.data)
          });
          
    } catch (error) {
        // console.log(error);
    }
  }

  cargarColumnas(){

  }

  // tslint:disable-next-line: typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceAsis.filter = filterValue.trim().toLowerCase();
  }

  

}
