import { Escritor } from './../models/escritor.model';
import { EscritoresService } from '../services/escritores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  arrEscritores: Escritor[];

  constructor(private escritoresService: EscritoresService) { }

  async ngOnInit() {
    // this.arrEscritores = this.escritoresService.getAll();

    // this.escritoresService.getAllP()
    //   .then(escritores => {
    //     this.arrEscritores = escritores;
    //   });

    this.arrEscritores = await this.escritoresService.getAllP();
  }

  async manejarChange($event) {
    // console.log($event.target.value);
    this.arrEscritores = await this.escritoresService.getByPais($event.target.value);
  }

}
