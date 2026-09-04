import TransactionCard from "../../modules/TransactionCard/TransactionCard"
import Transaction from "../../modules/Transaction/Transaction"
import TransactionType from "../../types/transactions"
import { useState } from "react"
import { initialTransactions } from "../../constants/transactions";

export default function Transactions() {
  const [current, setCurrent] = useState("112");
  const [transactions, setTransactions] = useState<TransactionType[]>(initialTransactions);

  const handleUpdate = (id: string, newStatus: TransactionType['status']) => {
    setTransactions(prevTransactions =>
      prevTransactions.map(transaction =>
        transaction.id === id 
          ? { ...transaction, status: newStatus } 
          : transaction
      )
    );
  };


  return (
    <main className="flex w-full bg-[#E9EFF2] h-[88vh]">
        <div className="w-1/4 bg-white pt-8">
          {transactions.map((transaction) => <TransactionCard key={transaction.id} {...transaction} onClick={() => setCurrent(transaction.id)}/>)}
        </div>

        <div className="px-8 pt-8 w-full">
            <h2 className="text-lg text-[#4E80D1] font-medium uppercase mb-7">Fraudulent activity alert</h2>

            <Transaction transaction={transactions.filter((transaction) => transaction.id == current)[0]} onClick={handleUpdate}></Transaction>
        </div>
    </main>
  )
}