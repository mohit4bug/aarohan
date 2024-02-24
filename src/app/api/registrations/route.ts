import { auth } from "@/auth"
import { db } from "@/lib/prisma"

export const POST = auth(async (req) => {
  try {
    const { user } = req.auth!
    const body = await req.json()

    const eventId = body.eventId
    const participants = body.participants

    const event = await db.event.findUnique({
      where: {
        id: eventId,
      },
    })

    if (!event) {
      return Response.json(
        {
          error: "Event not found!",
        },
        { status: 404 }
      )
    }

    /* Group & participans check */
    if (event.isGroup) {
      if (
        participants.length > event.maxParticipants ||
        participants.length < event.minParticipants
      ) {
        return Response.json(
          {
            error: "Invalid number of participants!",
          },
          { status: 400 }
        )
      }
    } else {
      if (participants.length > 0) {
        return Response.json(
          {
            error: "Invalid number of participants!",
          },
          { status: 400 }
        )
      }
    }

    const registration = await db.registration.create({
      data: {
        bossId: user.id!,
        eventId: eventId,
        participants: {
          connect: participants.map(({ id }: { id: string }) => ({
            id,
          })),
        },
      },
    })

    return Response.json(
      {
        registration,
        message: "Registration successful!",
      },
      { status: 201 }
    )
  } catch (error) {
    return Response.json(
      {
        error: "Something went wrong!",
      },
      { status: 500 }
    )
  }
})
