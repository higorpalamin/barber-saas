import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <Header />

      <div className="p-4">
        <h2 className="text-xl font-semibold">Olá, Higor</h2>
        <p>Segunda-feira, 09 de Junho</p>

        <div className="mt-4 flex items-center gap-2">
          <Input placeholder="Faça sua busca.." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}
