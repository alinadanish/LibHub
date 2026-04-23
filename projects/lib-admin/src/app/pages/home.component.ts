import { Component } from '@angular/core';

@Component({
    standalone: true,
    styles: [`
        .page       { max-width: 640px; margin: 0 auto; padding: 64px 40px; }
        h1          { font-size: 40px; font-weight: 800; color: var(--mf-text); margin-bottom: 12px; line-height: 1.2; }
        h1 span     { color: var(--mf-primary); }
        .subtitle   { font-size: 15px; color: var(--mf-text-muted); line-height: 1.7; max-width: 480px; margin-bottom: 48px; }

        .stats      { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; margin-bottom: 48px; }
        .stat       { background: var(--mf-surface); border: 1px solid var(--mf-border-light);
                      border-radius: 12px; padding: 24px 16px; text-align: center; }
        .stat-value { display: block; font-size: 28px; font-weight: 800; color: var(--mf-primary); margin-bottom: 4px; }
        .stat-label { display: block; font-size: 11px; font-weight: 600; text-transform: uppercase;
                      letter-spacing: 0.8px; color: var(--mf-text-muted); }

        .categories  { display: flex; flex-direction: column; gap: 12px; margin-bottom: 40px; }
        .cat         { background: var(--mf-surface); border: 1px solid var(--mf-border-light);
                       border-radius: 12px; padding: 18px 20px; display: flex; gap: 16px; align-items: flex-start; }
        .cat-badge   { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;
                       color: var(--mf-primary); background: rgba(82,217,115,0.1);
                       border: 1px solid rgba(82,217,115,0.2); border-radius: 6px;
                       padding: 3px 8px; white-space: nowrap; margin-top: 2px; }
        .cat-text    { display: flex; flex-direction: column; gap: 3px; }
        .cat-title   { font-size: 14px; font-weight: 700; color: var(--mf-text); }
        .cat-desc    { font-size: 13px; color: var(--mf-text-muted); line-height: 1.5; }
        .cat-pattern { font-size: 11px; font-family: monospace; color: var(--mf-text-muted);
                       margin-top: 4px; }

        .hint       { font-size: 13px; color: var(--mf-text-muted); display: flex; align-items: center; gap: 8px; }
        .hint-arrow { color: var(--mf-primary); font-size: 16px; }
    `],
    template: `
        <div class="page">
            <h1>ng-<span>nanymation</span></h1>
            <p class="subtitle">
                A lightweight Angular animation library built with directives.
                Zero-config defaults, fully configurable, tree-shakable.
                Pick an animation from the sidebar to see a live demo.
            </p>

            <div class="stats">
                <div class="stat">
                    <span class="stat-value">8</span>
                    <span class="stat-label">Directives</span>
                </div>
                <div class="stat">
                    <span class="stat-value">3</span>
                    <span class="stat-label">Categories</span>
                </div>
                <div class="stat">
                    <span class="stat-value">v0.0.2</span>
                    <span class="stat-label">Version</span>
                </div>
            </div>

            <div class="categories">
                <div class="cat">
                    <span class="cat-badge">Enter / Leave</span>
                    <div class="cat-text">
                        <span class="cat-title">Visibility-driven animations</span>
                        <span class="cat-desc">Animates in when the element becomes visible, out when it hides. Bind a boolean and the directive handles the rest.</span>
                        <span class="cat-pattern">[ngNanyFadeVisible]="visible"</span>
                    </div>
                </div>
                <div class="cat">
                    <span class="cat-badge">Attention</span>
                    <div class="cat-text">
                        <span class="cat-title">On-demand trigger animations</span>
                        <span class="cat-desc">Element stays in the DOM. Animation fires every time a trigger value increments — ideal for alerts, errors, and nudges.</span>
                        <span class="cat-pattern">[ngNanyShakeTrigger]="trigger"</span>
                    </div>
                </div>
                <div class="cat">
                    <span class="cat-badge">Auto</span>
                    <div class="cat-text">
                        <span class="cat-title">Init-time animations</span>
                        <span class="cat-desc">Plays automatically the moment the element enters the DOM. No input binding needed — just add the directive.</span>
                        <span class="cat-pattern">ngNanyStagger</span>
                    </div>
                </div>
            </div>

            <p class="hint">
                <span class="hint-arrow">←</span>
                Select any animation from the sidebar to explore it.
            </p>
        </div>
    `,
})
export class HomeComponent {}
