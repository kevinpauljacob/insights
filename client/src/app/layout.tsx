import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Insights - A Monochrome Blog',
  description: 'See the World in Black and White, Unveiling Life&apos;s True Contrasts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` max-w-[1300px] mx-auto sm:p-10 py-10 px-5 min-h-screen ${montserrat.className}`}>{children}</body>
    </html>
  )
}
