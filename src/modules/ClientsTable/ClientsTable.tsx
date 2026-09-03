import Client from "../Client/Client"
import { User } from "../../types/user"
import { ChevronDown } from "lucide-react"
import titles from "../../constants/titles"

export default function ClientsTable({users}: {users: User[] } ) {

  return (
    <table className="w-full text-left">
        <thead>
            <tr>
                {titles.map((title) => (
                    <th scope="col" className="relative font-normal p-4">
                        <div className="flex items-center justify-between">
                            <span>{title}</span> 
                            <ChevronDown color='#798388' size={16} strokeWidth={2} />
                        </div> 
                    </th>
                ))}        
            </tr>
        </thead>

        <tbody>
            {users.map((user: User) => (
                <Client key={user.id} user={user}></Client>
            ))}
        </tbody>
    </table>
  )
}