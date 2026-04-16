import { Component } from '@angular/core';
import { ScaleDirective } from 'ng-nanymation';

@Component({
  standalone: true,
  imports: [ScaleDirective],
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
  `],
  template: `
    <div class="page">
      <h2>Scale</h2>
      <p class="subtitle">Animates transform scale with opacity. Great for modals, cards, and popups.</p>

      <div class="controls">
        <button (click)="visible = !visible">Toggle</button>
      </div>

      <div ngNanyScale [ngNanyScaleVisible]="visible" class="box box-blue">
        <span class="label">[ngNanyScale] — fromScale=0.8 (default)</span>
        Default zoom
      </div>

      <div ngNanyScale [ngNanyScaleVisible]="visible" [fromScale]="0.5" [duration]="500" class="box box-red">
        <span class="label">[fromScale]="0.5" [duration]="500"</span>
        Large zoom
      </div>

      <div ngNanyScale [ngNanyScaleVisible]="visible" [fromScale]="0.95" [duration]="200" [easing]="'ease-out'" class="box box-green">
        <span class="label">[fromScale]="0.95" [duration]="200" — ideal for modals</span>
        Subtle zoom
      </div>
    </div>
  `,
})
export class ScaleDemoComponent {
  visible = true;
}
