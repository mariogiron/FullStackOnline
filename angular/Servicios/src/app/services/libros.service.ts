import { LIBROS } from './../db/libros.db';
import { Libro } from './../models/libro.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  getByEscritor(escritorId: string): Promise<Libro[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = LIBROS.filter(libro => libro.escritor === parseInt(escritorId, 10));
      resolve(arrFiltrado);
    });
  }

}
