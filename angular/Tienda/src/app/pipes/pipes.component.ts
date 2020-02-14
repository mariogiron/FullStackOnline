import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  animations: [
    trigger('cambiaColor', [
      state('rojo', style({
        backgroundColor: 'red'
      })),
      state('verde', style({
        backgroundColor: 'green',
        transform: 'scale(2)'
      })),
      state('amarillo', style({
        backgroundColor: 'yellow'
      })),
      transition('* => *', animate(500))
    ])
  ]
})
export class PipesComponent implements OnInit {

  precio: number;
  fechaActual: Date;
  numero: number;
  numeroAleatorio: number;

  color: string;

  constructor() {
    this.precio = 235.89;
    this.fechaActual = new Date();
    this.numero = 23789812.121213;
    this.numeroAleatorio = Math.random();
    this.color = 'amarillo';
  }

  ngOnInit(): void {
    setInterval(() => this.fechaActual = new Date(), 1000);
    setInterval(() => {
      if (this.color === 'rojo') {
        this.color = 'amarillo';
      } else if (this.color === 'amarillo') {
        this.color = 'verde'
      } else if (this.color === 'verde') {
        this.color = 'rojo';
      }
    }, 2000);
  }

}
