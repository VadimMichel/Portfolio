import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from './scroll-animate.directive';

@NgModule({
  declarations: [ScrollAnimateDirective], 
  imports: [CommonModule], 
  exports: [ScrollAnimateDirective] 
})
export class SharedModule {}