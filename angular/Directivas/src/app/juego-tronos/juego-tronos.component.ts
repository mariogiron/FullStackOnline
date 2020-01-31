import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego-tronos',
  templateUrl: './juego-tronos.component.html',
  styleUrls: ['./juego-tronos.component.css']
})
export class JuegoTronosComponent implements OnInit {

  episodios: any[];

  constructor() {
    this.episodios = [
      { title: 'Winter Is Coming', director: 'Tim Van Patten', id: 1 },
      { title: 'The Kingsroad', director: 'Tim Van Patten' },
      { title: 'Lord Snow', director: 'Brian Kirk' },
      { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
      { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
      { title: 'A Golden Crown', director: 'Daniel Minahan' },
      { title: 'You Win or You Die', director: 'Daniel Minahan' },
      { title: 'The Pointy End', director: 'Daniel Minahan' }
    ];

  }

  ngOnInit() {
  }

}
