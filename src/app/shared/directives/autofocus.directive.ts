import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterContentInit{
@Input() public autofocus : boolean;
  constructor(private ele: ElementRef) { }
  
public ngAfterContentInit(): void {
  setTimeout(() => {
    this.ele.nativeElement.focus()
  }, 500);
} 
}
