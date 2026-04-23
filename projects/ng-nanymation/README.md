# ng-nanymation

A lightweight Angular animation library built with directives. Zero-config defaults, fully configurable, tree-shakable, and built on the Angular Animations API.

## Installation

```bash
npm install ng-nanymation
```

Requires **Angular 11 or later**.

---

## Setup

### 1. Add animations provider

```typescript
// app.config.ts (standalone app)
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations()]
};
```

```typescript
// app.module.ts (NgModule app)
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserAnimationsModule]
})
export class AppModule {}
```

### 2. Import NgNanymationModule

**Standalone component:**
```typescript
import { NgNanymationModule } from 'ng-nanymation';

@Component({
  standalone: true,
  imports: [NgNanymationModule],
})
export class MyComponent {}
```

**NgModule app:**
```typescript
import { NgNanymationModule } from 'ng-nanymation';

@NgModule({
  imports: [NgNanymationModule]
})
export class AppModule {}
```

---

## Animation Categories

ng-nanymation has three categories of directives, each with a different usage pattern.

---

## Category 1 — Enter / Leave

Animates in when the element becomes visible, out when it hides. Controlled by a boolean input.

```html
<div ngNanyFade [ngNanyFadeVisible]="visible"></div>
<button (click)="visible = !visible">Toggle</button>
```

### `ngNanyFade`
Animates opacity in and out.

| Input | Type | Default | Description |
|---|---|---|---|
| `ngNanyFadeVisible` | `boolean` | `true` | Show or hide the element |
| `duration` | `number` | `300` | Animation duration in ms |
| `delay` | `number` | `0` | Delay before animation starts in ms |
| `easing` | `string` | `ease-in-out` | CSS easing function |

```html
<div ngNanyFade [ngNanyFadeVisible]="visible" [duration]="500" [easing]="'ease-out'">
  Hello
</div>
```

---

### `ngNanySlide`
Combines translate and opacity. Supports 4 directions.

| Input | Type | Default | Description |
|---|---|---|---|
| `ngNanySlideVisible` | `boolean` | `true` | Show or hide the element |
| `enterFrom` | `'up' \| 'down' \| 'left' \| 'right'` | `'up'` | Direction to slide in from |
| `leaveTo` | `'up' \| 'down' \| 'left' \| 'right'` | `'down'` | Direction to slide out to |
| `duration` | `number` | `300` | Animation duration in ms |
| `delay` | `number` | `0` | Delay in ms |
| `easing` | `string` | `ease-in-out` | CSS easing function |

```html
<div ngNanySlide [ngNanySlideVisible]="visible" enterFrom="left" leaveTo="left">
  Hello
</div>
```

---

### `ngNanyScale`
Animates transform scale with opacity.

| Input | Type | Default | Description |
|---|---|---|---|
| `ngNanyScaleVisible` | `boolean` | `true` | Show or hide the element |
| `fromScale` | `number` | `0.8` | Starting/ending scale factor |
| `duration` | `number` | `300` | Animation duration in ms |
| `delay` | `number` | `0` | Delay in ms |
| `easing` | `string` | `ease-in-out` | CSS easing function |

```html
<div ngNanyScale [ngNanyScaleVisible]="visible" [fromScale]="0.5">
  Hello
</div>
```

---

### `ngNanyRotate`
Animates rotation with opacity.

| Input | Type | Default | Description |
|---|---|---|---|
| `ngNanyRotateVisible` | `boolean` | `true` | Show or hide the element |
| `degrees` | `number` | `180` | Degrees to rotate from on enter / to on leave |
| `duration` | `number` | `300` | Animation duration in ms |
| `delay` | `number` | `0` | Delay in ms |
| `easing` | `string` | `ease-in-out` | CSS easing function |

```html
<div ngNanyRotate [ngNanyRotateVisible]="visible" [degrees]="90">
  Hello
</div>
```

---

## Category 2 — Attention

Element stays in the DOM. Animation plays on demand by incrementing a trigger — ideal for alerts, errors, and nudges.

```typescript
trigger = 0;
```

```html
<div ngNanyShake [ngNanyShakeTrigger]="trigger">Invalid input</div>
<button (click)="trigger++">Shake</button>
```

### `ngNanyShake`
Rapid left-right vibration with decreasing amplitude.

| Input | Type | Default | Description |
|---|---|---|---|
| `ngNanyShakeTrigger` | `number` | — | Increment to play the animation |
| `duration` | `number` | `300` | Animation duration in ms |
| `delay` | `number` | `0` | Delay in ms |
| `easing` | `string` | `ease-in-out` | CSS easing function |

```html
<div ngNanyShake [ngNanyShakeTrigger]="trigger" [duration]="600">
  Shake me
</div>
```

---

## Category 3 — Auto

Plays automatically the moment the element enters the DOM. No input binding needed — just add the directive.

### `ngNanyStagger`
Animates each child element in sequence with an increasing delay.

| Input | Type | Default | Description |
|---|---|---|---|
| `staggerDelay` | `number` | `80` | Additional delay between each child in ms |
| `duration` | `number` | `300` | Animation duration per child in ms |
| `easing` | `string` | `ease-in-out` | CSS easing function |

```html
<ul ngNanyStagger [staggerDelay]="100">
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
</ul>
```

---

### `ngNanyTypewriter`
Reveals text character by character on init.

| Input | Type | Default | Description |
|---|---|---|---|
| `speed` | `number` | `50` | Milliseconds between each character |
| `showCursor` | `boolean` | `true` | Show blinking cursor while typing |

```html
<p ngNanyTypewriter [speed]="60">Hello, world!</p>
```

---

### `ngNanyCountUp`
Animates a number from a start value to a target on init.

| Input | Type | Default | Description |
|---|---|---|---|
| `to` | `number` | `0` | Target number to count up to |
| `from` | `number` | `0` | Starting number |
| `duration` | `number` | `2000` | Total animation duration in ms |
| `decimals` | `number` | `0` | Decimal places to display |
| `prefix` | `string` | `''` | Text before the number e.g. `$` |
| `suffix` | `string` | `''` | Text after the number e.g. `%` |

```html
<span ngNanyCountUp [to]="9800" [duration]="2000" prefix="$"></span>
<span ngNanyCountUp [to]="98.6" [decimals]="1" suffix="%"></span>
```

---

## Route Transitions

ng-nanymation includes two pre-built route transition animations.

```typescript
import { routeFadeAnimation, routeSlideAnimation } from 'ng-nanymation';

@Component({
  animations: [routeSlideAnimation(300)]
})
export class AppComponent {
  getState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRouteData['animation'] : '';
  }
}
```

```html
<div [@routeSlide]="getState(outlet)">
  <router-outlet #outlet="outlet"/>
</div>
```

---

## Building Custom Directives

ng-nanymation exports its base classes so you can build your own directives.

**Enter / Leave custom directive:**
```typescript
import { Directive, ElementRef, Input } from '@angular/core';
import { AnimationBuilder, AnimationMetadata } from '@angular/animations';
import { BaseAnimationDirective } from 'ng-nanymation';

@Directive({ selector: '[myFade]', standalone: false })
export class MyFadeDirective extends BaseAnimationDirective {
  @Input('myFadeVisible') override visible = true;

  constructor(el: ElementRef, builder: AnimationBuilder) { super(el, builder); }

  protected getEnterSteps(): AnimationMetadata[] { return []; }
  protected getLeaveSteps(): AnimationMetadata[] { return []; }
}
```

**Attention custom directive:**
```typescript
import { Directive, ElementRef, Input } from '@angular/core';
import { AnimationBuilder, AnimationMetadata } from '@angular/animations';
import { BaseAttentionDirective } from 'ng-nanymation';

@Directive({ selector: '[myShake]', standalone: false })
export class MyShakeDirective extends BaseAttentionDirective {
  @Input('myShakeTrigger') set trigger(val: number) {
    if (val > 0) this.play();
  }

  constructor(el: ElementRef, builder: AnimationBuilder) { super(el, builder); }

  protected getSteps(): AnimationMetadata[] { return []; }
}
```

Don't forget to declare your custom directive in an NgModule and export it.

---

## License

MIT
