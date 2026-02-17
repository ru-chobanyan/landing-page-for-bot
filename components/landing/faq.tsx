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
    a: "Поддержка: https://t.me/ru_ch_04",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-16 md:py-24 scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <FadeIn>
          <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/50">
            FAQ
          </span>
          <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-[36px]">
            Частые вопросы
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 glass-card rounded-2xl overflow-hidden">
            <Accordion type="single" collapsible>
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border-b border-white/[0.05] px-6 last:border-b-0 transition-colors hover:bg-white/[0.02]"
                >
                  <AccordionTrigger className="py-5 text-left text-sm font-medium text-foreground hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm font-medium leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
