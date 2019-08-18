
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextfieldRoutingModule } from './textfield-routing.module';
import { TextfieldComponent } from './textfield.component';

@NgModule({
  declarations: [TextfieldComponent],
  imports: [
    CommonModule, TextfieldRoutingModule
  ],
  exports :[TextfieldComponent]
})
export class TextfieldModule { }
