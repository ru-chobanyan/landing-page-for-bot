import Link from "next/link"
import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Политика конфиденциальности — WB Примерочная",
  description: "Политика конфиденциальности сервиса WB Примерочная",
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        На главную
      </Link>

      <h1 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">Политика конфиденциальности</h1>
      <p className="mt-2 text-xs text-muted-foreground">
        {"Дата последнего обновления: 15 февраля 2026 г."}
      </p>

      <div className="mt-10 space-y-8 text-sm leading-[1.8] text-muted-foreground">
        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">1. Общие положения</h2>
          <p>
            Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных
            данных пользователей сервиса WB Примерочная (далее — Сервис), доступного через Telegram-бота.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">2. Какие данные мы собираем</h2>
          <p>
            Для работы Сервиса мы обрабатываем: идентификатор пользователя Telegram, фотографии,
            отправленные пользователем для генерации примерки, а также данные об оплатах.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">3. Использование фотографий</h2>
          <p>
            Фотографии используются исключительно для генерации виртуальной примерки и не хранятся
            после получения результата. Мы не передаём фотографии третьим лицам и не используем их
            в маркетинговых целях.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">4. Хранение данных</h2>
          <p>
            Данные о балансе генераций и истории оплат хранятся на защищённых серверах. Мы принимаем
            разумные меры для защиты информации от несанкционированного доступа.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-base font-semibold text-foreground">5. Контактная информация</h2>
          <p>
            {"По вопросам, связанным с обработкой персональных данных, вы можете обратиться в поддержку: "}
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
