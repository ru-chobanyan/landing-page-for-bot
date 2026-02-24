import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Сайт в разработке",
    description: "Мы работаем над улучшением сайта. Скоро вернёмся!",
    robots: { index: false, follow: false },
};

export default function MaintenancePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-primary/[0.08] blur-[120px]" />

            <div className="relative z-10 flex flex-col items-center gap-6 max-w-lg">
                {/* Logo */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground text-xl font-black shadow-2xl shadow-primary/40">
                    ⚙️
                </div>

                <h1 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
                    Сайт обновляется
                </h1>

                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                    Мы работаем над улучшением. Совсем скоро всё будет готово!
                </p>

                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/[0.04] px-5 py-3">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                    </span>
                    <span className="text-sm font-medium text-white/60">
                        Обновление в процессе...
                    </span>
                </div>

                <a
                    href="https://t.me/primerka_wb_bot?start=SRC_LAND_MAINTENANCE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 active:scale-[0.98]"
                >
                    Открыть бота в Telegram
                </a>

                <p className="mt-2 text-xs text-muted-foreground">
                    Бот продолжает работать — можно пользоваться
                </p>
            </div>
        </div>
    );
}
