import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSubrayado]'
})
export class SubrayadoDirective {

  constructor(elem: ElementRef) {
    elem.nativeElement.style.textDecoration = 'underline';
    elem.nativeElement.style.color = 'green';
  }

}

