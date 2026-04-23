import { Component } from '@angular/core';
import { NgNanymationModule } from 'ng-nanymation';

@Component({
  standalone: true,
  imports: [NgNanymationModule],
  styles: [`
    .stagger-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
    .stagger-list li {
      background: var(--mf-surface);
      border: 1px solid var(--mf-border-light);
      border-radius: 10px;
      padding: 14px 20px;
      font-size: 14px;
      color: var(--mf-text);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .delay { font-size: 12px; color: var(--mf-text-muted); font-family: monospace; }
  `],
  template: `
    <div class="page">
      <h2>Stagger</h2>
      <p class="subtitle">Automatically adds increasing delay to each child — great for lists and grids.</p>
      <div class="controls">
        <button class="btn" (click)="replay()">Replay</button>
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
