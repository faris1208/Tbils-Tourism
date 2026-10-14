import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { MarketplaceProvider } from "@/components/marketplace/marketplace-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TBILS | Discover your next escape",
    template: "%s | TBILS",
  },
  description: "Curated holiday experiences and effortless escapes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MarketplaceProvider><Header /><main id="main-content">{children}</main><Footer /></MarketplaceProvider>
      </body>
    </html>
  );
}
