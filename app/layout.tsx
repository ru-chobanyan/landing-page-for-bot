import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'WB Примерочная — Онлайн примерка одежды с Wildberries по фото в Telegram',
  description:
    'Виртуальная примерка одежды с Wildberries на вашем фото. Отправьте фото и скрин карточки WB — получите результат за 5-15 секунд. Бесплатные генерации после подписки на канал.',
  keywords: 'примерка WB, виртуальная примерка Wildberries, онлайн примерка одежды, примерка по фото, Telegram бот примерка',
}

export const viewport: Viewport = {
  themeColor: '#07070A',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="noise-overlay grid-bg font-sans antialiased">{children}</body>
    </html>
  )
}
