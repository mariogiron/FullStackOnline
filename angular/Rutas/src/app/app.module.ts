import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductoComponent } from './producto/producto.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RelatedComponent } from './related/related.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    AboutComponent,
    ContactComponent,
    ProductoComponent,
    ReviewsComponent,
    RelatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
