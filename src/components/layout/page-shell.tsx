import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, children }: PageShellProps) {
  return (
    <section className="page-shell" aria-labelledby="page-title">
      <div className="page-shell__content">
        <p className="page-shell__eyebrow">{eyebrow}</p>
        <h1 id="page-title">{title}</h1>
        <div className="page-shell__body">{children}</div>
      </div>
    </section>
  );
}
