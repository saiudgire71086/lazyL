

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TextfieldComponent } from './textfield.component';


const routes: Routes = [
    { path: "", component: TextfieldComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class TextfieldRoutingModule { }