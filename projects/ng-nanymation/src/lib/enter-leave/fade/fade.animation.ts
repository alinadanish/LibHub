import { AnimationMetadata, animate, style } from '@angular/animations';
import { AnimationConfig } from '../../models/animation-config.model';

export function fadeInAnimation(config: AnimationConfig): AnimationMetadata[] {
    return [
        style({ opacity: 0 }),
        animate(
            `${config.duration}ms ${config.delay}ms ${config.easing}`,
            style({ opacity: 1 })
        ),
    ];
}

export function fadeOutAnimation(config: AnimationConfig): AnimationMetadata[] {
    return [
        style({ opacity: 1 }),
        animate(
            `${config.duration}ms ${config.delay}ms ${config.easing}`,
            style({ opacity: 0 })
        ),
    ];
}
