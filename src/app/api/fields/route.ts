import { auth } from "@/auth"
import { db } from "@/lib/prisma"

export const GET = auth(async (req) => {
  try {
    const { user } = req.auth!

    // if (user.role !== "ADMIN") {
    //   return Response.json(
    //     {
    //       error: "Unauthorized!",
    //     },
    //     { status: 403 }
    //   )
    // }

    const fields = await db.field.findMany()

    return Response.json(
      {
        fields,
        message: "Registration successful!",
      },
      { status: 201 }
    )
  } catch (error) {
    console.error(error)
    return Response.json(
      {
        error: "Something went wrong!",
      },
      { status: 500 }
    )
  }
})
