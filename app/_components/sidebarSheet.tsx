"use client"
import Link from "next/link"
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
import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar, AvatarImage } from "./ui/avatar"

function SidebarSheet() {
  const { data } = useSession()

  async function handleGoogleSignIn() {
    await signIn("google")
  }

  async function handleGoogleSignOut() {
    await signOut()
  }
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      {/* avatar */}

      <div className="flex items-center justify-between gap-3 border-b border-solid p-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={data.user.image ?? ""} />
            </Avatar>

            <div>
              <p className="font-bold">{data.user.name}</p>
              <p className="text-sx">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
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
                  onClick={handleGoogleSignIn}
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
          </>
        )}
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
      <h2 className="my-1 px-5 text-xs font-bold text-gray-400 uppercase">
        Pesquise por serviços
      </h2>

      <div className="flex flex-col gap-2 border-b border-solid px-5">
        {quicksearchOptions.map((option) => (
          <SheetClose key={option.title}>
            <Link href={`/barbershops?service=${option.title}`}>
              <Button className="w-full justify-start gap-2" variant="ghost">
                <Image
                  src={option.imageUrl}
                  height={18}
                  width={18}
                  alt={option.title}
                />
                {option.title}
              </Button>
            </Link>
          </SheetClose>
        ))}
      </div>

      {/* sair */}

      <div className="flex flex-col gap-2 p-5">
        <Button
          variant="ghost"
          className="cursor-pointer justify-start"
          onClick={handleGoogleSignOut}
        >
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
