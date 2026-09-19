import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import PersonSchema from "@/components/seo/PersonSchema";
import { business, SITE_URL } from "@/config/business";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const OG_IMAGE = {
  url: `${SITE_URL}/logo.webp`,
  width: 1376,
  height: 768,
  alt: business.name,
};

export const viewport: Viewport = {
  themeColor: "#e8b84b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${business.name} | ${business.tagline}`,
    template: `%s | ${business.name}`,
  },
  description: business.description,

  applicationName: business.name,
  authors: [
    { name: business.owner.name, url: `${SITE_URL}/about` },
    { name: business.name, url: SITE_URL },
  ],
  creator: business.owner.name,
  publisher: business.name,
  category: "Transportation",

  keywords: [
    "car lift Abu Dhabi",
    "car lift Dubai",
    "car lift UAE",
    "Abu Dhabi to Dubai car lift",
    "Dubai to Abu Dhabi car lift",
    "monthly car lift Abu Dhabi",
    "daily car lift service UAE",
    "inter-emirate transport",
    "car pool UAE",
    "private car hire Abu Dhabi",
    "employee transportation UAE",
    "corporate car lift",
    "car lift Ajman",
    "car lift Al Ain",
    "quick car lift service",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_URL,
    siteName: business.name,
    title: `${business.name} | ${business.tagline}`,
    description: business.description,
    images: [OG_IMAGE],
  },

  twitter: {
    card: "summary_large_image",
    title: `${business.name} | ${business.tagline}`,
    description: business.description,
    images: [OG_IMAGE.url],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Geo / local SEO meta tags
  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi",
    "language": "en-AE",
    "google-site-verification": "a9dO1qssB87HyJ4udz8eQRPVlQZ0tRcuvGZkxqCmlsA",
    // Add Bing Webmaster verification here:
    // "msvalidate.01": "YOUR_CODE_HERE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to Google Fonts CDN for faster font load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-3 focus:py-2 focus:text-sm focus:text-background"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCTABar />
        <OrganizationSchema />
        <PersonSchema />
      </body>
    </html>
  );
}
