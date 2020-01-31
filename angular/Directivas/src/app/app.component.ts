import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  estilosParrafo: any;
  clasesParrafo: string[];
  mostrarClase: boolean;
  mostrarParrafo: boolean;
  puerta: string;

  constructor() {
    this.estilosParrafo = {
      color: 'red',
      fontSize: '24px'
    };
    this.clasesParrafo = ['dos', 'tres'];
    this.mostrarClase = false;
    this.mostrarParrafo = false;
    this.puerta = 'cuatro';
  }

  handleClick() {
    this.estilosParrafo.color = 'green';
    this.clasesParrafo.push('uno');
  }

  toggleClase() {
    this.mostrarClase = !this.mostrarClase;
    this.mostrarParrafo = !this.mostrarParrafo;
  }

}
