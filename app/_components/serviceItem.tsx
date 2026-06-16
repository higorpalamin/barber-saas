import Image from "next/image"
import { BarbershopService } from "../generated/prisma/client"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

interface serviceItemProp {
  service: BarbershopService
}

function ServiceItem({ service }: serviceItemProp) {
  return (
    <Card>
      <CardContent className="flex items-center gap-3 p-3 py-0">
        <div className="relative max-h-[110px] min-h-[110px] max-w-[110px] min-w-[110px]">
          <Image
            src={service.imageUrl}
            fill
            className="rounded-lg object-cover"
            alt={service.name}
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">{service.name}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>
          {/* preço e botão */}
          <div className="flex items-center justify-between">
            {/* convertendo para moeda brasileira */}
            <p className="text-primary text-sm font-bold">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>

            <Button variant="secondary">Reservar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceItem
