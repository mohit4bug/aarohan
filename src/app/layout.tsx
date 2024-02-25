import "@/styles/globals.css"

import { Toaster } from "@/components/ui/sonner"
import { fontSans } from "@/lib/fonts"
import { NextAuthProvider } from "@/providers/next-auth"
import { TanstackQueryProvider } from "@/providers/tanstack-query"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={fontSans.className}>
        <TanstackQueryProvider>
          <NextAuthProvider>
            {children}
            <Toaster position="top-right" richColors />
          </NextAuthProvider>
        </TanstackQueryProvider>
      </body>
    </html>
  )
}
