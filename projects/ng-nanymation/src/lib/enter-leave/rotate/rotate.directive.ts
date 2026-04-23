import { Directive, ElementRef, Input } from '@angular/core';
import { AnimationBuilder, AnimationMetadata } from '@angular/animations';
import { BaseAnimationDirective } from '../base-animation.directive';
import { rotateInAnimation, rotateOutAnimation } from './rotate.animation';

@Directive({ selector: '[ngNanyRotate]', standalone: false })
export class RotateDirective extends BaseAnimationDirective {
    @Input() degrees = 180;

    @Input('ngNanyRotateVisible') override visible = true;

    constructor(el: ElementRef, builder: AnimationBuilder) { super(el, builder); }

    protected getEnterSteps(): AnimationMetadata[] { return rotateInAnimation(this.config, this.degrees); }
    protected getLeaveSteps(): AnimationMetadata[]  { return rotateOutAnimation(this.config, this.degrees); }
}
