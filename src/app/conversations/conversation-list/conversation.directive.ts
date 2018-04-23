import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appConversation]'
})
export class ConversationDirective {

  constructor(private element: ElementRef) {}
  @HostListener('click') onmouseenter() {
    this.highlight();
  }

  public highlight() {
    if (this.element.nativeElement.style.backgroundColor === 'red') {
      this.element.nativeElement.style.backgroundColor = 'blue';
    } else {
      this.element.nativeElement.style.backgroundColor = 'red';
    }

  }
}
