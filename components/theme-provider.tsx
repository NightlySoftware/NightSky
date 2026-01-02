"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes"

type Theme = "light" | "dark" | "system"

interface ThemeContextType {
  theme: Theme
  resolvedTheme: "light" | "dark" | undefined
  setTheme: (theme: Theme, event?: React.MouseEvent) => void
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "theme" }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme={defaultTheme} storageKey={storageKey} enableSystem>
      <ThemeProviderInner defaultTheme={defaultTheme}>{children}</ThemeProviderInner>
    </NextThemesProvider>
  )
}

function ThemeProviderInner({ children, defaultTheme }: { children: React.ReactNode; defaultTheme: Theme }) {
  const { theme, resolvedTheme, setTheme: setNextTheme } = useNextTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const setTheme = React.useCallback(
    (newTheme: Theme, event?: React.MouseEvent) => {
      if (event && typeof document !== "undefined" && "startViewTransition" in document) {
        const x = event.clientX
        const y = event.clientY

        const maxX = Math.max(x, window.innerWidth - x)
        const maxY = Math.max(y, window.innerHeight - y)
        const maxRadius = Math.sqrt(maxX * maxX + maxY * maxY)

        // Determine current and target theme states
        const currentlyDark = document.documentElement.classList.contains("dark")
        const targetIsDark = newTheme === "dark" || (newTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
        const goingToDark = targetIsDark && !currentlyDark

        // @ts-ignore - View Transitions API
        const transition = document.startViewTransition(() => {
          setNextTheme(newTheme)
        })

        transition.ready.then(() => {
          // For dark→light: animate new (light) view expanding from click point
          // For light→dark: animate old (light) view shrinking to reveal dark underneath
          if (goingToDark) {
            // Light to Dark: shrink the old (light) view
            document.documentElement.animate(
              {
                clipPath: [`circle(${maxRadius}px at ${x}px ${y}px)`, `circle(0px at ${x}px ${y}px)`],
              },
              {
                duration: 400,
                easing: "ease-out",
                pseudoElement: "::view-transition-old(root)",
                fill: "forwards",
              },
            )
          } else {
            // Dark to Light: expand the new (light) view
            document.documentElement.animate(
              {
                clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`],
              },
              {
                duration: 400,
                easing: "ease-out",
                pseudoElement: "::view-transition-new(root)",
                fill: "forwards",
              },
            )
          }
        })
      } else {
        setNextTheme(newTheme)
      }
    },
    [setNextTheme],
  )

  const value = React.useMemo(
    () => ({
      theme: (mounted ? theme : defaultTheme) as Theme,
      resolvedTheme: mounted ? (resolvedTheme as "light" | "dark" | undefined) : undefined,
      setTheme,
    }),
    [theme, resolvedTheme, setTheme, mounted, defaultTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
