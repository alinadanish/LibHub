import { Routes } from '@angular/router';
import { HomeComponent }        from './pages/home.component';
import { AboutComponent }       from './pages/about.component';
import { DashboardComponent }   from './pages/dashboard.component';

// Enter / Leave
import { FadeDemoComponent }    from './pages/demos/enter-leave/fade-demo.component';
import { SlideDemoComponent }   from './pages/demos/enter-leave/slide-demo.component';
import { ScaleDemoComponent }   from './pages/demos/enter-leave/scale-demo.component';
import { RotateDemoComponent }  from './pages/demos/enter-leave/rotate-demo.component';

// Attention
import { ShakeDemoComponent }   from './pages/demos/attention/shake-demo.component';

// Auto
import { StaggerDemoComponent } from './pages/demos/auto/stagger-demo.component';
import { TypewriterDemoComponent } from './pages/demos/auto/typewriter-demo.component';
import { CountUpDemoComponent } from './pages/demos/auto/count-up-demo.component';

export const routes: Routes = [
  { path: '',               component: HomeComponent,        data: { animation: 'home'      } },
  { path: 'about',          component: AboutComponent,       data: { animation: 'about'     } },
  { path: 'dashboard',      component: DashboardComponent,   data: { animation: 'dashboard' } },
  { path: 'demo/fade',      component: FadeDemoComponent,    data: { animation: 'fade'      } },
  { path: 'demo/slide',     component: SlideDemoComponent,   data: { animation: 'slide'     } },
  { path: 'demo/scale',     component: ScaleDemoComponent,   data: { animation: 'scale'     } },
  { path: 'demo/rotate',    component: RotateDemoComponent,  data: { animation: 'rotate'    } },
  { path: 'demo/shake',     component: ShakeDemoComponent,   data: { animation: 'shake'     } },
  { path: 'demo/stagger',   component: StaggerDemoComponent, data: { animation: 'stagger'   } },
  { path: 'demo/typewriter', component: TypewriterDemoComponent, data: { animation: 'typewriter' } },
  { path: 'demo/count-up', component: CountUpDemoComponent, data: { animation: 'count-up' } },
  { path: '**',             redirectTo: '' },
];
