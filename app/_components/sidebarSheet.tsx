import Link from "next/link"
import { Avatar, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { Calendar, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { quicksearchOptions } from "../_constants/search"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

function SidebarSheet() {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      {/* avatar */}

      <div className="flex items-center justify-between gap-3 border-b border-solid p-5">
        <h2 className="text-lg font-bold">Olá, faça seu login!</h2>

        <Dialog>
          <DialogTrigger>
            <Button size="icon" className="cursor-pointer">
              <LogInIcon />
            </Button>
          </DialogTrigger>

          <DialogContent className="w-[80%]">
            <DialogHeader>
              <DialogTitle>Faça login na plataforma</DialogTitle>
              <DialogDescription>
                Conecte-se usando sua conta do Google.
              </DialogDescription>
            </DialogHeader>

            <Button
              variant="outline"
              className="cursor-pointer gap-2 font-bold"
            >
              <Image
                src="./google.svg"
                alt="fazer login com google"
                width={18}
                height={18}
              />
              Google
            </Button>
          </DialogContent>
        </Dialog>

        {/*
        <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww" />
        </Avatar>

        <div>
          <p className="font-bold">Higor Palamin</p>
          <p className="text-sx">higor@email.com</p>
        </div> */}
      </div>

      {/* inicio */}

      <div className="flex flex-col gap-2 border-b border-solid p-5">
        <SheetClose className="flex flex-col">
          <Button className="justify-start gap-2">
            <Link href="/" className="flex gap-2">
              <HomeIcon size={18} />
              Início
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2" variant="ghost">
          <Calendar size={18} />
          Agendamentos
        </Button>
      </div>

      {/* serviços */}

      <div className="flex flex-col gap-2 border-b border-solid p-5">
        {quicksearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2"
            variant="ghost"
          >
            <Image
              src={option.imageUrl}
              height={18}
              width={18}
              alt={option.title}
            />
            {option.title}
          </Button>
        ))}
      </div>

      {/* sair */}

      <div className="flex flex-col gap-2 p-5">
        <Button variant="ghost" className="justify-start">
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
