import { AnimationMetadata, animate, style } from '@angular/animations';
import { AnimationConfig } from '../../models/animation-config.model';

export function rotateInAnimation(
    config: AnimationConfig,
    fromDegrees = 180,
): AnimationMetadata[] {
    return [
        style({ opacity: 0, transform: `rotate(${fromDegrees}deg)` }),
        animate(
            `${config.duration}ms ${config.delay}ms ${config.easing}`,
            style({ opacity: 1, transform: 'rotate(0deg)' }),
        ),
    ];
}

export function rotateOutAnimation(
    config: AnimationConfig,
    toDegrees = 180,
): AnimationMetadata[] {
    return [
        style({ opacity: 1, transform: 'rotate(0deg)' }),
        animate(
            `${config.duration}ms ${config.delay}ms ${config.easing}`,
            style({ opacity: 0, transform: `rotate(${toDegrees}deg)` }),
        ),
    ];
}
