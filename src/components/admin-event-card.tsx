import { AddFieldForm } from "@/components/add-field-form"
import { EventCard } from "@/components/event-card"
import { FieldCard } from "@/components/field-card"
import { makeRequest } from "@/lib/axios"
import { Event, Field, Registration } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"

type ApiResponse<T> = {
  [key: string]: T
}

export const AdminEventCard = (event: Event) => {
  const eventQuery = useQuery<
    ApiResponse<
      Event & {
        eventFields: Array<{
          field: Field
        }>
        registrations: Array<Registration>
      }
    >
  >({
    queryKey: ["@EVENT", event.id],
    async queryFn() {
      const res = await makeRequest.get(`/events/${event.id}`)
      return res.data
    },
  })

  return (
    <div className="space-y-4">
      <EventCard {...event} />
      <AddFieldForm {...event} />
      <div className="grid grid-cols-1 space-y-4">
        {eventQuery.data &&
          eventQuery.data.event.eventFields.map((field) => (
            <FieldCard key={field.field.id} {...field.field} />
          ))}
      </div>
    </div>
  )
}
