import { PipesComponent } from './pipes/pipes.component';
import { CartComponent } from './cart/cart.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'tienda', component: ListaProductosComponent },
  { path: 'cart', component: CartComponent },
  { path: 'pipes', component: PipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
