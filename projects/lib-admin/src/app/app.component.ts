import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { routeFadeAnimation, routeSlideAnimation } from 'ng-nanymation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  animations: [routeFadeAnimation(300), routeSlideAnimation(350)],
  styles: [`
    * { box-sizing: border-box; }
    .shell { display: flex; flex-direction: column; min-height: 100vh; font-family: sans-serif; background: #f8fafc; }

    nav { background: #4f46e5; padding: 0 32px; display: flex; align-items: center; gap: 8px; height: 56px; }
    nav a { color: rgba(255,255,255,0.75); text-decoration: none; padding: 8px 14px; border-radius: 6px; font-size: 14px; font-weight: 500; transition: background 0.15s; }
    nav a:hover { background: rgba(255,255,255,0.1); color: white; }
    nav a.active { background: rgba(255,255,255,0.15); color: white; }
    .nav-brand { color: white; font-weight: 700; font-size: 16px; margin-right: 16px; }

    .toggle-bar { display: flex; gap: 12px; align-items: center; padding: 10px 32px; background: white; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #64748b; }
    .toggle-bar label { display: flex; align-items: center; gap: 6px; cursor: pointer; }
    input[type=radio] { accent-color: #4f46e5; }

    .outlet-wrapper { position: relative; flex: 1; overflow: hidden; }
    .outlet-wrapper > * { position: absolute; width: 100%; }
  `],
  template: `
    <div class="shell">

      <nav>
        <span class="nav-brand">ng-nanymation</span>
        <a routerLink="/"          routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
        <a routerLink="/about"     routerLinkActive="active">About</a>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      </nav>

      <div class="toggle-bar">
        Route transition:
        <label><input type="radio" name="rt" value="fade"  [(ngModel)]="transitionType"> Fade</label>
        <label><input type="radio" name="rt" value="slide" [(ngModel)]="transitionType"> Slide up</label>
      </div>

      <div class="outlet-wrapper"
           [@routeFade]="transitionType === 'fade'  ? getState(outlet) : null"
           [@routeSlide]="transitionType === 'slide' ? getState(outlet) : null">
        <router-outlet #outlet="outlet" />
      </div>

    </div>
  `,
})
export class AppComponent {
  transitionType: 'fade' | 'slide' = 'fade';

  getState(outlet: RouterOutlet): string {
    return outlet.isActivated ? outlet.activatedRouteData['animation'] : '';
  }
}
