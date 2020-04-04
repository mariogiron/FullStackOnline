import { IsAdminGuard } from './is-admin.guard';
import { LoginGuard } from './login.guard';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/students' },
  { path: 'students', component: ListaAlumnosComponent, canActivate: [LoginGuard, IsAdminGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
