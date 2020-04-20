import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FicticioService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  FicticioVer(): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/conversacion`).toPromise();
  };

  FicticioId(ID): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/ficticio/${ID}`).toPromise();
  };

  Ficticio(): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/ficticio-completa`).toPromise();
  };

  FicticioNuevo(formValue): Promise<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}/ficticio/nuevo`, formValue).toPromise();
  };

  FicticioCambiar(formValue): Promise<any[]> {
    return this.http.put<any[]>(`${this.baseUrl}/ficticio/cambiar`, formValue).toPromise();
  };

  FicticioBorrar(ID): Promise<any[]> {
    return this.http.delete<any[]>(`${this.baseUrl}/ficticio/borrar/${ID}`).toPromise();
  };

}
