export default function Reports() {
  return (
    <main className="bg-[#E9EFF2] pt-8 w-full">
        <nav>
            <ul className="flex justify-between h-12">
                <li className="w-1/5 flex items-center justify-center 
                text-xl bg-white border-t border-r border-[#B5B5B5] text-[#4E80D1]">Clients</li>
                <li className="w-1/5 flex items-center justify-center
                text-xl border-b border-[#B5B5B5] text-[#5A5A5A]">Deposit</li>
                <li className="w-1/5 flex items-center justify-center
                text-xl border-b border-[#B5B5B5] text-[#5A5A5A]">Withdraw</li>
                <li className="w-1/5 flex items-center justify-center
                text-xl border-b border-[#B5B5B5] text-[#5A5A5A]">Loans</li>
                <li className="w-1/5 flex items-center justify-center
                text-xl border-b border-[#B5B5B5] text-[#5A5A5A]">Transaction History</li>
            </ul>
        </nav>
        <div className="bg-white pt-4">
            <h2 className="flex h-14 items-center justify-center text-2xl text-[#4E80D1]">Customer profile</h2>
            <div className="flex px-24 justify-between items-center bg-[#F9F9F9] py-3">
                <input type="text" placeholder="🔍 Search" className="border border-[#B5B5B5] p-3 w-78 bg-white"/>
                
                <div>
                    <h3 className="text-center text-[#B9B9B9] text-lg mb-2">View Customer Account Balance</h3>

                    <hr className="border-[#E3E3E3] mb-3"/>
                    
                    <label className="text-lg">
                        Acc ID
                        <input type="number" className="border border-[#B5B5B5] p-3 w-52 ml-4 h-12 bg-white"/>
                    </label>

                    <label className="ml-4 text-lg">
                        Acc Balance
                        <input type="number" className="border border-[#B5B5B5] p-3 w-52 ml-4 h-12 bg-white"/>
                    </label>

                </div>

                <div className="flex items-start">
                    <button className="w-42 p-3 border text-lg border-[#86B4E1] text-[#4E80D1] rounded-xs cursor-pointer 
                    hover:bg-[#1C7FDA] hover:text-white mr-2">Edit info</button>
                    <div className="flex flex-col">
                        <button className="w-42 p-3 border text-lg border-[#86B4E1] text-[#4E80D1] rounded-xs cursor-pointer 
                        hover:bg-[#1C7FDA] hover:text-white mb-2">Add Customer</button>
                        <button className="w-42 p-3 border text-lg border-[#86B4E1] text-[#4E80D1] rounded-xs cursor-pointer 
                        hover:bg-[#1C7FDA] hover:text-white">Add Account</button>
                    </div>
                </div>
            </div>

            <div className="p-2">
                <table className="w-full text-left">
                    <thead>
                        <tr>
                            <th scope="col" className="relative font-normal p-4"> 
                                <span>CID</span> <img src="buttons/caret-gray.png" alt="Caret" className="absolute right-6 top-1/2"/>
                            </th>          
                            <th scope="col" className="relative font-normal p-4"> 
                                <span>Full Name</span> <img src="buttons/caret-gray.png" alt="Caret" className="absolute right-6 top-1/2"/>
                            </th>            
                            <th scope="col" className="relative font-normal p-4"> 
                                <span>City</span> <img src="buttons/caret-gray.png" alt="Caret" className="absolute right-6 top-1/2"/>
                            </th> 
                            <th scope="col" className="relative font-normal p-4"> 
                                <span>State</span> <img src="buttons/caret-gray.png" alt="Caret" className="absolute right-6 top-1/2"/>
                            </th> 
                            <th scope="col" className="relative font-normal p-4"> 
                                <span>Address</span> <img src="buttons/caret-gray.png" alt="Caret" className="absolute right-6 top-1/2"/>
                            </th> 
                            <th scope="col" className="relative font-normal p-4"> 
                                <span>Phone Number</span> <img src="buttons/caret-gray.png" alt="Caret" className="absolute right-6 top-1/2"/>
                            </th> 
                            <th scope="col" className="relative font-normal p-4"> 
                                <span>Acc Balance</span> <img src="buttons/caret-gray.png" alt="Caret" className="absolute right-6 top-1/2"/>
                            </th>            
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="text-lg px-4 py-4">1</td>
                            <td className="text-lg px-4 py-4">Michael P Saez</td>
                            <td className="text-lg px-4 py-4">West Palm Beach</td>
                            <td className="text-lg px-4 py-4">FL</td>
                            <td className="text-lg px-4 py-4">1630 Powder House Road</td>
                            <td className="text-lg px-4 py-4">561-689-4816</td>
                            <td className="text-lg px-4 py-4 text-right">$51,000.00</td>
                        </tr>
                    </tbody>
                </table>

                <hr className="border-[#C6C6C6] mb-6"/>

                <div className="flex justify-between px-4">
                    <nav className="flex w-lg items-center">
                        <img src="buttons/left.png" alt="Left" />

                        <ul className="flex w-full justify-evenly">
                            <li className="text-lg">1</li>
                            <li className="text-lg">2</li>
                            <li className="text-lg">3</li>
                            <li className="text-lg">...</li>
                            <li className="text-lg">9</li>
                            <li className="text-lg">10</li>
                            <li className="text-lg">11</li>  
                        </ul>

                        <img src="buttons/right.png" alt="Right" />
                    </nav>

                    <div className="flex items-center">
                        <span className="text-lg text-[#767676] mr-8">Showing 1 to 10 of 240 entries</span>
                        <div className="flex justify-between items-center bg-[#F9F9F9] p-4">
                            <span className="text-lg text-[#000000] mr-14">10 entries per page</span>
                            <img src="buttons/caret-blue.png" alt="Caret"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
  )
}

