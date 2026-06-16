"use client"

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProp {
  phone: string
}

function PhoneItem({ phone }: PhoneItemProp) {
  async function handleCopyPhone(phone: string) {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(phone)
      } else {
        const textarea = document.createElement("textarea")
        textarea.value = phone
        textarea.style.position = "fixed"
        textarea.style.top = "0"
        textarea.style.left = "0"
        textarea.style.opacity = "0"
        document.body.appendChild(textarea)
        textarea.focus()
        textarea.select()
        const successful = document.execCommand("copy")
        document.body.removeChild(textarea)

        if (!successful) {
          throw new Error("Falha ao copiar o telefone")
        }
      }
      toast.success("Telefone copiado com sucesso!")
    } catch (err) {
      console.error("Failed to copy text: ", err)
      toast.error("Não foi possível copiar o telefone")
    }
  }

  return (
    <div className="flex justify-between" key={phone}>
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p>{phone}</p>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => handleCopyPhone(phone)}
      >
        Copiar
      </Button>
    </div>
  )
}

export default PhoneItem
