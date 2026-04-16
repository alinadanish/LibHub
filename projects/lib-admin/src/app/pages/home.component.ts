import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const ANIMATIONS = [
  { route: '/demo/fade',    label: 'Fade',    desc: 'Opacity in and out',          icon: '✦' },
  { route: '/demo/slide',   label: 'Slide',   desc: 'Translate + opacity, 4 dirs', icon: '⇢' },
  { route: '/demo/scale',   label: 'Scale',   desc: 'Zoom in and out',             icon: '⊕' },
  { route: '/demo/rotate',  label: 'Rotate',  desc: 'Spin with opacity',           icon: '↻' },
  { route: '/demo/stagger', label: 'Stagger', desc: 'Sequential list animations',  icon: '≡' },
];

@Component({
  standalone: true,
  imports: [RouterLink],
  styles: [`
    .page       { max-width: 760px; margin: 0 auto; padding: 48px 32px; }
    .hero       { margin-bottom: 48px; }
    .hero h1    { font-size: 36px; font-weight: 800; color: var(--mf-text); margin-bottom: 10px; }
    .hero h1 span { color: var(--mf-primary); }
    .hero p     { font-size: 15px; color: var(--mf-text-muted); max-width: 480px; line-height: 1.6; }
    .section-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: var(--mf-text-muted); margin-bottom: 16px; }
    .grid       { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 14px; }
    a           { text-decoration: none; display: block; border-radius: 12px; padding: 24px 20px; cursor: pointer;
                  background: var(--mf-surface); border: 1px solid var(--mf-border-light);
                  transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s; }
    a:hover     { transform: translateY(-3px); box-shadow: 0 6px 20px var(--mf-shadow); border-color: var(--mf-border); }
    .icon       { font-size: 22px; margin-bottom: 12px; display: block; color: var(--mf-primary); }
    .label      { font-weight: 700; font-size: 15px; color: var(--mf-text); margin-bottom: 4px; }
    .desc       { font-size: 12px; color: var(--mf-text-muted); line-height: 1.4; }
    .divider    { height: 1px; background: var(--mf-border-light); margin: 40px 0; }
  `],
  template: `
    <div class="page">
      <div class="hero">
        <h1>ng-<span>nanymation</span></h1>
        <p>A lightweight Angular animation library. Pick an animation below to see a live interactive demo.</p>
      </div>
      <div class="section-title">Animations</div>
      <div class="grid">
        @for (item of animations; track item.route) {
          <a [routerLink]="item.route">
            <span class="icon">{{ item.icon }}</span>
            <div class="label">{{ item.label }}</div>
            <div class="desc">{{ item.desc }}</div>
          </a>
        }
      </div>
    </div>
  `,
})
export class HomeComponent {
  animations = ANIMATIONS;
}
