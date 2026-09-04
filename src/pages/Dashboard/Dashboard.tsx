import DashboardCard from "../../modules/DashboardCard/DashboardCard"
import Chart from "../../modules/Chart/Chart"
import Diagram from "../../modules/Diagram/Diagram"
import { dashboard } from "../../constants/dashboard"

export default function Dashboard() {
  return (
    
    <main className="px-8 pt-8 bg-[#E9EFF2] w-full h-[88vh]">
        <h2 className="text-lg text-[#4E80D1] font-medium uppercase mb-7">Fraud Management Dashboard</h2>

        <div className="h-9/10 grid grid-cols-4 grid-rows-[2fr_3fr] gap-2">

            <Chart data={dashboard.transactions.category} amount={dashboard.transactions.amount}/>

            <DashboardCard {...dashboard.card.allTransactions} />
            <DashboardCard {...dashboard.card.approvalRate} />
            <DashboardCard {...dashboard.card.pending}></DashboardCard>
            <Diagram transactions={dashboard.transactions.amount}/>
            <DashboardCard {...dashboard.card.rejected} />
            <DashboardCard {...dashboard.card.postponed} />
        </div>
    </main>
  )
}