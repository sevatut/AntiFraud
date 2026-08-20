export default function Header() {
  return (
    <header className="flex justify-between items-center h-27 px-16">
        <h1 className="font-semibold text-4xl text-[#2B518F]">ANTIFRAUD</h1>

        <div className="flex items-center gap-1 m">
            <img src="icons/Social.png" alt="User icon" className="h-6"/>
            <p className="text-xl">Dwayne Exum</p>
            <button><img src="buttons/Navigation.png" alt="Navigation" className="h-6"/></button>
        </div>
    </header>
  )
}

