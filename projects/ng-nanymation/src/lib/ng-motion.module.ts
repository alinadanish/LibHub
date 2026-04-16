import { NgModule } from '@angular/core';
import { FadeDirective }    from './directives/fade/fade.directive';
import { SlideDirective }   from './directives/slide/slide.directive';
import { ScaleDirective }   from './directives/scale/scale.directive';
import { RotateDirective }  from './directives/rotate/rotate.directive';
import { StaggerDirective } from './directives/stagger/stagger.directive';

const DIRECTIVES = [
    FadeDirective,
    SlideDirective,
    ScaleDirective,
    RotateDirective,
    StaggerDirective,
];

@NgModule({
    imports: DIRECTIVES,
    exports: DIRECTIVES,
})
export class NgNanymationModule {}
