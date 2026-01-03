"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { useTheme } from "@/components/theme-provider"

const logos = [
  {
    name: "Microsoft",
    src: "/images/logo_carousel/microsoft.png",
    width: 120,
  },
  {
    name: "Amazon",
    src: "/images/logo_carousel/amazon.png",
    width: 100,
  },
  {
    name: "Irapuato",
    src: "/images/logo_carousel/irapuato.png",
    width: 140,
  },
  {
    name: "Executive Engineers",
    src: "/images/logo_carousel/executive_engineers.png",
    width: 140,
  },
  {
    name: "Sumiplas",
    src: "/images/logo_carousel/sumiplas.png",
    width: 100,
  },
  {
    name: "Lando",
    src: "/images/logo_carousel/lando.png",
    width: 90,
  },
  {
    name: "Cleen",
    src: "/images/logo_carousel/cleen.png",
    width: 80,
  },
  {
    name: "Translate3D",
    src: "/images/logo_carousel/translate3d.png",
    width: 130,
  },
  {
    name: "Gudfud",
    src: "/images/logo_carousel/gudfud.png",
    width: 90,
  },
]

export function LogoCarousel() {
  const { resolvedTheme } = useTheme()
  const isLightMode = resolvedTheme === "light"

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-10 tracking-[-0.01em]"
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
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  width={logo.width}
                  height={40}
                  className="h-8 w-auto object-contain"
                  /* className={`h-8 w-auto object-contain ${isLightMode ? "invert" : ""}`} */
                />
              </div>
            ))}
          </div>

          <div
            className="absolute left-0 top-0 bottom-0 w-32 pointer-events-none"
            style={{ background: "linear-gradient(to right, #000000, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32 pointer-events-none"
            style={{ background: "linear-gradient(to left, #000000, transparent)" }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  )
}
