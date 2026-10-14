# TBILS Holiday Marketplace Rebuild Design

## Goal

Rebuild `TBILS — Holiday Marketplace Prototype.html` as a componentized Next.js frontend. Preserve the prototype's visual hierarchy, responsive behavior, local mock data, and browser-only interactions while replacing direct DOM manipulation with typed React state.

## Scope

### Marketplace home (`/`)

- Rotating hero imagery with primary calls to action
- Holiday search panel with destination suggestions and date selection
- Destination categories and featured package cards
- Custom trip-builder callout and modal
- Trust/value section and shared footer

### Holiday listing (`/holidays`)

- Local typed package catalog
- Destination, duration, style, and price filtering
- Sorting and result count
- Package cards, save state, and no-results state

### Package detail (`/holidays/[slug]`)

- Slug-resolved package data, image gallery, and lightbox
- Inclusions, accommodation, and expandable itinerary
- Sticky booking summary with travellers, add-ons, and calculated total
- Responsive mobile booking call-to-action

### Shared frontend interactions

- Header navigation, scroll treatment, and toasts
- Date picker state, saved-package state, chat drawer, and custom-trip modal
- All interactions are client-only and reset on refresh.

## Architecture

- `src/lib/packages.ts` owns the typed local catalog and its filter helpers.
- `src/components/layout/` owns global chrome.
- `src/components/marketplace/` owns reusable marketplace components: cards, search, filters, galleries, booking, trip builder, and chat.
- Route components compose these boundaries and contain metadata only. Interactive leaves are marked client components; data and page layout remain server components where possible.
- Images use the existing prototype's remote image sources for this visual prototype. A controlled image pipeline is deferred.

## Data and State

- A `HolidayPackage` type provides title, slug, destination, images, duration, party size, style, price, inclusions, hotels, and itinerary.
- Listing filter state lives in the listing-page client component and derives results from the catalog.
- Detail booking state lives only in the booking-summary client component and derives totals from the package base price, traveller count, and selected add-ons.
- Saved state, toast state, and chat state are local UI state. No persistence, backend, account, payment, or checkout requests are made.

## UX and Accessibility

- Retain the prototype palette, editorial type scale, rounded cards, and navy/blue/sand/gold hierarchy.
- Provide semantic headings, labels, landmarks, focus styles, keyboard close behavior for overlays, and reduced-motion support.
- Adapt grids, search inputs, filters, gallery, and booking action for narrow screens.

## Verification

- Run ESLint and TypeScript checks.
- Compile with Next's webpack builder; this environment prevents Turbopack's PostCSS worker from binding its internal local port.
- Smoke test `/`, `/holidays`, and a known package slug.
- Manually test filter/sort, save state, gallery keyboard close, itinerary expansion, traveller/add-on totals, and modal/drawer close controls.

## Deferred Work

- Backend catalog and availability
- Authentication and persistent wishlists
- Real calendar inventory, booking, checkout, payments, and confirmation
- CMS and owned/optimized production image assets

## Review

The design has one bounded frontend scope. Its routes, data contracts, state boundaries, verification steps, and exclusions agree with the implementation goal; it contains no placeholders or contradictory requirements.
