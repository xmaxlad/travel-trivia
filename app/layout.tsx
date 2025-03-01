import type { Metadata } from "next"
import { Mystery_Quest } from "next/font/google"
import "./globals.css"

const mysteryQuest = Mystery_Quest({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mystery-quest',
})

export const metadata: Metadata = {
  title: "Travel Trivia!",
  description: "Can you reveal the mystery?",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mysteryQuest.className}`}>
        <img src='/background.webp' className='bg-img'></img>
        {children}
      </body>
    </html>
  )
}
