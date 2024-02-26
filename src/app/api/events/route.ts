import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function GET(request: Request) {
  try {
    const events = await db.event.findMany()

    revalidatePath(request.url)
    return Response.json(
      {
        events,
        message: "Events fetched successfully!",
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
