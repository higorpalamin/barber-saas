import PhoneItem from "@/app/_components/phone-item"
import ServiceItem from "@/app/_components/serviceItem"
import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

async function BarbershopPage({ params }: BarbershopPageProps) {
  //server component
  //chamar banco de dados

  //faz await de params para transformar id em string
  const { id } = await params

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: id,
    },
    include: {
      //JOIN NA TABELA BarbershopServices NO BANDO DE DADOS
      services: true,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      {/* imagem */}
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
          alt={barbershop?.name}
        />

        <Button
          size="icon-lg"
          variant="secondary"
          className="absolute top-4 left-4"
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size="icon-lg"
          variant="secondary"
          className="absolute top-4 right-4"
        >
          <MenuIcon />
        </Button>
      </div>

      {/* endereço */}
      <div className="border-b border-solid p-5">
        <h1 className="mb-3 font-bold">{barbershop.name}</h1>
        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>
        <div className="flex items-center gap-2">
          <StarIcon className="text-primary fill-primary" size={18} />
          <p className="text-sm">5.0 (421 avaliações)</p>
        </div>
      </div>

      {/* sobre nós */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="mb-2 text-sm font-bold text-gray-400 uppercase">
          Sobre nós
        </h2>
        <p className="text-justify text-sm">{barbershop.description}</p>
      </div>

      {/* serviços */}
      <div className="space-y-3 border-b border-solid p-5">
        <h2 className="mb-2 text-sm font-bold text-gray-400 uppercase">
          Serviços
        </h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem service={service} key={service.id} />
          ))}
        </div>
      </div>

      {/* contato */}
      <div className="space-y-3 p-5">
        {barbershop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopPage
