import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class ObjetoModule {
  ID: number;
  nombre: string;
  foto: string;
  descripcion: string;
  perdido: number;
  encontrado: number;
  fecha_perdida: any;
  latitud_perdida: number;
  longitud_perdida: number;
  fecha_encontrado: any;
  latitud_encontrado: number;
  longitud_encontrado: number;
  /* fk_usuario: number; */
  /* fk_objetotipo: number; */
  usuario: {
    ID: number;
    alias: string;
    /* nombre: string; */
    /* apellidos: string; */
    /* edad: number; */
    email: string;
    /*password: string;*/
    foto: string;
    /* fecha_alta: any; */
  }
  tipo: {
    ID: number;
    tipo: string;
    icono: string;
    /* fk_objetofamilia: number; */
    familia:
    {
      ID: number;
      familia: string;
      color: string;
    }
  }
}
