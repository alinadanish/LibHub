import { AfterViewInit, Directive, ElementRef, inject, Input, OnDestroy } from "@angular/core";

@Directive({
    selector: '[ngNanyTypewriter]',
    standalone: true,
})

export class TypewriterDirective implements AfterViewInit, OnDestroy   {
    @Input() speed = 0; // ms between each character — lower = faster typing
    @Input() showCursor = true; // Whether to show the blinking cursor at the end of the text
    private readonly el = inject(ElementRef);
    private intervalId : ReturnType<typeof setInterval> | null = null; //holds interval so we can clear it on destroy
    private cursor: HTMLSpanElement | null = null; // Reference to the cursor element so we can insert text before it

    ngAfterViewInit(): void {
        const host = this.el.nativeElement as HTMLElement;
        const text = host.textContent?.trim() ?? '';   //grab the full text content written in the template
        host.textContent = ''; // Clear the text so we can type it out

        if(this.showCursor) {
            // create a <span>|</span> and append it to the host
            // all characters will be inserted BEFORE this span
            // so the cursor always stays at the end
            this.cursor = document.createElement('span');
            this.cursor.textContent = '|';
            this.cursor.style.cssText = `
                display: inline-block;
                margin-left: 1px;
                animation: ngNanyCursorBlink 0.8s step-end infinite;
            `;
            this.injectBlinkKeyframes();
            host.appendChild(this.cursor);
        }
        
        let i = 0;
        // every `speed` ms, insert the next character before the cursor span
        // insertBefore(newNode, referenceNode) — inserts newNode before referenceNode
        // if cursor is null (showCursor=false), insertBefore inserts at the end
        this.intervalId = setInterval(() => {
            host.insertBefore(document.createTextNode(text[i]), this.cursor);
            i++;
            // stop once all characters are typed
            if (i >= text.length) {
                clearInterval(this.intervalId!);
                this.intervalId = null;
            }
        }, this.speed);
    }

    ngOnDestroy(): void {
        // always clear interval on destroy to avoid memory leaks
        if (this.intervalId !== null) clearInterval(this.intervalId);
    }

    private injectBlinkKeyframes(): void {
        const id = 'ngNanyCursorBlinkStyle';
        // only inject once — check if the style tag already exists in <head>
        if (document.getElementById(id)) return;
        const style = document.createElement('style');
        style.id = id;
        // step-end makes the blink sharp (on/off) instead of a smooth fade
        style.textContent = `
            @keyframes ngNanyCursorBlink {
                0%, 100% { opacity: 1; }
                50%       { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}