const tabs = ["Deposit", "Withdraw", "Loans", "Transaction History"];

export default function Tabs() {
  return (
    <nav>
        <ul className="flex justify-between h-12">
            <li className="w-1/5 flex items-center justify-center 
            text-xl bg-white border-t border-r border-[#B5B5B5] text-[#4E80D1]">Clients</li>
            {tabs.map((tab) => (
              <li className="w-1/5 flex items-center justify-center
            text-xl border-b border-[#B5B5B5] text-[#5A5A5A]">{tab}</li>
            ))}
        </ul>
    </nav>
  )
}

