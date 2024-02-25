"use client"

import { useTailwindConfig } from "@/hooks/useTailwindConfig"
import { AppProgressBar as ProgressBar } from "next-nprogress-bar"

export function NextNProgressProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme } = useTailwindConfig()

  return (
    <>
      <ProgressBar
        height="4px"
        options={{ showSpinner: false }}
        shallowRouting
        color={theme.colors.primary.DEFAULT}
      />
      {children}
    </>
  )
}
