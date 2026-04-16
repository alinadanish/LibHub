import {
    AnimationTriggerMetadata,
    animate,
    group,
    query,
    style,
    transition,
    trigger,
} from '@angular/animations';

/**
 * Pre-built route transition trigger.
 * Attach to the RouterOutlet host element.
 *
 * Usage in component:
 *   animations: [routeFadeAnimation()]
 *
 * Template:
 *   <router-outlet #outlet="outlet" />
 *   <div [@routeFade]="getRouteState(outlet)"> ... </div>
 */
export function routeFadeAnimation(duration = 300, easing = 'ease-in-out'): AnimationTriggerMetadata {
    return trigger('routeFade', [
        transition('* <=> *', [
            // Instantly hide the incoming page before it appears
            query(':enter', style({ opacity: 0 }), { optional: true }),

            group([
                // Outgoing page fades out (half the duration so it clears quickly)
                query(':leave', [
                    animate(`${duration / 2}ms ${easing}`, style({ opacity: 0 })),
                ], { optional: true }),

                // Incoming page fades in
                query(':enter', [
                    animate(`${duration}ms ${easing}`, style({ opacity: 1 })),
                ], { optional: true }),
            ]),
        ]),
    ]);
}

/**
 * Slide + fade route transition. Incoming page slides up from below.
 */
export function routeSlideAnimation(duration = 350, easing = 'ease-out'): AnimationTriggerMetadata {
    return trigger('routeSlide', [
        transition('* <=> *', [
            query(':enter', style({ opacity: 0, transform: 'translateY(24px)' }), { optional: true }),

            group([
                query(':leave', [
                    animate(`${duration / 2}ms ${easing}`, style({ opacity: 0 })),
                ], { optional: true }),

                query(':enter', [
                    animate(`${duration}ms ${easing}`, style({ opacity: 1, transform: 'translateY(0)' })),
                ], { optional: true }),
            ]),
        ]),
    ]);
}
