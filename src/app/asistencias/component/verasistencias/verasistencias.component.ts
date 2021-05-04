import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { Capacitaciones } from "../../../models/capacitaciones.model";
import { AsistenciasService } from "../../../services/asistencias.service";
import { UsuariosService } from '../../../services/usuarios.service';
import * as moment from 'moment';


@Component({
  selector: 'app-verasistencias',
  templateUrl: './verasistencias.component.html',
  styleUrls: ['./verasistencias.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerasistenciasComponent implements OnInit {
  /**
   * @data datos que llegan de backend
   * @columns para cargar columnas dinamicamente
   * @dataOrd para cargar datos ordenados
   */
  data:any = [];
  columns:any = [];
  forDs:any = [];

  displayedColumnsAsis: string[];
  dataSourceAsis: any;

  // public capacitacion: Capacitaciones;
  // displayedColumnsAsis: string[] = ['id','Nombre', 'Apellido'];
  // dataSourceAsis = new MatTableDataSource;



  constructor(
    private asistenciasService: AsistenciasService,
    private activeRoute: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private usuariosService: UsuariosService,
  ) { }

  ngOnInit(): void {
    // this.refresh();
    this.callGral(); 

  }
  refresh(){
    this.data = []
    this.columns = []
    this.forDs = []
    this.displayedColumnsAsis = ['id','Nombre', 'Apellido'];
    this.dataSourceAsis = new MatTableDataSource;

    this.changeDetectorRef.detectChanges()
  }

  /**
   * Traigo datos de BACKEND
   */
  public async getData() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    
    try {
      await this.asistenciasService.alumnosClasesAsistencias(id)
        .then(report => {
          this.data = report,
          this.changeDetectorRef.detectChanges()
          console.log('this.data',this.data);    
          });
      
    } catch (error) {
        // console.log(error);
    }
  }

  public async callGral(){
    await this.refresh();
    await this.getData();
    await this.cargoColumnas();
    // await this.cargoDCA();
    await this.preparoDS();

    await this.cargaDS();

    this.changeDetectorRef.detectChanges()
  }
  

  public cargoColumnas(){  
    
    // Cargo COLUMNAS segun cantidad de clases de la capacitacion
    let obj = {};
    
    for (let c of this.data['cap']['Clases']){
        obj[c.id] = c['fecha'] + '('+c.id+') ';
     }
     console.log('obj',obj)
     this.columns.push(obj);
     obj = {};
     console.log('columns', this.columns)

     // FORMAT COLUMNAS CLASES: fecha *id*
     // asigno mismo valor a this.columns y a this.displayedColumnsAsis
     // despues me va servir eso a la hr de cargar los datos a la tabla
    for (let ca in this.columns[0]){
      let dateString = this.columns[0][ca];  
      let momentVariable = moment(dateString, 'YYYY-MM-DD');  
      let stringvalue = momentVariable.format('DD-MM-YYYY'); 
      this.columns[0][ca] = stringvalue + ' *'+ca+'*';
      this.displayedColumnsAsis.push(this.columns[0][ca]);
      // this.forThisCol.push(this.columns[0][ca])

    

    }
    console.log('columns despues for', this.columns)
  
  }

  /**
   * Carga de DATA SET
   */
  public preparoDS(){

    // PROCESO PARA CARGA DATA SETS
  let forCol = {}
    //recorro USUARIOS (alumnos) existentes
    this.forDs=[]
    for (let ds of this.data['cap']['Usuarios']){

    forCol['id'] = ds.id;
    forCol['Nombre'] = ds.Persona.nombre;
    forCol['Apellido'] = ds.Persona.apellido;
     console.log('ds(Usuario fila actual): ', ds)

    // recorro CLASES clases existentes
    let cnt = 0;
      for (let dc in this.columns[0]){
      // for (var dc = 0; dc < this.columns[0]; dc++){
        
        console.log('dc(claseId) columns...', dc)

        //recorro ASISTENCIAS de esa clase
        // for (let as in this.data['cap']['Clases'][dc]['Asistencia']){
        for (let as in this.data['cap']['Clases'][cnt]['Asistencia']){
          console.log('as: ', as )

          
          // verifico que el id de usuario y clase sean de esta fila
          if (this.data['cap']['Clases'][cnt]['Asistencia'][as]['ClaseId'] == dc 
          && this.data['cap']['Clases'][cnt]['Asistencia'][as]['UsuarioId'] == ds.id){
            // si encuentra un registro claseid usuarioid grabado le asigna el valor a forCol para mostrarlo
            // forCol[nombrecolumna] = valorAsistencia
            console.log('encuentro Asistencia claseId=UserId');
            forCol[this.columns[0][dc]] = this.data['cap']['Clases'][cnt]['Asistencia'][as]['asistencia']
          }
          
        }
        cnt++;
      }
      cnt = 0;

    this.forDs.push(forCol)
  
     forCol={}
     


    }

 
  }

  public async cargaDS(){

    const fdsa = this.forDs;

    for (let fds of fdsa){
      this.dataSourceAsis.data.push(fds)
    }

    // this.changeDetectorRef.detectChanges();
    console.log('dsA',this.dataSourceAsis.data)
    
  }

  /**
   * Asignar asistencia según corresponda
   * @param datos capacitacionId, claseId, usuarioId, valor de asistencia
   */
  async asignarAsistencia(datos){
    //extraigo id de fecha-id
    let cids = datos.claseId.split('*')[1];
    let cidn: number = +cids; 
    datos.claseId = cidn

    try {
      this.asistenciasService.asignarAsistencia(datos).then(res=>{
        // this.displayedColumnsAsis = ['id','Nombre', 'Apellido'];
        // this.refresh();
        this.callGral();
        console.log('asistencia OK ',res)
      }); 
    } catch (error) {
      
    }
    console.log('datos: ', datos)
  }

  // tslint:disable-next-line: typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceAsis.filter = filterValue.trim().toLowerCase();
  }

  

}
