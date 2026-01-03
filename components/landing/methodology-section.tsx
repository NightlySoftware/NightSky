"use client"
import { motion } from "motion/react"
import { Search, Lightbulb, Code, Rocket, Users, ShieldCheck, TrendingUp, Zap } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendemos tu dolor. Analizamos tu operación actual para identificar cuellos de botella y oportunidades.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Estrategia",
    description: "Diseñamos el flujo ideal. Creamos un plan de acción claro con tecnologías específicas para tu caso.",
  },
  {
    icon: Code,
    number: "03",
    title: "Desarrollo",
    description: "Construimos la solución. Desarrollo ágil con entregas incrementales para que veas el progreso.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Implementación",
    description: "Te enseñamos a usarla. Capacitación, soporte continuo y mejoras para que siempre estés al día.",
  },
]

const commitments = [
  {
    icon: Users,
    title: "Pensamos en Tus Clientes",
    description: "Diseñamos todo pensando en que sea fácil y agradable de usar.",
    image: "/images/landing_page/1.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad Garantizada",
    description: "Tu información y la de tus clientes está siempre protegida.",
    image: "/images/landing_page/2.jpg",
  },
  {
    icon: TrendingUp,
    title: "Crece con Tu Negocio",
    description: "Lo que construimos hoy funciona cuando tu empresa sea 10 veces más grande.",
    image: "/images/landing_page/3.jpg",
  },
  {
    icon: Zap,
    title: "Resultados que Se Ven",
    description: "Creamos soluciones que realmente mejoran tu negocio, no solo se ven bonitas.",
    image: "/images/landing_page/4.jpg",
  },
]

export function MethodologySection() {
  return (
    <section id="metodologia" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-[#abc0fc]/10 dark:bg-[#abc0fc]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">Nuestra Metodología</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.04em] leading-[1.1] mb-4">
            Ordenamos antes de programar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Seguimos una metodología probada que garantiza resultados excepcionales en cada proyecto.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="rounded-2xl bg-card border border-border p-6 h-full hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <step.icon size={20} className="text-primary" />
                  </div>
                  <span className="text-3xl font-light text-muted-foreground/30 tracking-[-0.02em]">{step.number}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2 tracking-[-0.02em]">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {i < steps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-center tracking-[-0.04em] leading-[1.1]">
            Nuestro Compromiso Contigo
          </h3>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
            Nos comprometemos a construir soluciones seguras, escalables y centradas en el usuario.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[1/1] mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-100 scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <h4 className="font-semibold text-base mb-1 tracking-[-0.02em] text-center">{item.title}</h4>
                <p className="text-sm text-muted-foreground text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
