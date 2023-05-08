import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
@Input()  customImg: string | boolean = false
@HostListener ('error') handlerError()  : void {
  const elNative = this.elHost.nativeElement
  console.log('😦 esta imagen revento', this.elHost);
  elNative.src = this.customImg//'../../../assets/images/ImageBroken.png'
  if(this.customImg){
    elNative.src = this.customImg
  }
  else{
    elNative.src = '/assets/images/ImageBroken.png'
  }
}
  constructor(private elHost: ElementRef) { }

}
