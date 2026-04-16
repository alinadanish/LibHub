import { AnimationMetadata, animate, style } from '@angular/animations';
import { AnimationConfig } from '../models/animation-config.model';
import { SlideDirection } from '../models/slide-direction.type';

// Maps direction → the CSS transform that represents "offscreen"
const SLIDE_OFFSET: Record<SlideDirection, string> = {
    up:    'translateY(30px)',
    down:  'translateY(-30px)',
    left:  'translateX(30px)',
    right: 'translateX(-30px)',
};

export function slideInAnimation(
    config: AnimationConfig,
    direction: SlideDirection = 'up',
    ): AnimationMetadata[] {
    return [
        style({ opacity: 0, transform: SLIDE_OFFSET[direction] }),
        animate(
            `${config.duration}ms ${config.delay}ms ${config.easing}`,
            style({ opacity: 1, transform: 'translate(0, 0)' }),
        ),
    ];
}

export function slideOutAnimation(
    config: AnimationConfig,
    direction: SlideDirection = 'down',
    ): AnimationMetadata[] {
    return [
        style({ opacity: 1, transform: 'translate(0, 0)' }),
        animate(
            `${config.duration}ms ${config.delay}ms ${config.easing}`,
            style({ opacity: 0, transform: SLIDE_OFFSET[direction] }),
        ),
    ];
}