import { Directive, Input } from '@angular/core';
import { AnimationMetadata } from '@angular/animations';
import { BaseAnimationDirective } from '../base-animation.directive';
import { scaleInAnimation, scaleOutAnimation } from './scale.animation';

@Directive({
    selector: '[ngNanyScale]',
    standalone: true,
})
export class ScaleDirective extends BaseAnimationDirective {
    @Input() fromScale = 0.8;

    @Input('ngNanyScaleVisible') override visible = true;

    protected getEnterSteps(): AnimationMetadata[] { return scaleInAnimation(this.config, this.fromScale); }
    protected getLeaveSteps(): AnimationMetadata[]  { return scaleOutAnimation(this.config, this.fromScale); }
}
