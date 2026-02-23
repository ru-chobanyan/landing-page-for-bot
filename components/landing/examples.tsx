"use client"

import { Button } from "@/components/ui/button"
import { FadeIn } from "./motion"
import { ArrowRight, ArrowDown, Sparkles } from "lucide-react"
import Image from "next/image"

import { BOT_LINKS } from "@/lib/links"
import { reachGoal } from "@/lib/metrika"

const BOT_LINK = BOT_LINKS.examples

interface TryOnExample {
  id: number
  folder: string
  description: string
}

const tryOnExamples: TryOnExample[] = [
  { id: 1, folder: 'tryon-1', description: 'Зимняя куртка' },
  { id: 2, folder: 'tryon-2', description: 'Вязаный свитер' },
]

export function Examples() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center">
          <FadeIn>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              Галерея
            </span>
          </FadeIn>
          <FadeIn delay={0.05}>
            <h2 className="mt-8 text-balance text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Примеры <span className="text-gradient">результатов</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              {"Три простых шага от твоего фото до примерки — вот как это работает."}
            </p>
          </FadeIn>
        </div>

        {/* Grid of try-on examples */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {tryOnExamples.map((example, index) => (
            <FadeIn key={example.id} delay={0.15 + index * 0.1}>
              <div className="glass-card rounded-3xl p-6 md:p-8">
                {/* Step 1: Person photo */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                      1
                    </span>
                    <span className="text-sm font-semibold text-white/80">Твоё фото</span>
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                    <Image
                      src={`/examples/${example.folder}/before.png`}
                      alt="Исходное фото"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Arrow down */}
                <div className="my-6 flex justify-center">
                  <div className="relative flex items-center justify-center">
                    <ArrowDown className="h-7 w-7 animate-bounce text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full -z-10" />
                  </div>
                </div>

                {/* Step 2: Clothing screenshot */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                      2
                    </span>
                    <span className="text-sm font-semibold text-white/80">Скриншот вещи с WB</span>
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                    <Image
                      src={`/examples/${example.folder}/product.png`}
                      alt="Скриншот товара WB"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Arrow down */}
                <div className="my-6 flex justify-center">
                  <div className="relative flex items-center justify-center">
                    <ArrowDown className="h-7 w-7 animate-bounce text-primary drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full -z-10" />
                  </div>
                </div>

                {/* Step 3: Result */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      3
                    </span>
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-primary" />
                      <span className="text-sm font-semibold text-primary">Результат за 5–15 сек</span>
                    </div>
                  </div>
                  <div className="shimmer-scan group relative aspect-[3/4] overflow-hidden rounded-2xl border border-primary/30 bg-primary/[0.05]">
                    <Image
                      src={`/examples/${example.folder}/result.png`}
                      alt={`Примерка: ${example.description}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA Button */}
        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <Button
              asChild
              className="btn-glow group h-11 rounded-2xl px-6 text-sm font-semibold shadow-xl shadow-primary/20 transition-all active:scale-[0.98]"
              data-cta="open-bot"
              onClick={() => reachGoal("open_bot", "examples")}
            >
              <a href={BOT_LINK} target="_blank" rel="noopener noreferrer">
                {"Сделать примерку в Telegram"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
