import {Directive, ElementRef, Input, OnChanges} from '@angular/core';



@Directive({
  selector: '[appMyhidden]'
})
export class MyhiddenDirective implements OnChanges{

  @Input()
  //@ts-ignore
  person;

  constructor(private elementRef: ElementRef) { }

  ngOnChanges(){
    if(this.person){
      this.elementRef.nativeElement.style.display = '';
    }else{
      this.elementRef.nativeElement.style.display = 'none';
    }
  }

}
