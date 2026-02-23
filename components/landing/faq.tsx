"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FadeIn } from "./motion"

const faqItems = [
  {
    q: "Можно просто вставить ссылку на товар WB?",
    a: "Пока нет. Мы не принимаем ссылки WB — нужен скрин карточки или фото вещи.",
  },
  {
    q: "Когда списывается генерация?",
    a: "Только за успешный результат. Если бот вернул ошибку/не получилось — ничего не списываем.",
  },
  {
    q: "Это точно будет \"1 в 1\" как в жизни?",
    a: "Нет, это виртуальная примерка, она помогает понять посадку/силуэт/общий образ. 100% совпадение по нюансам (цвет/ткань) не обещаем.",
  },
  {
    q: "Какие фото лучше подходят для хорошего результата?",
    a: "Ровный свет, без сильных фильтров, фото в полный рост/по пояс, чтобы тело не было закрыто руками/предметами.",
  },
  {
    q: "Как получить 2 бесплатные генерации?",
    a: "После подписки на канал. Бот проверит подписку — и откроет 2 бесплатные генерации.",
  },
  {
    q: "Можно пользоваться без подписки на канал?",
    a: "Да. Покупаешь любой пакет — и доступ открывается сразу, без подписки.",
  },
  {
    q: "Генерации сгорают?",
    a: "Нет. Генерации не сгорают, лежат на балансе.",
  },
  {
    q: "Почему иногда не получается?",
    a: "Чаще всего из-за качества фото/скрина: тёмно, размазано, странный ракурс, много фильтров. Обычно помогает другое фото или более чёткий скрин.",
  },
  {
    q: "Куда писать, если что-то не так?",
    a: (
      <>
        {"Поддержка: "}
        <a
          href="https://t.me/ru_ch_04"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline transition-colors"
        >
          https://t.me/ru_ch_04
        </a>
      </>
    ),
  },
]

import { HelpCircle, ChevronDown } from "lucide-react"

export function FAQ() {
  return (
    <section id="faq" className="relative py-16 md:py-24 scroll-mt-20 overflow-hidden">
      {/* Ambient Glows */}
      <div className="ambient-glow -left-[10%] top-[40%] opacity-20" />

      <div className="relative mx-auto max-w-4xl px-5 md:px-8">
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              FAQ
            </span>
            <h2 className="mt-6 text-balance text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Частые <span className="text-gradient">вопросы</span>
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-16 space-y-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="glass-card-premium rounded-[24px] border border-white/5 transition-all duration-300 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/[0.03] overflow-hidden"
                >
                  <AccordionTrigger className="flex items-center gap-4 px-6 py-6 text-left text-base font-bold text-white/80 hover:no-underline hover:text-white transition-colors [&>svg]:hidden">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <HelpCircle className="h-4.5 w-4.5" />
                    </div>
                    <span className="flex-1">{item.q}</span>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/40 transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:border-primary/30 group-data-[state=open]:text-primary">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0 text-base font-medium leading-relaxed text-white/50 border-t border-white/5">
                    <div className="mt-4 pl-12">
                      {item.a}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-white/30">
              Остались вопросы? Пишите в <a href="https://t.me/ru_ch_04" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">поддержку</a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
