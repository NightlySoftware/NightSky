import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-sans" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Nightly Software | Consultora Tecnológica Mexicana",
  description:
    "Transformamos negocios pequeños y medianos en empresas estructuradas, eficientes y escalables a través de tecnología a medida. Software, automatización y diseño web estratégico.",
  keywords: ["software a medida", "desarrollo web", "automatización", "ERP", "CRM", "transformación digital", "México"],
  authors: [{ name: "Nightly Software" }],
  openGraph: {
    title: "Nightly Software | Consultora Tecnológica Mexicana",
    description: "Recupera el control de tu negocio con tecnología a medida.",
    type: "website",
    locale: "es_MX",
  },
    generator: 'v0.app'
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
