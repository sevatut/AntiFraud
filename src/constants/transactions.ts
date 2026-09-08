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
      number: "488754555",
      amount: "20.00",
      creation: "11/5/2022 3:12 PST",
      update: "11/5/2022 3:12 PST",
      id: "871100455592",
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
      number: "488754555",
      amount: "20.00",
      creation: "11/5/2022 3:12 PST",
      update: "11/5/2022 3:12 PST",
      id: "871100455592",
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
      number: "488754555",
      amount: "20.00",
      creation: "11/5/2022 3:12 PST",
      update: "11/5/2022 3:12 PST",
      id: "871100455592",
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
      number: "488754555",
      amount: "20.00",
      creation: "11/5/2022 3:12 PST",
      update: "11/5/2022 3:12 PST",
      id: "871100455592",
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
      number: "488754555",
      amount: "20.00",
      creation: "11/5/2022 3:12 PST",
      update: "11/5/2022 3:12 PST",
      id: "871100455592",
    }
  },
]

// сайдбар до конца
// в эдит форме по айдишнику заполнение инпутов
// i18n, интернационализацию сделать (русский, английский)
// вынести transaction
// табы сделать переключаемыми и пустыми
// сортировку сделать по каждому полю
// полосатая табличка
// страницу регистрации, затем снова авторизация
// страницу авторизации 
// кнопку выхода
// визуальное отличие на тех ссылках на которые перейдено
// пофиксить верстку по дашборду
// confirm
// help :3
// settings xD
// ^ пустые