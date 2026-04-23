import { Component } from '@angular/core';
import { NgNanymationModule } from 'ng-nanymation';

@Component({
    standalone: true,
    imports: [NgNanymationModule],
    template: `
        <div class="page">
            <h2>Typewriter</h2>
            <p class="subtitle">Reveals text character by character on init.</p>
            <div class="controls">
                <button class="btn" (click)="replay()">Replay</button>
            </div>
            <!-- @if removes and re-adds the elements
                re-adding triggers AfterViewInit again — replaying the animation -->
            @if (show) {
                <div class="box box-1" ngNanyTypewriter [speed]="50">
                    The quick brown fox jumps over the lazy dog.
                </div>
                <div class="box box-2" ngNanyTypewriter [speed]="100" [showCursor]="false">
                    Slower, no cursor.
                </div>
                <div class="box box-3" ngNanyTypewriter [speed]="20">
                    Fast typing feels urgent and alive.
                </div>
            }
        </div>
    `,
})
export class TypewriterDemoComponent {
    show = true;

    replay(): void {
        // false removes elements from DOM, true re-adds them
        // re-adding fires AfterViewInit on the directive again
        this.show = false;
        setTimeout(() => (this.show = true), 50);
    }
}