export interface User {
  id: number;
  fullName: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  balance: number;
}

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}