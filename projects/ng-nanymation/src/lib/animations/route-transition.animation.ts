import { AnimationTriggerMetadata, animate, group, query, style, transition, trigger } from '@angular/animations';

export function routeFadeAnimation(duration = 250, easing = 'ease-out'): AnimationTriggerMetadata {
    // trigger() wraps everything.
    // 'routeFade' — the name used in the template: [@routeFade]="someValue"
    // The second argument is an array of states and transitions.
    return trigger('routeFade', [
        // transition() — defines the condition under which this animation fires.
        // '* <=> *' — bidirectional wildcard.
        // So this fires whenever the bound value changes — any route to any route.
        transition('* <=> *', [
            // ── STEP 1: POSITION SETUP ────────────────────────────────────────
            // query() targets elements inside the host div.
            // ':enter, :leave' — selects BOTH the incoming AND outgoing page.
            // style() sets their CSS instantly (no animation, just a snapshot).
            // position: absolute — takes them out of normal document flow so
            //   they can sit on top of each other during the transition.
            // width: 100% — without this, absolute elements shrink to content width.
            // top: 0, left: 0 — anchors them to the top-left of the wrapper div.
            // { optional: true } — don't crash if :enter or :leave doesn't exist
            //   (e.g. on the very first page load there's no :leave).
            query(':enter, :leave', style({
                position: 'absolute',
                width: '100%',
                top: 0,
                left: 0,
            }), { optional: true }),
            // ── STEP 2: HIDE INCOMING PAGE IMMEDIATELY ────────────────────────
            // query(':enter') — targets only the NEW page coming in.
            query(':enter', style({ opacity: 0 }), { optional: true }),
            // ── STEP 3: RUN BOTH ANIMATIONS IN PARALLEL
            // Without group(), the leave animation would finish completely
            // before the enter animation starts — making it feel slow.
            group([
                // Animate the LEAVING page (old page going away).
                // query(':leave') — targets only the old page.
                query(':leave', [
                    animate(`${duration}ms ${easing}`, style({ opacity: 0 })),
                ], { optional: true }),

                // Animate the ENTERING page (new page coming in).
                query(':enter', [
                    animate(`${duration}ms ${duration / 4}ms ${easing}`, style({ opacity: 1 })),
                ], { optional: true }),
            ]), 
        ]),
    ]); 
}

// The only difference is we also animate 'transform' (movement), not just opacity.
export function routeSlideAnimation(duration = 300, easing = 'ease-out'): AnimationTriggerMetadata {
    return trigger('routeSlide', [
        transition('* <=> *', [
            query(':enter, :leave', style({
                position: 'absolute',
                width: '100%',
                top: 0,
                left: 0,
            }), { optional: true }),
            // Set the STARTING state of the incoming page.
            query(':enter', style({
                opacity: 0,
                transform: 'translateY(16px)',
            }), { optional: true }),
            group([
                // LEAVING page animation.
                // Fades out AND moves slightly UP as it disappears.
                // translateY(-8px) — moves 8px upward (negative = up).
                // This gives the feeling that the old page is "leaving upward"
                // while the new page "arrives from below".
                query(':leave', [
                    animate(`${duration}ms ${easing}`, style({
                        opacity: 0,
                        transform: 'translateY(-8px)',
                    })),
                ], { optional: true }),

                // ENTERING page animation.
                // Has the same delay as the fade version (duration / 4).
                // Fades in AND moves up to its natural position (translateY(0)).
                // 'translateY(0)' means: "no offset, sit exactly where you belong".
                // Combined with the starting translateY(16px), this creates
                // a smooth upward sliding motion as the page comes into view.
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