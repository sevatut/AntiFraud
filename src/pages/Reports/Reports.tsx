import ClientsTable from "../../modules/ClientsTable/ClientsTable"
import ControlPanel from "../../modules/ControlPanel/ControlPanel"
import Tabs from "../../components/Tabs/Tabs"
import Pagination from "../../modules/Pagination/Pagination"
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from "../../services/usersApi";
import { useEffect, useMemo, useState } from "react";
import { getRandomInt } from "../../utils/random";
import { User } from "../../types/user";


export default function Reports() {
  const [filter, setFilter] = useState({
    name: "",
    id: "",
    balance: 0
  });

  const [page, setPage] = useState(0);
  const [entries, setEntries] = useState(10);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, key: string) => {
    setFilter({
        ...filter,
        [key]: event.target.value
    })
}

  useEffect(()=> {
    setPage(0);
  }, [filter, entries]);

  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const data = await fetchUsers();
      return {
        ...data,
        users: data.users.map((user: User & {
          firstName: string;
          maidenName: string;
          lastName: string;
          address: {
            city: string;
            stateCode: string;
            address: string;
          }

        } ) => ({
          ...user,
          fullName: `${user.firstName} ${user.maidenName?.charAt(0)} ${user.lastName}`,
          balance: getRandomInt(10000, 100000),
          city: user.address.city,
          state: user.address.stateCode,
          address: user.address.address,

        })),
      };
    },
  });

  const filteredUsers = useMemo(() => {
    if (!data) {
      return [];
    }

    let users = data.users;

    if (filter.id) 
      return users.filter((user: User) => user.id.toString() == filter.id);

    if (filter.name) {
      users = users.filter((user: User) => 
    user.fullName.toLowerCase().includes(filter.name.toLowerCase()))
    }

    if (filter.balance) 
      users = users.filter((user: User) => user.balance >= filter.balance);

    return users;

  }, [filter, data])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="bg-[#E9EFF2] pt-8 w-full">
        <Tabs />
        <div className="bg-white pt-4">
            <h2 className="flex h-14 items-center justify-center text-2xl text-[#4E80D1]">Customer profile</h2>
            
            <ControlPanel filter={filter} onChange={handleChange}  />

            <div className="p-2">
                <ClientsTable users={filteredUsers.slice(entries * page, (page + 1) * entries)}/>

                <hr className="border-[#C6C6C6] mb-6"/>

                <Pagination amount={filteredUsers.length} page={page} entries={entries} onPagination={setPage} onChange={setEntries}/>
            </div>
        </div>
    </main>
  )
}

