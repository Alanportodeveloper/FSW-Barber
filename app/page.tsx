import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import Image from "next/image"

const Home = () => {
  return (
    <div>
      {/* header */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Alan</h2>
        <p>Domingo, 21 de Setembro</p>
        <div className="mt-6 flex items-center gap-2">
          <input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Agende nos melhores com FWS Barber"
            src="/banner-01.png"
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
