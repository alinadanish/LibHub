# Changelog

All notable changes to this project will be documented in this file.
Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.0.3] - 2026-04-21

### Changed
- Converted all directives from standalone to NgModule-based (`NgNanymationModule`)
- Replaced `inject()` function with constructor-based dependency injection
- Lowered peer dependency requirement from `>=14.0.0` to `>=11.0.0`
- Changed TypeScript compilation target from ES2022 to ES2020

### Fixed
- Library now works in Angular 11 and 12 projects

## [0.0.1] - Initial Release

### Added
- `FadeDirective` — animates opacity in/out
- `SlideDirective` — animates translate + opacity in/out with directional control
- `ScaleDirective` — animates scale + opacity in/out
- `RotateDirective` — animates rotation + opacity in/out
- `ShakeDirective` — in-place shake on trigger
- `StaggerDirective` — auto-staggers child elements on init
- `TypewriterDirective` — reveals text character by character on init
- `CountUpDirective` — animates a number from start to target on init
- `NgNanymationModule` — NgModule exporting all directives
- `routeFadeAnimation` and `routeSlideAnimation` — route transition helpers
- `Easing` presets — named constants for common CSS easing strings
