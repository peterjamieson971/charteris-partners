import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://charteris-partners.vercel.app'),
  title: {
    default: "Charteris Partners | AI Solutions in 30 Days",
    template: "%s | Charteris Partners"
  },
  description: "Business Technologists who build AI solutions in 30 days, not PowerPoints. Real software that cuts costs by 30%, creates new revenue streams, and stays with you forever.",
  keywords: ["AI consulting", "AI implementation", "enterprise AI", "AI solutions", "business technology", "AI strategy", "AI transformation", "30-day AI sprint", "AI developers"],
  authors: [{ name: "Charteris Partners" }],
  creator: "Charteris Partners",
  publisher: "Charteris Partners",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://charteris-partners.vercel.app',
    siteName: 'Charteris Partners',
    title: 'Charteris Partners | AI Solutions in 30 Days',
    description: 'Business Technologists who build AI solutions in 30 days, not PowerPoints. Real software that cuts costs by 30%, creates new revenue streams, and stays with you forever.',
    images: [
      {
        url: '/images/Transparent_Navy_Blue_with_tagline.png',
        width: 1200,
        height: 630,
        alt: 'Charteris Partners - Business Technologists Who Build',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Charteris Partners | AI Solutions in 30 Days',
    description: 'Business Technologists who build AI solutions in 30 days, not PowerPoints.',
    images: ['/images/Transparent_Navy_Blue_with_tagline.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: 'google-site-verification-code',
    // yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Charteris Partners",
    "description": "Business Technologists who build AI solutions in 30 days, not PowerPoints",
    "url": "https://charteris-partners.vercel.app",
    "logo": "https://charteris-partners.vercel.app/images/Transparent_Navy_Blue__1_.png",
    "image": "https://charteris-partners.vercel.app/images/Transparent_Navy_Blue_with_tagline.png",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@charterispartners.com",
      "contactType": "Customer Service"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceType": [
      "AI Consulting",
      "AI Implementation",
      "AI Strategy",
      "Enterprise AI Solutions",
      "Machine Learning",
      "AI Development"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "AI Strategy",
      "Enterprise AI",
      "AI Implementation"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <Breadcrumbs />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
