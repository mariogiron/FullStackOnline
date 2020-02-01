import { LoginGuard } from './login.guard';
import { RelatedComponent } from './related/related.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ProductoComponent } from './producto/producto.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SaludoComponent } from './saludo/saludo.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hola' },
  { path: 'hola/:mensaje', component: SaludoComponent },
  { path: 'contact', redirectTo: 'contacto' },
  { path: 'contacto', component: ContactComponent, canActivate: [LoginGuard] },
  { path: 'info', component: AboutComponent },
  {
    path: 'producto/:productoId', component: ProductoComponent, children: [
      { path: 'reviews', component: ReviewsComponent },
      { path: 'related', component: RelatedComponent }
    ]
  },
  { path: '**', component: SaludoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
