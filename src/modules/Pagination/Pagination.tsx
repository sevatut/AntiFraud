import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({amount, page, entries, onPagination, onChange}: 
    {
        amount: number;
        page: number;
        entries: number;
        onPagination: React.Dispatch<React.SetStateAction<number>>,
        onChange: React.Dispatch<React.SetStateAction<number>>
    }    
) {

  return (
    <div className="flex justify-between px-4">
        <nav className="flex items-center">
            <ChevronLeft color="#1C7FDA" size={40} strokeWidth={1.1} />

            <ul className="flex w-full justify-start gap-15 px-10">
                {Array.from({ length: Math.ceil(amount / entries) }, (_, index) => (
                    <li key={index} className="text-lg"><button className="cursor-pointer" onClick={() => onPagination(index)}>{index + 1}</button></li>
                ))}
            </ul>

            <ChevronRight color="#1C7FDA" size={40} strokeWidth={1.1} />
        </nav>

        <div className="flex items-center">
            <span className="text-lg text-[#767676] mr-8">
                Showing {entries * page + 1} to {(page + 1) * entries} of {amount} entries
            </span>

            <div className="relative flex items-center bg-[#F9F9F9]">
                <select value={entries} onChange={(e) => onChange(+e.target.value)} className="appearance-none bg-transparent text-lg 
                text-[#000000] pl-4 pr-14 py-4 cursor-pointer focus:outline-none z-10">
                    <option value="5">5 entries per page</option>
                    <option value="10">10 entries per page</option>
                    <option value="15">15 entries per page</option>
                </select>

                <ChevronDown color='#1C7FDA' size={36} strokeWidth={1} />
            </div>
        </div>
    </div>
  )
}

