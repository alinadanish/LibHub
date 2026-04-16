import { Component } from '@angular/core';
import { StaggerDirective } from 'ng-nanymation';

@Component({
  standalone: true,
  imports: [StaggerDirective],
  styles: [`
    .page { max-width: 720px; margin: 0 auto; padding: 32px; }
    h2 { margin: 0 0 4px; color: #1a202c; }
    .subtitle { color: #64748b; margin: 0 0 32px; font-size: 14px; }
    .controls { margin-bottom: 16px; }
    button { padding: 8px 20px; border: none; border-radius: 6px; background: #4f46e5; color: white; cursor: pointer; font-size: 14px; }
    button:hover { background: #4338ca; }
    .stagger-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
    .stagger-list li { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px 18px; font-size: 14px; color: #374151; }
    .stagger-list .delay { float: right; font-size: 12px; color: #94a3b8; }
  `],
  template: `
    <div class="page">
      <h2>Stagger</h2>
      <p class="subtitle">Automatically adds increasing delay to each child element — great for lists and grids.</p>

      <div class="controls">
        <button (click)="replay()">Replay</button>
      </div>

      @if (show) {
        <ul ngNanyStagger [staggerDelay]="100" [duration]="400" class="stagger-list">
          <li>First item   <span class="delay">0ms</span></li>
          <li>Second item  <span class="delay">100ms</span></li>
          <li>Third item   <span class="delay">200ms</span></li>
          <li>Fourth item  <span class="delay">300ms</span></li>
          <li>Fifth item   <span class="delay">400ms</span></li>
        </ul>
      }
    </div>
  `,
})
export class StaggerDemoComponent {
  show = true;

  replay(): void {
    this.show = false;
    setTimeout(() => (this.show = true), 50);
  }
}
