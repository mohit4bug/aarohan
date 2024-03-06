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
        allowOutside: true,
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
      {
        name: "Film Flicker (Reel Competition)",
        description:
          "Step into the spotlight and unleash your cinematic creativity in our Reel Competition! Craft compelling stories, showcase your filmmaking skills, and captivate the audience with your unique vision. Lights, camera, action – the stage is yours to make a reel impact.",
        isGroup: true,
        minParticipants: 2,
        maxParticipants: 4,
        amount: 0,
        reward: 0,
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
        amount: 0,
        reward: 0,
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
        amount: 0,
        reward: 0,
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
        amount: 0,
        reward: 0,
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
        amount: 0,
        reward: 0,
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
        amount: 0,
        reward: 0,
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
        name: "Javelin Throw",
        description:
          "The javelin throw is a track and field event where athletes hurl a spear-like implement known as a javelin as far as possible within a designated throwing area. Athletes generate momentum through a run-up before releasing the javelin over their shoulder with precision and power, aiming for maximum distance.",
        isGroup: false,
        categories: ["Sports"],
        venue: "PIET OUTSIDE GROUND",
        poster:
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FJavelin.jpg",
        amount: 0,
        reward: 0,
      },
      {
        name: "Volleyball",
        description:
          "Set, spike, and serve your way to glory in our thrilling volleyball tournament, where teams showcase their skills, camaraderie, and passion for the sport, creating electrifying moments and unforgettable memories for players and spectators alike.",
        isGroup: true,
        minParticipants: 12,
        maxParticipants: 12,
        categories: ["Sports"],
        venue: "PIET VOLLEYBALL GROUND",
        poster:
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FVolleyball.jpg",
        amount: 0,
        reward: 0,
      },
      {
        name: "Carrom",
        description:
          "Carrom Clash: Join us for an epic showdown of skill and strategy in our highly anticipated carrom tournament, where players compete for glory, aiming to sink their way to victory on the pristine green baize.",
        isGroup: false,
        categories: ["Sports"],
        venue: "NEW ROOM",
        poster:
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FCarrom.jpg",
        amount: 0,
        reward: 0,
      },
      {
        name: "Chess",
        description:
          "Chess Challenge: Plot your moves, outsmart opponents, and claim victory in our strategic chess tournament, where every move shapes the path to triumph!.",
        isGroup: false,
        categories: ["Sports"],
        venue: "NEW ROOM",
        poster:
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FChess.jpg",
        amount: 0,
        reward: 0,
      },
      {
        name: "Box Cricket",
        description:
          "Unleash your cricketing zeal in our box cricket showdown! Fast-paced, close quarters, and full of excitement – a cricket experience like never before.",
        isGroup: true,
        minParticipants: 6,
        maxParticipants: 6,
        note: "2 girls compulsory in each team",
        categories: ["Sports"],
        venue: "PIET OUTSIDE GROUND",
        poster:
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FBox%20Cricket.avif",
        amount: 0,
        reward: 0,
      },
      {
        name: "Discus Throw",
        description:
          "Discus throwing is a track and field event where athletes spin within a circle and release a heavy disc-shaped object, aiming for maximum distance. It requires precise technique, strength, and coordination to achieve optimal results.",
        isGroup: false,
        categories: ["Sports"],
        venue: "PIET OUTSIDE GROUND",
        poster:
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FDicsus%20Throw.jpg",
        amount: 0,
        reward: 0,
      },
      {
        name: "Long Jump",
        description:
          "The long jump is a track and field event where athletes sprint down a runway and leap as far as possible into a sandpit. It requires explosive speed, technique, and precise timing to achieve maximum distance",
        isGroup: false,
        categories: ["Sports"],
        venue: "PIET OUTSIDE GROUND",
        poster:
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FLong%20Jump.jpg",
        amount: 0,
        reward: 0,
      },
      {
        name: "Shot Put",
        description:
          "Shot put is a track and field event where athletes propel a heavy spherical object, typically made of metal, as far as possible. Competitors use a pushing motion from within a seven-foot diameter circle to launch the shot with maximum force, combining strength, technique, and precision for optimal distance.",
        isGroup: false,
        categories: ["Sports"],
        venue: "PIET OUTSIDE GROUND",
        poster:
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FShot%20Put.jpg",
        amount: 0,
        reward: 0,
      },
      {
        name: "Sitoliya",
        description:
          "Unleash creativity, intellect, and teamwork in this exhilarating college event blending strategy, innovation, and camaraderie. Elevate your skills",
        isGroup: false,
        categories: ["Sports"],
        venue: "GURUSHIKHAR LANE",
        poster:
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FSitoliya.jpg",
        amount: 0,
        reward: 0,
      },
      {
        name: "Squats and Push up",
        description:
          "Challenge your strength and endurance in a dynamic showdown featuring squats and push-ups. Who can conquer the ultimate fitness test.",
        isGroup: false,
        categories: ["Sports"],
        venue: "STAGE",
        poster:
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FSquats%20%26%20Pushups.jpg",
        amount: 0,
        reward: 0,
      },
      {
        name: "Three Leg Race",
        description:
          "Hilarious teamwork competition! Strap a leg together, coordinate moves, and race to the finish line triumphantly.",
        isGroup: true,
        minParticipants: 2,
        maxParticipants: 2,
        categories: ["Sports"],
        venue: "GURUSHIKHAR LANE",
        poster:
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FThree%20Leg%20Race.jpg",
        amount: 0,
        reward: 0,
      },
      {
        name: "Tug of war",
        description:
          "Gather your team, dig deep, and unleash your strength in our exhilarating competition, where the battle for supremacy promises thrilling moments of teamwork, determination, and triumph!",
        isGroup: true,
        minParticipants: 8,
        maxParticipants: 8,
        categories: ["Sports"],
        venue: "VOLLEY BALL GROUND",
        poster:
          "https://backend.cdn.akshatmehta.com/PIET%20ACTIVITIES%2FPIET%20Banner%2FPIET%20Banner%2FTug%20of%20War.jpg",
        amount: 0,
        reward: 0,
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
      {
        name: "Race (100m)",
        description:
          "It is an individual race in which one have to fininsh the 100 first to win ",
        isGroup: false,
        categories: ["Sports"],
        venue: "Outside PCE",
        amount: 0,
        reward: 0,
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FRace%20(100m).jpg",
      },
      {
        name: "Race (200m)",
        description:
          "It is an individual race in which one have to fininsh 200 m first to win ",
        isGroup: false,
        categories: ["Sports"],
        venue: "Outside PCE",
        amount: 0,
        reward: 0,
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FRace%20(200m).jpg",
      },
      {
        name: "Race (400m)",
        description:
          "It is an individual race in which one have to fininsh the 400 m first to win ",
        isGroup: false,
        categories: ["Sports"],
        venue: "Outside PCE",
        amount: 0,
        reward: 0,
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FRace%20(400m).jpg",
      },
      {
        name: "Relay Race (400m x 100m)",
        description:
          "A relay race is a racing competition where members of a team take turns completing parts of racecourse or performing a certain action. Relay races take the form of professional races and amateur games. ",
        isGroup: true,
        categories: ["Sports"],
        venue: "Outside PCE",
        minParticipants: 5,
        maxParticipants: 6,
        amount: 0,
        reward: 0,
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FRelay%20Race.jpg",
      },
      {
        name: "Arm Wrestling",
        description:
          "Arm wrestling is a sport with two opponents who face each other with their bent elbows placed on a table and hands firmly gripped, who then attempt to force the opponent's hand down to the table top .",
        isGroup: false,
        categories: ["Sports"],
        venue: "PCE GYM",
        amount: 0,
        reward: 0,
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FArm%20Wrestling.jpg",
      },
      {
        name: "Badminton Singles",
        description:
          "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.",
        isGroup: false,
        categories: ["Sports"],
        venue: "INFRONT OF PCAS OFFICE",
        amount: 0,
        reward: 0,
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FBadminton%20Singles.jpg",
      },
      {
        name: "Badminton Double",
        description:
          "Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.",
        isGroup: true,
        categories: ["Sports"],
        venue: "INFRONT OF BH-3",
        minParticipants: 2,
        maxParticipants: 2,
        amount: 0,
        reward: 0,
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FBadminton%20Doubles.jpg",
      },
      {
        name: "Kabaddi",
        description:
          "Kabaddi is a contact team sport played between two teams of seven players, originating in ancient India.",
        isGroup: true,
        categories: ["Sports"],
        venue: "ARJUN GARDEN",
        minParticipants: 9,
        maxParticipants: 12,
        amount: 0,
        reward: 0,
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FKabaddi.jpg",
      },
      {
        name: "Table Tennis",
        description:
          "Table tennis is a racket sport derived from tennis but distinguished by its playing surface being atop a stationary table, rather than the court on which players stand.",
        isGroup: true,
        categories: ["Sports"],
        venue: "GIRLS GYM",
        minParticipants: 2,
        maxParticipants: 2,
        amount: 0,
        reward: 0,
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FTable%20Tennis.jpg",
      },
      {
        name: "Weight Lifting ",
        description:
          "weight lifting generally refers to physical exercises and sports in which people lift weights, often in the form of dumbbells or barbells.",
        isGroup: false,
        categories: ["Sports"],
        venue: "PCE GYM",
        amount: 0,
        reward: 0,
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FWeight%20Lifting.jpg",
      },
      {
        name: "Futsal",
        description:
          "Futsal is a football-based game played on a hardcourt like a basketball court, smaller than a football pitch, and mainly indoors. It has similarities to five-a-side football and indoor football.",
        isGroup: true,
        categories: ["Sports"],
        venue: "INFRONT OF BH-2",
        minParticipants: 5,
        maxParticipants: 6,
        amount: 0,
        reward: 0,
        poster: "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FFutsal.jpg",
      },
      {
        name: "Lazy paddle (slow cycling)",
        description:
          "Slow cycling races are an unconventional form of competition that requires riders to pedal as slowly as possible. Participants must balance their bikes without touching the ground, testing their skill and control",
        isGroup: false,
        categories: ["Sports"],
        venue: "COLLEGE CAMPUS",
        amount: 0,
        reward: 0,
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FLazy%20Paddle.jpg",
      },
      {
        name: "Coding Hunt",
        description:
          "This is a coding contest based on algorithms, data structures and problem solving.",
        isGroup: false,
        minParticipants: 1,
        maxParticipants: 1,
        amount: 200, //pending
        reward: 4000, //pending
        categories: ["Technical"],
        venue: "SEMINAR HALL / Lab",
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FCoding%20Hunt.jpg",
      },
      {
        name: "Robo War",
        description:
          "It is a combat robotics competition where machines battle to disable or destroy each other, embodying Survival of The Fittest.",
        isGroup: true,
        amount: 2000,
        reward: 8000,
        categories: ["Technical", "Robo War"],
        venue: "Dome",
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FRobowar.jpg",
      },
      {
        name: "Blind Coding",
        description:
          "Blind Coding is where a programmer works on code without running it until completion",
        isGroup: false,
        amount: 150, //pending
        reward: 1000, //pending
        categories: ["Technical", "Coding"],
        venue: "Lab",
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FBlind%20Coding.webp",
      },
      {
        name: "Robo Race",
        description:
          "It prioritizes realistic conditions, safety, and collision avoidance skills. No stop signs or traffic lights; all vehicles must safely stop at race conclusion. Open to teams lacking full collision skills but rewards proficiency",
        isGroup: true,
        minParticipants: 3,
        maxParticipants: 4,
        amount: 400,
        reward: 2000,
        categories: ["Technical", "Robo Race"],
        venue: "Infront of Dome",
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FRobo%20Race.jpg",
      },
      {
        name: "Robo Soccer",
        description:
          "a defender guarding the goal and an attacker scoring goals. Connected and wireless bots battled it out, aiming for maximum goals and fun.",
        isGroup: true,
        minParticipants: 3,
        maxParticipants: 4,
        amount: 400,
        reward: 2000,
        categories: ["Technical"],
        venue: "Infront of Dome",
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FRobo%20Soccer.jpg",
      },
      {
        name: "Group Dance competition",
        description:
          "Calling all dancers! Gather your crew and compete in our group dance showdown. It's your time to shine under the spotlight! It's where teams come together to compete, inspire, and ignite the stage!",
        isGroup: true,
        minParticipants: 3,
        maxParticipants: 10,
        amount: 800,
        reward: 5000,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FGroup%20Dance%20Competition.jpg",
        venue: "PCE OAT",
      },
      {
        name: "Hip Hop Battle",
        description:
          "Get ready to throw down and own the dance floor! Our hip hop battle is the ultimate showdown for dancers to showcase their swagger and dominate the competition! It's more than just a battle - it's a celebration of style, creativity, and the power of dance",
        isGroup: true,
        minParticipants: 1,
        maxParticipants: 2,
        amount: 200,
        reward: 2000,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FHip%20Hop%20Battle.jpg",
        venue: "PCE OAT",
      },
      {
        name: "Band Wars",
        description:
          "From indie to rock, funk to punk, bands of all genres are welcome to compete in the ultimate battle for musical glory at Band Wars! Band Wars pits bands against each other in a fierce competition of talent, charisma, and stage presence!",
        isGroup: true,
        minParticipants: 4,
        maxParticipants: 10,
        amount: 1200,
        reward: 7000,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FBand%20War.jpg",
        venue: "PCE OAT",
      },
      {
        name: "Singing Competition(solo/duet)",
        description:
          "From soulful solos to harmonious duets, our singing competition welcomes all voices to take center stage and compete for recognition and prizes. This is your chance to shine and make your mark in the music world.",
        isGroup: true,
        minParticipants: 1,
        maxParticipants: 2,
        amount: 200,
        reward: 2000,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FSinging%20Competition.jpg",
        venue: "PCE OAT",
      },
      {
        name: "Free Style",
        description:
          "Embrace the challenge, express yourself, and let your dance moves speak for themselves. Compete against the best and prove that you've got what it takes to be crowned the Freestyle Dance Battle Champion!",
        isGroup: false,
        minParticipants: 1,
        maxParticipants: 1,
        amount: 500, //pending
        reward: 1800, //pending
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FFree%20Style.jpg",
        venue: "PCE OAT",
      },
      {
        name: "Monologue Competition",
        description:
          "From dramatic monologues to comedic solos, our competition celebrates the art of solo performance in all its forms. It invites actors to captivate audiences with their interpretation of compelling characters and stories",
        isGroup: false,
        minParticipants: 1,
        maxParticipants: 1,
        amount: 150,
        reward: 1000,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FMonologue%20Competition.webp",
        venue: "PCE OAT",
      },
      {
        name: "Stand Up Comedy",
        description:
          "Prepare to LOL and ROFL at our stand-up comedy competition! With hilarious performances from comedians of all styles and backgrounds. Our stand-up comedy competition promises an evening of side-splitting humor and unforgettable performances from the funniest comedians around.",
        isGroup: false,
        minParticipants: 1,
        maxParticipants: 1,
        amount: 0,
        reward: 0,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FStandup%20Comedy.jpg",
        venue: "PCE OAT",
      },
      {
        name: "Speed Dating",
        description:
          "Ready to take a chance on love? Join us for speed dating and see who you click with in a series of fast, fun, and flirty mini-dates! It's a fun event designed to help singles connect quickly and find compatibility.",
        isGroup: true,
        minParticipants: 2,
        maxParticipants: 2,
        amount: 0,
        reward: 0,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FSpeed%20Dating.jpg",
        venue: "Arjun Garden",
      },
      {
        name: "Face Painting",
        description:
          "Bring your imagination to life on the canvas of faces! From whimsical designs to intricate masterpieces, our face painting competition is where art meets expression",
        isGroup: true,
        minParticipants: 2,
        maxParticipants: 2,
        amount: 0,
        reward: 0,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FFace%20Painting.jpg",
        venue: "OAT",
      },
      {
        name: "Videography + Photography Competition",
        description:
          "Lights, camera, competition! Our videography/photography competition is your chance to showcase your filmmaking skills, experiment with new techniques, and compete for prizes and prestige. Share your cinematic version with the world.",
        isGroup: false,
        minParticipants: 1,
        maxParticipants: 1,
        amount: 0,
        reward: 0,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FVideography%20%2B%20Photography%20Competition.jpg",
        venue: "Arjun Garden",
      },
      {
        name: "Classical Dance",
        description:
          "Join us to learn the intricate rhythms and expressions of classical dance. Step into the world of grace and elegance and experience the rich Cultural heritage through the art.",
        isGroup: true,
        minParticipants: 1,
        maxParticipants: 4,
        amount: 100,
        reward: 700,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FClassical%20Dance.jpg",
        venue: "OAT",
      },
      {
        name: "Fashion Show",
        description:
          "Discover the next big trends in fashion and be part of the excitement at our star-studded fashion extravaganza. Step into the world of glamour and style and witness the magic of fashion come to life as models strut down the catwalk.",
        isGroup: false,
        minParticipants: 1,
        maxParticipants: 1,
        amount: 200,
        reward: 4000,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FFashion%20Show.jpg",
        venue: "OAT",
      },
      {
        name: "Open Stage",
        description:
          "Calling all musicians, poets, comedians, and storytellers to share their talents and captivate the audience. Grab the mic, seize the moment, and let your voice be heard at our Open Mic event.",
        isGroup: true,
        minParticipants: 1,
        maxParticipants: 3,
        amount: 100,
        reward: 700,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FOpen%20Stage.png",
        venue: "OAT",
      },
      {
        name: "Paper Dance",
        description:
          "Indulge your senses in the delicate interplay between movement and paper in our stunning Paper Dance presentation. Let your imagination take flight with our Paper Dance.",
        isGroup: true,
        minParticipants: 2,
        maxParticipants: 2,
        amount: 0,
        reward: 0,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FPaper%20Dance.jpg",
        venue: "OAT",
      },
      {
        name: "Cooking Without Fire",
        description:
          "Ignite your creativity and whip up culinary delights without the need for flames in our exciting cooking without fire competition. Unleash your inner chef and create mouthwatering delicacies.",
        isGroup: false,
        minParticipants: 1,
        maxParticipants: 1,
        amount: 0,
        reward: 0,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FCooking%20Without%20Fire.jpg",
        venue: "Arjun Garden",
      },
      {
        name: "Roadies Interview",
        description:
          "Join the ranks of fearless adventurers and daredevils in our Roadies-inspired competition, where only the toughest survive. Test your limits and push yourself to the edge.",
        isGroup: false,
        minParticipants: 1,
        maxParticipants: 1,
        amount: 0,
        reward: 0,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FRoadies%20Interview.jpg",
        venue: "OAT",
      },
      {
        name: "Neon Splash Painting",
        description:
          "Explore the fusion of light and color in our immersive neon splash painting activity. Join us for an unforgettable journey into the neon-lit world of splash painting and let your creativity shine",
        isGroup: false,
        minParticipants: 1,
        maxParticipants: 1,
        amount: 0,
        reward: 0,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FNeon%20Splash%20Painting.png",
        venue: "Arjun Garden",
      },
      {
        name: "Pot Painting",
        description:
          "From vibrant patterns to intricate details, our pot painting competition is where art meets gardening. This competition offers a fun and creative outlet for artists to showcase their talent and imagination.",
        isGroup: false,
        minParticipants: 1,
        maxParticipants: 1,
        amount: 0,
        reward: 0,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FPot%20Painting.jpg",
        venue: "Arjun Garden",
      },
      {
        name: "Best Out Of Waste",
        description:
          "Reduce, reuse, and recycle your way to victory in our eco-friendly competition.Embrace the challenge of turning waste into wonder. Join us in celebrating creativity and sustainability by participating in our Best Out of Waste Competition.",
        isGroup: false,
        minParticipants: 1,
        maxParticipants: 1,
        amount: 0,
        reward: 0,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FBest%20Out%20of%20Waste.jpg",
        venue: "OAT",
      },
      {
        name: "Pixel Art",
        description:
          "Get ready to pixelate your imagination and bring your visions to life on the screen Transform tiny squares into breathtaking works of art in our Pixel Art Competition.",
        isGroup: false,
        minParticipants: 1,
        maxParticipants: 1,
        amount: 0,
        reward: 0,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FPixel%20Art.jpg",
        venue: "OAT",
      },
      {
        name: "Doodle Art",
        description:
          "Calling all artists, doodlers, and creative minds to showcase their talents in our thrilling competition.Let your pen dance across the paper and create mesmerizing doodle compositions. Embrace the doodle revolution and compete for the title of Doodle Art Champion!",
        isGroup: false,
        minParticipants: 1,
        maxParticipants: 1,
        amount: 0,
        reward: 0,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FDoodle%20Art.png",
        venue: "Arjun Garden/OAT",
      },
      {
        name: "Sketching Competition",
        description:
          "Embrace the beauty of simplicity and express yourself through the art of sketching.Whether you're a beginner or a seasoned artist, our Sketching Competition welcomes artists of all levels.",
        isGroup: false,
        minParticipants: 1,
        maxParticipants: 1,
        amount: 0,
        reward: 0,
        categories: ["Cultural"],
        poster:
          "https://backend.cdn.akshatmehta.com/PCE%20Banner%2FSketching%20Competition.webp",
        venue: "Arjun Garden/OAT",
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
