import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '@app/services/alumnos.service';


@Component({
  selector: 'app-pie-generos',
  templateUrl: './pie-generos.component.html',
  styleUrls: ['./pie-generos.component.scss']
})
export class PieGenerosComponent implements OnInit {

  // variables 
  datos = []

  constructor(
    private alumnosservice: AlumnosService
  ) { }

  ngOnInit(): void {
    this.traerDatos()
    google.charts.load("current", {packages:["corechart"]});
  }

  private traerDatos(){
    this.alumnosservice.getCantAlumnosPorGenero().then(
      res=>{
        this.datos = res
        google.charts.setOnLoadCallback(this.drawChart.bind(this));


      }
    )
  }

  private drawChart(){
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Género');
    data.addColumn('number', 'Cantidad');

    for (let c in this.datos){
      data.addRows([
        [this.datos[c].genero,
          this.datos[c].count]
      ]);
    };

    var options = {
      // title: 'My Daily Activities',
      is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
  }

}
