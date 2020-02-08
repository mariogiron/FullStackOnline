import { Escritor } from '../models/escritor.model';
import { ESCRITORES } from '../db/escritores.db';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor() { }

  getAll() {
    return ESCRITORES;
  }

  getAllP(): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      resolve(ESCRITORES);
    });
  }

  getByPais(pPais): Promise<Escritor[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = ESCRITORES.filter(escritor => escritor.pais === pPais);
      resolve(arrFiltrado);
    });
  }

  getById(escritorId): Promise<Escritor> {
    return new Promise((resolve, reject) => {
      const escritorEncontrado = ESCRITORES.find(escritor => escritor.id === parseInt(escritorId, 10));
      resolve(escritorEncontrado);
    });
  }

}
