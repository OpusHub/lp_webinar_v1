# Implementation Plan - Opus Webinar Landing Page

## Goal
Develop a high-conversion, visually stunning landing page for the Opus Webinar "O Novo DNA do E-commerce 2026", strictly following the `wireframe.md` and "Beyond the Wireframe" concepts.

## User Review Required
> [!IMPORTANT]
> **Stack Decision**: I will use **Next.js 14 (App Router)** + **Tailwind CSS** + **Framer Motion** for animations. This ensures the requested performance and visual quality.
> **Directory**: I will attempt to initialize the project in the current directory. If it fails due to existing files, I will create an `app` subdirectory.

## Proposed Changes

### 1. Project Setup
- Initialize Next.js project.
- Install dependencies: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`.
- Configure `tailwind.config.ts` with the brand colors:
    - Primary: `#050505` (Deep Black)
    - Accent: `#6a11cb` (Purple)
    - Neon: `#00f2fe` (Cyan)
- Configure Fonts: `Montserrat` (Headings) and `Roboto` (Body) via `next/font/google`.

### 2. Components Structure
I will create a modular structure in `components/`:

#### [NEW] `components/ui/`
- `Button.tsx`: Reusable CTA with neon glow and hover effects.
- `Input.tsx` / `Select.tsx`: Custom form elements with glassmorphism and focus states.
- `Card.tsx`: Glassmorphism container with noise texture.

#### [MODIFY] [Hero.tsx](file:///Users/yulo/Documents/Projetos - Antigravity/LP Webinar Opus/web-app/components/sections/Hero.tsx)

### Tension Section
#### [MODIFY] [Tension.tsx](file:///Users/yulo/Documents/Projetos - Antigravity/LP Webinar Opus/web-app/components/sections/Tension.tsx)
- Update layout to: Title -> Image -> Text.
- Replace SVG chart with generated image `collapse_chart_neon.png`.
- Redesign "Group 1 vs Group 2" cards with premium glassmorphism and hover effects.

### Secrets Section
#### [NEW] `components/sections/`
- `Hero.tsx`: The main conversion area. Two columns (Copy + Form).
- `Tension.tsx`: "The Game Has Changed" section with the graph visualization.
- `Secrets.tsx`: The 3 secrets cards.
- `SocialProof.tsx`: Video embed section (YouTube Shorts wrapper).
- `Authority.tsx`: Mentors' bios.
- `Footer.tsx`: Simple footer.

#### [NEW] `components/background/`
- `ParticlesBackground.tsx`: Interactive particle system (using `react-tsparticles` or custom Canvas).

### 3. Page Assembly
#### [MODIFY] `app/page.tsx`
- Assemble all sections.
- Implement scroll reveal animations using Framer Motion.

#### [MODIFY] `app/layout.tsx`
- Apply global dark theme and fonts.

## Verification Plan
### Automated Tests
- Build verification: `npm run build` to ensure no type errors.
- Lint check: `npm run lint`.

### Manual Verification
- **Visual Check**: Verify "Dark Mode Premium" aesthetic, Neon accents, and Glassmorphism.
- **Responsiveness**: Check Mobile (stacked layout) vs Desktop (2 columns).
- **Interactivity**: Test form inputs, button hovers, and scroll animations.
- **Video**: Ensure YouTube Shorts embed looks correct (9:16 aspect ratio).
