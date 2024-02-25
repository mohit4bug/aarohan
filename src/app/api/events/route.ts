import { db } from "@/lib/prisma"

export async function GET(_request: Request) {
  try {
    const events = await db.event.findMany()

    return Response.json(
      {
        events,
        message: "Events fetched successfully!",
      },
      { status: 200 },
    )
  } catch (error) {
    return Response.json(
      {
        error: "Something went wrong!",
      },
      { status: 500 },
    )
  }
}
