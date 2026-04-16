import { Component } from '@angular/core';
import { SlideDirective } from 'ng-nanymation';

@Component({
  standalone: true,
  imports: [SlideDirective],
  template: `
    <div class="page">
      <h2>Slide</h2>
      <p class="subtitle">Combines translate and opacity. Use enterFrom and leaveTo to control direction.</p>
      <div class="controls">
        <button class="btn" (click)="visible = !visible">Toggle</button>
      </div>
      <div ngNanySlide [ngNanySlideVisible]="visible" enterFrom="up" leaveTo="down" class="box box-1">
        <span class="label">enterFrom="up" leaveTo="down"</span>
        Slide from top
      </div>
      <div ngNanySlide [ngNanySlideVisible]="visible" enterFrom="left" leaveTo="left" class="box box-2">
        <span class="label">enterFrom="left" leaveTo="left"</span>
        Slide from left
      </div>
      <div ngNanySlide [ngNanySlideVisible]="visible" enterFrom="right" leaveTo="right" [duration]="500" class="box box-3">
        <span class="label">enterFrom="right" leaveTo="right" [duration]="500"</span>
        Slide from right
      </div>
      <div ngNanySlide [ngNanySlideVisible]="visible" enterFrom="down" leaveTo="up" [duration]="400" [easing]="'ease-out'" class="box box-4">
        <span class="label">enterFrom="down" leaveTo="up" [duration]="400" [easing]="'ease-out'"</span>
        Slide from bottom
      </div>
    </div>
  `,
})
export class SlideDemoComponent {
  visible = true;
}
