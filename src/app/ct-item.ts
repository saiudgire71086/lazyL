import { Type } from '@angular/core';

export class CTItem {
  constructor(public component: Type<any>, public data: any) {}
}