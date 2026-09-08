import TransactionType from "../../types/transactions";
import { colors } from "../../constants/colors";
import { AddressMap } from "../AddressMap/AddressMap";
import { useTranslation } from "react-i18next";

export default function Transaction( {transaction, onClick}: {transaction: TransactionType, onClick: (id: string, newStatus: TransactionType["status"]) => void} ) {
    const { t } = useTranslation();
  
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
                            <time dateTime="11/5/2022 3:12 PST" className="text-[#6C757D] text-lg">{transaction.date}</time>
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
                <div className="bg-white border border-[#E3E4E5] rounded-sm px-5 py-6">
                    <h3 className="text-lg font-medium mb-1">{t("transactions.summary.header")}</h3>
                    <hr className="border-[#BFC7EB] mb-5"/>
                    
                    <dl className="grid grid-cols-[175px_max-content] gap-x-6 gap-y-3.5">
                        <dt className="text-right text-[#6C757D]">Payment</dt>
                        <dd>{transaction.summary.payment}</dd>
                        <dt className="text-right text-[#6C757D]">CVV Response</dt>
                        <dd className="text-[#4CAF50] font-medium">{transaction.summary.cvvResponse}</dd>
                        <dt className="text-right text-[#6C757D]">AVS Response</dt>
                        <dd className="text-[#4CAF50] font-medium">{transaction.summary.avsResponse}</dd>
                        <dt className="text-right text-[#6C757D]">Number</dt>
                        <dd className="font-medium">{transaction.summary.number}</dd>
                        <dt className="text-right text-[#6C757D]">Bank</dt>
                        <dd className="font-medium">{transaction.summary.bank}</dd>
                    </dl>
                </div>

                <div className="bg-white border border-[#E3E4E5] rounded-sm px-5 py-6 row-span-2">
                    <h3 className="text-lg font-medium mb-1">{t("transactions.atm")}</h3>
                    <hr className="border-[#BFC7EB] mb-5"/>
                    
                    <p className="text-lg mb-5">{transaction.address}</p>

                    <AddressMap address={transaction.address} />
                </div>

                <div className="bg-white border border-[#E3E4E5] rounded-sm px-5 py-6">
                    <h3 className="text-lg font-medium mb-1">{t("transactions.account.header")}</h3>
                    <hr className="border-[#BFC7EB] mb-5"/>
                    
                    <dl className="grid grid-cols-[175px_max-content] gap-x-6 gap-y-3.5">
                        <dt className="text-right text-[#6C757D]">Number</dt>
                        <dd className="font-medium">{transaction.account.number}</dd>
                        <dt className="text-right text-[#6C757D]">Order Amount</dt>
                        <dd className="font-medium">${transaction.money}</dd>
                        <dt className="text-right text-[#6C757D]">Creation Date</dt>
                        <dd className="font-medium">{transaction.date}</dd>
                        <dt className="text-right text-[#6C757D]">Update Date</dt>
                        <dd className="font-medium">{transaction.date}</dd>
                        <dt className="text-right text-[#6C757D]">Last Order Ext. ID </dt>
                        <dd className="font-medium">{transaction.account.id}</dd>
                    </dl>
                </div>
            </div>

            <div className="flex bg-white border border-[#E3E4E5] px-5 py-3 gap-4">
                <button className="p-3 bg-[#4CAF50] text-white cursor-pointer rounded-sm w-full" 
                onClick={() => onClick(transaction.id, "approved")}>{t("transactions.approveButton")}</button>
                <button className="p-3 bg-[#EB5E53] text-white cursor-pointer rounded-sm w-full"
                onClick={() => onClick(transaction.id, "rejected")}>{t("transactions.declineButton")}</button>
                <button className="p-3 text-[#4E80D1] border border-[#D5D5D5] cursor-pointer rounded-sm w-full">{t("analyzeButton")}</button>
            </div>
    </>
  )
}

