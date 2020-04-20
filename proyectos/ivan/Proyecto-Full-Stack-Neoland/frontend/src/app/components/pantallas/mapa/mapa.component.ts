import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  /*  lat: number = 51.678418;
   lng: number = 7.809007; */
  lat: number;
  lng: number;
  visitante: number;
  zoom: number;
  // initial center position for the map
  address: string;

  isFulled = true;
  screenOptions = {
    position: 2
  };

  constructor() { }

  ngOnInit(): void {
    this.getUserLocation();
    this.zoom = 20;
  }

  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      })
    }
    /* if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      }) */
  }
};
