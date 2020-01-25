import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tarea: any;

  @Output() enviaTarea: EventEmitter<any>;

  constructor() {
    this.tarea = {};
    this.enviaTarea = new EventEmitter();
  }

  ngOnInit() {
  }

  handleClick() {
    this.enviaTarea.emit(this.tarea);
  }

}
