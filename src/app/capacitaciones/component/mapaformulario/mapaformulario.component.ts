import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as L from 'leaflet';
//marker issue
import { icon, Marker } from 'leaflet';
import { map } from 'rxjs-compat/operator/map';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;
//

@Component({
  selector: 'app-mapaformulario',
  templateUrl: './mapaformulario.component.html',
  styleUrls: ['./mapaformulario.component.scss']
})
export class MapaformularioComponent implements OnInit {
  @Output() coordenadas = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    
    this.añadirMapa();
  }

  añadirMapa(): void {
    let mymap;
    if (mymap) mymap.remove();
    mymap = L.map('mymap').setView([-25.70, -60.19], 7);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoicGFibG9hcmFuY2liaWEiLCJhIjoiY2trOXo2b293MTE5dDJ2bW9mMjRtMjl6MCJ9.fjosVM_N9EyazUltv6QsSg'
    }).addTo(mymap);

    // var marker = new L.Marker([-27.45, -58.97], { draggable: true });
    // mymap.addLayer(marker);
    let marker = new L.Marker([-27.45, -58.97]);
    
    const that = this;
    
    function onMapClick(e): void {
      mymap.removeLayer(marker);
      marker = new L.Marker(e.latlng);
      mymap.addLayer(marker);
      marker.bindPopup('<b>Ubicación asignada</b>.').openPopup();
      that.coordenadas.emit(
        {
          lat: e.latlng.lat,
          lon: e.latlng.lng
        });
    }
    mymap.on('click', onMapClick);
  }

  envioCoordenadas(e): void {
    this.coordenadas.emit(e.latlng.lat);
  }

}

