import { Directive, ElementRef, Input } from '@angular/core';
import { AnimationBuilder, AnimationMetadata } from '@angular/animations';
import { BaseAnimationDirective } from '../base-animation.directive';
import { fadeInAnimation, fadeOutAnimation } from './fade.animation';

@Directive({ selector: '[ngNanyFade]', standalone: false })
export class FadeDirective extends BaseAnimationDirective {
    @Input('ngNanyFadeVisible') override visible = true;

    constructor(el: ElementRef, builder: AnimationBuilder) { super(el, builder); }

    protected getEnterSteps(): AnimationMetadata[] { return fadeInAnimation(this.config); }
    protected getLeaveSteps(): AnimationMetadata[]  { return fadeOutAnimation(this.config); }
}
