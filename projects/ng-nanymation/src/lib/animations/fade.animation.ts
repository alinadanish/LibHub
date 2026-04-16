import { AnimationMetadata, animate, style } from '@angular/animations';
import { AnimationConfig } from '../models/animation-config.model';

/**
 * Returns animation steps for fading IN (invisible → visible).
 * Returns pure AnimationMetadata[], not a trigger — so it's reusable
 * both in component triggers and in AnimationBuilder.
 */
export function fadeInAnimation(config: AnimationConfig): AnimationMetadata[] {
    return [
        style({ opacity: 0 }),
        animate(
            `${config.duration}ms ${config.delay}ms ${config.easing}`,
            style({ opacity: 1 })
        ),
    ];
}

/**
 * Returns animation steps for fading OUT (visible → invisible).
 */
export function fadeOutAnimation(config: AnimationConfig): AnimationMetadata[] {
    return [
        style({ opacity: 1 }),
        animate(
            `${config.duration}ms ${config.delay}ms ${config.easing}`,
            style({ opacity: 0 })
        ),
    ];
}