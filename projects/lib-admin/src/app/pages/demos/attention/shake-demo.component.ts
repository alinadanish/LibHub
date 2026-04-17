import { Component } from '@angular/core';
import { ShakeDirective } from 'ng-nanymation';

@Component({
    standalone: true,
    imports: [ShakeDirective],
    template: `
        <div class="page">
            <h2>Shake</h2>
            <p class="subtitle">Rapid left-right vibration with decreasing amplitude — like a notification or rejection.</p>
            <div class="controls">
                <button class="btn" (click)="shake()">Shake</button>
            </div>
            <div class="box box-1" ngNanyShake [ngNanyShakeTrigger]="trigger" [duration]="600">
                Shake me
            </div>
        </div>
    `,
})
export class ShakeDemoComponent {
    trigger = 0;

    shake(): void {
        this.trigger++;
    }
}
