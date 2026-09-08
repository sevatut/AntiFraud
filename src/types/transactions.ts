export default interface TransactionType {
 id: string;
 owner: string;
 atm: string;
 date: string;
 method: string;
 money: string;
 status: "pending" | "approved" | "rejected";
 address: string;
 summary: {
      payment: string,
      cvvResponse: string,
      avsResponse: string,
      number: string,
      bank: string
    },
    account: {
      number: string,
      amount: string,
      creation: string,
      update: string,
      id: string
    }
}