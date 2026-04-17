import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { routeSlideAnimation } from 'ng-nanymation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive], //step 2 — add RouterOutlet to the component
  animations: [routeSlideAnimation(300)], //Step 1 — add the animation to the component
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  theme = localStorage.getItem('theme') ?? 'forest';

  constructor() {
    this.applyTheme(this.theme);
  }

  setTheme(t: string): void {
    this.theme = t;
    localStorage.setItem('theme', t);
    this.applyTheme(t);
  }

  private applyTheme(t: string): void {
    document.documentElement.setAttribute('data-theme', t === 'ocean' ? 'ocean' : '');
  }

  getState(outlet: RouterOutlet): string {
    return outlet.isActivated ? outlet.activatedRouteData['animation'] : '';
  }
}