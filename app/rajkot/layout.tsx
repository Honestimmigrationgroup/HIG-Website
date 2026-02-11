import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Study Abroad from Rajkot, Gujarat | Best Education Consultant",
  description: "Honest Immigration Group in Rajkot offers expert study abroad guidance for USA, UK, Canada, Australia. Free counseling, visa assistance, IELTS coaching. Call +91-281-258-8121",
  keywords: [
    "study abroad from Rajkot",
    "study abroad consultant in Rajkot",
    "overseas education consultant Rajkot",
    "education consultant Rajkot Gujarat",
    "IELTS coaching Rajkot",
    "study visa Rajkot",
    "USA student visa Rajkot",
    "Canada study consultant Rajkot",
    "Australia education counselor Rajkot",
    "UK universities Rajkot",
    "Rajkot study abroad agency",
    "best study abroad consultant Rajkot",
  ],
  openGraph: {
    title: "Study Abroad Consultant in Rajkot, Gujarat - Honest Immigration Group",
    description: "Expert overseas education guidance in Rajkot. 1000+ students placed. Free consultation. Visa assistance for USA, UK, Canada, Australia.",
    url: "https://honestimmigrationgroup.in/rajkot",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://honestimmigrationgroup.in/rajkot",
  },
}

export default function RajkotLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
