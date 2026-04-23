import { Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { AnimationBuilder, AnimationMetadata, AnimationPlayer } from '@angular/animations';
import { AnimationConfig, DEFAULT_ANIMATION_CONFIG } from '../models/animation-config.model';

/**
 * Base class for attention animations.
 * These play in-place on an already-visible element — element never leaves the DOM.
 * Subclasses implement getSteps() and expose a trigger input that calls play().
 *
 * Consumer pattern:
 *   <div ngNanyShake [ngNanyShakeTrigger]="trigger"></div>
 */
@Directive()
export abstract class BaseAttentionDirective implements OnDestroy {
    @Input() duration = DEFAULT_ANIMATION_CONFIG.duration;
    @Input() delay    = DEFAULT_ANIMATION_CONFIG.delay;
    @Input() easing   = DEFAULT_ANIMATION_CONFIG.easing;

    private player: AnimationPlayer | null = null;

    constructor(
        protected readonly el: ElementRef,
        protected readonly builder: AnimationBuilder,
    ) {}

    protected get config(): AnimationConfig {
        return { duration: this.duration, delay: this.delay, easing: this.easing };
    }

    protected abstract getSteps(): AnimationMetadata[];

    protected play(): void {
        this.player?.destroy();
        this.player = this.builder.build(this.getSteps()).create(this.el.nativeElement);
        this.player.play();
    }

    ngOnDestroy(): void {
        this.player?.destroy();
    }
}
