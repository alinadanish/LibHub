import { Component } from '@angular/core';

@Component({
  standalone: true,
  styles: [`
    .page       { max-width: 720px; margin: 0 auto; padding: 40px 32px; }
    h2          { font-size: 24px; font-weight: 700; color: var(--mf-text); margin-bottom: 6px; }
    .subtitle   { font-size: 14px; color: var(--mf-text-muted); margin-bottom: 36px; }
    .feature-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
    .feature-list li {
      background: var(--mf-surface);
      border: 1px solid var(--mf-border-light);
      border-radius: 10px;
      padding: 14px 18px;
      font-size: 14px;
      color: var(--mf-text);
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .feature-list li::before { content: '✦'; color: var(--mf-primary); font-size: 11px; flex-shrink: 0; }
  `],
  template: `
    <div class="page">
      <h2>About</h2>
      <p class="subtitle">ng-nanymation is a reusable Angular animations library built with directives.</p>
      <ul class="feature-list">
        <li>Zero-config defaults — works out of the box</li>
        <li>Fully configurable duration, delay, and easing</li>
        <li>Tree-shakable — import only what you use</li>
        <li>Built on Angular Animations API</li>
        <li>NgModule-based — compatible with Angular 11 and above</li>
        <li>Extends easily with BaseAnimationDirective</li>
      </ul>
    </div>
  `,
})
export class AboutComponent {}
