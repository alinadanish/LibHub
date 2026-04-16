import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'oryggi-button',
standalone: true,
imports: [CommonModule],
template: `
    <button [ngClass]="classes" [disabled]="disabled" [class.full-width]="fullWidth">
        <ng-content></ng-content>
    </button>
`,
styles: [`
    button {
        font-family: inherit;
        font-weight: 600;
        border-radius: 999px;
        border: none;
        cursor: pointer;
        transition: opacity 0.2s;
        transition: background 0.2s ease, opacity 0.2s ease;
    }

    button.dark:hover    { background: #333333; }
    button.outline:hover { background: #f0f0f0; }                                                                                                                               button.ghost:hover   { background: #f0f0f0; }
    button.danger:hover  { background: #dc2626; }
    
    button:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }

    button.full-width {
        width: 100%;
    }

    button.dark { background: #1a1a1a; color: #ffffff; }
    button.outline { background: transparent; color: #1a1a1a; border: 1.5px solid #a2a2a2; }
    button.ghost { background: transparent; color: #1a1a1a; }
    button.danger { background: #ef4444; color: #ffffff; }

    .sm {
        padding: clamp(4px, 0.8vw, 8px) clamp(10px, 1.5vw, 16px);
        font-size: clamp(11px, 0.9vw, 13px);
    }
    .md {
        padding: clamp(8px, 1.2vw, 12px) clamp(16px, 2vw, 24px);
        font-size: clamp(12px, 1vw, 15px);
    }
    .lg {
        padding: clamp(12px, 1.8vw, 18px) clamp(22px, 3vw, 32px);
        font-size: clamp(14px, 1.3vw, 18px);
    }
`]
})

export class ButtonComponent {
    @Input() variant: 'dark' | 'outline' | 'ghost' | 'danger' = 'dark';
    @Input() size: 'sm'| 'md' | 'lg' = 'md';
    @Input() disabled: boolean = false;
    @Input() fullWidth: boolean = false;

    get classes(): string[]{
        return[this.variant, this.size, this.fullWidth ? 'full-width' : '', this.disabled ? 'disabled' : ''].filter(Boolean);
    }
}