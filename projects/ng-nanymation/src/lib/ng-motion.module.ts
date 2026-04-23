import { NgModule } from '@angular/core';
import { FadeDirective }    from './enter-leave/fade/fade.directive';
import { SlideDirective }   from './enter-leave/slide/slide.directive';
import { ScaleDirective }   from './enter-leave/scale/scale.directive';
import { RotateDirective }  from './enter-leave/rotate/rotate.directive';
import { StaggerDirective } from './auto/stagger/stagger.directive';
import { ShakeDirective }   from './attention/shake/shake.directive';
import { TypewriterDirective } from './auto/typewriter/typewriter.directive';
import { CountUpDirective } from './auto/count-up/count-up.directive';

const DIRECTIVES = [
    FadeDirective,
    SlideDirective,
    ScaleDirective,
    RotateDirective,
    StaggerDirective,
    ShakeDirective,
    TypewriterDirective,
    CountUpDirective
];

@NgModule({
    declarations: DIRECTIVES,
    exports: DIRECTIVES,
})
export class NgNanymationModule {}
