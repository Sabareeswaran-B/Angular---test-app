import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  @Input() appShadow: any;

  constructor(private el: ElementRef) {
   this.showShadow("2px 2px 4px #000000");
  }

  @HostListener('mouseover') mouseOver(): any {
    this.showShadow("1px 1px 2px #000000");
  }
  @HostListener('mouseout') mouseOut(): any {
    this.showShadow("2px 2px 4px #000000");
  }

  private showShadow(shadow: string) {
    this.el.nativeElement.style.boxShadow = shadow;
    this.el.nativeElement.style.backgroundColor = this.appShadow || "whitesmoke";
  }
}
