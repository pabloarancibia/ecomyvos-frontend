import { Component, OnInit } from '@angular/core';
import { AsistenciasService } from '@app/services/asistencias.service';


@Component({
  selector: 'app-bar-cap-asis',
  templateUrl: './bar-cap-asis.component.html',
  styleUrls: ['./bar-cap-asis.component.scss']
})
export class BarCapAsisComponent implements OnInit {

  capsAsis: any = []


  constructor(
    private asistenciasService: AsistenciasService,
  ) { }

  ngOnInit(): void {
    google.charts.load('current', {'packages':['corechart']});
    this.getCapClasesAsis();

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
      // title: 'Total de asistencias por capacitación',
      // width:550,
      // height: 0,
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
  

}
