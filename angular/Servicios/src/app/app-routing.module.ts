import { ListaPlanetasComponent } from './lista-planetas/lista-planetas.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'escritores', component: ListaComponent },
  {
    path: 'escritores/:idEscritor', component: DetalleComponent, children: [
      { path: 'libros', component: ListaLibrosComponent }
    ]
  },
  { path: 'planetas', component: ListaPlanetasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
