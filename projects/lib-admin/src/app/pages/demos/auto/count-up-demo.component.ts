import { Component } from '@angular/core';
import { CountUpDirective } from 'ng-nanymation';

@Component({
    standalone: true,
    imports: [CountUpDirective],
    styles: [`
        .grid   { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .card   { background: var(--mf-surface); border: 1px solid var(--mf-border-light);
                border-radius: 12px; padding: 28px 16px; text-align: center; }
        .number { display: block; font-size: 36px; font-weight: 800; color: var(--mf-primary); margin-bottom: 6px; }
        .label  { display: block; font-size: 12px; color: var(--mf-text-muted); text-transform: uppercase;
                letter-spacing: 0.8px; font-weight: 600; }
    `],
    template: `
        <div class="page">
            <h2>Count Up</h2>
            <p class="subtitle">Animates a number from a start value to a target on init.</p>
            <div class="controls">
                <button class="btn" (click)="replay()">Replay</button>
            </div>

            <!-- @if re-adds elements, firing AfterViewInit again on replay -->
            @if (show) {
                <div class="grid">
                    <div class="card">
                        <!-- counts 0 → 1200, no decimals, no prefix/suffix -->
                        <span class="number" ngNanyCountUp [to]="1200" [duration]="2000"></span>
                        <span class="label">Users</span>
                    </div>
                    <div class="card">
                        <!-- prefix '$', counts 0 → 48500 -->
                        <span class="number" ngNanyCountUp [to]="48500" [duration]="2500" prefix="$"></span>
                        <span class="label">Revenue</span>
                    </div>
                    <div class="card">
                        <!-- suffix '%', 1 decimal place, counts 0 → 98.6 -->
                        <span class="number" ngNanyCountUp [to]="98.6" [duration]="1800" suffix="%" [decimals]="1"></span>
                        <span class="label">Uptime</span>
                    </div>
                </div>
            }
        </div>
    `,
})
export class CountUpDemoComponent {
    show = true;

    replay(): void {
        this.show = false;
        setTimeout(() => (this.show = true), 50);
    }
}