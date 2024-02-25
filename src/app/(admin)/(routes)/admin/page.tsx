"use client"

import { AdminEventCard } from "@/components/admin-event-card"
import { FieldCard } from "@/components/field-card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { makeRequest } from "@/lib/axios"
import { Event, Field } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"

type ApiResponse<T> = {
  [key: string]: T
}

export default function AdminPage() {
  const fieldsQuery = useQuery<ApiResponse<Field[]>>({
    queryKey: ["@FIELDS"],
    async queryFn() {
      const res = await makeRequest.get("/fields")
      return res.data
    },
  })

  const eventsQuery = useQuery<ApiResponse<Event[]>>({
    queryKey: ["@EVENTS"],
    async queryFn() {
      const res = await makeRequest.get("/events")
      return res.data
    },
  })

  return (
    <main className="h-full px-4 xl:px-0">
      <div className="max-w-6xl mx-auto py-4 xl:py-6 gap-4 space-y-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-tight">Fields</h3>
          {fieldsQuery.data && (
            <ScrollArea className="whitespace-nowrap w-full bg-card">
              <div className="flex w-max space-x-4">
                {fieldsQuery.data.fields.map((field) => (
                  <FieldCard key={field.id} {...field} />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          )}
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold tracking-tight">Events</h3>
          {eventsQuery.data && (
            <ScrollArea className="whitespace-nowrap w-full">
              <div className="flex w-max space-x-4">
                {eventsQuery.data.events.map((event) => (
                  <AdminEventCard key={event.id} {...event} />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          )}
        </div>
      </div>
    </main>
  )
}
