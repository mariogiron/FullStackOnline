import { Empleado } from './../models/empleado.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  emp: Empleado;
  @Output() enviarEmpleado: EventEmitter<Empleado>;

  constructor() {
    this.emp = new Empleado('', '', '', false);
    this.enviarEmpleado = new EventEmitter();
  }

  ngOnInit() {
  }

  handleClick() {
    this.enviarEmpleado.emit(this.emp);
    this.emp = new Empleado('', '', '', false);
  }

}
