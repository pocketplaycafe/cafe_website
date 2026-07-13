# Pocket Play Cafe — Design Style Guide

> **Theme:** Luxury Gaming Café × Modern Coffee House × Premium Pool Lounge

This document defines the visual identity for Pocket Play Cafe. Every page, component, and interaction should follow these guidelines to maintain a consistent, premium experience.

---

# 1. Brand Identity

## Design Philosophy

Pocket Play Cafe blends three experiences:

- Premium Gaming Lounge
- Modern Coffee Shop
- Luxury Billiards Club

The interface should feel:

- Elegant
- Premium
- Dark
- Modern
- Minimal
- High Contrast
- Comfortable
- Youth-Oriented

Avoid bright colorful UIs or playful cartoon styling.

---

# 2. Color Palette

## Background Colors

| Name | Color | Usage |
|-------|-------|-------|
| PP Black | `#0F0F0F` | Main website background |
| PP Deep | `#050505` | Canvas, footer, outer sections |
| PP Card | `#1A1A1A` | Cards, menus, modals |
| PP Hover | `#252525` | Hover states, inputs |

### Rules

- Never use pure black (`#000000`)
- Never use Tailwind Gray-900 as the main background
- Always use PP Black family

---

## Primary Brand Color

### Luxury Gold

| Name | Color | Usage |
|-------|--------|--------|
| Gold | `#D4AF37` | Headlines, buttons, icons |
| Gold Light | `#F1D98A` | Hover, gradients |
| Gold Dark | `#A68B28` | Active states |

Use gold sparingly.

Gold represents:

- Premium quality
- Luxury
- Excellence

---

## Accent Color

### Billiard Red

| Name | Color |
|-------|---------|
| Red | `#C0392B` |
| Light Red | `#E74C3C` |
| Glow | `rgba(192,57,43,.3)` |

Use red only for:

- Active buttons
- Notifications
- CTA buttons
- Gaming highlights

---

## Text Colors

| Type | Color |
|-------|--------|
| Primary | `#FFFFFF` |
| Body | `#B0B0B0` |
| Muted | `#666666` |

Text hierarchy:

```
Heading → White

Body → Light Gray

Muted → Dark Gray
```

---

# 3. Typography

## Heading Font

**Oswald**

Use for:

- Hero Titles
- Section Titles
- Prices
- Gaming Labels
- Statistics

Rules:

- UPPERCASE
- Bold
- Wide spacing
- Letter spacing (tracking-wider)

Example

```
PLAY.
EAT.
REPEAT.
```

---

## Body Font

**Lato**

Use for:

- Paragraphs
- Menu descriptions
- Cards
- Buttons
- Forms

Should remain easy to read.

---

# 4. Border Radius

Theme:

> Inspired by the sharp corners of a pool table.

Default radius:

```
4px
```

Never use:

```
rounded-xl
rounded-3xl
rounded-full
```

unless it is:

- Avatar
- Profile Image
- Status Dot
- 8 Ball icon

---

# 5. Shadows

No gray shadows.

Only use premium glows.

---

## Gold Glow

```
0 0 15px rgba(212,175,55,.2)
```

Use for

- Cards
- Premium Buttons
- Hover
- Active Navigation

---

## Large Gold Glow

```
0 0 30px rgba(212,175,55,.4)
```

Use for

- Hero Buttons
- Featured Items
- Special Offers

---

## Red Glow

```
0 0 15px rgba(192,57,43,.3)
```

Use for

- Gaming Cards
- Live Status
- CTA Buttons

---

## Card Shadow

```
0 4px 20px rgba(0,0,0,.5)
```

Use on:

- Food Cards
- Game Cards
- Dialogs
- Menus

---

# 6. Animations

Animations should feel premium.

Avoid:

- Bounce
- Shake
- Flash
- Wiggle

Preferred animations:

- Fade
- Lift
- Scale
- Smooth slide

Timing

```
300ms
```

Easing

```
cubic-bezier(.25,.1,.25,1)
```

---

# 7. UI Components

## Buttons

Primary

- Gold background
- Black text
- Gold hover
- Small radius

Secondary

- Transparent
- Gold border
- Gold text

Danger

- Red background
- White text

---

## Cards

Background

```
PP Card
```

Border

```
1px Gold (10-20% opacity)
```

Hover

- Slight lift
- Gold glow

---

## Inputs

Background

```
PP Hover
```

Border

```
Transparent
```

Focus

Gold border

---

## Navigation

Background

PP Deep

Active Item

- Gold text
- Underline
- Glow

---

# 8. Icons

Preferred icon style

- Outline
- Thin
- Elegant

Suggested libraries

- Lucide
- Heroicons

Avoid

- Cartoon icons
- Emoji icons inside UI

---

# 9. Imagery

Photography style

- Dark
- Cinematic
- Warm Lighting
- Premium
- Wooden Tables
- Coffee
- Pool Tables
- Gaming Consoles

Avoid

- Bright white backgrounds
- Stock office images
- Oversaturated colors

---

# 10. Layout

Maximum Width

```
1280px
```

Spacing

Large breathing room.

Typical section padding

```
80px Top
80px Bottom
```

Cards

```
24px Padding
```

---

# 11. Brand Personality

The website should communicate

- Premium
- Competitive
- Comfortable
- Social
- Fun
- Modern
- Luxurious

---

# 12. Overall Experience

When someone visits Pocket Play Cafe, the website should make them feel like they are entering a premium gaming lounge rather than just a restaurant.

The experience should instantly communicate:

- 🎱 Professional Snooker & Pool
- 🎮 PS4 & PS5 Gaming
- ☕ Premium Café
- 🍕 Delicious Food
- 👥 Friends & Family Hangout
- ✨ Luxury Atmosphere

---

# Design Keywords

- Luxury
- Modern
- Minimal
- Dark Theme
- Gold Accents
- Gaming Lounge
- Premium Café
- Elegant
- High Contrast
- Cinematic
- Sophisticated
- Comfortable