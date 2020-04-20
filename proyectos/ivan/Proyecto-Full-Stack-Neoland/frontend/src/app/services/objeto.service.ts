import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ObjetoModule } from '../models/objeto.module';


@Injectable({
  providedIn: 'root'
})

export class ObjetoService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  ObjetoVer(): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/objeto`).toPromise();
  };

  ObjetoId(ID): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/objeto/${ID}`).toPromise();
  };

  ObjetoCompleto(): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/objeto-completo`).toPromise();
  };

  ObjetoNuevo(formValue): Promise<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}/objeto/nuevo`, formValue).toPromise();
  };

  ObjetoCambiar(formValue): Promise<any[]> {
    return this.http.put<any[]>(`${this.baseUrl}/objeto/cambiar`, formValue).toPromise();
  };

  ObjetoBorrar(ID): Promise<any[]> {
    return this.http.delete<any[]>(`${this.baseUrl}/objeto/borrar/${ID}`).toPromise();
  };


}
