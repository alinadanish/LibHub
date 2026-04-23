import { Component } from '@angular/core';
import { NgNanymationModule } from 'ng-nanymation';

@Component({
  standalone: true,
  imports: [NgNanymationModule],
  template: `
    <div class="page">
      <h2>Fade</h2>
      <p class="subtitle">Animates opacity in and out. Configurable duration, delay, and easing.</p>
      <div class="controls">
        <button class="btn" (click)="visible = !visible">Toggle</button>
      </div>
      <div ngNanyFade [ngNanyFadeVisible]="visible" class="box box-1">
        <span class="label">[ngNanyFade] — 300ms ease-in-out (default)</span>
        Default fade
      </div>
      <div ngNanyFade [ngNanyFadeVisible]="visible" [duration]="600" [easing]="'ease-in'" class="box box-2">
        <span class="label">[duration]="600" [easing]="'ease-in'"</span>
        Slow fade
      </div>
      <div ngNanyFade [ngNanyFadeVisible]="visible" [duration]="150" [delay]="200" class="box box-3">
        <span class="label">[duration]="150" [delay]="200"</span>
        Fast fade with delay
      </div>
    </div>
  `,
})
export class FadeDemoComponent {
  visible = true;
}