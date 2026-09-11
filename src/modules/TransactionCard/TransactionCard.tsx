import { colors } from "../../constants/colors"
import { TransactionCardType } from "../../types/transaction"

export default function TransactionCard( {id, owner, atm, date, method, money, status, onClick}: TransactionCardType) {

    return (
    <div className="flex justify-between bg-[#F9F9F9] px-4 py-2 mb-1 cursor-pointer" onClick={onClick}>
        <div>
            <h3 className="text-lg font-medium">{owner}</h3>
            <p className="text-[#A5A5A5] font-light">#{atm}</p>
            <time dateTime="11/5/2022 3:12 PST" className="text-[#6C757D]">{date.toLocaleString()}</time>
        </div>

        <div className="flex gap-4">
            <div>
                <p className="bg-[#EDEDED] text-[#974F4F] rounded-xs mb-3 px-1 py-0.5">{method}</p>
                <p className="text-right text-xl text-[#6C757D] font-medium">${money}</p>
            </div>

            <div className='w-12 flex justify-center items-center  rounded-xs' style={
                {
                    backgroundColor: colors[status].bg,
                    color: colors[status].text
                }
            }>
                {id}
            </div>
        </div>
    </div>
  )
}

