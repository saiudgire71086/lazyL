import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ct-host]',
})
export class CTDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
