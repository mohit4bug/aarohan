import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Event, Registration } from "@prisma/client"
import { CheckIcon, CopyIcon } from "lucide-react"
import { useState } from "react"

export const RegistrationCard = (
  props: Registration & {
    event: Event
  }
) => {
  const [isCopied, setIsCopied] = useState(false)

  const onCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setIsCopied(true)

    return setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.event.name}</CardTitle>
        <CardDescription>{props.event.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormItem>
          <Label>Registration ID</Label>
          <div className="flex items-center gap-x-2">
            <Input
              className="h-8 text-xs flex-1"
              defaultValue={props.id}
              readOnly
            />
            <Button
              size="mini"
              variant="ghost"
              onClick={onCopy.bind(null, props.id)}>
              {isCopied ? (
                <CheckIcon className="w-4 h-4" />
              ) : (
                <CopyIcon className="w-4 h-4" />
              )}
            </Button>
          </div>
        </FormItem>
        <div className="space-y-2">
          <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Payment Status
          </p>
          {props.hasPaid ? (
            <Badge variant="success">Paid</Badge>
          ) : (
            <Badge variant="secondary">Unconfirmed</Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
