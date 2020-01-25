import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cuenta-atras',
  templateUrl: './cuenta-atras.component.html',
  styleUrls: ['./cuenta-atras.component.css']
})
export class CuentaAtrasComponent implements OnInit {

  @Input() contador: number;
  @Output() terminaContador: EventEmitter<string>;

  constructor() {
    this.contador = 5;
    this.terminaContador = new EventEmitter();
  }

  ngOnInit() {
  }

  arrancaContador() {
    const interval = setInterval(() => {
      this.contador--;
      if (this.contador === 0) {
        clearInterval(interval);
        this.terminaContador.emit('Ha terminado la cuenta atrás');
      }
    }, 1000);
  }

}
