import type { Metadata } from "next";

import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eroid.vercel.app"),
  title: {
    default: "Eorid — Your private digital world",
    template: "%s | Eorid",
  },
  description:
    "Eorid is a private social and AI platform designed around you, your conversations, your files, and your personal AI.",
  applicationName: "Eorid",
  keywords: [
    "Eorid",
    "private social platform",
    "personal AI",
    "AI assistant",
    "private messaging",
  ],
  authors: [{ name: "Eorid" }],
  creator: "Eorid",
  publisher: "Eorid",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Eorid",
    title: "Eorid — Your private digital world",
    description:
      "A private social and AI platform designed around you.",
    url: "https://eroid.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eorid — Your private digital world",
    description:
      "A private social and AI platform designed around you.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Eorid",
      url: "https://eroid.vercel.app",
      description:
        "A private social and AI platform designed around you.",
    },
    {
      "@type": "WebSite",
      name: "Eorid",
      url: "https://eroid.vercel.app",
      description:
        "Your private digital world.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}
