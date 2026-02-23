"use client"

import { Button } from "@/components/ui/button"
import { FadeIn } from "./motion"
import { ArrowRight } from "lucide-react"

import { BOT_LINKS } from "@/lib/links"
import { reachGoal } from "@/lib/metrika"

const BOT_LINK = BOT_LINKS.finalCTA

export function FinalCTA() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[24px] border border-white/[0.06] bg-white/[0.02] px-6 py-16 text-center md:px-12 md:py-20">
          {/* Gradient glow behind */}
          <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[500px] -translate-x-1/2 rounded-full bg-primary/[0.08] blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-[hsl(250,60%,50%)]/[0.05] blur-[80px]" />

          <div className="relative z-10">
            <FadeIn>
              <h2 className="text-balance text-2xl font-black tracking-tight text-white md:text-5xl lg:text-[56px]">
                {"Готовы примерить перед заказом?"}
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
                {"Открой бота в Telegram и сделай первую примерку."}
                <br />
                {"2 бесплатные — после подписки на канал. Списание только за успешный результат."}
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="btn-glow group h-12 rounded-2xl px-8 text-sm font-semibold shadow-xl shadow-primary/25 transition-all hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.98]"
                  data-cta="open-bot"
                  onClick={() => reachGoal("open_bot", "finalCTA")}
                >
                  <a href={BOT_LINK} target="_blank" rel="noopener noreferrer">
                    {"Открыть бота"}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
