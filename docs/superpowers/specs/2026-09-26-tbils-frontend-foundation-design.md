# TBILS Frontend Foundation Design

## Scope

Create the initial frontend foundation for TBILS using the latest stable Next.js App Router, TypeScript, Tailwind CSS, ESLint, and npm. This milestone establishes project structure and navigable page shells; it does not recreate the prototype interface or add backend integrations.

## Routes

- `/` — marketplace home shell
- `/holidays` — holiday-listing shell
- `/holidays/[slug]` — package-detail shell

The shared header and footer will connect these routes so that the starting information architecture is usable.

## Project Structure

- `src/app/` owns route files, page composition, global styles, and metadata.
- `src/components/layout/` contains shared site chrome and the page container.
- `src/components/ui/` is reserved for genuinely reusable presentational primitives.
- `src/lib/` will hold typed local mock data and helpers once page content is built. Its public contracts must be easy to replace with API clients.
- Route-specific components will live near their route until they demonstrate a need for reuse.

## Styling and UX Baseline

Create a minimal design-token layer from the prototype: navy, blue, sand, gold, neutral borders, typography scale, spacing, radii, and shadows. Do not build the prototype's visual sections in this milestone.

The baseline must support responsive layouts, semantic landmarks, keyboard navigation, visible focus states, and reduced-motion preferences.

## Deferred Work

- Final home, listing, and package-detail UI
- Search, filters, wishlist, booking, and checkout behavior
- Authentication and account pages
- Backend, CMS, APIs, analytics, and payment integration
- Production content and image pipeline

## Verification

- Run lint, TypeScript validation through the production build, and a route smoke test.
- Manually confirm `/`, `/holidays`, and `/holidays/[slug]` render.
- Manually confirm the shared navigation works at desktop and narrow viewport widths.

## Review

This specification contains no placeholders, has one bounded setup milestone, and intentionally separates frontend foundation from prototype conversion and product functionality.
