"use client"

import { motion } from "motion/react"
import { AlertCircle, FileSpreadsheet, MessageCircle, Clock } from "lucide-react"

const painPoints = [
  {
    icon: FileSpreadsheet,
    title: "Excel infinitos",
    description: "Hojas de cálculo que nadie entiende y datos duplicados por todos lados.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp perdidos",
    description: "Información crítica enterrada en chats que nunca vuelves a encontrar.",
  },
  {
    icon: Clock,
    title: "Tareas repetitivas",
    description: "Horas perdidas haciendo lo mismo una y otra vez, todos los días.",
  },
  {
    icon: AlertCircle,
    title: "Sin visibilidad",
    description: "No sabes qué está pasando en tu negocio hasta que ya es tarde.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.04em] leading-[1.1] text-balance">
              ¿Tu éxito se está convirtiendo en tu mayor problema?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Crecer duele cuando tus sistemas no están preparados. Si sigues dependiendo de herramientas improvisadas,
              tienes un techo de cristal.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">No necesitas trabajar más horas</strong>; necesitas mejores
              herramientas. Nosotros las construimos para ti.
            </p>
          </motion.div>

          {/* Right: Pain Points Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {painPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group rounded-xl bg-card border border-border p-5 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <point.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-medium mb-1 tracking-[-0.02em]">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
