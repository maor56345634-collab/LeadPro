import type { Metadata } from 'next'
import { Rubik, Noto_Serif_Hebrew } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const rubik = Rubik({ 
  subsets: ["latin", "hebrew"],
  variable: '--font-rubik',
});

const notoSerifHebrew = Noto_Serif_Hebrew({ 
  subsets: ["latin", "hebrew"],
  variable: '--font-noto-serif-hebrew',
});

export const metadata: Metadata = {
  title: 'מאור — לידים לעסקים | לידים איכותיים לעסקים קטנים',
  description: 'לידים חמים ומסוננים לעסקים קטנים בישראל. ייעוץ ראשון חינם, תשלום רק על תוצאות.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable} ${notoSerifHebrew.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
