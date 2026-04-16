export interface AnimationConfig {
    duration: number;   // milliseconds
    delay: number;      // milliseconds
    easing: string;     // CSS easing string, e.g. 'ease-in-out'
}

export const DEFAULT_ANIMATION_CONFIG: AnimationConfig = {
    duration: 300,
    delay: 0,
    easing: 'ease-in-out',
};