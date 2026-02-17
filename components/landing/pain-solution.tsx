"use client"

import { FadeIn, StaggerContainer, StaggerItem } from "./motion"
import { AlertTriangle, Frown, RotateCcw, ShieldAlert } from "lucide-react"

const painPoints = [
  {
    icon: Frown,
    text: "На карточке выглядит вау, а вживую/на тебе — вообще не то",
  },
  {
    icon: AlertTriangle,
    text: "Посадку, длину, силуэт по фото товара нормально не понять",
  },
  {
    icon: RotateCcw,
    text: "Лишние заказы \u2192 ожидание \u2192 возвраты \u2192 настроение \"в минус\"",
  },
  {
    icon: ShieldAlert,
    text: "Страшно: \"сейчас спишут\", \"не получится\", \"обманут\"",
  },
]

export function PainSolution() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-[36px]">
            {"На WB легко промахнуться — и это бесит (понимаем)"}
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2" delay={0.1}>
          {painPoints.map((point, i) => (
            <StaggerItem key={i}>
              <div className="glass-card glow-hover group flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10">
                  <point.icon className="h-[18px] w-[18px] text-red-400/70" />
                </div>
                <span className="text-sm leading-relaxed text-white/70">{point.text}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3}>
          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/[0.04] p-6">
            <p className="text-sm leading-relaxed text-white/80 md:text-[15px]">
              <span className="font-semibold text-primary">WB Примерочная</span>{" "}
              {"убирает \"угадайку\": ты видишь образ на своём фото и быстрее решаешь — заказывать или нет."}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
