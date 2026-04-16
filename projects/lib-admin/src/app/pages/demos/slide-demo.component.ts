import { Component } from '@angular/core';
import { SlideDirective } from 'ng-nanymation';

@Component({
  standalone: true,
  imports: [SlideDirective],
  styles: [`
    .page { max-width: 720px; margin: 0 auto; padding: 32px; }
    h2 { margin: 0 0 4px; color: #1a202c; }
    .subtitle { color: #64748b; margin: 0 0 32px; font-size: 14px; }
    .controls { margin-bottom: 16px; }
    button { padding: 8px 20px; border: none; border-radius: 6px; background: #4f46e5; color: white; cursor: pointer; font-size: 14px; }
    button:hover { background: #4338ca; }
    .box { padding: 20px 24px; border-radius: 8px; margin-bottom: 10px; font-weight: 500; font-size: 14px; }
    .label { font-size: 12px; opacity: 0.7; display: block; margin-bottom: 2px; }
    .box-blue   { background: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; }
    .box-red    { background: #fff1f2; border: 1px solid #fecdd3; color: #be123c; }
    .box-green  { background: #f0fdf4; border: 1px solid #bbf7d0; color: #15803d; }
    .box-purple { background: #faf5ff; border: 1px solid #e9d5ff; color: #7e22ce; }
  `],
  template: `
    <div class="page">
      <h2>Slide</h2>
      <p class="subtitle">Combines translate and opacity. Use enterFrom and leaveTo to control direction.</p>

      <div class="controls">
        <button (click)="visible = !visible">Toggle</button>
      </div>

      <div ngNanySlide [ngNanySlideVisible]="visible" enterFrom="up" leaveTo="down" class="box box-blue">
        <span class="label">enterFrom="up" leaveTo="down"</span>
        Slide from top
      </div>

      <div ngNanySlide [ngNanySlideVisible]="visible" enterFrom="left" leaveTo="left" class="box box-red">
        <span class="label">enterFrom="left" leaveTo="left"</span>
        Slide from left
      </div>

      <div ngNanySlide [ngNanySlideVisible]="visible" enterFrom="right" leaveTo="right" [duration]="500" class="box box-green">
        <span class="label">enterFrom="right" leaveTo="right" [duration]="500"</span>
        Slide from right
      </div>

      <div ngNanySlide [ngNanySlideVisible]="visible" enterFrom="down" leaveTo="up" [duration]="400" [easing]="'ease-out'" class="box box-purple">
        <span class="label">enterFrom="down" leaveTo="up" [duration]="400" [easing]="'ease-out'"</span>
        Slide from bottom
      </div>
    </div>
  `,
})
export class SlideDemoComponent {
  visible = true;
}
