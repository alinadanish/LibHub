import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <div class="page">
      <h2>Dashboard</h2>
      <p>A sample dashboard page to demonstrate route transitions.</p>
      <div class="stats">
        <div class="stat">
          <span class="value">24</span>
          <span class="label">Animations</span>
        </div>
        <div class="stat">
          <span class="value">5</span>
          <span class="label">Directives</span>
        </div>
        <div class="stat">
          <span class="value">3</span>
          <span class="label">Models</span>
        </div>
        <div class="stat">
          <span class="value">v0.0.1</span>
          <span class="label">Version</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page { padding: 32px; }
    h2 { margin: 0 0 8px; color: #1a202c; }
    p { color: #64748b; margin-bottom: 24px; }
    .stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
    .stat { background: white; border: 1px solid #e2e8f0; border-radius: 10px; padding: 24px; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }
    .value { display: block; font-size: 28px; font-weight: 700; color: #4f46e5; }
    .label { display: block; font-size: 13px; color: #94a3b8; margin-top: 4px; }
  `],
})
export class DashboardComponent {}
