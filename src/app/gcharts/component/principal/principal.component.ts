import { Component, OnInit } from '@angular/core';
import { AsistenciasService } from '@app/services/asistencias.service';




@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  capsAsis: any = []

  title;
  type ='ColumnChart';
  data = [];
  columnNames = [];
  options = {};
  width;
  height;

  constructor(
    private asistenciasService: AsistenciasService
  ) { }

  ngOnInit(): void {
    this.getCapClasesAsis();
    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(this.drawBasic.bind(this));


  }

  getCapClasesAsis(){
    try {
      this.asistenciasService.getPresentes()
      .then(res=>{
        this.capsAsis = res;
        this.drawCapAsis()
      })
    } catch (error) {
      
    }
  }
  

  drawCapAsis(){
    this.title = 'Total de asistencias presentes por capacitación';

    for (let c in this.capsAsis){
      this.data.push([this.capsAsis[c].capacitacionId.toString(),this.capsAsis[c].asistencias])
    };
    this.columnNames = ['Capacitación', 'Asistencias'];
    
    this.options = {
    colors: ['#e6693e'], 
    is3D: true,
    hAxis: {
      title: 'Capacitación Id',
    },
    vAxis: {
      title: 'Asistencias'
    }
    };
    this.width = 550;
    this.height = 400;

}



drawBasic() {

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

  




}
