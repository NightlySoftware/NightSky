import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Nightly Software | Desarrollo de Software a Medida",
  description:
    "Desarrollamos software a medida para pequeños y medianos negocios.",
  keywords: ["software a medida", "desarrollo web", "automatización", "ERP", "CRM", "transformación digital", "México"],
  authors: [{ name: "Nightly Software" }],
  openGraph: {
    title: "Nightly Software | Desarrollo de Software a Medida",
    description: "Desarrollamos software a medida para pequeños y medianos negocios.",
    type: "website",
    locale: "es_MX",
    siteName: "Nightly Software",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#754c76",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider defaultTheme="system" storageKey="nightly-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
