import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import { Sheet, SheetTrigger } from "./ui/sheet"

import SidebarSheet from "./sidebarSheet"

function Header() {
  return (
    <Card className="fixed top-0 right-0 left-0 z-10">
      <CardContent className="flex flex-row items-center justify-between p-2">
        <Image
          alt="FSW Barber"
          src="/logo-fsw-barber.png"
          height={15}
          width={150}
        />

        <Sheet>
          <SheetTrigger>
            <Button size="icon" variant="outline" className="cursor-pointer">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
