import { Injectable } from '@angular/core';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TextfieldComponent } from './textfield/textfield.component';
import { CTItem } from './ct-item';

@Injectable()
export class CTService {
  getUser1() {
    return [
      new CTItem(TextfieldComponent, {user: 'User1', checkbox: 2, textbox: 4}),
      new CTItem(CheckboxComponent, {user: 'User2', checkbox: 5, textbox: 10})
    ];
  }
}
