import { Component, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';
//marker issue
import { icon, Marker } from 'leaflet';
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
  selector: 'app-mapadetalle',
  templateUrl: './mapadetalle.component.html',
  styleUrls: ['./mapadetalle.component.scss']
})
export class MapadetalleComponent implements OnInit {
  @Input('lat') lat : string;
  @Input('lon') lon : string;



  constructor() { }

  ngOnInit(): void {
    this.añadirMapaDetalle();
  }

  añadirMapaDetalle(): void {
    const mymap = L.map('mymap').setView([-25.70, -60.19], 7);

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
    if (this.lat){
      let marker = new L.Marker([this.lat, this.lon]);
      mymap.addLayer(marker);
    }
    
  }

}
