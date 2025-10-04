import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
  Input
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective implements AfterViewInit {
  @Input('appScrollAnimate') animationClass = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, this.animationClass);
          observer.unobserve(this.el.nativeElement); 
        }
      },
      { threshold: 1 }
    );

    observer.observe(this.el.nativeElement);
  }
}
