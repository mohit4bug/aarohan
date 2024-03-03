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
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FFilm%20Flicker.jpg",
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
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FRap%20Battle.jpg",
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
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FSolo%20Dance%20Competition.jpg",
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
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FTreasure%20Hunt.jpg",
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
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FNukkad%20Natak.jpg",
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
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FDance%20Battle.jpg",
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
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FJodi%20No.%201.jpg",
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
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FDoodle%20Art.png",
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
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FRangmanch.jpg",
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
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FBeat%20Boxing.jpg",
        venue: "Stage D Block",
      },
      {
        name: "Respawn(BGMI)",
        description:
          "Respawn BGMI, a popular battle royale game, offers intense multiplayer action on mobile platforms. Dive into adrenaline-pumping battles, strategize with your squad, and aim for victory in diverse maps and game modes.",
        isGroup: true,
        minParticipants: 4,
        maxParticipants: 4,
        amount: 200,
        reward: 4000,
        categories: ["Technical", "Gaming"],
        venue: "SEMINAR HALL PIET",
        poster:
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2F1_BGMI.png",
      },
      {
        name: "Time Bounded Coding",
        description:
          "Time-bounded coding involves setting precise time constraints for completing coding tasks or projects, promoting efficiency and productivity. This strategy encourages developers to concentrate on delivering functional solutions within predefined timeframes, facilitating project management and meeting deadlines proficiently.",
        isGroup: false,
        amount: 150,
        reward: 1000,
        categories: ["Technical", "Coding"],
        venue: "SEMINAR HALL PIET",
        poster:
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2F1_Race(100%20m).png",
      },
      {
        name: "Code a UI",
        description:
          "Embark on a journey through our meticulously crafted website, where intuitive design, captivating visuals, and engaging content combine to provide a truly immersive and unforgettable online experience, designed to inform, inspire, and delight visitors at every turn.",
        isGroup: false,
        amount: 150,
        reward: 1000,
        categories: ["Technical", "Coding"],
        venue: "SEMINAR HALL PIET",
        poster:
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2F1_Code%20A%20UI.png",
      },
      {
        name: "Valor Clash (Valorant)",
        description:
          "Prepare for an exhilarating spectacle of skill and strategy as Valorant takes centre stage at our college event! Witness teams compete in intense, heart-pounding matches, showcasing precision aim, cunning tactics, and teamwork in a thrilling display of esports prowess that will keep you on the edge of your seat!",
        isGroup: true,
        minParticipants: 5,
        maxParticipants: 5,
        amount: 300,
        reward: 3000,
        categories: ["Technical", "Gaming"],
        venue: "SEMINAR HALL PIET",
        poster:
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2F1_Valorant.png",
      },
      {
        name: "Shark Tank",
        description:
          "Welcome to the high-stakes world of the Shark Tank, where aspiring entrepreneurs pitch their ideas, navigate tough questions, and vie for investment from seasoned investors, all in pursuit of turning dreams into reality and shaping the future of business.",
        isGroup: true,
        minParticipants: 5,
        maxParticipants: 5,
        amount: 150,
        reward: 1500,
        categories: ["Technical"],
        venue: "SEMINAR HALL PIET",
        poster:
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2F1_Pitch.png",
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
