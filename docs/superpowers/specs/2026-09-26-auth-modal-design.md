# Authentication Modal Design

## Scope

Build a client-side authentication modal with four views: log in, sign up, forgot password, and reset password.

## Behaviour

- Navbar Log in opens the modal.
- Forms validate required fields, email format, password confirmation, and terms acceptance for sign-up.
- Password fields offer show/hide controls.
- Forgot password confirms a local reset-link request without sending email.
- Reset password confirms a local password update without storing credentials.
- Escape, backdrop click, and close controls dismiss the dialog.

## Boundary

This is frontend-only. No credentials are persisted, no email is sent, and no authentication session is created until backend integration.
