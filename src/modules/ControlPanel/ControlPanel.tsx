import { useState } from "react"
import PopUp from "../PopUp/PopUp";

export default function ControlPanel( {filter, onChange}: 
    {
        filter: {
            name: string;
            id: string;
            balance: number;
        },
        onChange:(event: React.ChangeEvent<HTMLInputElement, Element>, key: string) => void
    }) {
  const [popUp, setPopUp] = useState<false | "edit" | "add" >(false);

  return (
  <div className="flex px-24 justify-between items-center bg-[#F9F9F9] py-3">
        <input type="text" placeholder="🔍 Search" className="border border-[#B5B5B5] p-3 w-78 bg-white" 
        value={filter.name} onChange={(e) => onChange(e, "name")}/>
        
        <div>
            <h3 className="text-center text-[#B9B9B9] text-lg mb-2">View Customer Account Balance</h3>

            <hr className="border-[#E3E3E3] mb-3"/>
            
            <label className="text-lg">
                Acc ID
                <input type="number" className="border border-[#B5B5B5] p-3 w-52 ml-4 h-12 bg-white"
                value={filter.id} onChange={(e) => onChange(e, "id")}/>
            </label>

            <label className="ml-4 text-lg">
                Acc Balance
                <input type="number" className="border border-[#B5B5B5] p-3 w-52 ml-4 h-12 bg-white"
                value={filter.balance} onChange={(e) => onChange(e, "balance")}/>
            </label>

        </div>

        <div className="flex items-start">
            <button className="w-42 p-3 border text-lg border-[#86B4E1] text-[#4E80D1] rounded-xs cursor-pointer 
            hover:bg-[#1C7FDA] hover:text-white mr-2" onClick={() => setPopUp("edit")}>Edit info</button>
            <div className="flex flex-col">
                <button className="w-42 p-3 border text-lg border-[#86B4E1] text-[#4E80D1] rounded-xs cursor-pointer 
                hover:bg-[#1C7FDA] hover:text-white" onClick={() => setPopUp("add")}>Add Customer</button>
            </div>
        </div>

        { popUp ? <PopUp onClose={() => setPopUp(false)} isEdit={popUp == "edit"}></PopUp> : null }
    </div>
  )
}