import { colors } from "../constants/colors"

export type TransactionCardType = {
    id: string,
    owner: string,
    atm: string,
    date: string,
    method: string,
    money: string,
    status: keyof typeof colors,
    onClick: () => void
}