"use client"

import { useTheme } from "@/components/theme-provider"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()

  const themes = [
    { value: "light" as const, icon: Sun, label: "Light mode" },
    { value: "dark" as const, icon: Moon, label: "Dark mode" },
  ]

  // Use resolvedTheme for visual indication since we no longer have "system" option
  const activeTheme = theme === "system" ? resolvedTheme : theme

  return (
    <div className="flex items-center rounded-full bg-muted/60 p-1 gap-0.5">
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          type="button"
          onClick={(e) => setTheme(value, e)}
          aria-label={label}
          className={cn(
            "relative flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200",
            activeTheme === value ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Icon size={14} strokeWidth={1.5} />
        </button>
      ))}
    </div>
  )
}
