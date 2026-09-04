import { ArrowRightLeft, Hourglass, Percent, Sun, X } from "lucide-react"

export const dashboard = {
    transactions:  { 
        amount: 9300,
        category: [
            { name: 'Deposits', value: 8000, color: "#1C7FDA"},
            { name: 'Loans', value: 1000, color: "#8DBFED" },
            { name: 'Withdrawals', value: 300, color: "#C6DFF6" },
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