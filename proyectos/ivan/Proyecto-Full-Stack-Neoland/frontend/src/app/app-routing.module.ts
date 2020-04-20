import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// pantallas --------------------------------------------
//panatalla de incio
import { InicioComponent } from './components/pantallas/inicio/inicio.component';
import { MapaComponent } from './components/pantallas/mapa/mapa.component';
import { UsuarioPerfilComponent } from './components/pantallas/usuario-perfil/usuario-perfil.component';
import { Error404Component } from './components/pantallas/error404/error404.component';
import { UsuarioComponent } from './components/pantallas/usuario/usuario.component';
import { UsuarioConversacionComponent } from './components/pantallas/usuario-conversacion/usuario-conversacion.component';
import { UsuarioObjetoComponent } from './components/pantallas/usuario-objeto/usuario-objeto.component';
import { LoginComponent } from './components/pantallas/login/login.component';
import { ObjetoComponent } from './components/pantallas/objeto/objeto.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  { path: 'inicio', pathMatch: 'full', component: InicioComponent },
  { path: 'objeto', pathMatch: 'full', component: ObjetoComponent },
  {
    path: 'usuario', component: UsuarioComponent,
    children: [
      { path: '', component: UsuarioPerfilComponent },
      { path: 'perfil', component: UsuarioPerfilComponent },
      { path: 'conversacion', component: UsuarioConversacionComponent },
      { path: 'objeto', component: UsuarioObjetoComponent },
    ]
  },
  { path: 'conversacion', component: UsuarioConversacionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mapa', component: MapaComponent },
  /*  { path: 'informacion', pathMatch: 'full', component: ----- },
  { path: 'politica-cookies', pathMatch: 'full', component: ----- }*/


  //Pagina error -----------------------------
  { path: '404', pathMatch: 'full', component: Error404Component },
  { path: '**', redirectTo: '404' },
  //☠️ Aquí debajo //!nada de rutas, cualquier ruta nueva encima de //Pagina error!!!!!!!!!!
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  /* RouterModule.forRoot(routes, { useHash: true }) */],
  exports: [RouterModule]
})
export class AppRoutingModule { }
