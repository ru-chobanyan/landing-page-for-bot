"use client"

import { Button } from "@/components/ui/button"
import { FadeIn } from "./motion"
import { ArrowRight, Upload, Image as ImageIcon, Sparkles, Check, CreditCard, Gift } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const BOT_LINK = "https://t.me/primerka_wb_bot?start=SRC_LAND_01"

const featurePills = [
  { icon: Check, label: "Списание только за успешный результат" },
  { icon: Gift, label: "2 бесплатные генерации — после подписки" },
  { icon: CreditCard, label: "Можно купить пакет и пользоваться сразу" },
]

function PhoneMockup() {
  return (
    <div className="relative">
      {/* Glow behind phone */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/[0.08] blur-[100px]" />

      {/* Floating micro-cards */}
      <motion.div
        className="absolute -left-8 top-8 z-20 hidden rounded-xl border border-white/[0.15] bg-black/50 px-3 py-2 backdrop-blur-md lg:flex items-center gap-2 shadow-lg"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span className="text-[11px] font-medium text-white/90">Private</span>
      </motion.div>

      <motion.div
        className="absolute -right-4 top-24 z-20 hidden rounded-xl border border-white/[0.15] bg-black/50 px-3 py-2 backdrop-blur-md lg:flex items-center gap-2 shadow-lg"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <Sparkles className="h-3 w-3 text-primary" />
        <span className="text-[11px] font-medium text-white/90">Fast</span>
      </motion.div>

      <motion.div
        className="absolute -left-6 bottom-20 z-20 hidden rounded-xl border border-white/[0.15] bg-black/50 px-3 py-2 backdrop-blur-md lg:flex items-center gap-2 shadow-lg"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <Check className="h-3 w-3 text-emerald-400" />
        <span className="text-[11px] font-medium text-white/90">Success-only charge</span>
      </motion.div>

      {/* Phone frame */}
      <div className="relative z-10 mx-auto w-[270px] rounded-[28px] border border-white/[0.1] bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-1.5 shadow-2xl shadow-black/40">
        <div className="overflow-hidden rounded-[22px] bg-[hsl(235,14%,8%)]">
          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05]">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                <span className="text-[7px] font-bold text-white">WB</span>
              </div>
              <span className="text-[11px] font-semibold text-white/80">{"Примерочная"}</span>
            </div>
            <span className="text-[10px] text-white/30">AI</span>
          </div>

          <div className="relative h-[420px] overflow-hidden">
            {/* Screen 1: User Photo */}
            <motion.div
              className="absolute inset-0 flex flex-col"
              animate={{
                opacity: [0, 1, 1, 1, 0, 0, 0],
              }}
              transition={{
                duration: 9,
                times: [0, 0.05, 0.25, 0.30, 0.33, 0.95, 1],
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/[0.05]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-[10px] font-bold text-primary">1</span>
                <span className="text-[11px] font-semibold text-white/80">{"Твоё фото"}</span>
              </div>
              <div className="relative flex-1">
                <Image
                  src="/examples/tryon-1/before.png"
                  alt="User photo"
                  fill
                  className="object-cover"
                  sizes="270px"
                />
              </div>
            </motion.div>

            {/* Screen 2: Product Screenshot */}
            <motion.div
              className="absolute inset-0 flex flex-col"
              animate={{
                opacity: [0, 0, 0, 1, 1, 1, 0, 0],
              }}
              transition={{
                duration: 9,
                times: [0, 0.30, 0.33, 0.38, 0.58, 0.63, 0.66, 1],
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/[0.05]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-[10px] font-bold text-primary">2</span>
                <span className="text-[11px] font-semibold text-white/80">{"Скрин/фото вещи"}</span>
              </div>
              <div className="relative flex-1">
                <Image
                  src="/examples/tryon-1/product.png"
                  alt="Product screenshot"
                  fill
                  className="object-cover"
                  sizes="270px"
                />
              </div>
            </motion.div>

            {/* Screen 3: Result */}
            <motion.div
              className="absolute inset-0 flex flex-col shimmer-scan border-primary/10"
              animate={{
                opacity: [0, 0, 0, 0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 9,
                times: [0, 0.63, 0.66, 0.71, 0.76, 0.91, 0.95, 1],
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-center justify-between gap-2 px-3 py-2.5 border-b border-primary/20 bg-primary/[0.03]">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="h-3 w-3 text-primary" />
                  <span className="text-[11px] font-semibold text-primary">{"Результат за 5–15 сек"}</span>
                </div>
              </div>
              <div className="relative flex-1">
                <Image
                  src="/examples/tryon-1/result.png"
                  alt="Try-on result"
                  fill
                  className="object-cover"
                  sizes="270px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <section ref={ref} className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Animated gradient meshes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-mesh-1 absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[120px]" />
        <div className="hero-mesh-2 absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-[hsl(250,60%,50%)]/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-20">
          {/* Text column */}
          <div className="flex-1 max-w-xl">
            <FadeIn>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-medium text-white/50">{"Telegram-бот работает 24/7"}</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="text-balance text-[32px] font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-[44px] lg:text-[50px]">
                {"Чтобы не\u00A0разочароваться: примерь вещь с\u00A0WB на\u00A0себе ещё до\u00A0заказа"}
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-5 max-w-lg text-[15px] font-medium leading-relaxed text-muted-foreground md:text-base">
                {"Отправляешь своё фото и скрин/фото вещи — получаешь примерку обычно за 5\u201315 секунд."}
              </p>
            </FadeIn>

            {/* Feature pills */}
            <FadeIn delay={0.15}>
              <div className="mt-6 flex flex-col gap-2.5">
                {featurePills.map((pill) => (
                  <div key={pill.label} className="flex items-center gap-2.5">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                      <pill.icon className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-[13px] text-white/60">{pill.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.2}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="btn-glow group h-12 rounded-2xl px-7 text-sm font-semibold shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.98]"
                  data-cta="open-bot"
                >
                  <a href={BOT_LINK} target="_blank" rel="noopener noreferrer">
                    {"Открыть бота в Telegram"}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-2xl border-white/[0.1] bg-white/[0.03] px-7 text-sm font-medium text-white/70 hover:bg-white/[0.06] hover:text-white/90 active:scale-[0.98]"
                  data-cta="how-it-works"
                >
                  <a href="#how-it-works">{"Как это работает"}</a>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="mt-3 text-xs font-medium text-muted-foreground">
                {"Списание только за успешный результат — если не получилось, не списываем."}
              </p>
            </FadeIn>

            {/* Warning callout */}
            <FadeIn delay={0.3}>
              <div className="mt-6 flex items-start gap-2.5 rounded-2xl border border-amber-500/20 bg-amber-500/[0.05] px-4 py-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-[10px] font-bold text-amber-400">!</span>
                <p className="text-xs leading-relaxed text-amber-300/70">
                  {"Ссылки WB пока не принимаем — нужен скрин или фото карточки/вещи."}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Phone column */}
          <FadeIn delay={0.15} className="flex-shrink-0 lg:w-[340px]">
            <motion.div style={{ y: phoneY }}>
              <PhoneMockup />
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
