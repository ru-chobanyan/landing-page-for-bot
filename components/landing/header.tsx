"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Gift } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const BOT_LINK = "https://t.me/primerka_wb_bot?start=SRC_LAND_01"

const navItems = [
  { label: "Как работает", href: "#how-it-works" },
  { label: "Тарифы", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[rgba(7,7,10,0.7)] backdrop-blur-xl border-b border-white/[0.12] shadow-lg shadow-black/20"
          : "bg-gradient-to-b from-black/20 to-transparent backdrop-blur-md"
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5" aria-label="WB Примерочная">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-[11px] font-bold tracking-tight shadow-lg shadow-primary/40 ring-1 ring-primary/20">
            WB
          </div>
          <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:inline">
            WB Примерочная
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative rounded-lg px-3 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-[calc(100%-24px)]" />
            </a>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden items-center gap-4 md:flex">
          <motion.div
            className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-gradient-to-r from-primary/15 to-purple-500/15 px-3 py-1.5 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Gift className="h-3.5 w-3.5 text-primary" />
            <span className="text-[12px] font-semibold text-white">
              2 FREE генерации 🎁
            </span>
          </motion.div>
          <Button
            asChild
            size="sm"
            className="btn-glow h-8 rounded-lg text-xs font-semibold shadow-lg shadow-primary/20"
            data-cta="open-bot"
          >
            <a href={BOT_LINK} target="_blank" rel="noopener noreferrer">
              Открыть бота
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-white/5 md:hidden"
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-white/[0.06] bg-[rgba(7,7,10,0.95)] backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-white/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 border-t border-white/[0.06] pt-4">
                <Button
                  asChild
                  size="sm"
                  className="btn-glow w-full rounded-lg text-sm font-semibold shadow-lg shadow-primary/20"
                  data-cta="open-bot"
                >
                  <a href={BOT_LINK} target="_blank" rel="noopener noreferrer">
                    Открыть бота
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
