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
  /**
   * @data datos que llegan de backend
   * @columns para cargar columnas dinamicamente
   * @dataOrd para cargar datos ordenados
   */
  data:any = [];
  columns:any = [];
  dataOrd:any = {};


  public capacitacion: Capacitaciones;
  displayedColumnsAsis: string[] = ['Nombre', 'Apellido'];
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
      // traigo todos los datos de service/backend/bd
      this.capacitacionesService.alumnosClasesAsistencias(id)
        .then(report => {
          this.data = report,   
          console.log(this.data);

          // Cargo columnas segun cantidad de clases de la capacitacion
           let obj = {};
          for (let c of this.data['cap']['Clases']){
            // for (let f of this.data['cap']['Clases'][c]){
              // obj[c] = this.data['cap']['Clases'][c]['fecha']
              obj[c.id] = c['fecha'] + '('+c.id+') ';
            // }
           }
           console.log(obj)
           this.columns.push(obj);
           obj = {};
           console.log('columns', this.columns)

           // formato: fecha(id)
           // asigno mismo valor a this.columns y a this.displayedColumnsAsis
           // despues me va servir eso a la hr de cargar los datos a la tabla
          for (let ca in this.columns[0]){
            let dateString = this.columns[0][ca];  
            let momentVariable = moment(dateString, 'YYYY-MM-DD');  
            let stringvalue = momentVariable.format('DD-MM-YYYY'); 
            this.columns[0][ca] = stringvalue + ' ('+ca+')';
            this.displayedColumnsAsis.push(this.columns[0][ca]);
          }
          console.log('dcA', this.displayedColumnsAsis)

          
          // PROCESO PARA CARGA DATA SETS
          let forCol = {}
          //recorro segun cantidad de usuarios(alumnos) existentes
          for (let ds of this.data['cap']['Usuarios']){
          forCol['Nombre'] = ds.Persona.nombre;
          forCol['Apellido'] = ds.Persona.apellido;
           console.log('ds(Usuario fila actual): ', ds)
          // recorro COLUMNAS clases existentes
          let cnt = 0;
            for (let dc in this.columns[0]){
            // for (var dc = 0; dc < this.columns[0]; dc++){
              
              console.log('dc(claseId) columns...', dc)

              //recorro ASISTENCIAS de esa clase
              // for (let as in this.data['cap']['Clases'][dc]['Asistencia']){
              for (let as in this.data['cap']['Clases'][cnt]['Asistencia']){
                console.log('as: ', as )

                /*console.log(
                  ' ClaseId: ' +this.data['cap']['Clases'][cnt]['Asistencia'][as]['ClaseId'] + ' - dc: ' + dc +
                  ' - UsId: ' + this.data['cap']['Clases'][cnt]['Asistencia'][as]['UsuarioId'] + ' - ds:' + ds.id
                )*/
                // verifico que el id de usuario y clase sean de esta fila
                if (this.data['cap']['Clases'][cnt]['Asistencia'][as]['ClaseId'] == dc 
                && this.data['cap']['Clases'][cnt]['Asistencia'][as]['UsuarioId'] == ds.id){
                  // si encuentra un registro claseid usuarioid grabado le asigna el valor
                  // forCol[nombrecolumna] = valorAsistencia
                  console.log('encuentro Asistencia claseId=UserId');
                  forCol[this.columns[0][dc]] = this.data['cap']['Clases'][cnt]['Asistencia'][as]['asistencia']
                }
                
              }
              cnt++;
            }
            cnt = 0;
          this.dataSourceAsis.data.push(forCol)
          console.log('forCol ', forCol)
          console.log('dsA', this.dataSourceAsis.data)


          forCol = {}
          }
          // this.dataSourceAsis.data = this.data.cap;
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
