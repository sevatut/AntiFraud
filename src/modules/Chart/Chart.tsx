import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const COLORS = ['#1C7FDA', '#8DBFED', '#C6DFF6'];

export default function Chart( {data, amount} : { data: {name: string, value: number }[], amount: number } ) {
  return (
    <div className="flex p-20 py-12 flex-col items-center bg-white border border-[#E3E4E5] rounded-xs row-span-2">
        <h3 className="text-xl mb-36">Processed Transactions</h3>
        
        <div className="flex flex-col">
          <div className="w-75 h-75">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie data={data} cx="50%" cy="50%" dataKey="value">
                            {data.map((__, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none"/>
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            
            <p className="text-5xl font-medium mb-5">{amount}</p>

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
  )
}