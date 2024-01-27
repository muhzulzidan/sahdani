import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter as FontSans } from "next/font/google"
import { cn } from "../lib/utils"
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${fontSans.style.fontFamily};
        }
      `}</style>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}
