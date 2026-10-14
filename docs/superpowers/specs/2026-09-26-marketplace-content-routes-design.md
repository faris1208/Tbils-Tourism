# Marketplace Content Routes Design

## Goal

Remove all “coming soon” toasts by providing meaningful frontend routes for every navigational destination. Keep compact, task-focused interactions in dialogs.

## Routes

- Explore: `/holidays`, `/tours`, `/experiences`, `/destinations`, `/deals`, `/travel-guides`
- Travel: `/flights`, `/hotels`, `/transfers`, `/insurance`, `/visa-assistance`
- Company: `/about`, `/contact`, `/blog`, `/careers`
- Support/legal: `/help-centre`, `/manage-booking`, `/cancellation`, `/refunds`, `/terms`, `/privacy`, `/cookies`

Each route will use typed local content and a reusable page template rather than dead links.

## Dialogs

- Wishlist: saved packages for the current session
- Log in: frontend-only sign-in form
- Plan My Trip: custom-trip planner
- Booking: current package booking-step confirmation

Dialogs must support labelled controls, Escape close, backdrop close, and focus-visible controls.

## Boundaries and Verification

No backend, authentication, payments, or persistence is implied. Verify navigation for every header/footer link, dialog close controls, lint, TypeScript, and production compilation.
