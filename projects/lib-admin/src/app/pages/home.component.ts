import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

const ANIMATIONS = [
  { route: '/demo/fade',    label: 'Fade',    desc: 'Opacity in and out',           color: 'blue'   },
  { route: '/demo/slide',   label: 'Slide',   desc: 'Translate + opacity, 4 dirs',  color: 'red'    },
  { route: '/demo/scale',   label: 'Scale',   desc: 'Zoom in and out',              color: 'green'  },
  { route: '/demo/rotate',  label: 'Rotate',  desc: 'Spin with opacity',            color: 'purple' },
  { route: '/demo/stagger', label: 'Stagger', desc: 'Sequential list animations',   color: 'amber'  },
];

@Component({
  standalone: true,
  imports: [RouterLink],
  styles: [`
    .page { max-width: 720px; margin: 0 auto; padding: 32px; }
    h2 { margin: 0 0 4px; color: #1a202c; font-size: 22px; }
    .subtitle { color: #64748b; margin: 0 0 32px; font-size: 14px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; }
    a { text-decoration: none; display: block; border-radius: 10px; padding: 24px; cursor: pointer; transition: transform 0.15s, box-shadow 0.15s; border: 1px solid transparent; }
    a:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
    .label { font-weight: 700; font-size: 16px; margin-bottom: 4px; }
    .desc  { font-size: 13px; opacity: 0.75; }
    .blue   { background: #eff6ff; border-color: #bfdbfe; color: #1e40af; }
    .red    { background: #fff1f2; border-color: #fecdd3; color: #be123c; }
    .green  { background: #f0fdf4; border-color: #bbf7d0; color: #15803d; }
    .purple { background: #faf5ff; border-color: #e9d5ff; color: #7e22ce; }
    .amber  { background: #fffbeb; border-color: #fde68a; color: #92400e; }
  `],
  template: `
    <div class="page">
      <h2>ng-nanymation</h2>
      <p class="subtitle">Click an animation to see a live demo.</p>
      <div class="grid">
        @for (item of animations; track item.route) {
          <a [routerLink]="item.route" [class]="item.color">
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
