import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Vardhaka Store - Parfum Lokal Berkualitas Premium",
  description:
    "Wangi yang Meninggalkan Kesan. Brand lokal parfum dan body mist berkualitas premium dengan aroma eksotis dan formula tahan lama.",
  keywords: "parfum lokal, body mist, parfum premium, Vardhaka Store, parfum Indonesia",
  openGraph: {
    title: "Vardhaka Store - Parfum Lokal Berkualitas Premium",
    description: "Wangi yang Meninggalkan Kesan. Brand lokal parfum dan body mist berkualitas premium.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
