import BarbershopItem from "../_components/barbershop-item"
import Header from "../_components/header"
import Search from "../_components/search"
import { db } from "../_lib/prisma"

interface BarbershopPagesProps {
  searchParams: Promise<{
    title?: string
    service?: string
  }>
}

const BarbershopPages = async ({ searchParams }: BarbershopPagesProps) => {
  const { title } = await searchParams
  const { service } = await searchParams
  const barbershops = await db.barbershop.findMany({
    where: {
      OR: [
        (await searchParams).title
          ? {
              name: {
                contains: (await searchParams).title,
                mode: "insensitive",
              },
            }
          : {},
        (await searchParams).service
          ? {
              services: {
                some: {
                  name: {
                    contains: (await searchParams).service,
                    mode: "insensitive",
                  },
                },
              },
            }
          : {},
      ],
    },
  })

  return (
    <div>
      <Header />
      <div className="mt-25 px-5">
        <Search />
      </div>
      <div className="px-5">
        <h2 className="mt-6 mb-6 text-xs font-bold text-gray-400 uppercase">
          Resultados para &quot;{title || service}&quot;
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarbershopPages
