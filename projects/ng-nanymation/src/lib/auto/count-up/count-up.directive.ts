import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({ selector: '[ngNanyCountUp]', standalone: false })
export class CountUpDirective implements AfterViewInit, OnDestroy {
    @Input() to = 0;  // the number to count up to — required, set via template
    @Input() from = 0;  // where counting starts
    @Input() duration  = 2000;  // total duration of the count animation in ms
    @Input() decimals  = 0;  // how many decimal places to show. default 0 = whole numbers
    @Input() suffix    = ''; // optional suffix shown after the number e.g. '%' or 'k'
    @Input() prefix    = '';  // optional prefix shown before the number e.g. '$'

    constructor(private readonly el: ElementRef) {}
    private intervalId: ReturnType<typeof setInterval> | null = null;

    ngAfterViewInit(): void {
        const host     = this.el.nativeElement as HTMLElement;
        const range    = this.to - this.from;
        const stepMs   = 16;   // how often to update — 60fps feel
        const increment = range / (this.duration / stepMs);  // how much to increment per step
        let current = this.from;
        host.textContent = this.format(current); // set initial display immediately

        this.intervalId = setInterval(() => {
            current += increment;
            // clamp to target so we don't overshoot
            if ((increment > 0 && current >= this.to) || (increment < 0 && current <= this.to)) {
                current = this.to;
                host.textContent = this.format(current);
                clearInterval(this.intervalId!);
                this.intervalId = null;
                return;
            }
            host.textContent = this.format(current);
        }, stepMs);
    }

    ngOnDestroy(): void {
        if (this.intervalId !== null) clearInterval(this.intervalId);
    }

    // formats the number with prefix, suffix, and decimal places
    private format(value: number): string {
        return `${this.prefix}${value.toFixed(this.decimals)}${this.suffix}`;
    }
}