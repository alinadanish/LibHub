import { AnimationTriggerMetadata, animate, group, query, style, transition, trigger } from '@angular/animations';

export function routeFadeAnimation(duration = 250, easing = 'ease-out'): AnimationTriggerMetadata {
    return trigger('routeFade', [
        transition('* <=> *', [
            query(':enter, :leave', style({
                position: 'absolute',
                width: '100%',
                top: 0,
                left: 0,
            }), { optional: true }),
            query(':enter', style({ opacity: 0 }), { optional: true }),
            group([
                query(':leave', [
                    animate(`${duration}ms ${easing}`, style({ opacity: 0 })),
                ], { optional: true }),
                query(':enter', [
                    animate(`${duration}ms ${duration / 4}ms ${easing}`, style({ opacity: 1 })),
                ], { optional: true }),
            ]),
        ]),
    ]);
}

export function routeSlideAnimation(duration = 300, easing = 'ease-out'): AnimationTriggerMetadata {
    return trigger('routeSlide', [
        transition('* <=> *', [
            query(':enter, :leave', style({
                position: 'absolute',
                width: '100%',
                top: 0,
                left: 0,
            }), { optional: true }),
            query(':enter', style({
                opacity: 0,
                transform: 'translateY(16px)',
            }), { optional: true }),
            group([
                query(':leave', [
                    animate(`${duration}ms ${easing}`, style({
                        opacity: 0,
                        transform: 'translateY(-8px)',
                    })),
                ], { optional: true }),
                query(':enter', [
                    animate(`${duration}ms ${duration / 4}ms ${easing}`, style({
                        opacity: 1,
                        transform: 'translateY(0)',
                    })),
                ], { optional: true }),
            ]),
        ]),
    ]);
}
