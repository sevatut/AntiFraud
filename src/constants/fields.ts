import { User } from "../types/user"

export const fields: (keyof User)[] = ['id', 'fullName', "city", "state", "address", "phone", "balance"]

export const labels: {
    name: keyof User,
    title: string
}[] = [
    {
        name: "id",
        title: "ID"
    },
    {
        name: "fullName",
        title: "Full name"
    },
    {
        name: "city",
        title: "City"
    },
    {
        name: "state",
        title: "State"
    },
    {
        name: "address",
        title: "Address"
    },
    {
        name: "phone",
        title: "Phone Number"
    },
    {
        name: "balance",
        title: "Balance"
    },
]