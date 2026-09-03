import DashboardCard from "../../modules/DashboardCard/DashboardCard"
import Chart from "../../modules/Chart/Chart"
import Diagram from "../../modules/Diagram/Diagram"
import { ArrowRightLeft, Hourglass, Percent, Sun, X } from "lucide-react"

const dashboard = {
    transactions:  { 
        amount: 9300,
        category: [
            { name: 'Deposits', value: 8000 },
            { name: 'Loans', value: 1000 },
            { name: 'Withdrawals', value: 300 },
        ] 
    },

    approved: {
      value: 9100,
      isAnalyze: false
    },

    card: {
      allTransactions: {
      title: "All transactions",
      value: "9300",
      image: <ArrowRightLeft size={75} strokeWidth={1.5} color='#86B4E1'></ArrowRightLeft>,
      isAnalyze: false
    },

      approvalRate: {
        title: "Approval Rate",
        value: "99.3%",
        image: <Percent size={75} strokeWidth={1.5} color='#45D700'></Percent>,
        isAnalyze: false
      },

      pending: {
        title: "Pending Approval",
        value: "10",
        image: <Hourglass size={75} strokeWidth={1.5} color='#86B4E1'></Hourglass>,
        isAnalyze: false
      },

      rejected: {
        title: "Rejected Transictions",
        value: "15",
        image: <X size={75} strokeWidth={1.5} color='#FF5858'></X>,
        isAnalyze: true
      },

      postponed: {
        title: "Postponed Approval",
        value: "70",
        image: <Sun size={75} strokeWidth={1.5} color='#FFB648'></Sun>,
        isAnalyze: true
      },
    }
  }

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