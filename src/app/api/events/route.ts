import { auth } from "@/auth"
import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function GET(request: Request) {
  try {
    const session = await auth()
    const { user } = session!

    /* TODO: Test this */
    const events = await db.event.findMany({
      where: {
        allowOutside: user.type === "OUTSIDER",
      },
    })

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
