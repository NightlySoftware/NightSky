"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Button3D } from "@/components/ui/button-3d"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section id="diagnostico" className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/abstract-dark-purple-and-blue-gradient-waves--prof.jpg')`,
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-[#14102d]/85" />

          {/* Subtle ambient glow */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#abc0fc]/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 p-8 md:p-16 text-center text-white">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.04em] leading-[1.1] mb-6 text-balance"
            >
              Deja de posponer la modernización de tu empresa
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/70 max-w-2xl mx-auto mb-8"
            >
              En Nightly Software transformamos desafíos empresariales en oportunidades digitales. Somos tu socio
              tecnológico para crecer con orden y eficiencia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button3D variant="pastel" size="lg" asChild>
                <Link href="#contacto">
                  Hablar con un consultor
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button3D>
              <Button3D variant="outline-dark" size="lg" asChild>
                <Link href="#servicios">Ver servicios</Link>
              </Button3D>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-sm text-white/50 mt-8"
            >
              Diagnóstico inicial gratuito. Sin compromisos.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
