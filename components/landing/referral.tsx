"use client"

import { FadeIn, StaggerContainer, StaggerItem } from "./motion"

const steps = [
  { text: "Открываешь в боте раздел \"Пригласить друга\"" },
  { text: "Отправляешь другу свою ссылку/код" },
  { text: "Друг покупает любой пакет \u2192 тебе начисляется +2 генерации" },
]

export function Referral() {
  return (
    <section className="relative py-16 md:py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-[36px]">
            {"Приведи друга — получи +2 генерации"}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {"Делишься ссылкой, друг покупает любой пакет — тебе начисляем бонус."}
          </p>
        </FadeIn>

        {/* Connecting line behind steps */}
        <StaggerContainer className="relative mt-10 grid gap-4 sm:grid-cols-3" delay={0.1}>
          {/* Faint connecting line */}
          <div className="pointer-events-none absolute top-10 left-[10%] right-[10%] hidden h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent sm:block" />

          {steps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="glass-card glow-hover group relative flex h-full items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed text-white/70">{step.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
