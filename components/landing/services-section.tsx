"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  Code2,
  Workflow,
  Globe,
  BrainCircuit,
  Database,
  Palette,
  MessageSquare,
  BarChart3,
  Settings,
} from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Database,
    title: "Software a Medida",
    subtitle: "ERP / CRM",
    description:
      "Centralizamos toda tu información en una sola plataforma segura y accesible. Clientes, inventario, ventas, todo en un solo lugar.",
  },
  {
    icon: Workflow,
    title: "Automatización",
    subtitle: "Flujos de Trabajo",
    description:
      "Conectamos tus herramientas actuales para que los datos viajen solos. Adiós a la entrada manual de datos y errores humanos.",
  },
  {
    icon: Globe,
    title: "Desarrollo Web",
    subtitle: "Corporativo",
    description:
      "No solo una cara bonita. Sitios web rápidos, optimizados para conversión y conectados a tus sistemas internos.",
  },
  {
    icon: BrainCircuit,
    title: "Asistentes con IA",
    subtitle: "Soporte 24/7",
    description:
      "Chatbots inteligentes que atienden a tus clientes mientras duermes, mejorando la satisfacción y reduciendo costos.",
  },
  {
    icon: Code2,
    title: "E-Commerce",
    subtitle: "Alto Impacto",
    description:
      "Tiendas online diseñadas para vender, con catálogos dinámicos, pasarelas seguras e integración con tu inventario.",
  },
  {
    icon: Palette,
    title: "Diseño UI/UX",
    subtitle: "Estratégico",
    description:
      "Interfaces que cautivan y convierten. Diseñamos pensando en tus usuarios para máxima satisfacción y lealtad.",
  },
]

const featureShowcase = [
  {
    icon: MessageSquare,
    title: "Centraliza la comunicación",
    description: "Todos tus canales de comunicación en un solo lugar, sin perder ningún mensaje importante.",
    image: "/modern-dashboard-showing-unified-inbox-with-messag.jpg",
  },
  {
    icon: BarChart3,
    title: "Analítica en tiempo real",
    description: "Dashboards personalizados que te muestran exactamente lo que necesitas saber de tu negocio.",
    image: "/analytics-dashboard-with-charts-and-graphs-showing.jpg",
  },
  {
    icon: Settings,
    title: "Automatiza lo repetitivo",
    description: "Configura flujos de trabajo que se ejecutan solos, liberando tiempo para lo importante.",
    image: "/workflow-automation-interface-with-connected-nodes.jpg",
  },
]

export function ServicesSection() {
  const [selectedFeature, setSelectedFeature] = useState(0)

  return (
    <section id="servicios" className="py-24 bg-card/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#14102d]/5 dark:bg-[#abc0fc]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">Nuestros Servicios</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.04em] leading-[1.1] mb-4">
            ¿Qué podemos hacer por tu empresa?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Te ayudamos a digitalizar tu negocio con soluciones que realmente funcionan y generan resultados medibles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl bg-card border border-border p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 overflow-hidden"
            >
              {/* Consistent ambient color on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#abc0fc]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon size={24} className="text-primary" />
                  </div>
                </div>
                <div className="mb-2">
                  <h3 className="font-semibold text-lg tracking-[-0.02em]">{service.title}</h3>
                  <span className="text-sm text-primary">{service.subtitle}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-12 tracking-[-0.04em] leading-[1.1]">
            Organiza tu negocio,
            <br />
            <span className="text-muted-foreground">elimina el trabajo repetitivo</span>
          </h3>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Selectable items */}
            <div className="space-y-4">
              {featureShowcase.map((feature, i) => (
                <motion.button
                  key={feature.title}
                  onClick={() => setSelectedFeature(i)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                    selectedFeature === i
                      ? "bg-card border-primary/30 shadow-lg shadow-primary/5"
                      : "bg-card/50 border-border hover:border-primary/20"
                  }`}
                  whileHover={{ x: selectedFeature === i ? 0 : 4 }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`h-10 w-10 rounded-lg flex items-center justify-center transition-colors ${
                        selectedFeature === i ? "bg-primary/20" : "bg-muted"
                      }`}
                    >
                      <feature.icon
                        size={20}
                        className={selectedFeature === i ? "text-primary" : "text-muted-foreground"}
                      />
                    </div>
                    <div>
                      <h4
                        className={`font-semibold mb-1 tracking-[-0.02em] ${
                          selectedFeature === i ? "text-foreground" : "text-foreground/80"
                        }`}
                      >
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Right: Preview image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/10 bg-card">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedFeature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-[4/3]"
                  >
                    <Image
                      src={featureShowcase[selectedFeature].image || "/placeholder.svg"}
                      alt={featureShowcase[selectedFeature].title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">{featureShowcase[selectedFeature].title}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
