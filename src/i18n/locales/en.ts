
export default {
  translation: {
    sidebar: { 
      header: "Fraud Management",
      dashboard: "Dashboard",
      reports: "Reports",
      transactions: "Transactions",
      help: "Help",
      settings: "Settings",
    },
    reports: {
      tabs: {
      clients: "Clients",
      deposit: "Deposit",
      withdraw: "Withdraw",
      loans: "Loans",
      transaction: "Transaction History"
      },
      controlPanel: {
        header: "Customer profile",
        tip: "View Customer Account Balance",
        idInput: "Acc ID",
        balanceInput: "Acc Balance",
        editButton: "Edit info",
        addButton: "Add Customer"
      },
      table: {
        id: "CID",
        fullName: "Full Name",
        city: "City",
        state: "State",
        address: "Address",
        number: "Phone number",
        balance: "Acc Balance"
      },
      pagination: {
        information: "Showing {{from}} to {{to}} of {{amount}} entries",
        five: "5 entries per page",
        ten: "10 entries per page",
        fifteen: "15 entries per page" 
      },
      popUp: {
        edit: { 
          header: "Edit Info",
          button: "Edit"
        },
        add: {
          header: "Add customer",
          button: "Add"
        },
        fields: {
          id: "ID",
          fullName: "Full name",
          city: "City",
          state: "State", 
          address: "Address",
          phone: "Phone Number",
          balance: "Balance"

        }
      }
    },
    dashboard: {
      header: "Fraud Management Dashboard",
      chart: {
        header: "Processed Transactions",
        deposits: "Deposits",
        loans: "Loans",
        withdrawals: "Withdrawals"
      },
      transactions: "All transactions",
      rate: "Approval Rate",
      pending: "Pending Approval",
      approved: "Approved Transactions",
      rejected: "Rejected Transictions",
      postponed: "Postponed Approval"
    },
    transactions: {
      header: "Fraudulent activity alert",
      summary: {
        header: "Summary",



      },

      account: {
        header: "Account"
      },
      atm: "ATM",
      approveButton: "Approve",
      declineButton: "Decline"
    },
    analyzeButton: "Analyze"
  },
};