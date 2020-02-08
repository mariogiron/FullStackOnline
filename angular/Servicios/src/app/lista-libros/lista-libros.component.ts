import { Libro } from './../models/libro.model';
import { LibrosService } from './../services/libros.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {

  libros: Libro[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private librosService: LibrosService
  ) { }

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(async params => {
      console.log(params.idEscritor);
      // this.librosService.getByEscritor(params.idEscritor)
      //   .then(libros => {
      //     this.libros = libros;
      //   });
      try {
        this.libros = await this.librosService.getByEscritor(params.idEscritor);
      } catch (err) {
        console.log(err);
      }
    });
  }

}
