"use client"

import { FadeIn, StaggerContainer, StaggerItem } from "./motion"
import { ShieldCheck, Lock, Zap, ThumbsUp } from "lucide-react"

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Честное списание",
    text: "Списание только за успешный результат: если не получилось — генерация не списывается",
  },
  {
    icon: Lock,
    title: "Приватность",
    text: "Фото используются только для генерации и не хранятся после результата",
  },
  {
    icon: Zap,
    title: "Быстро",
    text: "Обычно 5\u201315 секунд",
  },
  {
    icon: ThumbsUp,
    title: "Просто",
    text: "Твоё фото + скрин/фото вещи — без ссылок и лишних шагов",
  },
]

export function WhyTrust() {
  return (
    <section className="relative py-16 md:py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-[36px]">
            Почему это удобно и честно
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" delay={0.1}>
          {trustItems.map((item, i) => (
            <StaggerItem key={i}>
              <div className="glass-card glow-hover group flex h-full flex-col rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
