import { Directive, Input } from '@angular/core';
import { AnimationMetadata } from '@angular/animations';
import { BaseAnimationDirective } from '../base-animation.directive';
import { slideInAnimation, slideOutAnimation } from '../../animations/slide.animation';
import { SlideDirection } from '../../models/slide-direction.type';

@Directive({
    selector: '[ngNanySlide]',
    standalone: true,
})
export class SlideDirective extends BaseAnimationDirective {
    /** Direction the element slides IN from. Default: 'up' */
    @Input() enterFrom: SlideDirection = 'up';
    /** Direction the element slides OUT to. Default: 'down' */
    @Input() leaveTo: SlideDirection   = 'down';

    /// Whether the element is visible (i.e. should be in the "enter" or "leave" state). Default: true
    @Input('ngNanySlideVisible') override visible = true;

    protected getEnterSteps(): AnimationMetadata[] {
        return slideInAnimation(this.config, this.enterFrom);
    }

    protected getLeaveSteps(): AnimationMetadata[] {
        return slideOutAnimation(this.config, this.leaveTo);
    }
}
