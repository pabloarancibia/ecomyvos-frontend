import { Component, OnInit } from '@angular/core';
import { AsistenciasService } from '@app/services/asistencias.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  capsAsis: any = []


  constructor(
    private asistenciasService: AsistenciasService
  ) { }

  ngOnInit(): void {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.load('current', {'packages':['timeline']});

    this.getCapClasesAsis();


  }

  getCapClasesAsis(){
    try {
      this.asistenciasService.getPresentes()
      .then(res=>{
        this.capsAsis = res;
        // this.drawCapAsis()
        google.charts.setOnLoadCallback(this.drawCapAsis.bind(this));
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
        dataTable.addRows([
          [ 'Cap uno', new Date(2021, 2, 1), new Date(2021, 2, 4) ],
          [ 'Cap dos', new Date(2021, 1, 4),  new Date(2021, 2, 4) ],
          [ 'Cap tres',new Date(2021, 2, 4),  new Date(2021, 3, 4) ]]);
        
          var options = {
            title: 'Linea de tiempo de capacitaciones',
            width:1400,
            height:400,       
          };

        chart.draw(dataTable, options);
}
  




}
