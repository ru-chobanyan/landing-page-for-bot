import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Оферта — WB Примерочная",
  description: "Публичная оферта сервиса WB Примерочная",
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        На главную
      </Link>

      <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">Публичная оферта</h1>
      <p className="mt-2 text-xs text-muted-foreground">
        {"Дата последнего обновления: 15 февраля 2026 г."}
      </p>

      <div className="mt-10 space-y-8 text-sm leading-[1.8] text-muted-foreground">
        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">1. Общие положения</h2>
          <p>
            Настоящая публичная оферта определяет условия использования сервиса WB Примерочная
            (далее — Сервис), предоставляющего услуги виртуальной примерки одежды с использованием
            технологий искусственного интеллекта.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">2. Описание услуги</h2>
          <p>
            Сервис предоставляет возможность виртуальной примерки одежды на основе фотографий
            пользователя и изображений товаров. Результат генерации является приблизительным и
            не гарантирует 100% совпадения с реальным видом одежды.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">3. Оплата и возвраты</h2>
          <p>
            Оплата производится путём приобретения пакетов генераций. Генерации не сгорают и
            остаются на балансе пользователя. Списание генерации происходит только за успешный
            результат — если генерация не удалась, баланс не уменьшается.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">4. Ограничения</h2>
          <p>
            На данный момент Сервис не принимает ссылки на товары Wildberries — для генерации
            необходим скриншот карточки товара или фотография вещи.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">5. Реферальная программа</h2>
          <p>
            Пользователь может пригласить друга по реферальной ссылке. При покупке другом
            любого пакета генераций пригласившему начисляется +2 бонусных генерации.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">6. Контактная информация</h2>
          <p>
            {"По всем вопросам обращайтесь в поддержку: "}
            <a
              href="https://t.me/ru_ch_04"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              https://t.me/ru_ch_04
            </a>
          </p>
        </section>
      </div>
    </main>
  )
}
