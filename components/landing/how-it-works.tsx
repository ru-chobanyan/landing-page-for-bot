"use client"

import { FadeIn } from "./motion"
import { Camera, Shirt, CheckCircle } from "lucide-react"

const tips = [
  "Ровный свет, без жёстких фильтров",
  "Не закрывай тело руками/сумкой",
  "Лучше однотонный фон (но не критично)",
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-16 md:py-24 scroll-mt-20 overflow-hidden">
      {/* Ambient Glows */}
      <div className="ambient-glow -left-[10%] top-[20%] opacity-40" />
      <div className="ambient-glow -right-[10%] bottom-[10%] opacity-30" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              Инструкция
            </span>
            <h2 className="mt-6 text-balance text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Как работает <span className="text-gradient">Примерочная</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">
              {"Два простых шага — и твой новый образ готов."}
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid relative gap-8 md:grid-cols-2">
          {/* Desktop Connector */}
          <div className="step-connector hidden md:block" />

          {/* Step 1 */}
          <FadeIn delay={0.1}>
            <div className="glass-card-premium shimmer-scan group relative h-full rounded-[24px] p-8 transition-all duration-500 hover:-translate-y-2">
              <div className="mb-6 flex items-center gap-5">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  <Camera className="h-6 w-6" />
                  <div className="absolute inset-0 block rounded-2xl bg-primary blur-md -z-10 opacity-40 group-hover:opacity-60 transition-opacity" />
                </div>
                <div>
                  <span className="text-[12px] font-bold uppercase tracking-widest text-primary/80">{"Шаг 1/2"}</span>
                  <h3 className="text-xl font-bold tracking-tight text-white">{"Твоё фото"}</h3>
                </div>
              </div>
              <p className="text-base font-medium leading-relaxed text-white/70">
                {"Отправь боту своё фото в полный рост или по пояс. Чем чётче фото, тем круче результат."}
              </p>
              <div className="mt-8 space-y-4">
                {tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 group/tip">
                    <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover/tip:bg-primary/20">
                      <CheckCircle className="h-3 w-3" />
                    </div>
                    <span className="text-sm font-medium text-white/50 transition-colors group-hover/tip:text-white/70">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Step 2 */}
          <FadeIn delay={0.2}>
            <div className="glass-card-premium shimmer-scan group relative h-full rounded-[24px] p-8 transition-all duration-500 hover:-translate-y-2">
              <div className="mb-6 flex items-center gap-5">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  <Shirt className="h-6 w-6" />
                  <div className="absolute inset-0 block rounded-2xl bg-primary blur-md -z-10 opacity-40 group-hover:opacity-60 transition-opacity" />
                </div>
                <div>
                  <span className="text-[12px] font-bold uppercase tracking-widest text-primary/80">{"Шаг 2/2"}</span>
                  <h3 className="text-xl font-bold tracking-tight text-white">Одежда</h3>
                </div>
              </div>
              <p className="text-base font-medium leading-relaxed text-white/70">
                {"Пришли скриншот карточки Wildberries или просто фото вещи, которую хочешь примерить."}
              </p>
              {/* Warning */}
              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 transition-colors hover:bg-amber-500/10">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs font-bold text-amber-400">!</span>
                <p className="text-sm font-medium leading-relaxed text-amber-200/60">
                  {"Ссылки пока не принимаем — боту нужен именно скриншот или фото товара."}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="relative mt-16 overflow-hidden rounded-[32px] border border-white/5 bg-white/[0.02] p-8 text-center backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50" />
            <div className="relative z-10">
              <p className="text-lg font-bold text-white">
                {"Готово! Через 5\u201315 секунд бот пришлёт результат."}
              </p>
              <div className="mt-3 flex flex-wrap justify-center gap-x-4 text-sm font-medium text-white/40">
                <span>⚡ Быстрая генерация</span>
                <span>•</span>
                <span>🛡️ Оплата только за успех</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
