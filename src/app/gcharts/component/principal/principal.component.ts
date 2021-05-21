import { Component, OnInit } from '@angular/core';
import { AsistenciasService } from '@app/services/asistencias.service';
import { CapacitacionesService } from '@app/services/capacitaciones.service';

import * as moment from 'moment';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  capsAsis: any = []
  capsFechas: any = []



  constructor(
    private asistenciasService: AsistenciasService,
    private capacitacionesService: CapacitacionesService
  ) { }

  ngOnInit(): void {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.load('current', {'packages':['timeline']});

    this.getCapClasesAsis();
    this.getCapFechasHoras();



  }

  getCapClasesAsis(){
    try {
      this.asistenciasService.getPresentes()
      .then(res=>{
        this.capsAsis = res;
        // this.drawCapAsis()
        google.charts.setOnLoadCallback(this.drawCapAsis.bind(this));
      })
    } catch (error) {    
    }
  }

  getCapFechasHoras(){
    try {
      this.capacitacionesService.getCapacitacionesfechas()
      .then(res=>{
        this.capsFechas = res;
        google.charts.setOnLoadCallback(this.drawCapTimeline.bind(this));
      })
    } catch (error) {    
    }
  }



drawCapAsis() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Capacitación');
  data.addColumn('number', 'Asistencias');

  for (let c in this.capsAsis){
    data.addRows([
      [{v: this.capsAsis[c].capacitacionId.toString(),
         f: 'Id: '+this.capsAsis[c].capacitacionId.toString()},
         this.capsAsis[c].asistencias],
    ]);
  };

  

  var options = {
    title: 'Total de asistencias por capacitación',
    width:550,
    height:400,
    hAxis: {
      title: 'Capacitaciones',
    },
    vAxis: {
      title: 'Asistencias'
    }
  };

  var chart = new google.visualization.ColumnChart(
    document.getElementById('chart_div'));

  chart.draw(data, options);
}

drawCapTimeline(){
  var container = document.getElementById('capsTimeline');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Capacitaciones' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });

        for (let c in this.capsFechas){

          let dateString = this.capsFechas[c].fechainicio;  
          let momentVariable = moment(dateString);  
          let stringvalueInicio = momentVariable.format('YYYY-MM-DD');

          let dateStringFin = this.capsFechas[c].fechafin;  
          let momentVariableFin = moment(dateStringFin);  
          let stringvalueFin = momentVariableFin.format('YYYY-MM-DD');

          dataTable.addRows([
            [ this.capsFechas[c].nombre.toString(), 
            new Date(stringvalueInicio + ',' + this.capsFechas[c].horainicio),
            new Date(stringvalueFin + ',' + this.capsFechas[c].horafin)],
          ]);
        };
        
        var options = {
          title: 'Linea de tiempo de capacitaciones',
          width:1400,
          height:400,       
        };

        chart.draw(dataTable, options);
}
  




}
