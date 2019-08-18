import { Component, OnInit, Input } from '@angular/core';
import { CTComponent } from '../ct.component';
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit, CTComponent {
  @Input() data: any;

  ngOnInit() {
    this.counter(this.data.checkbox);
  }

  counter(i: number) {
    return new Array(i);
  }

}
