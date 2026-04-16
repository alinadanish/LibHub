import { Component } from '@angular/core';
import { RotateDirective } from 'ng-nanymation';

@Component({
  standalone: true,
  imports: [RotateDirective],
  styles: [`
    .page { max-width: 720px; margin: 0 auto; padding: 32px; }
    h2 { margin: 0 0 4px; color: #1a202c; }
    .subtitle { color: #64748b; margin: 0 0 32px; font-size: 14px; }
    .controls { margin-bottom: 16px; }
    button { padding: 8px 20px; border: none; border-radius: 6px; background: #4f46e5; color: white; cursor: pointer; font-size: 14px; }
    button:hover { background: #4338ca; }
    .box { padding: 20px 24px; border-radius: 8px; margin-bottom: 10px; font-weight: 500; font-size: 14px; }
    .label { font-size: 12px; opacity: 0.7; display: block; margin-bottom: 2px; }
    .box-purple { background: #faf5ff; border: 1px solid #e9d5ff; color: #7e22ce; }
    .box-amber  { background: #fffbeb; border: 1px solid #fde68a; color: #92400e; }
    .box-blue   { background: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; }
  `],
  template: `
    <div class="page">
      <h2>Rotate</h2>
      <p class="subtitle">Animates rotation with opacity. Control the start/end angle with the degrees input.</p>

      <div class="controls">
        <button (click)="visible = !visible">Toggle</button>
      </div>

      <div ngNanyRotate [ngNanyRotateVisible]="visible" class="box box-purple">
        <span class="label">[ngNanyRotate] — degrees=180 (default)</span>
        Half spin
      </div>

      <div ngNanyRotate [ngNanyRotateVisible]="visible" [degrees]="90" [duration]="400" class="box box-amber">
        <span class="label">[degrees]="90" [duration]="400"</span>
        Quarter turn
      </div>

      <div ngNanyRotate [ngNanyRotateVisible]="visible" [degrees]="360" [duration]="600" class="box box-blue">
        <span class="label">[degrees]="360" [duration]="600"</span>
        Full spin
      </div>
    </div>
  `,
})
export class RotateDemoComponent {
  visible = true;
}
