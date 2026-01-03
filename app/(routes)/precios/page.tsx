"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion } from "motion/react"
import { 
  Check, 
  X, 
  Shield, 
  Palette, 
  Mail, 
  Globe, 
  HardDrive, 
  Zap,
  ChevronDown
} from "lucide-react"
import Link from "next/link"
import { Button3D } from "@/components/ui/button-3d"
import { Navigation } from "@/components/landing/navigation"
import { Footer } from "@/components/landing/footer"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import CheckoutButton from "@/components/checkout-button"

// Feature descriptions for tooltips
const featureDescriptions: Record<string, string> = {
  "Páginas": "Número total de secciones web únicas incluidas en tu sitio.",
  "Diseño": "Plantillas y diseños profesionales optimizados para tu marca.",
  "Elementor Pro": "Constructor de páginas premium con interfaz visual intuitiva.",
  "Hosting": "Alojamiento web profesional con alta velocidad y rendimiento.",
  "Dominio": "Nombre de dominio personalizado gratuito por un año.",
  "Certificado SSL": "Protección de seguridad que garantiza conexión segura.",
  "Mantenimiento": "Actualizaciones, copias de seguridad y monitoreo de seguridad.",
  "Optimización Móvil": "Tu sitio se ve perfecto en todos los dispositivos.",
  "Seguridad": "Medidas avanzadas para proteger tu sitio de amenazas.",
  "Gestión de Contenido": "Sistema fácil de usar para actualizar tu sitio.",
  "Formulario de Contacto": "Formulario profesional para que te contacten.",
  "Integración Redes Sociales": "Conecta tu sitio con tus perfiles sociales.",
  "Capacitación": "Sesiones y recursos para gestionar tu sitio eficazmente.",
  "Revisiones": "Rondas de revisión incluidas en la fase de diseño.",
  "Informes Mensuales": "Reportes sobre rendimiento, tráfico y seguridad.",
  "Optimización SEO": "Mejora tu visibilidad en Google y otros buscadores.",
  "Soporte Prioritario": "Acceso a nuestro equipo de soporte técnico.",
  "Optimización de Rendimiento": "Técnicas para mejorar la velocidad de carga.",
  "Google Analytics": "Rastrea el comportamiento de tus visitantes.",
  "Configuración de Blog": "Sección de blog lista para compartir contenido.",
  "E-commerce": "Tienda online completa con carrito y pagos.",
  "Integraciones Personalizadas": "Conexión con servicios y herramientas de terceros.",
}

// Pricing data with payment plans
const pricingData = {
  starter: {
    contado: 5999,
    "3m": 6499,
    "6m": 6699,
    "9m": 6899,
    "12m": 7199
  },
  business: {
    contado: 9999,
    "3m": 10699,
    "6m": 11099,
    "9m": 11499,
    "12m": 11899
  },
  enterprise: {
    contado: 15999,
    "3m": 17099,
    "6m": 17699,
    "9m": 18299,
    "12m": 18999
  }
}

const originalPrices = {
  starter: 7799,
  business: 12999,
  enterprise: 20799,
}

type PaymentPlan = "contado" | "3m" | "6m" | "9m" | "12m"
type PlanType = "starter" | "business" | "enterprise"

const validPaymentPlans: PaymentPlan[] = ["contado", "3m", "6m", "9m", "12m"]

const paymentPlanLabels: Record<PaymentPlan, string> = {
  contado: "Pago único",
  "3m": "3 pagos mensuales",
  "6m": "6 pagos mensuales",
  "9m": "9 pagos mensuales",
  "12m": "12 pagos mensuales",
}

const pricingPlans: Array<{
  id: PlanType
  name: string
  description: string
  discount: number
  popular: boolean
  features: Array<{
    name: string
    included: boolean
    highlight?: string
    descKey: string
  }>
}> = [
  {
    id: "starter",
    name: "Paquete Inicial",
    description: "Presencia web profesional y atractiva para lanzar tu negocio al mundo digital con todas las funciones esenciales.",
    discount: 30,
    popular: false,
    features: [
      { name: "Hasta 3 páginas", included: true, highlight: "3", descKey: "Páginas" },
      { name: "Diseño Moderno y Atractivo", included: true, descKey: "Diseño" },
      { name: "Elementor Pro", included: true, descKey: "Elementor Pro" },
      { name: "Hosting", included: true, descKey: "Hosting" },
      { name: "Dominio", included: true, descKey: "Dominio" },
      { name: "Certificado SSL", included: true, descKey: "Certificado SSL" },
      { name: "Mantenimiento Esencial", included: true, descKey: "Mantenimiento" },
      { name: "Optimización Móvil", included: true, descKey: "Optimización Móvil" },
      { name: "Seguridad Protección Esencial", included: true, descKey: "Seguridad" },
      { name: "Gestión de Contenido", included: true, descKey: "Gestión de Contenido" },
      { name: "Formulario de Contacto", included: true, descKey: "Formulario de Contacto" },
      { name: "Integración Redes Sociales", included: true, descKey: "Integración Redes Sociales" },
      { name: "Capacitación Guía Personalizada", included: true, descKey: "Capacitación" },
      { name: "1 Revisión", included: true, highlight: "1", descKey: "Revisiones" },
      { name: "Informes Mensuales", included: false, descKey: "Informes Mensuales" },
      { name: "Optimización SEO", included: false, descKey: "Optimización SEO" },
      { name: "Soporte Prioritario", included: false, descKey: "Soporte Prioritario" },
      { name: "Optimización de Rendimiento", included: false, descKey: "Optimización de Rendimiento" },
      { name: "Google Analytics", included: false, descKey: "Google Analytics" },
      { name: "Configuración de Blog", included: false, descKey: "Configuración de Blog" },
      { name: "E-commerce", included: false, descKey: "E-commerce" },
      { name: "Integraciones Personalizadas", included: false, descKey: "Integraciones Personalizadas" },
    ],
  },
  {
    id: "business",
    name: "Paquete Negocio",
    description: "Solución completa para negocios en crecimiento con herramientas de marketing digital y mayor alcance.",
    discount: 30,
    popular: true,
    features: [
      { name: "4-6 páginas", included: true, highlight: "4-6", descKey: "Páginas" },
      { name: "Diseño Personalizado", included: true, descKey: "Diseño" },
      { name: "Elementor Pro", included: true, descKey: "Elementor Pro" },
      { name: "Hosting", included: true, descKey: "Hosting" },
      { name: "Dominio", included: true, descKey: "Dominio" },
      { name: "Certificado SSL", included: true, descKey: "Certificado SSL" },
      { name: "Mantenimiento Mejorado", included: true, descKey: "Mantenimiento" },
      { name: "Optimización Móvil", included: true, descKey: "Optimización Móvil" },
      { name: "Seguridad Protección Mejorada", included: true, descKey: "Seguridad" },
      { name: "Gestión de Contenido", included: true, descKey: "Gestión de Contenido" },
      { name: "Formulario de Contacto", included: true, descKey: "Formulario de Contacto" },
      { name: "Integración Redes Sociales", included: true, descKey: "Integración Redes Sociales" },
      { name: "Capacitación Guía Detallada", included: true, descKey: "Capacitación" },
      { name: "2 Revisiones", included: true, highlight: "2", descKey: "Revisiones" },
      { name: "Informes Mensuales", included: true, descKey: "Informes Mensuales" },
      { name: "Optimización SEO Estratégicas", included: true, descKey: "Optimización SEO" },
      { name: "Soporte Prioritario 2 horas/mes", included: true, descKey: "Soporte Prioritario" },
      { name: "Optimización de Rendimiento", included: true, descKey: "Optimización de Rendimiento" },
      { name: "Google Analytics", included: true, descKey: "Google Analytics" },
      { name: "Configuración de Blog", included: true, descKey: "Configuración de Blog" },
      { name: "E-commerce", included: false, descKey: "E-commerce" },
      { name: "Integraciones Personalizadas", included: false, descKey: "Integraciones Personalizadas" },
    ],
  },
  {
    id: "enterprise",
    name: "Paquete Empresarial",
    description: "Experiencia digital completa con e-commerce, integraciones avanzadas y funcionalidades premium para empresas establecidas.",
    discount: 30,
    popular: false,
    features: [
      { name: "7-10 páginas", included: true, highlight: "7-10", descKey: "Páginas" },
      { name: "Diseño Premium", included: true, highlight: "Premium", descKey: "Diseño" },
      { name: "Elementor Pro", included: true, descKey: "Elementor Pro" },
      { name: "Hosting", included: true, descKey: "Hosting" },
      { name: "Dominio", included: true, descKey: "Dominio" },
      { name: "Certificado SSL", included: true, descKey: "Certificado SSL" },
      { name: "Mantenimiento Premium", included: true, highlight: "Premium", descKey: "Mantenimiento" },
      { name: "Optimización Móvil", included: true, descKey: "Optimización Móvil" },
      { name: "Seguridad Protección Premium", included: true, highlight: "Premium", descKey: "Seguridad" },
      { name: "Gestión de Contenido", included: true, descKey: "Gestión de Contenido" },
      { name: "Formulario de Contacto", included: true, descKey: "Formulario de Contacto" },
      { name: "Integración Redes Sociales", included: true, descKey: "Integración Redes Sociales" },
      { name: "Capacitación Completa", included: true, highlight: "Completa", descKey: "Capacitación" },
      { name: "2 Revisiones", included: true, highlight: "2", descKey: "Revisiones" },
      { name: "Informes Mensuales", included: true, descKey: "Informes Mensuales" },
      { name: "Optimización SEO Avanzadas", included: true, highlight: "Avanzadas", descKey: "Optimización SEO" },
      { name: "Soporte Prioritario 3 horas/mes", included: true, descKey: "Soporte Prioritario" },
      { name: "Optimización de Rendimiento", included: true, descKey: "Optimización de Rendimiento" },
      { name: "Google Analytics", included: true, descKey: "Google Analytics" },
      { name: "Configuración de Blog", included: true, descKey: "Configuración de Blog" },
      { name: "E-commerce", included: true, descKey: "E-commerce" },
      { name: "Integraciones Personalizadas", included: true, descKey: "Integraciones Personalizadas" },
    ],
  },
]

const bonusFeatures = [
  { icon: Shield, title: "Certificados SSL de seguridad ilimitados" },
  { icon: Palette, title: "Plantillas diseñadas profesionalmente" },
  { icon: Mail, title: "Correos electrónicos profesionales" },
  { icon: Globe, title: "Dominio gratis" },
  { icon: HardDrive, title: "Copias de seguridad automáticas" },
  { icon: Zap, title: "Tráfico web ilimitado" },
]

const faqs = [
  {
    question: "¿Qué incluye el paquete inicial?",
    answer: "El paquete inicial incluye todas las características esenciales para establecer tu presencia en línea, como diseño personalizado, dominio gratuito por un año, y soporte técnico.",
  },
  {
    question: "¿Puedo actualizar mi paquete después?",
    answer: "¡Por supuesto! Puedes actualizar tu paquete en cualquier momento a medida que tu negocio crece. Calcularemos la diferencia prorrateada y la aplicaremos a tu nuevo plan sin complicaciones.",
  },
  {
    question: "¿Qué pasa con el dominio después del primer año?",
    answer: "Después del primer año, te notificaremos con anticipación sobre la renovación del dominio. La renovación se facturará a la tarifa estándar, pero siempre te mantendremos informado antes de cualquier cargo.",
  },
  {
    question: "¿Cómo funciona el mantenimiento?",
    answer: "Nuestro equipo monitorea proactivamente tu sitio, realiza actualizaciones de seguridad, optimiza el rendimiento y te envía informes detallados regularmente. Este mantenimiento preventivo garantiza que tu sitio permanezca seguro, rápido y actualizado en todo momento.",
  },
]

// Feature Item with tooltip - shows only when parent is hovered
function FeatureItemWithTooltip({ 
  feature, 
  included, 
  highlight, 
  descKey 
}: { 
  feature: string
  included: boolean
  highlight?: string
  descKey: string
}) {
  const description = featureDescriptions[descKey]

  return (
    <li className="flex items-start gap-3">
      {included ? (
        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
      ) : (
        <X className="w-4 h-4 text-muted-foreground/30 mt-0.5 flex-shrink-0" />
      )}
      {description ? (
        <Tooltip>
          <TooltipTrigger asChild>
            <button 
              type="button" 
              className={`text-left text-sm border-b border-dashed border-primary/40 hover:border-primary transition-colors ${
                included ? "text-foreground" : "text-muted-foreground/50"
              }`}
            >
              {highlight ? (
                <>
                  {feature.split(highlight)[0]}
                  <strong>{highlight}</strong>
                  {feature.split(highlight)[1]}
                </>
              ) : (
                feature
              )}
            </button>
          </TooltipTrigger>
          <TooltipContent 
            side="bottom" 
            className="bg-primary text-primary-foreground max-w-[250px] text-sm pointer-events-none"
            arrowClassName="bg-primary fill-primary"
          >
            {description}
          </TooltipContent>
        </Tooltip>
      ) : (
        <span className={`text-sm ${included ? "text-foreground" : "text-muted-foreground/50"}`}>
          {highlight ? (
            <>
              {feature.split(highlight)[0]}
              <strong>{highlight}</strong>
              {feature.split(highlight)[1]}
            </>
          ) : (
            feature
          )}
        </span>
      )}
    </li>
  )
}

// FAQ Item with controlled state and clickable header
function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-border rounded-xl bg-card/50 overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-5 flex items-center justify-between text-left cursor-pointer"
      >
        <span className="font-medium pr-4">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`} 
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
          {answer}
        </p>
      </div>
    </motion.div>
  )
}

export default function PreciosPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  // Get initial payment plan from URL or default to "contado"
  const initialPlan = searchParams.get("plan") as PaymentPlan | null
  const [paymentPlan, setPaymentPlan] = useState<PaymentPlan>(
    initialPlan && validPaymentPlans.includes(initialPlan) ? initialPlan : "contado"
  )

  // Sync payment plan with URL
  const handlePaymentPlanChange = (value: PaymentPlan) => {
    setPaymentPlan(value)
    const params = new URLSearchParams(searchParams.toString())
    if (value === "contado") {
      params.delete("plan")
    } else {
      params.set("plan", value)
    }
    router.push(`/precios${params.toString() ? `?${params.toString()}` : ""}`, { scroll: false })
  }

  // Update state if URL changes externally
  useEffect(() => {
    const urlPlan = searchParams.get("plan") as PaymentPlan | null
    if (urlPlan && validPaymentPlans.includes(urlPlan) && urlPlan !== paymentPlan) {
      setPaymentPlan(urlPlan)
    }
  }, [searchParams])

  const getPrice = (planId: PlanType) => {
    return pricingData[planId][paymentPlan]
  }

  const getMonthlyPrice = (planId: PlanType) => {
    const total = pricingData[planId][paymentPlan]
    const months = paymentPlan === "contado" ? 1 : parseInt(paymentPlan.replace("m", ""))
    return Math.round(total / months)
  }

  return (
    <TooltipProvider delayDuration={0} disableHoverableContent>
      <main className="min-h-screen bg-background">
        <Navigation />


        {/* Hero Section - Redesigned */}
        <section className="relative pt-28 pb-16 px-6 overflow-hidden">
          {/* Background Image with stronger overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{ backgroundImage: `url('/images/landing_page/precios.jpg')` }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/80" />
          
          <div className="relative max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-sm px-4 py-1.5 mb-8 border border-primary/30"
            >
              <Globe className="w-4 h-4 text-[#abc0fc]" />
              <span className="text-sm font-medium text-white/90">Sitios Web WordPress</span>
            </motion.div>
            
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.03em] mb-5 text-white"
            >
              Elige tu paquete ideal
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12"
            >
              Páginas web profesionales con WordPress y Elementor Pro. <br />
              <Link href="/agendar" className="text-[#abc0fc] hover:text-[#abc0fc]/80 underline underline-offset-2 transition-colors">
                ¿Necesitas algo personalizado?
              </Link>
            </motion.p>

            {/* Payment Plan Selector - Premium Pill Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex flex-col items-center gap-4"
            >
              <p className="text-sm text-white/50 font-medium uppercase tracking-wider">
                Forma de pago
              </p>
              
              {/* Pill Toggle Container */}
              <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                {validPaymentPlans.map((plan) => {
                  const isSelected = paymentPlan === plan
                  const shortLabels: Record<PaymentPlan, string> = {
                    contado: "Pago único",
                    "3m": "3 meses",
                    "6m": "6 meses",
                    "9m": "9 meses",
                    "12m": "12 meses",
                  }
                  
                  return (
                    <button
                      key={plan}
                      onClick={() => handlePaymentPlanChange(plan)}
                      className={`
                        relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                        ${isSelected 
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30" 
                          : "text-white/70 hover:text-white hover:bg-white/10"
                        }
                      `}
                    >
                      {shortLabels[plan]}
                    </button>
                  )
                })}
              </div>
              
              {/* Selected plan description */}
              <div className="mt-2 mb-8">
                <p className="text-sm text-white/60">
                  {paymentPlan === "contado" 
                    ? "✓ Mejor precio • Un solo pago" 
                    : `Divide tu pago en ${paymentPlan.replace("m", "")} mensualidades`
                  }
                </p>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Pricing Cards */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative rounded-2xl border ${
                    plan.popular
                      ? "border-primary/50 bg-card shadow-xl shadow-primary/10"
                      : "border-border bg-card/50"
                  } p-6 lg:p-8`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary/90 text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                        Más Popular
                      </span>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-muted-foreground line-through text-sm">
                        ${originalPrices[plan.id].toLocaleString()}
                      </span>
                      <span className="bg-primary/20 text-primary text-xs font-semibold px-2 py-0.5 rounded">
                        AHORRA {plan.discount}%
                      </span>
                    </div>
                    {paymentPlan === "contado" ? (
                      <>
                        <div className="text-4xl font-bold tracking-tight">
                          ${getPrice(plan.id).toLocaleString()}
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Pago único de ${getPrice(plan.id).toLocaleString()} MXN
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="text-4xl font-bold tracking-tight">
                          ${getMonthlyPrice(plan.id).toLocaleString()}
                          <span className="text-lg font-normal text-muted-foreground">/mes</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          Total: ${getPrice(plan.id).toLocaleString()} MXN ({paymentPlanLabels[paymentPlan]})
                        </p>
                      </>
                    )}
                  </div>

                  {/* CTA Button - Stripe Checkout */}
                  <CheckoutButton 
                    plan={plan.id} 
                    paymentPlan={paymentPlan} 
                    className="mb-8"
                  />

                  {/* Features */}
                  <div>
                    <p className="text-sm font-medium mb-4">Qué incluye:</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <FeatureItemWithTooltip
                          key={feature.name}
                          feature={feature.name}
                          included={feature.included}
                          highlight={feature.highlight}
                          descKey={feature.descKey}
                        />
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bonus Features - Redesigned with proper icons */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-primary/30 bg-card p-8 md:p-12"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-semibold lg:max-w-xs flex-shrink-0"
                >
                  Disfruta todo esto. Sin costo extra.
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 flex-1">
                  {bonusFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-semibold text-center mb-12"
            >
              Preguntas Frecuentes
            </motion.h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FaqItem 
                  key={faq.question} 
                  question={faq.question} 
                  answer={faq.answer} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer has the CTA "Tu próximo gran paso empieza aquí" */}
        <Footer />
      </main>
    </TooltipProvider>
  )
}
