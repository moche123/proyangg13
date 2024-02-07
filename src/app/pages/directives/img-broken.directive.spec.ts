import { ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';

describe('ImgBrokenDirective', () => {
  let directive: ImgBrokenDirective;

  const mockElementRef = {
    nativeElement: {
      src: 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.pn',
    },
  };

  beforeEach(() => {
    directive = new ImgBrokenDirective(<ElementRef>(<unknown>mockElementRef));
  });

  it('should create an instance', () => {
    expect(directive.el.nativeElement.src).toBe(
      mockElementRef.nativeElement.src
    );
  });
  /*
  
  onError() {
    this.el.nativeElement.src = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
  }
  */

  it('should test onError', () => {
    directive.onError();
    expect(directive).toBeTruthy();
  });
});
