import { Badge } from "@/components/ui/badge"
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Event } from "@prisma/client"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"

export const EventCard = (props: Event) => {
  const router = useRouter()
  const handleClick = () => router.push("/events/" + props.id + "/registration")

  return (
    <motion.div
      className="cursor-pointer rounded-lg border bg-card text-card-foreground shadow-sm select-none"
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}>
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
