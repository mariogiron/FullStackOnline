import { DetalleComponent } from './detalle/detalle.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'detalle', component: DetalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
