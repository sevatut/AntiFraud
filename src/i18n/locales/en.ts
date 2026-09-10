
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
      history: "Transaction History"
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
        phone: "Phone number",
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
        payment: "Payment",
        cvvResponse: "CVV Response",
        avsResponse: "AVS Response",
        number: "Number",
        bank: "Bank"
      },

      account: {
        header: "Account",
        number: "Number",
        amount: "Order Amount",
        creation: "Creation Date",
        update: "Update Date",
        id: "Last Order Ext. ID",
      },
      atm: "ATM",
      approveButton: "Approve",
      declineButton: "Decline"
    },
    analyzeButton: "Analyze",
    authorization: {
      header: "Authorization",
      login: "Login",
      password: "Password",
      button: "Sign in",
      alert: "Incorrect username or password",
      question: "Don't have an account?",
      link: "Sign up"
    },
    registration: {
      header: "Registration",
      login: "Login",
      password: "Password",
      button: "Sign Up",
      alert: "A user with that login already exists",
      question: "Have an account?",
      link: "Sign In"
    }
  },
};