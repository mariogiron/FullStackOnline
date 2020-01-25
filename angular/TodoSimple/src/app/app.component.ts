import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrTareas: any[];

  constructor() {
    this.arrTareas = [];
  }

  handleEnviarTarea($event) {
    // FORMA LENTA DE COPIAR OBJETO
    // const tareaTmp = {
    //   titulo: $event.titulo,
    //   texto: $event.texto
    // };
    // this.arrTareas.push(tareaTmp);

    // MEDIANTE SPREAD
    // debugger;
    this.arrTareas.push({ ...$event });
    console.log(this.arrTareas);
  }

}
