import { User } from "../types/user";

const titles: (keyof User)[] = ["id", "fullName", "city", "state", "address", "phone", "balance"];

export default titles;