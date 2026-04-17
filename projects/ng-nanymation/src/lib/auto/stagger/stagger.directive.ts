import { AfterViewInit, Directive, ElementRef, Input, inject } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import { fadeInAnimation } from '../../enter-leave/fade/fade.animation';
import { DEFAULT_ANIMATION_CONFIG } from '../../models/animation-config.model';

@Directive({
    selector: '[ngNanyStagger]',
    standalone: true,
})
export class StaggerDirective implements AfterViewInit {
    @Input() staggerDelay = 80;
    @Input() duration = DEFAULT_ANIMATION_CONFIG.duration;
    @Input() easing   = DEFAULT_ANIMATION_CONFIG.easing;

    private readonly el      = inject(ElementRef);
    private readonly builder = inject(AnimationBuilder);

    ngAfterViewInit(): void {
        const children = Array.from(this.el.nativeElement.children) as HTMLElement[];

        children.forEach((child, index) => {
            const steps = fadeInAnimation({
                duration: this.duration,
                delay: index * this.staggerDelay,
                easing: this.easing,
            });
            this.builder.build(steps).create(child).play();
        });
    }
}
