import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  await prisma.event.createMany({
    data: [
      {
        name: "Film Flicker (Reel Competition)",
        description:
          "Step into the spotlight and unleash your cinematic creativity in our Reel Competition! Craft compelling stories, showcase your filmmaking skills, and captivate the audience with your unique vision. Lights, camera, action – the stage is yours to make a reel impact.",
        isGroup: true,
        minParticipants: 2,
        maxParticipants: 4,
        amount: 3000,
        reward: 6000,
        categories: ["Cultural"],
        poster:
          "https://granulate.io/wp-content/uploads/2021/02/Golang-Performance-510x300-1.png",
        venue: "PIET Campus / Stage",
      },
      {
        name: "Rap Rampage (rap battle)",
        description:
          "Get ready to witness the ultimate clash of lyrical titans at rap battle! Feel the heat rise as words collide, delivering fiery verses packed with wit, rhythm, and raw talent. With each mic drop, the crowd roars, caught in the electrifying energy of a battle for hip-hop supremacy!",
        isGroup: true,
        minParticipants: 2,
        maxParticipants: 4,
        amount: 150,
        reward: 1000,
        categories: ["Cultural"],
        poster:
          "https://granulate.io/wp-content/uploads/2021/02/Golang-Performance-510x300-1.png",
        venue: "Stage D Block",
      },
      {
        name: "Solo Dance Competition",
        description:
          "Join our solo duo dance competition, where pairs unite to create mesmerising performances and captivate the audience with their unique artistry!",
        isGroup: false,
        minParticipants: 1,
        maxParticipants: 1,
        amount: 3000,
        reward: 6000,
        categories: ["Cultural"],
        poster:
          "https://granulate.io/wp-content/uploads/2021/02/Golang-Performance-510x300-1.png",
        venue: "Stage D Block",
      },
      {
        name: "Tressure Hunt",
        description:
          "Embark on an exhilarating journey of discovery at treasure hunt! With clues hidden throughout the campus, teams race against the clock, unravelling mysteries and solving puzzles to uncover the ultimate prize. Feel the thrill of the chase and the rush of victory in this epic adventure!",
        isGroup: true,
        minParticipants: 2,
        maxParticipants: 4,
        amount: 3000,
        reward: 6000,
        categories: ["Cultural"],
        poster:
          "https://granulate.io/wp-content/uploads/2021/02/Golang-Performance-510x300-1.png",
        venue: "PIET Campus / Stage",
      },
      {
        name: "Nukkad Natak Competition",
        description:
          "Engage, inspire, and captivate audiences in our dynamic nukkad natak competition, where stories come alive on the streets, leaving lasting impressions and sparking conversations.",
        isGroup: true,
        minParticipants: 2,
        maxParticipants: 4,
        amount: 500,
        reward: 1800,
        categories: ["Cultural"],
        poster:
          "https://granulate.io/wp-content/uploads/2021/02/Golang-Performance-510x300-1.png",
        venue: "PIET Campus",
      },
      {
        name: "Dance Battle",
        description:
          "Get ready to groove and showcase your moves in our spectacular dance battle, where talent meets creativity and the stage comes alive with electrifying performances!",
        isGroup: true,
        minParticipants: 2,
        maxParticipants: 4,
        amount: 3000,
        reward: 6000,
        categories: ["Cultural"],
        poster:
          "https://granulate.io/wp-content/uploads/2021/02/Golang-Performance-510x300-1.png",
        venue: "Stage D Block",
      },
      {
        name: "Jodi no. 1",
        description:
          "Jodi No. 1 is the ultimate duo competition! Bring your dynamic partner, showcase chemistry, and claim the title of unbeatable pair.",
        isGroup: true,
        minParticipants: 2,
        maxParticipants: 2,
        amount: 3000,
        reward: 6000,
        categories: ["Cultural"],
        poster:
          "https://granulate.io/wp-content/uploads/2021/02/Golang-Performance-510x300-1.png",
        venue: "Stage D Block",
      },
      {
        name: "Doodle Art",
        description:
          "Doodle art is a spontaneous and free-form style of drawing, characterised by abstract shapes, patterns, and characters, allowing artists to express creativity without constraints.",
        isGroup: true,
        minParticipants: 2,
        maxParticipants: 4,
        amount: 3000,
        reward: 6000,
        categories: ["Cultural"],
        poster:
          "https://granulate.io/wp-content/uploads/2021/02/Golang-Performance-510x300-1.png",
        venue: "PIET Campus / Stage",
      },
      {
        name: "Rangmanch(Stage Play)",
        description:
          "Dynamic stage play brimming with emotion, intrigue, and stellar performances. A riveting tale unfolds, leaving audiences captivated and moved",
        isGroup: true,
        minParticipants: 2,
        maxParticipants: 4,
        amount: 300,
        reward: 1000,
        categories: ["Cultural"],
        poster:
          "https://granulate.io/wp-content/uploads/2021/02/Golang-Performance-510x300-1.png",
        venue: "Stage D Block",
      },
      {
        name: "Sonic Box(Beat Boxing)",
        description:
          "A high-energy beatboxing competition where performers showcase rhythmic beats, vocal percussion, and sound effects using only their mouth and voice, aiming to outdo each other with sonic prowess.",
        isGroup: true,
        minParticipants: 2,
        maxParticipants: 4,
        amount: 100,
        reward: 700,
        categories: ["Cultural"],
        poster:
          "https://granulate.io/wp-content/uploads/2021/02/Golang-Performance-510x300-1.png",
        venue: "Stage D Block",
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
