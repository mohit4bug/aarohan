import { db } from "@/lib/prisma"

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const event = await db.event.findUnique({
      where: {
        id: params.id,
      },
    })

    return Response.json(
      {
        event,
        message: "Event fetched successfully!",
      },
      { status: 200 }
    )
  } catch (error) {
    return Response.json(
      {
        error: "Something went wrong!",
      },
      { status: 500 }
    )
  }
}
