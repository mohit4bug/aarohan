import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  /* Go Event */
  const goEvent = await prisma.event.create({
    data: {
      name: "Coding with Go",
      description: "Learn how to code with Go from scratch with our experts.",
      isGroup: true,
      minParticipants: 2,
      maxParticipants: 4,
      amount: 3000,
      reward: 6000,
      categories: ["Go", "Programming"],
      poster:
        "https://media.licdn.com/dms/image/D4E12AQExtNE6b8J9_w/article-cover_image-shrink_720_1280/0/1681854911047?e=2147483647&v=beta&t=qmN4QsskpmPeb4wmjlvHEV4XAGHIklQmNNMYocxi5wg",
    },
  })

  /* Dance Event */
  const danceEvent = await prisma.event.create({
    data: {
      name: "Dance on the Clouds",
      description: "Dance on the clouds with our professional dancers.",
      isGroup: false,
      amount: 3000,
      reward: 4000,
      poster:
        "https://img.freepik.com/free-photo/multicolored-psychedelic-paper-shapes_23-2149378273.jpg?w=1060&t=st=1708789142~exp=1708789742~hmac=9d720a5aabc4dbb15394d380a6c0f5377975d31c986435510f54b77bf1b3da1b",
    },
  })

  /* Field for Go */
  await prisma.field.create({
    data: {
      name: "Experience",
      value: "experience",
      type: "SELECT",
      options: [
        {
          label: "Beginner",
          value: "beginner",
        },
        {
          label: "Intermediate",
          value: "intermediate",
        },
        {
          label: "Advanced",
          value: "advanced",
        },
      ],
      EventFields: {
        create: {
          eventId: goEvent.id,
        },
      },
    },
  })

  /* Field for Dance */
  await prisma.field.create({
    data: {
      name: "Weight",
      value: "weight",
      placeholder: "Enter your weight in kg",
      type: "TEXT",
      EventFields: {
        create: {
          eventId: danceEvent.id,
        },
      },
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
