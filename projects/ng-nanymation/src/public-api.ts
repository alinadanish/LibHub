// Module
export * from './lib/ng-motion.module';

// Base class — for users who want to build custom animation directives
export * from './lib/directives/base-animation.directive';

// Directives
export * from './lib/directives/fade/fade.directive';
export * from './lib/directives/slide/slide.directive';
export * from './lib/directives/scale/scale.directive';
export * from './lib/directives/rotate/rotate.directive';
export * from './lib/directives/stagger/stagger.directive';

// Animation factories — for power users building custom directives
export * from './lib/animations/fade.animation';
export * from './lib/animations/slide.animation';
export * from './lib/animations/scale.animation';
export * from './lib/animations/rotate.animation';
export * from './lib/animations/route-transition.animation';

// Models and types
export * from './lib/models/animation-config.model';
export * from './lib/models/easing.presets';
export * from './lib/models/slide-direction.type';
