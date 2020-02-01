import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  persona: any;

  @Output() enviarPersona: EventEmitter<any>;

  constructor() {
    this.persona = {};
    this.enviarPersona = new EventEmitter();
  }

  ngOnInit() {
  }

  handleClick() {
    this.enviarPersona.emit(this.persona);
  }

}
