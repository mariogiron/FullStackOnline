import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { ListaPlanetasComponent } from './lista-planetas/lista-planetas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetalleComponent,
    ListaLibrosComponent,
    ListaPlanetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
