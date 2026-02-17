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
    <section id="how-it-works" className="relative py-16 md:py-24 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/50">
              Инструкция
            </span>
          </div>
          <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-[36px]">
            Как работает WB Примерочная
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {"Два шага — и всё понятно."}
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {/* Step 1 */}
          <FadeIn delay={0.1}>
            <div className="glass-card glow-hover group h-full rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-0.5">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20">
                  <Camera className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">{"Шаг 1/2"}</span>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">{"Твоё фото"}</h3>
                </div>
              </div>
              <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                {"Отправь фото в полный рост или по пояс."}
              </p>
              <div className="mt-5 space-y-2.5">
                {tips.map((tip, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/60" />
                    <span className="text-xs leading-relaxed text-white/50">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Step 2 */}
          <FadeIn delay={0.2}>
            <div className="glass-card glow-hover group h-full rounded-[20px] p-6 transition-all duration-300 hover:-translate-y-0.5">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary shadow-lg shadow-primary/20">
                  <Shirt className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">{"Шаг 2/2"}</span>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">Одежда</h3>
                </div>
              </div>
              <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                {"Отправь скрин карточки WB или фото вещи."}
              </p>
              {/* Warning */}
              <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-amber-500/20 bg-amber-500/[0.05] px-3.5 py-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-[10px] font-bold text-amber-400">!</span>
                <p className="text-xs leading-relaxed text-amber-300/70">
                  {"Ссылки WB пока не принимаем — нужен именно скрин/фото."}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-col items-center text-center">
            <p className="text-sm font-medium text-foreground">
              {"Через 5\u201315 секунд бот пришлёт твою примерку."}
            </p>
            <p className="mt-2 text-xs font-medium text-muted-foreground">
              {"Списание только за успешный результат. Если генерация не получилась — не списываем."}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
