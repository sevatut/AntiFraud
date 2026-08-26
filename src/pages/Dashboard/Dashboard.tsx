export default function Dashboard() {
  return (
    <main className="px-8 pt-8 bg-[#E9EFF2] w-full h-full">
        <h2 className="text-lg text-[#4E80D1] font-medium uppercase mb-7">Fraud Management Dashboard</h2>

        <div className="h-9/10 grid grid-cols-4 grid-rows-5 gap-2">

            <div className="flex p-20 py-12 flex-col items-center bg-white border border-[#E3E4E5] rounded-xs row-span-5">
                <h3 className="text-lg mb-36">Processed Transactions</h3>
                
                <div className="flex flex-col">
                    <img src="statistics/chart.png" alt="Chart" className="mb-8"/>
                    <p className="text-5xl font-medium mb-5">12 112</p>

                    <ul>
                        <li className="flex items-center text-lg gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-[#1C7FDA]" />
                            <span>Deposits</span>
                        </li>  
                         
                        <li className="flex items-center text-lg gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-[#8DBFED]" />
                            <span>Loans</span>
                        </li>  

                        <li className="flex items-center text-lg gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-[#C6DFF6]" />
                            <span>Withdrawals</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex p-20 py-12 flex-col items-start bg-white border border-[#E3E4E5] rounded-xs gap-8 row-span-2">
                <img src="statistics/transaction.png" alt="Transactions" />
                <p className="text-5xl font-medium">12 112</p>
                <h3 className="text-lg">All transactions</h3>
            </div>

            <div className="flex p-20 py-12 flex-col items-start bg-white border border-[#E3E4E5] rounded-xs gap-8 row-span-2">
                <img src="statistics/percent.png" alt="Percent" />
                <p className="text-5xl font-medium">99.3%</p>
                <h3 className="text-lg">Approval Rate</h3>
            </div>

            <div className="flex p-20 py-12 flex-col items-start bg-white border border-[#E3E4E5] rounded-xs gap-8 row-span-2">
                <img src="statistics/hourglass.png" alt="Hourglass" />
                <p className="text-5xl font-medium">10</p>
                <h3 className="text-lg">Pending Approval</h3>
            </div>

            <div className="flex p-20 py-12 flex-col items-center bg-white border border-[#E3E4E5] rounded-xs gap-8 row-span-3 pt-26">
                <img src="statistics/numbers.png" alt="Numbers" />
                <h3 className="text-lg">Approved Transactions</h3>
            </div>

            <div className="flex p-20 py-12 flex-col items-start bg-white border border-[#E3E4E5] rounded-xs gap-8 row-span-3">
                <img src="statistics/cross.png" alt="Hourglass" />
                <p className="text-5xl font-medium">15</p>
                <h3 className="text-lg mb-20">Rejected Transactions</h3>

                <button className="w-48 p-3 border text-lg border-[#86B4E1] text-[#4E80D1] rounded-xs cursor-pointer 
                    hover:bg-[#1C7FDA] hover:text-white mr-2">Analyze</button>
            </div>

            <div className="flex p-20 py-12 flex-col items-start bg-white border border-[#E3E4E5] rounded-xs gap-8 row-span-3">
                <img src="statistics/sun.png" alt="Hourglass" />
                <p className="text-5xl font-medium">70</p>
                <h3 className="text-lg mb-20">Postponed Approval</h3>

                <button className="w-48 p-3 border text-lg border-[#86B4E1] text-[#4E80D1] rounded-xs cursor-pointer 
                    hover:bg-[#1C7FDA] hover:text-white mr-2">Analyze</button>
            </div>
        </div>
    </main>
  )
}

