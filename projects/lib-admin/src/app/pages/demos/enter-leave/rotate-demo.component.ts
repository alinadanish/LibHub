import { Component } from '@angular/core';
import { RotateDirective } from 'ng-nanymation';

@Component({
  standalone: true,
  imports: [RotateDirective],
  template: `
    <div class="page">
      <h2>Rotate</h2>
      <p class="subtitle">Animates rotation with opacity. Control the angle with the degrees input.</p>
      <div class="controls">
        <button class="btn" (click)="visible = !visible">Toggle</button>
      </div>
      <div ngNanyRotate [ngNanyRotateVisible]="visible" class="box box-1">
        <span class="label">[ngNanyRotate] — degrees=180 (default)</span>
        Half spin
      </div>
      <div ngNanyRotate [ngNanyRotateVisible]="visible" [degrees]="90" [duration]="400" class="box box-2">
        <span class="label">[degrees]="90" [duration]="400"</span>
        Quarter turn
      </div>
      <div ngNanyRotate [ngNanyRotateVisible]="visible" [degrees]="360" [duration]="600" class="box box-3">
        <span class="label">[degrees]="360" [duration]="600"</span>
        Full spin
      </div>
    </div>
  `,
})
export class RotateDemoComponent {
  visible = true;
}
