# Marketplace Frontend Flows Design

## Scope

Improve the TBILS frontend without backend services. All state remains browser-local for the active session.

## Features

- Home search writes destination, category, price and traveller choices into listing URL parameters.
- Listing reads URL parameters, applies filters, and updates them as a user changes filters.
- Shared session wishlist synchronises saved packages across cards and package detail.
- A responsive menu replaces hidden desktop navigation at narrow widths.
- Trip Builder opens as an accessible dialog, collects local preferences, and generates a suggested mock itinerary.
- Detail pages use package-specific itinerary, accommodation, inclusions and exclusions; unknown slugs render a 404.
- Detail pages provide an accessible gallery, departure-date picker, add-on calculations, and a booking-step confirmation dialog.
- The header overlays only the home hero and uses a solid background elsewhere.

## Boundaries

- No authentication, database, payment, checkout, real availability, or persistent user data.
- Messages and confirmation dialogs explicitly describe actions as frontend demonstrations.
- Existing package mock data remains the source of truth.

## Verification

- ESLint, TypeScript, webpack production compilation, and route smoke tests.
- Manually test URL filters, mobile menu, saved state, dialog keyboard close, gallery navigation, booking calculation, and unknown slug handling.

## Review

The work is one frontend-only milestone. It does not imply backend behavior, and each interaction has a local, clearly bounded state owner.
