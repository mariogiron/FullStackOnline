import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlarmaService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  AlarmaVer(): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/conversacion`).toPromise();
  };

  AlarmaId(ID): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/alarma/${ID}`).toPromise();
  };

  Alarma(): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/alarma-completa`).toPromise();
  };

  AlarmaNuevo(formValue): Promise<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}/alarma/nuevo`, formValue).toPromise();
  };

  AlarmaCambiar(formValue): Promise<any[]> {
    return this.http.put<any[]>(`${this.baseUrl}/alarma/cambiar`, formValue).toPromise();
  };

  AlarmaBorrar(ID): Promise<any[]> {
    return this.http.delete<any[]>(`${this.baseUrl}/alarma/borrar/${ID}`).toPromise();
  };

}
