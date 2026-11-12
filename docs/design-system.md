# Nexora design system (Phase 02)

Single reference for Nexora's visual rules. Future work should use these tokens and
components instead of inventing new ones. Live preview: `/design-system`
(development only, `noindex`). Code lives in `frontend/src/app/globals.css`,
`frontend/src/components/ui/`, `frontend/src/components/theme/` and
`frontend/src/components/brand/`.

## 1. Brand foundation

- Personality: **quietly powerful**. Executive authority plus intelligent innovation,
  controlled by refined minimalism.
- Should communicate intelligence, forward movement, institutional credibility, precision,
  trust, and confidence without arrogance.
- Must not look like a generic AI startup, an ordinary job board or a dated HR tool.
- Working tagline, exploration only and not hard-coded in the UI: "Intelligence in motion."

### Logo (deferred)

Agreed direction: geometric precision with fluid movement, a modern geometric sans wordmark,
and an abstract N built from custom shapes with a subtle sense of forward motion.

`NexoraMark` (`components/brand/nexora-mark.tsx`) is a **concept placeholder only**. Still to
design: the final N monogram, custom wordmark, horizontal lockup, compact icon, and monochrome
and reversed versions. No logo-generation dependencies were added.

## 2. Colour

### Brand palette (theme independent, `--nexora-*`, utilities `bg-nexora-*`)

| Token | Value | Role |
|---|---|---|
| emerald | `#087F72` | Authority; primary fill and text in light theme |
| teal | `#19C5B4` | Interaction; primary fill in dark theme |
| mint | `#58D6C3` | Selective highlights; accent text in dark theme |
| navy | `#101B2B` | Midnight; dark app background |
| graphite | `#182638` | Dark primary surface |
| cloud | `#F4F6F8` | Official light background (matches Phase 01) |
| midnight-deep | `#0B1420` | Deepest dark background |

### Semantic tokens

Components use only these. Values are plain hex so contrast can be verified by script.

| Token | Light | Dark |
|---|---|---|
| background | `#F4F6F8` | `#101B2B` |
| background-deep | `#E9EEF1` | `#0B1420` |
| surface / card | `#FFFFFF` | `#182638` |
| surface-secondary / muted | `#EAF0F2` | `#13202F` |
| surface-elevated / popover | `#FFFFFF` | `#203247` |
| foreground | `#142536` | `#F4F7FA` |
| muted-foreground (secondary text) | `#536273` | `#B4C0CD` |
| foreground-subtle (metadata) | `#5B6B7E` | `#92A2B3` |
| primary / primary-foreground | `#087F72` / `#FFFFFF` | `#19C5B4` / `#0B1420` |
| primary-hover | `#06695E` | `#3DD6C6` |
| secondary / secondary-hover | `#E3EAEE` / `#D6E0E6` | `#203247` / `#29405A` |
| accent / accent-foreground | `#DFF7F5` / `#066A5F` | `#1F4756` / `#58D6C3` |
| border | `#D8E0E7` | `#2A3B50` |
| input (control edge) | `#78889A` | `#6C7F98` |
| ring | `#087F72` | `#19C5B4` |
| destructive | `#C42B3A` | `#F58C96` |
| success | `#137A4B` | `#4ADE9B` |
| warning | `#8F5200` | `#F5B547` |
| info | `#1B63B8` | `#6DB3FF` |
| chart-1..5 | teal, bright teal, blue, amber, slate | teal, mint, blue, amber, grey |

Each status colour has a matching `-foreground` for filled use. Badges use the status colour
as text on a 12% tint of itself.

Notes on adjustments from the brief:
- Vibrant teal on white is about 2.2:1, so light theme uses emerald for text, primary fills and
  focus rings. Teal remains for fills that carry navy text.
- Muted text `#718092` is about 4.0:1 on white, so the light secondary and metadata tones are
  darker (`#536273`, `#5B6B7E`).
- `accent` follows shadcn's meaning: a subtle tinted surface for hover and selection.

### Theme scoping

Dark tokens live on `.dark`, light on `:root, .light`. Put `.light` or `.dark` on any element
to scope a theme to that subtree (the preview uses this to show both at once).
`@theme inline` keeps values resolved at the element so scoping works.

### Verification

`npm run check:contrast` (from `frontend/`) checks text pairs at 4.5:1, focus rings and control
borders at 3:1, filled controls, and badge tints, in both themes. It must pass before changing
colour tokens.

## 3. Typography

Geist Sans (UI) and Geist Mono (identifiers, metadata, figures), loaded locally by the
`geist` package. No other families.

| Utility | Use | Size / line height |
|---|---|---|
| `type-display` | Marketing hero only | 40 to 64px fluid / 1.05 |
| `type-h1` | Page heading | 32 to 44px fluid / 1.1 |
| `type-h2` | Section heading | 24 to 32px fluid / 1.2 |
| `type-h3` | Subsection | 20px / 1.3 |
| `type-h4` | Card heading | 16px / 1.4 |
| `type-body-lg` | Introductions | 18px / 1.65 |
| `type-body` | Reading text | 16px / 1.6 |
| `type-body-sm` | Descriptions, dense UI | 14px / 1.55 |
| `type-label` | Form labels | 13px, weight 500 |
| `type-caption` | Supporting detail | 12px / 1.4 |
| `type-button`, `type-nav` | Buttons, navigation | 14px, weight 500 |
| `type-eyebrow` | Section kickers | 12px uppercase, tracking 0.08em |
| `type-meta` | Mono metadata, tabular figures | 12px / 1.4 |

Headings: weight 600, negative tracking. Avoid heavier weights and compressed text.

## 4. Spacing, geometry and layout

- Spacing uses Tailwind's 4px scale. Layout tokens: `--page-gutter`, `--section-gap`,
  `--sidebar-width` (16rem), `--sidebar-width-collapsed` (4.5rem), `--topbar-height` (3.5rem),
  `--bottom-nav-height` (4rem).
- Breakpoints are Tailwind's defaults.
- Radii differ by role: `rounded-control-sm` 8px, `rounded-control` 10px,
  `rounded-control-lg` 12px, `rounded-menu` 12px, `rounded-card` 16px, `rounded-panel` 20px,
  `rounded-float` 24px; badges and avatars are fully round.
- Borders: hairline `border` is decorative; control edges use `border-input` (3:1 contrast).
- Elevation: `shadow-raised` (cards), `shadow-float` (menus, floating), `shadow-overlay` (dialogs).

## 5. Materials

| Material | Class | Use |
|---|---|---|
| A. Solid | `surface-solid` | Forms, tables, dense content, reading areas |
| B. Elevated | `surface-raised` + a shadow utility | Cards, menus, contextual panels |
| C. Translucent glass | `glass` | Navigation, floating controls, toolbars, selected overlays |
| D. Accent glass | `glass-accent` | Selected controls, rare brand moments |

Glass is built from CSS variables (`--glass-*`): translucent tint, blur and saturation,
a soft reflection (`::before`) and a graded edge light (`::after`). Each theme has one fixed tint.

Rules:
- Never put glass behind dense text or complex forms.
- Fallback opaque surfaces (`--glass-fallback`, `--glass-accent-fallback`) apply when
  `backdrop-filter` is unsupported, under `prefers-reduced-transparency`, and inside
  `[data-glass="off"]`.
- Use few glass layers per screen; backdrop blur is expensive.
- The interface must remain complete with glass off.

## 6. Motion

Principles: immediate feedback, natural transitions, controlled elasticity, interruptible
animation, state-driven animation, performance first, reduced-motion respect.

| Token | Value | Use |
|---|---|---|
| `--duration-instant` | 120ms | Press, hover, focus |
| `--duration-fast` | 160ms | Toggles, tabs, exits |
| `--duration-base` | 220ms | Menus, dialogs, thumbs |
| `--duration-slow` | 300ms | Sidebar, expanding panels |
| `--ease-standard` | cubic-bezier(0.2, 0, 0, 1) | Default |
| `--ease-exit` | cubic-bezier(0.4, 0, 1, 1) | Leaving elements |
| `--ease-spring` | `linear()` with about 4% overshoot (cubic-bezier fallback) | Selective spring |

Entrance and exit animations: `animate-nx-pop-in/out`, `animate-nx-fade-in/out`.
Only CSS transitions and keyframes are used; no animation library. Animate `transform`,
`opacity` and colour, not layout (the expandable panel animates grid rows deliberately).
`prefers-reduced-motion` reduces animation and transition durations to near zero globally.

## 7. Navigation principles (foundation only)

Role-specific navigation is not built yet. Principles: structured, collapsible desktop sidebar
with a clean top bar (search, notifications) and optional floating contextual elements; floating
translucent bottom navigation on mobile with safe-area padding, 48px minimum touch targets and a
clear active state, never covering forms or primary actions. The preview contains generic
demonstrations with placeholder labels only.

## 8. Iconography

Lucide only. Sizes 16, 20 or 24px; stroke 1.75 (2 when active); inactive icons use
`text-foreground-subtle`, active use `text-accent-foreground`. Icons next to text are
`aria-hidden`; icon-only buttons need an `aria-label`. Do not use icons as filler.

## 9. Components

Ten foundational components in `components/ui/` (shadcn/ui new-york style, Radix based where
behaviour is needed):

- **Button**: `primary`, `secondary`, `outline`, `ghost`, `destructive`, `glass`; sizes `sm`,
  `md`, `lg`, `icon`, `icon-sm`; `loading` (spinner, disabled, `aria-busy`); `asChild`.
- **Input**: default, focus, disabled, read-only, invalid (`aria-invalid="true"`).
- **Label**, **Separator**, **Avatar** (`sm`, `md`, `lg`), **Skeleton**.
- **Card**: `solid`, `elevated`, `inset`, `glass`.
- **Badge**: `neutral`, `brand`, `success`, `warning`, `destructive`, `info`, `outline`.
- **Dialog**: title required; overlay, spring entrance, focus trap from Radix.
- **Dropdown Menu**: items, checkbox items, labels, separators, shortcuts, destructive item.

Conventions: semantic tokens only, `cn()` for class merging, `data-slot` attributes,
no custom replacements for Radix behaviour, no abstractions beyond variants.

## 10. Theme handling

`components/theme/`: a small provider (no dependency) supporting `light`, `dark` and `system`,
stored in `localStorage` under `nexora-theme`. An inline script in the root layout applies the
class before first paint so there is no flash. System changes and other tabs stay in sync.

## 11. Accessibility requirements

- Text 4.5:1 (large text 3:1); control edges and focus indicators 3:1. Run `npm run check:contrast`.
- Visible focus on every interactive element (`ring` token).
- Semantic HTML, labelled controls, `aria-invalid` plus `aria-describedby` for errors.
- Dialogs need a title; icon-only buttons need labels.
- Respect `prefers-reduced-motion` and `prefers-reduced-transparency`.
- Touch targets at least 40px (48px for mobile navigation).

## 12. Deferred decisions

- Final logo artwork and lockups (see section 1).
- Role-specific navigation (recruiter, candidate, admin), public site layouts and page designs.
- Further components (tables as components, tabs, select, toast, etc.) as features need them.
- Whether to adopt a dedicated chart library and how chart tokens extend.


## Switch

`src/components/ui/switch.tsx` provides the reusable Nexora switch primitive.
Use `checked` with `onCheckedChange` for controlled state, or `defaultChecked`
for uncontrolled state. Provide an accessible name with `aria-label` or
`aria-labelledby`. Native button keyboard activation supports Space and Enter.
The component supports disabled state and reduced-motion preferences.
