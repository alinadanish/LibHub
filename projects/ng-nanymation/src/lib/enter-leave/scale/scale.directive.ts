import { Directive, ElementRef, Input } from '@angular/core';
import { AnimationBuilder, AnimationMetadata } from '@angular/animations';
import { BaseAnimationDirective } from '../base-animation.directive';
import { scaleInAnimation, scaleOutAnimation } from './scale.animation';

@Directive({ selector: '[ngNanyScale]', standalone: false })
export class ScaleDirective extends BaseAnimationDirective {
    @Input() fromScale = 0.8;

    @Input('ngNanyScaleVisible') override visible = true;

    constructor(el: ElementRef, builder: AnimationBuilder) { super(el, builder); }

    protected getEnterSteps(): AnimationMetadata[] { return scaleInAnimation(this.config, this.fromScale); }
    protected getLeaveSteps(): AnimationMetadata[]  { return scaleOutAnimation(this.config, this.fromScale); }
}
