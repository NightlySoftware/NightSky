"use client"

import type * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"

const button3DVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none rounded-xl",
  {
    variants: {
      variant: {
        default: [
          "bg-primary text-primary-foreground",
          "ring-2 ring-primary",
          "shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.25),inset_0_-2px_4px_0_rgba(0,0,0,0.15),0_4px_8px_-2px_rgba(117,76,118,0.4)]",
          "hover:brightness-110 hover:shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.35),inset_0_-2px_4px_0_rgba(0,0,0,0.1),0_6px_12px_-2px_rgba(117,76,118,0.3)]",
          "active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.1),inset_0_-1px_2px_0_rgba(255,255,255,0.1),0_2px_4px_-1px_rgba(117,76,118,0.3)] active:translate-y-0.5",
        ].join(" "),
        pastel: [
          "bg-[#abc0fc] text-[#14102d]",
          "ring-2 ring-[#abc0fc]",
          "shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.4),inset_0_-2px_4px_0_rgba(0,0,0,0.1),0_4px_8px_-2px_rgba(138,160,220,0.5)]",
          "hover:brightness-105 hover:shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.5),inset_0_-2px_4px_0_rgba(0,0,0,0.08),0_6px_12px_-2px_rgba(138,160,220,0.4)]",
          "active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.08),inset_0_-1px_2px_0_rgba(255,255,255,0.2),0_2px_4px_-1px_rgba(138,160,220,0.3)] active:translate-y-0.5",
        ].join(" "),
        dark: [
          "bg-[#14102d] text-white",
          "ring-2 ring-[#14102d]",
          "shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.08),inset_0_-2px_4px_0_rgba(0,0,0,0.3),0_4px_8px_-2px_rgba(20,16,45,0.6)]",
          "hover:brightness-125 hover:shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.12),inset_0_-2px_4px_0_rgba(0,0,0,0.25),0_6px_12px_-2px_rgba(20,16,45,0.5)]",
          "active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.2),inset_0_-1px_2px_0_rgba(255,255,255,0.05),0_2px_4px_-1px_rgba(20,16,45,0.4)] active:translate-y-0.5",
        ].join(" "),
        outline: [
          "bg-transparent text-foreground",
          "ring-2 ring-stone-300 dark:ring-stone-600",
          "shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.5),inset_0_-2px_4px_0_rgba(0,0,0,0.03),0_4px_8px_-2px_rgba(0,0,0,0.08)]",
          "dark:shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.05),inset_0_-2px_4px_0_rgba(0,0,0,0.2),0_4px_8px_-2px_rgba(0,0,0,0.3)]",
          "hover:bg-stone-100 dark:hover:bg-stone-800 hover:shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.6),inset_0_-2px_4px_0_rgba(0,0,0,0.02),0_6px_12px_-2px_rgba(0,0,0,0.06)]",
          "active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.05)] active:translate-y-0.5",
        ].join(" "),
        "outline-dark": [
          "bg-white/5 text-white",
          "ring-2 ring-white/30",
          "shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.1),inset_0_-2px_4px_0_rgba(0,0,0,0.2),0_4px_8px_-2px_rgba(0,0,0,0.3)]",
          "hover:bg-white/10 hover:ring-white/40",
          "active:shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.2)] active:translate-y-0.5",
        ].join(" "),
      },
      size: {
        default: "h-11 px-5 py-2.5 text-sm gap-2 [&_svg:not([class*='size-'])]:size-4",
        sm: "h-9 px-4 py-2 text-xs gap-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 px-8 py-3 text-base gap-2.5 [&_svg:not([class*='size-'])]:size-5",
        xl: "h-14 px-10 py-4 text-lg gap-3 [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button3D({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof button3DVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(button3DVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button3D, button3DVariants }
