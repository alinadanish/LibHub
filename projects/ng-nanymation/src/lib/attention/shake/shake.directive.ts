import { Directive, Input } from '@angular/core';
import { AnimationMetadata } from '@angular/animations';
import { BaseAttentionDirective } from '../base-attention.directive';
import { shakeAnimation } from './shake.animation';

@Directive({ selector: '[ngNanyShake]', standalone: true })
export class ShakeDirective extends BaseAttentionDirective {

    @Input('ngNanyShakeTrigger') set trigger(val: number) {
        if (val > 0) this.play();
    }

    protected getSteps(): AnimationMetadata[] {
        return shakeAnimation(this.config);
    }
}
