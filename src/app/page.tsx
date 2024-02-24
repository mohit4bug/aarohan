"use client"

import { Button } from "@/components/ui/button"
import { Loader2Icon } from "lucide-react"
import { signIn } from "next-auth/react"
import { useState } from "react"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false)

  const onSignIn = async () => {
    setIsLoading(true)
    await signIn("google")
  }

  return (
    <main className="h-full py-48 flex items-center flex-col gap-y-4 px-4 sm:px-0">
      <h1 className="text-4xl font-extrabold tracking-tighter lg:text-5xl text-center">
        Aarohan: Energizing College Teams
      </h1>
      <div className="bg-gradient-to-r from-fuchsia-700 to-pink-700 py-4 px-6 rounded-md">
        <h1 className="text-4xl font-extrabold tracking-tighter lg:text-5xl text-center text-white">
          College Fest.
        </h1>
      </div>
      <p className="text-muted-foreground text-lg max-w-xl text-center">
        Aarohan, the pulse of our college fest, sparks vibrant camaraderie,
        uniting teams in an electrifying celebration.
      </p>
      <Button onClick={onSignIn} disabled={isLoading}>
        {isLoading && <Loader2Icon className="w-4 h-5 animate-spin mr-2" />}
        Show events
      </Button>
    </main>
  )
}
