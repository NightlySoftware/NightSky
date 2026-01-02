"use client"

import { motion } from "motion/react"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button3D } from "@/components/ui/button-3d"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

const logos = [
  { name: "Microsoft", src: "/images/microsoft.png", width: 120 },
  { name: "Amazon", src: "/images/amazon.png", width: 100 },
  { name: "Irapuato", src: "/images/irapuato.png", width: 140 },
  { name: "Executive Engineers", src: "/images/executive-engineers.png", width: 140 },
  { name: "Sumiplas", src: "/images/sumiplas.png", width: 100 },
  { name: "Lando", src: "/images/lando.png", width: 90 },
  { name: "Cleen", src: "/images/cleen.png", width: 80 },
  { name: "Translate3D", src: "/images/translate3d.png", width: 130 },
  { name: "Gudfud", src: "/images/gudfud.png", width: 90 },
]

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      setIsVideoLoaded(true)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-black">
      {/* Video Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVideoLoaded ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className="absolute inset-x-0 top-0 w-full h-full object-cover object-top"
        >
          <source src="/videos/landing_movie_hd.webm" type="video/webm" />
        </video>
      </motion.div>

      {/* Ambient glow effects - light colors, no theme toggle */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#abc0fc]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#9a6b9b]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      {/* Radial vignette - center 100% transparent, edges pitch black */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at center, transparent 0%, transparent 30%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 70%, black 100%)",
        }}
      />

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-6 py-24 relative z-10 flex-grow flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left: Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[#9a6b9b]/20 px-4 py-1.5 text-sm text-[#d7c4d8] border border-[#9a6b9b]/30">
                <Sparkles size={14} />
                Hacemos que la tecnología trabaje para ti ✨
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-balance leading-[1.05] text-white"
            >
              Recupera el control de tu negocio con <span className="text-[#d7c4d8]">tecnología a medida</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-slate-300 max-w-xl leading-relaxed"
            >
              Ayudamos a empresas en crecimiento a dejar atrás los procesos manuales y el desorden operativo mediante
              software, automatización y diseño web estratégico.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button3D size="lg" className="group" asChild>
                <Link href="#diagnostico">
                  Solicitar Diagnóstico Gratuito
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button3D>
              <Button3D size="lg" variant="outline" className="text-white border-slate-700 hover:bg-slate-800" asChild>
                <Link href="#servicios">Ver nuestros servicios</Link>
              </Button3D>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-8 pt-8 border-t border-white/40"
            >
              <div>
                <div className="text-2xl font-semibold tracking-[-0.03em] text-white">35+</div>
                <div className="text-sm text-slate-300">Proyectos entregados</div>
              </div>
              <div className="h-10 w-px bg-white/50" />
              <div>
                <div className="text-2xl font-semibold tracking-[-0.03em] text-white">100%</div>
                <div className="text-sm text-slate-300">Clientes satisfechos</div>
              </div>
              <div className="h-10 w-px bg-white/50 hidden sm:block" />
              <div className="hidden sm:block">
                <div className="text-2xl font-semibold tracking-[-0.03em] text-white">5+</div>
                <div className="text-sm text-slate-300">Años de experiencia</div>
              </div>
            </motion.div>
          </div>

          {/* Right: Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#9a6b9b]/10 via-[#3d3d4d]/5 to-transparent rounded-3xl blur-2xl scale-110" />

            <div className="relative">
              {/* Main dashboard card */}
              <div className="rounded-2xl bg-[#1a1a24]/90 border border-slate-700/50 shadow-2xl shadow-[#9a6b9b]/10 p-6 space-y-4 backdrop-blur-md">
                {/* Header - using actual logo */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/nightly-rounded.png"
                      alt="Nightly"
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                    <div>
                      <div className="font-medium text-sm tracking-[-0.01em] text-white">Panel de Control</div>
                      <div className="text-xs text-slate-400">Sistema ERP</div>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Ventas Hoy", value: "$48,230", change: "+8.2%" },
                    { label: "Pedidos", value: "156", change: "+12%" },
                    { label: "Eficiencia", value: "94%", change: "+2.4%" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="rounded-xl bg-slate-800/50 p-4"
                    >
                      <div className="text-xs text-slate-400">{stat.label}</div>
                      <div className="text-lg font-semibold mt-1 tracking-[-0.02em] text-white">{stat.value}</div>
                      <div className="text-xs text-green-400">{stat.change}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="rounded-xl bg-slate-800/30 p-4 h-32">
                  <div className="flex items-end justify-between h-full gap-2">
                    {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 1 + i * 0.05, duration: 0.5 }}
                        className="flex-1 bg-[#abc0fc] rounded-t-md"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -right-4 -bottom-4 rounded-xl bg-slate-800 border border-slate-700 shadow-xl p-4 max-w-[200px]"
              >
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-green-900/30 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="h-4 w-4 text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium tracking-[-0.01em] text-white">Proceso automatizado</div>
                    <div className="text-xs text-slate-400">Factura enviada</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Logo Carousel - at bottom of hero */}
      <div className="relative z-10 py-8 -mt-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-400 mb-10 tracking-[-0.01em]"
        >
          Aliados que confían en nosotros
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="flex gap-16 animate-scroll">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex-shrink-0 flex items-center justify-center px-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Gradients fading to black */}
          <div
            className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none"
            style={{ background: "linear-gradient(to right, black, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none"
            style={{ background: "linear-gradient(to left, black, transparent)" }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 35s linear infinite;
        }
      `}</style>
    </section>
  )
}
