import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModule } from '../models/usuario.module';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  arrUsuario: UsuarioModule[];
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000';
  }

  //Conexión son los endpoint de backend ------------------------------------------
  UsuarioVer(): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/usuario`).toPromise();
  };

  UsuarioId(ID): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/usuario/:${ID}`).toPromise();
  };

  UsuarioCompleto(): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/usuario-completo`).toPromise();
  };

  UsuarioCompletoId(ID): Promise<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/usuario-completo/:${ID}`).toPromise();
  };


  UsuarioNuevo(formValue): Promise<any[]> {
    return this.http.post<any[]>(`${this.baseUrl}/usuario/nuevo`, formValue).toPromise();
  };

  UsuarioCambiar(formValue): Promise<any[]> {
    return this.http.put<any[]>(`${this.baseUrl}/usuario/cambiar`, formValue).toPromise();
  };

  UsuarioBorrar(ID): Promise<any[]> {
    return this.http.delete<any[]>(`${this.baseUrl}/usuario/borrar/:${ID}`).toPromise();
  };


  //Modificando las llamadas son los endpoint de backend ------------------------------------------

  /* UsuariogetId(pid) {
    return new Promise((resolve, reject) => {
  const
    })
  }*/

} 
