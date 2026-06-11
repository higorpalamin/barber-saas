import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

function Header() {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-4">
        <Image
          alt="FSW Barber"
          src="/logo-fsw-barber.png"
          height={15}
          width={150}
        />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
