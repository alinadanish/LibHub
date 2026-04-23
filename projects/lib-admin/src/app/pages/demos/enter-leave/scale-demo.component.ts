import { Component } from '@angular/core';
import { NgNanymationModule } from 'ng-nanymation';

@Component({
  standalone: true,
  imports: [NgNanymationModule],
  template: `
    <div class="page">
      <h2>Scale</h2>
      <p class="subtitle">Animates transform scale with opacity. Great for modals, cards, and popups.</p>
      <div class="controls">
        <button class="btn" (click)="visible = !visible">Toggle</button>
      </div>
      <div ngNanyScale [ngNanyScaleVisible]="visible" class="box box-1">
        <span class="label">[ngNanyScale] — fromScale=0.8 (default)</span>
        Default zoom
      </div>
      <div ngNanyScale [ngNanyScaleVisible]="visible" [fromScale]="0.5" [duration]="500" class="box box-2">
        <span class="label">[fromScale]="0.5" [duration]="500"</span>
        Large zoom
      </div>
      <div ngNanyScale [ngNanyScaleVisible]="visible" [fromScale]="0.95" [duration]="200" [easing]="'ease-out'" class="box box-3">
        <span class="label">[fromScale]="0.95" [duration]="200" — ideal for modals</span>
        Subtle zoom
      </div>
    </div>
  `,
})
export class ScaleDemoComponent {
  visible = true;
}
