import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  await prisma.event.createMany({
    data: [
      {
        name: "Coding with Go",
        description: "Learn how to code with Go from scratch with our experts.",
        isGroup: true,
        minParticipants: 2,
        maxParticipants: 4,
        amount: 3000,
        reward: 6000,
        categories: ["Go", "Programming"],
      },
      {
        name: "Dance on the Clouds",
        description: "Dance on the clouds with our professional dancers.",
        isGroup: false,
        amount: 3000,
        reward: 4000,
      },
    ],
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
