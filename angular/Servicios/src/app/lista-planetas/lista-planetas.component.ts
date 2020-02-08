import { PlanetasService } from './../services/planetas.service';
import { Component, OnInit } from '@angular/core';
import { Planeta } from '../models/planeta.model';

@Component({
  selector: 'app-lista-planetas',
  templateUrl: './lista-planetas.component.html',
  styleUrls: ['./lista-planetas.component.css']
})
export class ListaPlanetasComponent implements OnInit {

  planetas: Planeta[];
  numPaginas: number;
  paginaActual: number;

  constructor(private planetasService: PlanetasService) {
    this.paginaActual = 1;
  }

  async ngOnInit() {
    // this.planetasService.getPlanets()
    //   .then(response => {
    //     this.planetas = response.results;
    //   });
    const response = await this.planetasService.getPlanets();
    this.planetas = response.results;
    this.numPaginas = Math.ceil(response.count / 10);
    console.log('PAGINAS', this.numPaginas);

    this.recuperarNombres();
  }

  recuperarNombres() {
    this.planetasService.getPlanets()
      .then(this.mapNames)
      .then(arrNames => {
        console.log(arrNames);
      });
  }

  mapNames(response) {
    return response.results.map(planeta => planeta.name);
  }

  async cambiarPagina(siguiente) {
    // if (siguiente) {
    //   this.paginaActual++;
    // } else {
    //   this.paginaActual--;
    // }
    this.paginaActual = siguiente ? this.paginaActual + 1 : this.paginaActual - 1;
    const response = await this.planetasService.getPlanets(this.paginaActual);
    this.planetas = response.results;
  }

}
