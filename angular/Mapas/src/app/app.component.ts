import { Component, OnInit } from '@angular/core';

declare var google;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  map: any;

  directionsService: any;
  directionsDisplay: any;

  constructor() {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.loadMap(position);
      });
    } else {
      console.log('Tu navegador es una cochambre');
    }
  }

  loadMap(position) {
    const mapOptions = {
      center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    }

    this.map = new google.maps.Map(document.getElementById('mapaId'), mapOptions);
    this.directionsDisplay.setMap(this.map);

    const marker = new google.maps.Marker({
      position: mapOptions.center,
      // position: new google.maps.LatLng(LATITUD, LONGITUD)
      title: 'ESTAMOS AQUÍ!',
      animation: google.maps.Animation.DROP
    })
    marker.setMap(this.map);

    google.maps.event.addListener(this.map, 'click', (event) => {
      const marker = new google.maps.Marker({
        position: event.latLng,
        animation: google.maps.Animation.BOUNCE,
        icon: 'https://i.pinimg.com/originals/12/15/30/12153058cf7f17ac38b1342db1d30be5.gif'
      })
      marker.setMap(this.map);
    })

    const autocomplete = new google.maps.places.Autocomplete(document.getElementById('inputPlaces'), {
      types: ['geocode', 'establishment'],
      origin: mapOptions.center
    });

    autocomplete.addListener('place_changed', function () {
      const place = autocomplete.getPlace();
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());

      this.map.setCenter(place.geometry.location);

      const marker = new google.maps.Marker({
        position: place.geometry.location,
      })
      marker.setMap(this.map);

    }.bind(this));
  }

  manejarClick() {
    const options = {
      origin: 'barco 27, madrid',
      destination: 'gran via cortes valencianas, 34',
      travelMode: google.maps.TravelMode.WALKING
    }

    this.directionsService.route(options, (result, status) => {
      console.log(result);
      this.directionsDisplay.setDirections(result);
    })
  }

}
