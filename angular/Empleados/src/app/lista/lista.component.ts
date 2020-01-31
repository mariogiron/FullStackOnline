import { Empleado } from './../models/empleado.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() empleados: Empleado[];

  constructor() { }

  ngOnInit() {
  }

}
