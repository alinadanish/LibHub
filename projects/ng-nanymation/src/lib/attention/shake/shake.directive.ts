import { Directive, ElementRef, Input } from '@angular/core';
import { AnimationBuilder, AnimationMetadata } from '@angular/animations';
import { BaseAttentionDirective } from '../base-attention.directive';
import { shakeAnimation } from './shake.animation';

@Directive({ selector: '[ngNanyShake]', standalone: false })
export class ShakeDirective extends BaseAttentionDirective {

    constructor(el: ElementRef, builder: AnimationBuilder) { super(el, builder); }

    @Input('ngNanyShakeTrigger') set trigger(val: number) {
        if (val > 0) this.play();
    }

    protected getSteps(): AnimationMetadata[] {
        return shakeAnimation(this.config);
    }
}
