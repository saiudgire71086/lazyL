import { Component, OnInit, Input } from '@angular/core';
import { CTComponent } from '../ct.component';
@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css']
})
export class TextfieldComponent implements OnInit, CTComponent {
  @Input() data: any;
  ngOnInit() {
    this.counter(this.data.checkbox);
  }

  counter(i: number) {
    return new Array(i);
  }

}
