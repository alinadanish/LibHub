import { Directive, ElementRef, Input } from '@angular/core';
import { AnimationBuilder, AnimationMetadata } from '@angular/animations';
import { BaseAnimationDirective } from '../base-animation.directive';
import { slideInAnimation, slideOutAnimation } from './slide.animation';
import { SlideDirection } from '../../models/slide-direction.type';

@Directive({ selector: '[ngNanySlide]', standalone: false })
export class SlideDirective extends BaseAnimationDirective {
    @Input() enterFrom: SlideDirection = 'up';
    @Input() leaveTo: SlideDirection   = 'down';

    @Input('ngNanySlideVisible') override visible = true;

    constructor(el: ElementRef, builder: AnimationBuilder) { super(el, builder); }

    protected getEnterSteps(): AnimationMetadata[] { return slideInAnimation(this.config, this.enterFrom); }
    protected getLeaveSteps(): AnimationMetadata[]  { return slideOutAnimation(this.config, this.leaveTo); }
}
