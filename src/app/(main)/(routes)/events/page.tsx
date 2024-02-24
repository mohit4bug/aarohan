"use client"

import { EventCard } from "@/components/event-card"
import { makeRequest } from "@/lib/axios"
import { Event } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"

type ApiResponse<T> = {
  [key: string]: T
}

export default function EventsPage() {
  const eventsQuery = useQuery<ApiResponse<Event[]>>({
    queryKey: ["@EVENTS"],
    async queryFn() {
      const res = await makeRequest.get("/events")
      return res.data
    },
  })

  return (
    <main className="h-full px-4 xl:px-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 xl:py-6 gap-4">
        {eventsQuery.data &&
          eventsQuery.data.events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
      </div>
    </main>
  )
}
