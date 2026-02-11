import { ContactProvider } from "@/components/contact-provider"
import FloatingCTA from "@/components/floating-cta"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import ScrollToTopHandler from "@/components/ScrollToTopHandler"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Best Overseas Education Consultants in Rajkot, Gujarat | Honest Immigration Group",
    template: "%s | Honest Immigration Group Rajkot",
  },
  description:
    "Honest Immigration Group in Rajkot, Gujarat, is your trusted local expert for overseas education, student visas, and study abroad guidance. Personalized support for USA, UK, Canada, Australia, and more. 1000+ Rajkot students placed. Visit our Gujarat office for a free consultation!",
  keywords: [
    "study abroad Rajkot",
    "overseas education Rajkot",
    "visa assistance Rajkot",
    "IELTS coaching Rajkot",
    "PTE preparation Rajkot",
    "TOEFL training Rajkot",
    "SAT coaching Rajkot",
    "GMAT preparation Rajkot",
    "GRE coaching Rajkot",
    "immigration consultancy Rajkot",
    "university admission Rajkot",
    "student visa Rajkot",
    "education loan Rajkot",
    "scholarship guidance Rajkot",
    "Rajkot",
    "Gujarat",
    "India",
    "study in USA Rajkot",
    "study in Canada Rajkot",
    "study in Australia Rajkot",
    "study in UK Rajkot",
    "study in Dubai Rajkot",
    "study in New Zealand Rajkot",
    "Rajkot education consultant",
    "Gujarat study abroad",
    "Rajkot AEO",
    "Rajkot FAQ",
    "Rajkot Q&A",
  ],
  authors: [{ name: "Honest Immigration Group" }],
  creator: "Honest Immigration Group",
  publisher: "Honest Immigration Group",
  category: "Education",
  classification: "Education Consultancy",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.honestimmigrationgroup.in",
    siteName: "Honest Immigration Group - Rajkot, Gujarat",
    title: "Honest Immigration Group Rajkot - Best Study Abroad Consultant in Gujarat",
    description:
      "Honest Immigration Group in Rajkot, Gujarat, transforms your educational aspirations into reality. 1000+ students placed. Expert guidance for USA, Canada, Australia, UK, Dubai, New Zealand. Local expertise, global opportunities.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Honest Immigration Group Rajkot - Best Overseas Education Consultant in Gujarat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Honest Immigration Group Rajkot - Study Abroad Expert in Gujarat",
    description:
      "Expert overseas education consultancy in Rajkot, Gujarat. Student visas for USA, Canada, Australia, UK. 1000+ successful placements. Local support, global opportunities.",
    images: ["/og-image.jpg"],
    creator: "@honestimmigration",
    site: "@honestimmigration",
  },
  facebook: {
    appId: "your-facebook-app-id",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-domain-verification",
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  alternates: {
    canonical: "https://www.honestimmigrationgroup.in",
    languages: {
      "en-US": "https://www.honestimmigrationgroup.in",
      "hi-IN": "https://www.honestimmigrationgroup.in/hi",
      "gu-IN": "https://www.honestimmigrationgroup.in/gu",
    },
  },
  other: {
    "google-site-verification": "ADD_YOUR_VERIFICATION_CODE_HERE",
    "facebook-domain-verification": "your-facebook-domain-verification",
    "p:domain_verify": "your-pinterest-verification",
  },
    generator: 'v0.dev'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#FF7A00",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        {/* AEO Meta Tags for Rajkot, Gujarat */}
        <meta property="og:locale" content="en_IN" />
        <meta name="geo.placename" content="Rajkot" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.position" content="22.3039;71.8024" />
        <meta name="ICBM" content="22.3039, 71.8024" />
      </head>
      <body className={inter.className}>
        <ContactProvider>
          <ScrollToTopHandler />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingCTA />
        </ContactProvider>
      </body>
    </html>
  )
}
