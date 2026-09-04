import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

export default function Chart( {data, amount} : { data: {name: string, value: number, color: string }[], amount: number } ) {
  return (
    <div className="flex p-20 py-12 flex-col items-center bg-white border border-[#E3E4E5] rounded-xs row-span-2">
        <h3 className="text-xl mb-36">Processed Transactions</h3>
        
        <div className="flex flex-col">
          <div className="w-75 h-75">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie data={data} cx="50%" cy="50%" dataKey="value">
                            {data.map((category, index) => (
                            <Cell key={`cell-${index}`} fill={category.color} stroke="none"/>
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            
            <p className="text-5xl font-medium mb-5">{amount}</p>

            <ul>
                {data.map((category) => (
                    <li key={category.name} className="flex items-center text-lg gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full" style={
                            {
                                backgroundColor: category.color
                            }
                        }/>
                        <span>{category.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}