import { Component } from '@angular/core';

@Component({
  standalone: true,
  styles: [`
    .page       { max-width: 720px; margin: 0 auto; padding: 40px 32px; }
    h2          { font-size: 24px; font-weight: 700; color: var(--mf-text); margin-bottom: 6px; }
    .subtitle   { font-size: 14px; color: var(--mf-text-muted); margin-bottom: 36px; }
    .stats      { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
    .stat       {
      background: var(--mf-surface);
      border: 1px solid var(--mf-border-light);
      border-radius: 12px;
      padding: 28px 16px;
      text-align: center;
      box-shadow: 0 2px 8px var(--mf-shadow);
      transition: transform 0.15s, box-shadow 0.15s;
    }
    .stat:hover { transform: translateY(-2px); box-shadow: 0 6px 16px var(--mf-shadow); }
    .value      { display: block; font-size: 30px; font-weight: 800; color: var(--mf-primary); margin-bottom: 6px; }
    .label      { display: block; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.8px; color: var(--mf-text-muted); }
  `],
  template: `
    <div class="page">
      <h2>Dashboard</h2>
      <p class="subtitle">A summary of what's inside ng-nanymation.</p>
      <div class="stats">
        <div class="stat"><span class="value">5</span><span class="label">Directives</span></div>
        <div class="stat"><span class="value">6</span><span class="label">Animations</span></div>
        <div class="stat"><span class="value">3</span><span class="label">Models</span></div>
        <div class="stat"><span class="value">v0.0.1</span><span class="label">Version</span></div>
      </div>
    </div>
  `,
})
export class DashboardComponent {}
