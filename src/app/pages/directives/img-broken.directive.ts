import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {

  constructor(
    private el: ElementRef
  ) { }

  @HostListener("error")
  onError() {
    this.el.nativeElement.src = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
  }

}
