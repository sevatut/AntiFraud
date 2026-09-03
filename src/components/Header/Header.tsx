import { ChevronDown, UserRound } from "lucide-react"

export default function Header() {
  return (
    <header className="flex justify-between items-center h-27 px-16">
        <h1 className="font-semibold text-4xl text-[#2B518F]">ANTIFRAUD</h1>

        <div className="flex items-center gap-1 m">
            <UserRound size={20} color="#1C7FDA" />
            <p className="text-xl">Dwayne Exum</p>
            <button><span className="text-[#1C7FDA] text-[10px]">▼</span></button>
        </div>
    </header>
  )
}

