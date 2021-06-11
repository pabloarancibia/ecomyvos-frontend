import { Component, OnInit } from '@angular/core';
import { CapacitacionesService } from '@app/services/capacitaciones.service';

import * as moment from 'moment';
@Component({
  selector: 'app-timeline-caps',
  templateUrl: './timeline-caps.component.html',
  styleUrls: ['./timeline-caps.component.scss']
})
export class TimelineCapsComponent implements OnInit {

  capsAsis: any = []
  capsFechas: any = []



  constructor(
    private capacitacionesService: CapacitacionesService
  ) { }

  ngOnInit(): void {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.load('current', {'packages':['timeline']});

    this.getCapFechasHoras();



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

