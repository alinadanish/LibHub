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
  //Step 3 — add a method to read the animation state from the activated route's data
  //outlet.isActivated — true if a route is currently loaded, false on first load
  //outlet.activatedRouteData['animation'] — reads the data property you set on each route in app.routes.ts:
  getState(outlet: RouterOutlet): string { 
    return outlet.isActivated ? outlet.activatedRouteData['animation'] : '';
  }
}
