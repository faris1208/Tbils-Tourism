# Qatar destination landing page

## Purpose

Add a permanent, destination-first Qatar page at `/qatar`. It should inspire visitors to travel to Qatar, present flexible and changeable Qatar packages, and let a visitor submit a trip enquiry without leaving the page. The supplied Qatar artwork is inspiration only; this page must not be tied to a December campaign or fixed travel dates.

## Entry points

- Add `Qatar` to the primary site navigation, linking to `/qatar`.
- Add a featured Qatar destination card/CTA to the existing home page, linking to `/qatar`.
- All Qatar calls to action on the page should scroll to the on-page enquiry form.

## Experience and layout

The visual direction is editorial, warm, and refined: Doha lights at dusk, deep navy, sand, and gold accents. It should inherit the TBILS shell and remain clearly distinct from the existing generic homepage.

1. **Hero**: destination image, “Discover Qatar” heading, evergreen trip copy, and a plan-your-trip CTA.
2. **At a glance**: concise destination facts and a row of core experiences: Doha city culture, desert safari, museums, shopping, and family attractions.
3. **Featured packages**: reusable package cards with an offer label, title, duration, inclusion summary, and enquiry CTA. No fixed promotional date is baked into the page layout.
4. **Sample itinerary**: expandable or scannable day sequence demonstrating a typical Qatar trip, including city, desert, and leisure experiences.
5. **Why Qatar / travel guidance**: seasonal and planning context that remains broadly useful.
6. **Enquiry panel**: name, email, phone number, preferred travel date, traveller count, and trip notes. Client-side validation and a clear success state will confirm submission in the current prototype.

## Assets

Use clearly named remote-image placeholders during implementation. The component should make it straightforward to replace the hero and section images with the user-provided Qatar assets later, without structural changes.

## Architecture

- `src/app/qatar/page.tsx` defines page metadata and renders the Qatar landing component.
- `src/components/marketplace/qatar-landing.tsx` owns page-only interactions: the enquiry form and any itinerary expansion.
- Qatar-specific styles live in `src/app/globals.css`, namespaced under `qatar-*` classes to avoid altering existing pages.
- Existing shared `Header`, `Footer`, and `Link` patterns remain in use.

## Responsiveness and accessibility

- Page sections collapse from multi-column layouts to one column at narrow widths.
- Form fields have associated labels, required fields expose validation feedback, and submit success is announced accessibly.
- Decorative imagery is excluded from the accessibility tree; informative imagery gets useful alternative text.
- All interactive elements retain visible keyboard focus and reduced-motion preferences are respected.

## Verification

- Run lint and production build.
- Confirm `/qatar` loads directly, navigation links resolve, homepage CTA resolves, the mobile layout works, and the form validates/submits in the browser.

## Deliberate exclusions

- No live payments, CRM integration, or email dispatch are included in this first page implementation.
- No date-specific campaign copy or pricing is hard-coded.
