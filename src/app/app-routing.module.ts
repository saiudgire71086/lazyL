import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    pathMatch: 'full',
  },
  {
    path: "checkbox",
    loadChildren: "../app/checkbox/checkbox.module#CheckboxModule"
  },
  
  {
    path: "textfield",
    loadChildren: "../app/textfield/textfield.module#TextfieldModule"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
