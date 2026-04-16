import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'oryggi-image',
    standalone: true,
    imports: [CommonModule],
    encapsulation: ViewEncapsulation.None,
    template: `
        <div [ngClass]="containerClasses" (click)="openModal()">
            <img *ngIf= "!hasFallback" [src]= "currentImage" alt="Image" (error)="onImageError()"/>
            <div *ngIf= "hasFallback" class= "fallback">{{ fallback }}</div>
            <div class= "overlay">
                <ng-content></ng-content>
            </div>
        </div>
        <div class="modal-backdrop" *ngIf="isModalOpen" (click)="closeModal()">
            <div class="modal-content" (click)="$event.stopPropagation()">
                <button class="close-btn" (click)="closeModal()">✕</button>
                <button class="nav-btn prev" *ngIf="images.length > 1" (click)="prevImage()">&#8249;</button>
                <img [src]="currentImage" [alt]="fallback"/>
                <button class="nav-btn next" *ngIf="images.length > 1" (click)="nextImage()">&#8250;</button>
            </div>
        </div>
    `,
    styles: [`     
        .oryggi-image {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            cursor: pointer;
            flex-shrink: 0;
        }

        /* Shapes */
        .circle  { border-radius: 50%; }
        .square  { border-radius: 0; }
        .rounded { border-radius: clamp(6px, 1vw, 12px); }

        /* Sizes — fluid with clamp */
        .xxs  { width: clamp(20px, 2vw, 28px);    height: clamp(20px, 2vw, 28px); }
        .xs   { width: clamp(28px, 3vw, 36px);    height: clamp(28px, 3vw, 36px); }
        .sm   { width: clamp(36px, 4vw, 48px);    height: clamp(36px, 4vw, 48px); }
        .md   { width: clamp(48px, 6vw, 72px);    height: clamp(48px, 6vw, 72px); }
        .lg   { width: clamp(72px, 9vw, 110px);   height: clamp(72px, 9vw, 110px); }
        .xl   { width: clamp(110px, 13vw, 160px); height: clamp(110px, 13vw, 160px); }
        .xxl  { width: clamp(160px, 18vw, 220px); height: clamp(160px, 18vw, 220px); }
        .xxxl { width: clamp(220px, 25vw, 320px); height: clamp(220px, 25vw, 320px); }

        /* Image fills container */
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        /* Fallback initials */
        .fallback {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #1a1a1a;
            color: #ffffff;
            font-weight: 600;
            font-size: clamp(10px, 1.5vw, 18px);
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        /* Hover overlay */
        .overlay {
            position: absolute;
            inset: 0;
            background: rgba(0, 0, 0, 0.65);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.25s ease;
            padding: clamp(6px, 1vw, 12px);
            color: #ffffff;
            font-size: clamp(10px, 1vw, 13px);
            text-align: center;
        }

        .oryggi-image:hover .overlay {
            opacity: 1;
        }

        .modal-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }

        /* Modal content box */
        .modal-content {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: clamp(12px, 2vw, 24px);
            padding: clamp(16px, 3vw, 32px);
        }

        /* Modal image */
        .modal-content img {
            max-width: 80vw;
            max-height: 80vh;
            object-fit: contain;
            border-radius: 8px;
        }

        /* Close button */
        .close-btn {
            position: absolute;
            top: -16px;
            right: -16px;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: none;
            background: #ffffff;
            color: #1a1a1a;
            font-size: 16px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        /* Prev / Next buttons */
        .nav-btn {
            background: rgba(255,255,255,0.15);
            border: none;
            color: #ffffff;
            font-size: clamp(24px, 4vw, 48px);
            width: clamp(36px, 5vw, 56px);
            height: clamp(36px, 5vw, 56px);
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.2s ease;
            flex-shrink: 0;
        }

        .nav-btn:hover {
            background: rgba(255,255,255,0.3);
        }
    `]
})

export class ImageComponent {
    @Input() images: string[] = [];
    @Input() shape: 'square' | 'circle' | 'rounded' = 'square';
    @Input() size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' = 'md';
    @Input() fallback: string = '';

    @Output() imageChange = new EventEmitter<string>();

    currentImageIndex: number = 0;
    isModalOpen: boolean = false;

    get currentImage(): string {
        return this.images[this.currentImageIndex] || this.fallback;
    }

    get hasFallback(): boolean {
        return this.images.length === 0 || !this.currentImage;
    }

    get containerClasses(): string[] {
        return ['oryggi-image', this.shape, this.size];
    }

    cycleImage(): void {
        if (this.images.length <= 1) return;
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.imageChange.emit(this.currentImage);
    }

    onImageError(): void {
        this.images = [];
    }

    //#region [Modal Logic]
    openModal(){
        if (this.images.length === 0) return;
        this.isModalOpen = true;
    }

    closeModal(){
        this.isModalOpen = false;
    }

    nextImage(): void {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
        this.imageChange.emit(this.currentImage);
    }

    prevImage(): void {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
        this.imageChange.emit(this.currentImage);
    }
    //#endregion [Modal Logic]
}