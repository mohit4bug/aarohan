import { Badge } from "@/components/ui/badge"
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Event } from "@prisma/client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

export const EventCard = (props: Event) => {
  const router = useRouter()
  const handleClick = () => router.push("/events/" + props.id + "/registration")

  return (
    <motion.div
      tabIndex={-1}
      className="cursor-pointer rounded-lg text-card-foreground shadow-sm select-none relative overflow-hidden"
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}>
      <Image
        src={props.poster}
        alt={props.name}
        fill
        className="h-full w-full object-cover z-[-1] brightness-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r to-black from-transparent z-[-1]" />
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {props.isGroup ? <Badge>Team</Badge> : <Badge>Solo</Badge>}
      </CardContent>
    </motion.div>
  )
}
