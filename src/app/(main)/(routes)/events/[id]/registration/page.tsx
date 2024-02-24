"use client"

import { MemberSearchForm } from "@/components/member-search-form"
import { Button } from "@/components/ui/button"
import { yupResolver } from "@hookform/resolvers/yup"
import { User } from "@prisma/client"
import { X } from "lucide-react"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as y from "yup"

const schema = y.object({
  participants: y.array(
    y.object({
      uid: y.string(),
      email: y.string().email(),
    })
  ),
  eventId: y.string(),
})

export default function RegistrationPage() {
  const params = useParams()
  const { data } = useSession()

  const form = useForm({
    resolver: yupResolver(schema),
  })

  useEffect(() => {
    if (typeof params.id === "string") {
      form.setValue("eventId", params.id)
    }
  }, [params, form])

  const participants = useFieldArray({
    control: form.control,
    name: "participants",
  })

  const onRemove = (index: number) => {
    participants.remove(index)
  }

  const onSearch = (user: User) => {
    if (data && data.user.email === user.email) {
      toast.error("You are a team boss.")
      return
    }

    const isExists = participants.fields.find((prev) => prev.uid === user.id)
    if (isExists) return

    participants.append({
      uid: user.id,
      email: user.email,
    })
  }

  const onSubmit = form.handleSubmit((data) => {})

  return (
    <main className="h-full px-4 xl:px-0">
      <div className="max-w-6xl mx-auto h-full flex flex-col lg:flex-row py-4 xl:py-6 gap-4">
        <div className="flex-[1] space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Coding with Go
          </h1>
          <p className="text-xl text-muted-foreground">
            Coding in go is super fantastic and go is really easy to learn.
          </p>
          <div className="w-full aspect-video relative overflow-hidden rounded-md">
            <Image
              src="https://img.freepik.com/free-photo/multicolored-psychedelic-paper-shapes_23-2149378273.jpg?w=1060&t=st=1708789142~exp=1708789742~hmac=9d720a5aabc4dbb15394d380a6c0f5377975d31c986435510f54b77bf1b3da1b"
              alt=""
              fill
              layout="fill"
            />
          </div>
        </div>
        <div className="flex-[1] space-y-4">
          <MemberSearchForm onSearch={onSearch} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {participants.fields.map((item, index) => (
              <Button
                key={item.id}
                variant="outline"
                className="rounded-full"
                onClick={onRemove.bind(null, index)}>
                {item.email} <X className="h-4 w-4 ml-auto" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
