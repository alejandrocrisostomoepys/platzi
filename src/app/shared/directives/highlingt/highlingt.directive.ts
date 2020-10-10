import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlingt]'
})
export class HighlingtDirective {

  constructor(
    element: ElementRef
  ) {
    element.nativeElement.style.backgroundColor = 'red';
   }

}
