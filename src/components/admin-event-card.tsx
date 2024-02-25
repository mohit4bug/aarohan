import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Event } from "@prisma/client"

export const AdminEventCard = (event: Event) => {
  return (
    <div className="space-y-4">
      <EventCard {...event} />
      {/* <ScrollArea>
        <div className="grid grid-cols-1">
          <Button variant="outline">Hello</Button>
        </div>
      </ScrollArea> */}
    </div>
  )
}
