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
    <section id="pricing" className="relative py-16 md:py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/50">
            Тарифы
          </span>
          <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-[36px]">
            Пакеты генераций
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {"Генерации не сгорают — остаются на балансе."}
          </p>
        </FadeIn>

        <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" delay={0.1}>
          {plans.map((plan, i) => (
            <StaggerItem key={i}>
              <div
                className={`relative flex h-full flex-col rounded-[20px] p-5 transition-all duration-300 hover:-translate-y-1 ${plan.popular
                  ? "animated-border shadow-xl shadow-primary/10"
                  : "glass-card glow-hover"
                  }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-5 inline-flex items-center rounded-full bg-primary px-3 py-1 text-[11px] font-bold text-white shadow-lg shadow-primary/30">
                    {"Популярный"}
                  </span>
                )}
                <div className="mb-4 mt-1">
                  <p className="text-sm font-semibold text-foreground">{plan.gens} генераций</p>
                  <p className="mt-1.5 text-3xl font-bold tracking-tight text-foreground">{plan.price}</p>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">{plan.per}</p>
                </div>
                <p className="flex-1 text-xs font-medium leading-relaxed text-muted-foreground">{plan.caption}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bonuses */}
        <FadeIn delay={0.4}>
          <div className="mt-10 glass-card rounded-2xl p-6">
            <div className="space-y-3">
              {bonuses.map((bonus, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm text-white/60">{bonus}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              className="btn-glow group h-12 w-full rounded-2xl text-sm font-semibold shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.98] sm:w-auto sm:px-10"
              data-cta="open-bot"
              onClick={() => reachGoal("open_bot", "pricing")}
            >
              <a href={BOT_LINK} target="_blank" rel="noopener noreferrer">
                {"Открыть бота и начать"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
