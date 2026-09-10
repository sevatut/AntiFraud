import { LogOut, UserRound } from "lucide-react"
import { getCurrentUser, logout } from "../../services/auth";
import { useNavigate } from "@tanstack/react-router";

export default function Header() {
  const navigate = useNavigate();

  const user = getCurrentUser();
  const handleLogout = () => {
    logout();
    navigate( { to: "/login" } )
  }

  return (
    <header className="flex justify-between items-center h-[12vh] px-16">
        <h1 className="font-semibold text-4xl text-[#2B518F]">ANTIFRAUD</h1>

        <div className="flex items-center gap-1 m">
            <UserRound size={20} color="#1C7FDA" />
            <p className="text-xl">{user ? user : "Anon"}</p>
            <button className="mr-5"><span className="text-[#1C7FDA] text-[10px]">&#9660;</span></button>
            <button className="cursor-pointer" onClick={handleLogout}><LogOut size={20} color="#1C7FDA"></LogOut></button>
        </div>
    </header>
  )
}

