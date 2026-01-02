"use client"

import { motion } from "motion/react"
import { ShoppingBag, Briefcase, Factory, Heart, Building2, Store } from "lucide-react"

const industries = [
  {
    icon: ShoppingBag,
    title: "Retail y E-commerce",
    description: "Soluciones de e-commerce y punto de venta para optimizar inventario, ventas y experiencia de compra.",
  },
  {
    icon: Briefcase,
    title: "Servicios Profesionales",
    description: "Plataformas digitales para agencias, consultorías y firmas que mejoran la gestión de clientes.",
  },
  {
    icon: Factory,
    title: "Manufactura",
    description: "Software de gestión para producción y logística. Aumenta eficiencia y reduce costos operativos.",
  },
  {
    icon: Heart,
    title: "Salud y Bienestar",
    description: "Aplicaciones para clínicas y profesionales de la salud. Optimiza citas y atención al paciente.",
  },
  {
    icon: Building2,
    title: "Inmobiliaria",
    description: "Plataformas para gestión de propiedades. Simplifica venta, alquiler y administración.",
  },
  {
    icon: Store,
    title: "Negocios Locales",
    description: "Soluciones digitales para restaurantes, salones y más. Digitaliza operaciones e impulsa crecimiento.",
  },
]

export function IndustriesSection() {
  return (
    <section id="industrias" className="py-24 bg-card/50 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#abc0fc]/10 dark:bg-[#14102d]/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary mb-4 block">Industrias que Servimos</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.04em] leading-[1.1] mb-4">
            Soluciones a la medida de tu sector
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hemos trabajado con una amplia gama de industrias, adaptando nuestras soluciones para satisfacer las
            necesidades específicas de cada una.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl bg-card border border-border p-6 hover:border-primary/30 relative overflow-hidden"
            >
              {/* Consistent ambient gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#abc0fc]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <industry.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 tracking-[-0.02em]">{industry.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
