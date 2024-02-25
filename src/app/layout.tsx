import "@/styles/globals.css"

import { Toaster } from "@/components/ui/sonner"
import { fontSans } from "@/lib/fonts"
import { NextAuthProvider } from "@/providers/next-auth"
import { NextNProgressProvider } from "@/providers/next-nprogress-bar"
import { TanstackQueryProvider } from "@/providers/tanstack-query"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={fontSans.className}>
        <NextNProgressProvider>
          <TanstackQueryProvider>
            <NextAuthProvider>
              {children}
              <SpeedInsights />
              <Toaster position="top-right" richColors />
            </NextAuthProvider>
          </TanstackQueryProvider>
        </NextNProgressProvider>
      </body>
    </html>
  )
}
