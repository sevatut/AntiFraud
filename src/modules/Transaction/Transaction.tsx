import TransactionType from "../../types/transactions";
import { colors } from "../../constants/colors";
import { AddressMap } from "../AddressMap/AddressMap";
import { useTranslation } from "react-i18next";
import { blocks } from "../../constants/blocks";
import InformationBlock from "../InformationBlock/InformationBlock";
import downloadPDF from "../../utils/pdf";

export default function Transaction( {transaction, onClick}: {transaction: TransactionType, onClick: (id: string, newStatus: TransactionType["status"]) => void} ) {
    const { t } = useTranslation();

    const handleAnalyze = () => {
        downloadPDF( {
            title: transaction.id, fields: [
                { name: "Amount", value: transaction.account.amount},
                { name: "Bank", value: transaction.summary.bank},
            ]})
    }
  
    return (
    <>
        <div className="flex justify-between bg-[#FFF0DA] px-4 py-5 mb-2">
                <div className="flex gap-4">
                    <div className="w-12 flex justify-center items-center rounded-xs" style={
                {
                    backgroundColor: colors[transaction.status].bg,
                    color: colors[transaction.status].text
                }}>
                        {transaction.id}
                    </div>

                    <div>
                        <h3 className="text-2xl font-medium underline underline-offset-2 mb-2">{transaction.owner}</h3>
                        <div className="flex gap-3">
                            <p className="text-[#A5A5A5] text-lg font-light">#{transaction.atm}</p>
                            <time dateTime="11/5/2022 3:12 PST" className="text-[#6C757D] text-lg">{transaction.date.toLocaleString()}</time>
                        </div>
                    </div>

                </div>

                <div className="flex gap-4">
                    <div className="flex flex-col items-end">
                        <p className="bg-[#FFFFFF] text-[#A3A3A3] rounded-xs mb-3 px-1 py-0.5">{transaction.method}</p>
                        <p className="text-right text-3xl text-[#6C757D] font-medium">${transaction.money}</p>
                    </div>
                </div>
                
            </div>

            <div className="grid h-53/80 grid-cols-2 grid-rows-2 gap-2 mb-2">
                <InformationBlock theme="summary" fields={blocks.summary} info={transaction.summary}/>

                <div className="bg-white border border-[#E3E4E5] rounded-sm px-5 py-6 row-span-2">
                    <h3 className="text-lg font-medium mb-1">{t("transactions.atm")}</h3>
                    <hr className="border-[#BFC7EB] mb-5"/>
                    
                    <p className="text-lg mb-5">{transaction.address}</p>

                    <AddressMap address={transaction.address} />
                </div>

                

                <InformationBlock theme="account" fields={blocks.account} info={transaction.account}/>
            </div>

            <div className="flex bg-white border border-[#E3E4E5] px-5 py-3 gap-4">
                <button className="p-3 bg-[#4CAF50] text-white cursor-pointer rounded-sm w-full" 
                onClick={() => onClick(transaction.id, "approved")}>{t("transactions.approveButton")}</button>
                <button className="p-3 bg-[#EB5E53] text-white cursor-pointer rounded-sm w-full"
                onClick={() => onClick(transaction.id, "rejected")}>{t("transactions.declineButton")}</button>
                <button className="p-3 text-[#4E80D1] border border-[#D5D5D5] cursor-pointer rounded-sm w-full"
                onClick={handleAnalyze}>{t("analyzeButton")}</button>
            </div>
    </>
  )
}

