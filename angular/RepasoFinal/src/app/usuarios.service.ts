import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private contador: number;
  private usuarios: any[];

  // Genero el Subject indicando qué elemento voy a recuperar cuando me suscriba (any[])
  private usuariosSb: Subject<any[]>;

  constructor() {
    this.contador = 0;
    this.usuarios = [];
    //Inicializo el Subject
    this.usuariosSb = new Subject();
  }

  getContador(): number {
    return this.contador;
  }

  incrementarContador(): void {
    this.contador++;
  }

  decrementarContador(): void {
    this.contador--;
  }

  getUsuarios(): any[] {
    return this.usuarios;
  }

  agregarUsuario(user: any): void {
    this.usuarios.push(user);
    // Aviso a todos los suscritos de que ha habido un cambio en los datos de los usuarios
    this.usuariosSb.next(this.usuarios);
  }

  // Genera el observable para poder suscribirnos a los cambios
  usuariosOb(): Observable<any[]> {
    return this.usuariosSb.asObservable();
  }

}
