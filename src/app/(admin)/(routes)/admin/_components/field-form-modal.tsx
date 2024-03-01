import { FieldForm } from "@/app/(admin)/(routes)/admin/_components/field-form"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import * as React from "react"

interface FieldFormModalProps extends React.PropsWithChildren {}

export const FieldFormModal = (props: FieldFormModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="max-w-4xl">
        <FieldForm />
      </DialogContent>
    </Dialog>
  )
}
