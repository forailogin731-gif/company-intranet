# Design Brief

## Direction
Industrial-refined manufacturing intranet — dark steely blue foundation with warm brass accents. Professional, authoritative, department-aware. Dashboard-driven UI optimized for production workflows across 13 departments.

## Tone
Confident, efficient, modern — manufacturing context awareness without heaviness. Dark mode primary (industrial steel feel), card-based layouts with strategic micro-interactions.

## Differentiation
13-department card grid with warm-toned status badges, micro-depth shadows, department-specific color coding, loading states for data workflows, sidebar with manufacturing brand presence.

## Color Palette

| Token      | OKLCH           | Role                                |
|------------|-----------------|-------------------------------------|
| background | 0.95 0.01 230   | Light canvas (light mode)           |
| foreground | 0.22 0.012 230  | Deep cool grey text (light mode)    |
| primary    | 0.52 0.14 240   | Steel blue — CTAs, active states    |
| accent     | 0.62 0.18 45    | Warm brass/copper — success, status |
| card       | 0.98 0.006 230  | White elevated surfaces             |
| muted      | 0.92 0.008 230  | Light grey backgrounds              |
| border     | 0.88 0.008 230  | Subtle dividing lines               |

## Dark Mode Palette

| Token      | OKLCH           | Role                           |
|------------|-----------------|--------------------------------|
| background | 0.13 0.012 235  | Deep slate blue canvas         |
| foreground | 0.92 0.008 230  | Bright cool white text         |
| primary    | 0.78 0.14 240   | Bright steel blue — CTAs       |
| accent     | 0.7 0.16 45     | Vivid brass — highlights       |
| card       | 0.18 0.01 235   | Lifted dark surface            |
| muted      | 0.25 0.01 235   | Dark grey backgrounds          |

## Typography
Display: Instrument Serif — department headings, editorial confidence. Body: General Sans — UI labels, data, navigation. Scale: h1 `text-4xl font-bold`, h2 `text-2xl font-semibold`, label `text-sm uppercase tracking-wide`, body `text-base leading-relaxed`.

## Elevation & Depth
Layered cards with strategic shadows (card: 0.2px 8px, elevated: 0.4px 12px). Sidebar distinct from header. Content sections alternate between background and muted surfaces. Dark mode uses reduced opacity for depth perception.

## Structural Zones

| Zone    | Background       | Border           | Notes                                 |
|---------|------------------|------------------|---------------------------------------|
| Sidebar | sidebar card     | sidebar-border   | Dark mode: distinct raised surface    |
| Header  | background       | border-b subtle  | Search, user menu, notifications     |
| Content | background       | —                | Grid layout for department cards     |
| Footer  | muted/10         | border-t subtle  | Company info, department quick-links |

## Component Patterns
- **Department Cards**: bg-card, shadow-card, warm accent badges, hover shadow-elevated
- **Buttons**: primary steel-blue, accent warm-brass, rounded-lg, smooth transitions
- **Status Indicators**: accent warm tones, muted backgrounds, mini badges (rounded-full)
- **Data Tables**: alternating row backgrounds, clear typography hierarchy
- **Inputs**: bg-input border-border, focus:ring-primary, rounded-md

## Motion
- **Entrance**: fade-in 0.3s ease-out on page load
- **Slide**: slide-in 0.3s on card appearance
- **Hover**: smooth transition 0.3s on interactive elements, shadow elevation
- **Loading**: pulse-subtle 2s loop for data states

## Constraints
- Maintain AA+ contrast across light and dark modes
- Sidebar navigation for departments, top header for global search/user
- 13 department cards grid-responsive: 1 col (sm), 2–3 cols (md/lg)
- Dark mode optimized (primary design mode); light mode supportive
- No gradients or decorative patterns — pure surfaces with intentional shadows

## Signature Detail
Warm brass/copper accents on manufacturing-context status indicators elevate the interface beyond generic corporate intranet. Department card grid with micro-shadows creates visual hierarchy without clutter. Instrument Serif sparingly on section headings anchors editorial authority.
