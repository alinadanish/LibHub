import { Directive, Input } from '@angular/core';
import { AnimationMetadata } from '@angular/animations';
import { BaseAnimationDirective } from '../base-animation.directive';
import { fadeInAnimation, fadeOutAnimation } from './fade.animation';

@Directive({
    selector: '[ngNanyFade]',
    standalone: true,
})
export class FadeDirective extends BaseAnimationDirective {
    @Input('ngNanyFadeVisible') override visible = true;

    protected getEnterSteps(): AnimationMetadata[] { return fadeInAnimation(this.config); }
    protected getLeaveSteps(): AnimationMetadata[]  { return fadeOutAnimation(this.config); }
}
