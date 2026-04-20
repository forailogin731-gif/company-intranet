# Design Brief

## Direction
Cool Serene Professional — corporate intranet with light airy aesthetics, ocean-blue primary accents, and careful surface layering for digital clarity.

## Tone
Refined minimalism with sophisticated restraint — no decoration, maximum information clarity, intentional breathing room throughout.

## Differentiation
Sidebar navigation with distinct card elevation, subtle surface hierarchy across structural zones, and professional serif headings paired with clean sans-serif body text.

## Color Palette

| Token      | OKLCH           | Role                          |
|------------|-----------------|-------------------------------|
| background | 0.98 0.008 230  | Clean off-white light canvas  |
| foreground | 0.18 0.015 230  | Deep cool grey text           |
| primary    | 0.42 0.14 240   | Ocean blue — trust, CTA       |
| accent     | 0.6 0.15 170    | Cool teal — success, status   |
| card       | 1.0 0.004 230   | Pure white elevated surfaces  |
| muted      | 0.94 0.01 230   | Light grey backgrounds        |
| border     | 0.9 0.008 230   | Subtle dividing lines         |

## Typography

- Display: Instrument Serif — headings, editorial hierarchy, refined aesthetic
- Body: General Sans — UI labels, paragraphs, navigation, clean readability
- Scale: hero `text-5xl md:text-7xl font-bold`, h2 `text-3xl font-semibold`, label `text-sm uppercase tracking-widest`, body `text-base leading-relaxed`

## Elevation & Depth

Subtle shadows and card backgrounds create visual layering — sidebar uses distinct card background, header has bottom border, content sections alternate between background and muted backgrounds.

## Structural Zones

| Zone    | Background        | Border              | Notes                        |
|---------|-------------------|---------------------|------------------------------|
| Sidebar | sidebar (card)    | sidebar-border      | Distinct card with divider   |
| Header  | background        | border-b subtle     | Fixed, minimal visual weight |
| Content | background        | —                   | Alternating muted zones      |
| Footer  | muted/20          | border-t subtle     | Recessed, supporting info    |

## Spacing & Rhythm

Spacious vertical rhythm with 2rem gaps between major sections, 1rem gutters within cards, responsive mobile stacking with `sm:` breakpoints.

## Component Patterns

- Buttons: primary blue background, rounded-lg, hover with increased opacity
- Cards: white bg-card, shadow-subtle, rounded-lg, hover with shadow-elevated
- Badges: muted background with foreground text, rounded-full for status indicators
- Inputs: bg-input border-border, focus:ring-primary, rounded-md

## Motion

- Entrance: fade-in with 0.2s on page load
- Hover: smooth transition (0.3s) on all interactive elements
- State change: quick feedback (0.15s) for toggles and selections

## Constraints

- Maintain AA+ contrast across light and dark modes
- Use sidebar for primary navigation, header for search and user menu
- Responsive mobile-first: stacked layout on `sm:`, two-column on `md:+`
- No gradients or decorative backgrounds — pure surfaces

## Signature Detail

Professional serif display font (Instrument Serif) used sparingly for section headings to elevate the interface without decoration.

# Dark Mode Tokens

| Token      | OKLCH           | Role                          |
|------------|-----------------|-------------------------------|
| background | 0.145 0.014 230 | Deep dark charcoal            |
| foreground | 0.95 0.01 230   | Bright cool white text        |
| primary    | 0.72 0.15 200   | Bright teal — active, CTA     |
| accent     | 0.65 0.18 155   | Vivid green — success         |
| card       | 0.18 0.014 230  | Lifted dark surface           |
| sidebar    | 0.18 0.014 230  | Sidebar card surface          |
