import { Directive, Input } from '@angular/core';
import { AnimationMetadata } from '@angular/animations';
import { BaseAnimationDirective } from '../base-animation.directive';
import { rotateInAnimation, rotateOutAnimation } from '../../animations/rotate.animation';

@Directive({
    selector: '[ngNanyRotate]',
    standalone: true,
})
export class RotateDirective extends BaseAnimationDirective {
    /** Degrees to rotate from on enter / to on leave. Default: 180 */
    @Input() degrees = 180;

    @Input('ngNanyRotateVisible') override visible = true;

    protected getEnterSteps(): AnimationMetadata[] {
        return rotateInAnimation(this.config, this.degrees);
    }

    protected getLeaveSteps(): AnimationMetadata[] {
        return rotateOutAnimation(this.config, this.degrees);
    }
}
