import {
    Directive,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { AnimationBuilder, AnimationMetadata, AnimationPlayer } from '@angular/animations';
import { AnimationConfig, DEFAULT_ANIMATION_CONFIG } from '../models/animation-config.model';

@Directive()
export abstract class BaseAnimationDirective implements OnInit, OnChanges, OnDestroy {
    @Input() duration = DEFAULT_ANIMATION_CONFIG.duration;
    @Input() delay    = DEFAULT_ANIMATION_CONFIG.delay;
    @Input() easing   = DEFAULT_ANIMATION_CONFIG.easing;

    protected visible = true;
    protected player: AnimationPlayer | null = null;

    constructor(
        protected readonly el: ElementRef,
        protected readonly builder: AnimationBuilder,
    ) {}

    ngOnInit(): void {
        if (!this.visible) {
            this.el.nativeElement.style.opacity = '0';
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['visible'] && !changes['visible'].firstChange) {
            this.runAnimation(this.visible);
        }
    }

    ngOnDestroy(): void {
        this.player?.destroy();
    }

    protected get config(): AnimationConfig {
        return { duration: this.duration, delay: this.delay, easing: this.easing };
    }

    protected abstract getEnterSteps(): AnimationMetadata[];
    protected abstract getLeaveSteps(): AnimationMetadata[];

    protected runAnimation(show: boolean): void {
        this.player?.destroy();
        const steps = show ? this.getEnterSteps() : this.getLeaveSteps();
        this.player = this.builder.build(steps).create(this.el.nativeElement);
        this.player.play();
    }
}
