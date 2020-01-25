import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() tareas: any[];

  constructor() { }

  ngOnInit() {
    console.log('INIT DE LISTA');
  }

  mostrarTareas() {
    let resultado = '';
    for (const tarea of this.tareas) {
      resultado += `<h4>${tarea.titulo}</h4><p>${tarea.texto}</p>`;
    }
    return resultado;
  }

}
