import TransactionType from "../types/transactions";

export const initialTransactions: TransactionType[] = [
  {
    id: "112",
    owner: "Paula Fortes",
    atm: "6055",
    date: "11/5/2022 3:12 PST",
    method: "Cash-out",
    money: "20.00",
    status: "pending",
    address: "332 Patterson Street",
    summary: {
      payment: "Visa",
      cvvResponse: "CVV2 Match (M)",
      avsResponse: "Full Match (Y)",
      number: "5237 55xx xxxx",
      bank: "AMERICAN EXPRESS INTERNATIONAL (NZ) INC."
    },
    account: {
      id: "871100455592",
      number: "488754555"
    }
  },

  {
    id: "30",
    owner: "Paula Fortes",
    atm: "6055",
    date: "11/5/2022 3:12 PST",
    method: "Cash-out",
    money: "20.00",
    status: "approved",
    address: "332 Patterson Street",
    summary: {
      payment: "Visa",
      cvvResponse: "CVV2 Match (M)",
      avsResponse: "Full Match (Y)",
      number: "5237 55xx xxxx",
      bank: "AMERICAN EXPRESS INTERNATIONAL (NZ) INC."
    },
    account: {
      id: "871100455592",
      number: "488754555"
    }
  },

  {
    id: "21",
    owner: "Paula Fortes",
    atm: "6055",
    date: "11/5/2022 3:12 PST",
    method: "Cash-out",
    money: "20.00",
    status: "pending",
    address: "506 Elm Street",
    summary: {
      payment: "Visa",
      cvvResponse: "CVV2 Match (M)",
      avsResponse: "Full Match (Y)",
      number: "5237 55xx xxxx",
      bank: "AMERICAN EXPRESS INTERNATIONAL (NZ) INC."
    },
    account: {
      id: "871100455592",
      number: "488754555"
    }
  },


  {
    id: "22",
    owner: "Paula Fortes",
    atm: "6055",
    date: "11/5/2022 3:12 PST",
    method: "Cash-out",
    money: "20.00",
    status: "rejected",
    address: "947 Maple Avenue",

    summary: {
      payment: "Visa",
      cvvResponse: "CVV2 Match (M)",
      avsResponse: "Full Match (Y)",
      number: "5237 55xx xxxx",
      bank: "AMERICAN EXPRESS INTERNATIONAL (NZ) INC."
    },
    account: {
      id: "871100455592",
      number: "488754555"
    }
  },

  {
    id: "50",
    owner: "Paula Fortes",
    atm: "6055",
    date: "11/5/2022 3:12 PST",
    method: "Cash-out",
    money: "20.00",
    status: "pending",
    address: "382 Pine Street",
    summary: {
      payment: "Visa",
      cvvResponse: "CVV2 Match (M)",
      avsResponse: "Full Match (Y)",
      number: "5237 55xx xxxx",
      bank: "AMERICAN EXPRESS INTERNATIONAL (NZ) INC."
    },
    account: {
      id: "871100455592",
      number: "488754555"
    }
  },
]