import Client from "../Client/Client"
import { User } from "../../types/user"
import { ChevronDown } from "lucide-react"
import titles from "../../constants/titles"
import { useTranslation } from "react-i18next"

export default function ClientsTable({users, onSort}: {
    users: User[], 
    onSort: (field: keyof User) => void
    } ) {
  const { t } = useTranslation();

  return (
    <table className="w-full text-left">
        <thead>
            <tr>
                {titles.map((title) => (
                    <th key={title} scope="col" className="relative font-normal p-4">
                        <div className="flex items-center justify-between">
                            <span>{t(`reports.table.${title}`)}</span> 
                            <button className="cursor-pointer" onClick={() => onSort(title)}>
                                <ChevronDown color='#798388' size={16} strokeWidth={2} />
                            </button>
                        </div> 
                    </th>
                ))}        
            </tr>
        </thead>

        <tbody>
            {users.map((user: User) => (
                <Client key={user.id} user={user} />
            ))}
        </tbody>
    </table>
  )
}