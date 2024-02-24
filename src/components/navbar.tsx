"use client"

import { LogoutAlertDialog } from "@/components/logout-alert-dialog"
import { Button } from "@/components/ui/button"
import { LogOutIcon } from "lucide-react"

export const Navbar = () => {
  return (
    <nav className="min-h-[4rem] max-h-[4rem] border-b px-4 xl:px-0">
      <div className="h-full max-w-6xl mx-auto items-center flex justify-between">
        <LogoutAlertDialog>
          <Button variant="outline" className="ml-auto">
            <LogOutIcon className="w-4 h-4 mr-2" /> Sign out
          </Button>
        </LogoutAlertDialog>
      </div>
    </nav>
  )
}
