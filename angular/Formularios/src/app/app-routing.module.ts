import { ModelComponent } from './model/model.component';
import { TemplateComponent } from './template/template.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'template', component: TemplateComponent },
  { path: 'model', component: ModelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
