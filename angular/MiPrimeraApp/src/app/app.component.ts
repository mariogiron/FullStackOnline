import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrNums: number[];
  campoTexto: string;

  persona: any;

  constructor() {
    this.arrNums = [6, 9];
    this.campoTexto = 'Valor por defecto';
    this.persona = {
      nombre: 'Rosa',
      apellidos: 'Martínez',
      edad: 35
    };
  }

  manejarTerminaContador($event) {
    console.log($event);
  }

}
