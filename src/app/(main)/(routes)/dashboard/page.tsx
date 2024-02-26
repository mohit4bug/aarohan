"use client"

import { RegistrationCard } from "@/components/registration-card"
import { makeRequest } from "@/lib/axios"
import { ApiResponse } from "@/types/axios"
import { Event, Registration } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

export default function DashboardPage() {
  const { data: session } = useSession()

  const registrationsQuery = useQuery<
    ApiResponse<{
      registrationsAsBoss: Array<
        Registration & {
          event: Event
        }
      >
      registrationsAsParticipant: Array<
        Registration & {
          event: Event
        }
      >
    }>
  >({
    queryKey: ["@USER_REGISTRATIONS", session?.user.id],
    async queryFn() {
      const res = await makeRequest.get(
        `/users/${session?.user.id}/registrations`
      )
      return res.data
    },
  })

  return (
    <main className="h-full px-4 xl:px-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 xl:py-6 gap-4">
        {registrationsQuery.data &&
          registrationsQuery.data.registrations.registrationsAsBoss.map(
            (registration) => (
              <RegistrationCard key={registration.id} {...registration} />
            )
          )}
        {registrationsQuery.data &&
          registrationsQuery.data.registrations.registrationsAsParticipant.map(
            (registration) => (
              <RegistrationCard key={registration.id} {...registration} />
            )
          )}
      </div>
    </main>
  )
}
