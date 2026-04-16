// Named constants so users don't have to memorise CSS easing strings
export const Easing = {
    linear:   'linear',
    easeIn:   'ease-in',
    easeOut:  'ease-out',
    smooth:   'ease-in-out',
    bouncy:   'cubic-bezier(0.34, 1.56, 0.64, 1)',   // overshoot
    sharp:    'cubic-bezier(0.4, 0, 0.6, 1)',          // material sharp
    enter:    'cubic-bezier(0, 0, 0.2, 1)',            // material decelerate
    leave:    'cubic-bezier(0.4, 0, 1, 1)',            // material accelerate
} as const;

export type EasingPreset = keyof typeof Easing;