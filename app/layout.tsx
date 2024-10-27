import type { Metadata } from "next"
import "./globals.css"
import React from "react"
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from "geist/font/sans"

export const metadata: Metadata = {
  title: "Vincent Fung's Website",
  description: "Vincent's personal website and portfolio.",
  keywords: ["software engineer", "machine learning", "sireoh", "computer science", "emily carr", "bcit", "vincent fung", "2d animation", "nextjs", "tailwindcss", "canada"],
  manifest: "manifest.json",
  openGraph: {
    images: "/favicon-32x32.png"
  },
  metadataBase: new URL("https://vincef.xyz")
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fafafa" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#181721" />
      </head>
      <body className={GeistSans.className}>{children}</body>
      <Analytics />
    </html>
  )
}