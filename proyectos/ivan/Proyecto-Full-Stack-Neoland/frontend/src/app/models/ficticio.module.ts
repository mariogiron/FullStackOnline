import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FicticioModule {

  ID: number;
  nombre: string;
  foto: string;
  icono: string;
  descripcion: string;
  latitud: number;
  longitud: number;

}
