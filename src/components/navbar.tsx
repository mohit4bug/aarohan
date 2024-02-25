"use client"

import { LogoutAlertDialog } from "@/components/logout-alert-dialog"
import { Button } from "@/components/ui/button"
import { LogOutIcon } from "lucide-react"
import { useRouter } from "next/navigation"

export const Navbar = () => {
  const router = useRouter()
  const handleClick = (href: string) => router.push(href)

  return (
    <header className="min-h-[4rem] max-h-[4rem] border-b px-4 xl:px-0">
      <div className="h-full max-w-6xl mx-auto items-center flex justify-between">
        <nav className="ml-auto gap-x-8 flex">
          <p
            className="text-sm font-medium cursor-pointer bg-gradient-to-r from-fuchsia-700 to-pink-700 bg-clip-text text-transparent"
            onClick={handleClick.bind(null, "/events")}>
            Events
          </p>
          <p
            className="text-sm font-medium cursor-pointer"
            onClick={handleClick.bind(null, "/dashboard")}>
            Dashboard
          </p>
        </nav>
        <LogoutAlertDialog>
          <Button variant="outline" className="ml-8">
            <LogOutIcon className="w-4 h-4 mr-2" /> Sign out
          </Button>
        </LogoutAlertDialog>
      </div>
    </header>
  )
}
