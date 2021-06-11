import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-generos',
  templateUrl: './pie-generos.component.html',
  styleUrls: ['./pie-generos.component.scss']
})
export class PieGenerosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  private drawChart(){
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     8],
      ['Eat',      2],
      ['Commute',  1],
      ['Study', 5],
      ['Sleep',    8]
    ]);

    var options = {
      // title: 'My Daily Activities',
      is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
  }

}
