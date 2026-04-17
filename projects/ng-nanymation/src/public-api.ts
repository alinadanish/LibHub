// ─── Module ───────────────────────────────────────────────────────────────────
export * from './lib/ng-motion.module';

// ─── Category 1: Enter / Leave ────────────────────────────────────────────────
// Element animates in when it appears, out when it disappears.
// Consumer pattern: <div ngNanyFade [ngNanyFadeVisible]="visible"></div>

export * from './lib/enter-leave/base-animation.directive';

export * from './lib/enter-leave/fade/fade.directive';
export * from './lib/enter-leave/fade/fade.animation';

export * from './lib/enter-leave/slide/slide.directive';
export * from './lib/enter-leave/slide/slide.animation';

export * from './lib/enter-leave/scale/scale.directive';
export * from './lib/enter-leave/scale/scale.animation';

export * from './lib/enter-leave/rotate/rotate.directive';
export * from './lib/enter-leave/rotate/rotate.animation';

// ─── Category 2: Attention / Trigger ─────────────────────────────────────────
// Element stays in DOM. Animation plays on demand by incrementing a trigger.
// Consumer pattern: <div ngNanyShake [ngNanyShakeTrigger]="trigger"></div>

export * from './lib/attention/base-attention.directive';

export * from './lib/attention/shake/shake.directive';
export * from './lib/attention/shake/shake.animation';

// ─── Category 3: Auto / Init ──────────────────────────────────────────────────
// Animation plays automatically when element enters the DOM. No input needed.
// Consumer pattern: <ul ngNanyStagger></ul>

export * from './lib/auto/stagger/stagger.directive';
export * from './lib/auto/typewriter/typewriter.directive';
export * from './lib/auto/count-up/count-up.directive';

// ─── Route Transitions ────────────────────────────────────────────────────────
export * from './lib/route-transitions/route-transition.animation';

// ─── Models & Types ───────────────────────────────────────────────────────────
export * from './lib/models/animation-config.model';
export * from './lib/models/easing.presets';
export * from './lib/models/slide-direction.type';
