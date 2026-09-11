import { User } from "../types/user"

export const fields: (keyof User)[] = ['id', 'fullName', "city", "state", "address", "phone", "balance"]