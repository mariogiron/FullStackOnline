import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ConversacionModule {
  ID: number;
  emisor: number;
  receptor: number;
  asunto: string;
  fecha_inicio: any;
  fk_usuario: number;
  emisorNombre: {
    ID: number;
    alias: string;
    /* nombre: string; */
    /* apellidos: string; */
    /* edad: number; */
    email: string;
    /* password: string; */
    foto: string;
    fecha_alta: any;
  };
  receptorNombre:
    {
      ID: number;
      alias: string;
      /* nombre: string; */
      /* apellidos: string; */
      /* edad: number; */
      email: string;
      /* password: string; */
      foto: string;
      fecha_alta: any;
    };
  mensajes:
    {
      ID: number;
      /* emisor: number; */
      fecha: any;
      texto: string;
      /* fk_conversacion: number; */
      emisorNombre:
      {
        ID: number;
        alias: string;
        /* nombre: string; */
        /* apellidos: string; */
        /* edad: number; */
        email: string;
        /* password: string; */
        foto: string;
        fecha_alta: any;
      }
    };
}
