"use client"

import { Button } from "@/components/ui/button"
import { FadeIn, StaggerContainer, StaggerItem } from "./motion"
import { ArrowRight, Check } from "lucide-react"

import { BOT_LINKS } from "@/lib/links"
import { reachGoal } from "@/lib/metrika"

const BOT_LINK = BOT_LINKS.pricing

const plans = [
  {
    gens: "3",
    price: "99 \u20BD",
    per: "33 \u20BD/шт",
    caption: "Быстрый старт — проверить посадку + другой цвет/размер",
  },
  {
    gens: "5",
    price: "199 \u20BD",
    per: "~40 \u20BD/шт",
    caption: "Оптимально — 2\u20133 вещи и сравнение вариантов",
    popular: true,
  },
  {
    gens: "15",
    price: "399 \u20BD",
    per: "~27 \u20BD/шт",
    caption: "На неделю — собрать образы под разные случаи",
  },
  {
    gens: "40",
    price: "799 \u20BD",
    per: "~20 \u20BD/шт",
    caption: "На сезон — активный шопинг без \"угадайки\"",
  },
]

const bonuses = [
  "Подписчикам канала — 2 бесплатные генерации (после проверки подписки)",
  "Можно купить пакет и пользоваться без подписки",
  "Рефералка: приведи друга \u2192 +2 генерации, когда он купит любой пакет",
  "И ещё раз по-честному: списание только за успешный результат",
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-16 md:py-24 scroll-mt-20 overflow-hidden">
      {/* Ambient Glows */}
      <div className="ambient-glow -right-[15%] top-0 opacity-40" />
      <div className="ambient-glow -left-[10%] bottom-[20%] opacity-30" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              Тарифы
            </span>
            <h2 className="mt-6 text-balance text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Пакеты <span className="text-gradient">генераций</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              {"Никаких подписок. Генерации не сгорают и остаются на балансе навсегда."}
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" delay={0.1}>
          {plans.map((plan, i) => (
            <StaggerItem key={i}>
              <div
                className={`group relative flex h-full flex-col rounded-[24px] p-6 transition-all duration-500 hover:-translate-y-2 ${plan.popular
                  ? "animated-border shadow-[0_20px_40px_-12px_rgba(168,85,247,0.25)]"
                  : "glass-card-premium"
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-6 z-20">
                    <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-[11px] font-black uppercase tracking-widest text-white shadow-[0_8px_16px_rgba(168,85,247,0.5)]">
                      {"Популярный"}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-sm font-bold uppercase tracking-widest text-primary/80 group-hover:text-primary transition-colors">
                    {plan.gens} генераций
                  </p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-black tracking-tight text-white">{plan.price.split(' ')[0]}</span>
                    <span className="text-xl font-bold text-white/50">{plan.price.split(' ')[1]}</span>
                  </div>
                  <p className="mt-2 text-sm font-bold text-white/40">{plan.per}</p>
                </div>

                <p className="flex-1 text-sm font-medium leading-relaxed text-white/60 group-hover:text-white/80 transition-colors">
                  {plan.caption}
                </p>

                {plan.popular && (
                  <div className="absolute inset-0 rounded-[24px] bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bonuses Grid */}
        <FadeIn delay={0.4}>
          <div className="mt-16 relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 md:p-12 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-50" />
            <div className="relative z-10 grid gap-8 md:grid-cols-2">
              {bonuses.map((bonus, i) => (
                <div key={i} className="flex items-start gap-4 group/bonus">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary transition-transform group-hover/bonus:scale-110">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-base font-medium leading-relaxed text-white/60 group-hover/bonus:text-white/80 transition-colors">{bonus}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-16 text-center">
            <Button
              asChild
              size="lg"
              className="btn-glow group h-14 w-full rounded-2xl text-base font-bold shadow-[0_20px_40px_-10px_rgba(168,85,247,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] sm:w-auto sm:px-12"
              data-cta="open-bot"
              onClick={() => reachGoal("open_bot", "pricing")}
            >
              <a href={BOT_LINK} target="_blank" rel="noopener noreferrer">
                {"Открыть бота"}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-white/20">
              Безопасная оплата через официальные платежные системы
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
