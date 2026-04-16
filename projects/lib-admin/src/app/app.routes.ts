import { Routes } from '@angular/router';
import { HomeComponent }        from './pages/home.component';
import { AboutComponent }       from './pages/about.component';
import { DashboardComponent }   from './pages/dashboard.component';
import { FadeDemoComponent }    from './pages/demos/fade-demo.component';
import { SlideDemoComponent }   from './pages/demos/slide-demo.component';
import { ScaleDemoComponent }   from './pages/demos/scale-demo.component';
import { RotateDemoComponent }  from './pages/demos/rotate-demo.component';
import { StaggerDemoComponent } from './pages/demos/stagger-demo.component';

export const routes: Routes = [
  { path: '',               component: HomeComponent,        data: { animation: 'home' } },
  { path: 'about',          component: AboutComponent,       data: { animation: 'about' } },
  { path: 'dashboard',      component: DashboardComponent,   data: { animation: 'dashboard' } },
  { path: 'demo/fade',      component: FadeDemoComponent,    data: { animation: 'fade' } },
  { path: 'demo/slide',     component: SlideDemoComponent,   data: { animation: 'slide' } },
  { path: 'demo/scale',     component: ScaleDemoComponent,   data: { animation: 'scale' } },
  { path: 'demo/rotate',    component: RotateDemoComponent,  data: { animation: 'rotate' } },
  { path: 'demo/stagger',   component: StaggerDemoComponent, data: { animation: 'stagger' } },
  { path: '**',             redirectTo: '' },
];
