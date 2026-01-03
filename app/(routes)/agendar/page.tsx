"use client"

import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { Navigation } from "@/components/landing/navigation"
import { Footer } from "@/components/landing/footer"
import { motion } from "motion/react"
import { Calendar, Video, Clock, CheckCircle } from "lucide-react"

export default function AgendarPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "diagnostico" })
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#754c76" },
          dark: { "cal-brand": "#9a6b9b" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Premium Design with Background Image */}
      <section className="relative pt-28 pb-16 px-6 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url('/images/landing_page/CTA.jpg')` }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 mb-8 border border-white/20"
          >
            <Calendar className="w-4 h-4 text-[#abc0fc]" />
            <span className="text-sm font-medium text-white/90">Consulta sin compromiso</span>
          </motion.div>
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] mb-6 text-white"
          >
            Platiquemos sobre tu proyecto
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
          >
            Elige el horario que mejor te convenga. Tú seleccionas la duración según lo que necesites discutir.
          </motion.p>
          
          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-white/80">
              <Clock className="w-4 h-4 text-[#abc0fc]" />
              <span>15, 25 o 45 min</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-white/80">
              <Video className="w-4 h-4 text-[#abc0fc]" />
              <span>Videollamada</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 text-white/80">
              <CheckCircle className="w-4 h-4 text-[#abc0fc]" />
              <span>100% Gratuito</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calendar Embed Section */}
      <section className="px-6 pt-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
            <Cal
              namespace="diagnostico"
              calLink="nightlysoftware/diagnostico"
              style={{ width: "100%", height: "700px", overflow: "hidden" }}
              config={{ layout: "month_view" }}
            />
          </div>
        </motion.div>
      </section>

      <Footer hideCta />
    </main>
  )
}
