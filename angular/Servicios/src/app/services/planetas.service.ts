import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://swapi.co/api/planets/?format=json';
  }

  getPlanets(page = 1): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}&page=${page}`).toPromise();
  }

}

/*
  Petición HTTP
  -------------
  url: mario.com/personas
  método: GET, POST, PUT, DELETE
  cabeceras
  body
*/


// HttpClientModule - HttpClient
// ReactiveFormsModule - FormGroup
