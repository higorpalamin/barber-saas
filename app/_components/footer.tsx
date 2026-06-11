import { CopyrightIcon } from "lucide-react"
import { Card, CardContent } from "./ui/card"

function Footer() {
  return (
    <Card>
      <CardContent className="m-auto text-gray-400">
        <p className="flex gap-2">
          <CopyrightIcon />
          2026 FSW Barber-System
        </p>
      </CardContent>
    </Card>
  )
}

export default Footer
