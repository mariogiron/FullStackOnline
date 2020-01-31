import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  color: string;

  constructor() {
    this.color = 'amarillo';
  }

  ngOnInit() {
    setInterval(() => {
      if (this.color === 'rojo') {
        this.color = 'amarillo';
      } else if (this.color === 'amarillo') {
        this.color = 'verde';
      } else if (this.color === 'verde') {
        this.color = 'rojo';
      }
    }, 1000);
  }

  cambiaColor() {

  }

}
