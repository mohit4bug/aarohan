import { auth } from "@/auth"
import { db } from "@/lib/prisma"

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth()
    const { user } = session!

    const id = params.id

    const isAdmin = user.role === "ADMIN"

    if (!isAdmin && user.id !== id) {
      return Response.json(
        {
          error: "Unauthorized!",
        },
        { status: 401 }
      )
    }

    const registrationsAsBoss = await db.registration.findMany({
      where: {
        bossId: id,
      },
    })

    const registrationsAsParticipant = await db.registration.findMany({
      where: {
        participants: {
          some: {
            id,
          },
        },
      },
    })

    return Response.json({
      registrations: {
        registrationsAsBoss,
        registrationsAsParticipant,
      },
      message: "Registrations fetched successfully!",
    })
  } catch (error) {
    return Response.json(
      {
        error: "Something went wrong!",
      },
      { status: 500 }
    )
  }
}
