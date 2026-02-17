import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/[0.05]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-6 sm:flex-row sm:justify-between md:px-8">
        <div className="flex items-center gap-5 text-xs text-muted-foreground">
          <Link href="/terms" className="transition-colors hover:text-foreground">
            Оферта
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Политика конфиденциальности
          </Link>
        </div>
        <p className="text-xs text-muted-foreground">
          {"Поддержка: "}
          <a
            href="https://t.me/ru_ch_04"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary/80 transition-colors hover:text-primary"
          >
            https://t.me/ru_ch_04
          </a>
        </p>
      </div>
    </footer>
  )
}
