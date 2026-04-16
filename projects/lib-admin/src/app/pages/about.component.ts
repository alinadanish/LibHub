import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div class="page">
      <h2>About</h2>
      <p>ng-nanymation is a reusable Angular animations library built with directives.</p>
      <ul class="feature-list">
        <li>Zero-config defaults — works out of the box</li>
        <li>Fully configurable duration, delay, and easing</li>
        <li>Tree-shakable — import only what you use</li>
        <li>Built on Angular Animations API</li>
        <li>Extends easily with BaseAnimationDirective</li>
      </ul>
    </div>
  `,
  styles: [`
    .page { padding: 32px; }
    h2 { margin: 0 0 8px; color: #1a202c; }
    p { color: #64748b; margin-bottom: 24px; }
    .feature-list { padding-left: 20px; display: flex; flex-direction: column; gap: 10px; color: #374151; }
    .feature-list li { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 12px 16px; list-style: none; }
  `],
})
export class AboutComponent {}
