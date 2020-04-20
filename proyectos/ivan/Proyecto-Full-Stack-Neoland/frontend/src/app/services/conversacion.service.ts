import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConversacionService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  ConversacionVer(): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/conversacion`).toPromise();
  };

  ConversacionId(ID): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/conversacion/${ID}`).toPromise();
  };

  Conversacion(): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/conversacion-completo`).toPromise();
  };

  ConversacionNuevo(formValue): Promise<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}/conversacion/nuevo`, formValue).toPromise();
  };

  ConversacionCambiar(formValue): Promise<any[]> {
    return this.http.put<any[]>(`${this.baseUrl}/conversacion/cambiar`, formValue).toPromise();
  };

  ConversacionBorrar(ID): Promise<any[]> {
    return this.http.delete<any[]>(`${this.baseUrl}/conversacion/borrar/${ID}`).toPromise();
  };

}
