import { Empleado } from './models/empleado.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrEmpleados: Empleado[];

  constructor() {
    this.arrEmpleados = [];
  }

  handleEnviarEmpleado($event) {
    this.arrEmpleados.push({ ...$event });
    console.log(this.arrEmpleados);
  }

}
