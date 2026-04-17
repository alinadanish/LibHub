import { AnimationMetadata, animate, style } from '@angular/animations';
import { AnimationConfig } from '../../models/animation-config.model';

export function scaleInAnimation(
    config: AnimationConfig,
    fromScale = 0.8,
): AnimationMetadata[] {
    return [
        style({ opacity: 0, transform: `scale(${fromScale})` }),
        animate(
            `${config.duration}ms ${config.delay}ms ${config.easing}`,
            style({ opacity: 1, transform: 'scale(1)' }),
        ),
    ];
}

export function scaleOutAnimation(
    config: AnimationConfig,
    toScale = 0.8,
): AnimationMetadata[] {
    return [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate(
            `${config.duration}ms ${config.delay}ms ${config.easing}`,
            style({ opacity: 0, transform: `scale(${toScale})` }),
        ),
    ];
}
