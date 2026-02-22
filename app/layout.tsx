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

import Script from "next/script"
import { METRIKA_ID } from "@/lib/metrika"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="noise-overlay grid-bg font-sans antialiased">
        {children}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                  k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${METRIKA_ID}', 'ym');

              ym(${METRIKA_ID}, 'init', {
                ssr:true,
                webvisor:true,
                clickmap:true,
                ecommerce:"dataLayer",
                referrer: document.referrer,
                url: location.href,
                accurateTrackBounce:true,
                trackLinks:true,
                trackHash:true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src={`https://mc.yandex.ru/watch/${METRIKA_ID}`}
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  )
}
