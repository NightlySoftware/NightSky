"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Button3D } from "@/components/ui/button-3d"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/#servicios", label: "Servicios" },
    { href: "/#metodologia", label: "Metodología" },
    { href: "/precios", label: "Precios WordPress" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#171717]/95 backdrop-blur-xl border-b border-slate-800" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/nightly-rounded.png"
              alt="Nightly Software"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-semibold text-white tracking-[-0.02em]">Nightly Software</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800" asChild>
              <Link href="/#contacto">Contacto</Link>
            </Button>
            <Button3D size="sm" asChild>
              <Link href="/agendar">Agendar Reunión</Link>
            </Button3D>
          </div>

          {/* Mobile: Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              className="p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 pt-4">
                  <Button3D variant="outline" size="sm" className="text-white border-slate-700" asChild>
                    <Link href="/#contacto">Contacto</Link>
                  </Button3D>
                  <Button3D size="sm" asChild>
                    <Link href="/agendar">Agendar Reunión</Link>
                  </Button3D>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
