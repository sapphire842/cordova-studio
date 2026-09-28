import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { githubPagesOrigin, siteUrl, withBasePath } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(`${githubPagesOrigin}/`),
  title: "The Córdova Studio | Interior Architecture & Design",
  description:
    "Interior architecture and design for expressive, livable homes across the San Francisco Bay Area.",
  keywords: [
    "interior design",
    "interior architecture",
    "Bay Area",
    "Walnut Creek",
    "San Francisco",
    "space planning",
    "The Córdova Studio",
    "Omar Córdova García",
  ],
  openGraph: {
    title: "The Córdova Studio | Interior Architecture & Design",
    description:
      "Interior architecture and design for expressive, livable homes.",
    url: siteUrl,
    siteName: "The Córdova Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: withBasePath("/images/projects/space planning/cover.jpg"),
        width: 1200,
        height: 630,
        alt: "Warm California interior by The Córdova Studio",
      },
    ],
  },
  icons: {
    icon: [
      { url: withBasePath("/favicon.ico"), sizes: "any" },
      { url: withBasePath("/favicon.png"), type: "image/png", sizes: "256x256" },
      { url: withBasePath("/icon.png"), type: "image/png", sizes: "512x512" },
    ],
    shortcut: [withBasePath("/favicon.ico")],
    apple: [{ url: withBasePath("/apple-icon.png"), sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4W4V7SRB3W"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4W4V7SRB3W');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
