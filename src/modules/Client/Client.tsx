import { User } from "../../types/user";
import { fields } from "../../constants/fields";

export default function Client({user} : {
  user: User;
}) {

  return (
    <tr>
        {fields.map((key) => {
          if (key == "balance")
            return <td key={key} className="text-lg px-4 py-4 text-right">${user[key]}</td> 
          else 
            return <td key={key} className="text-lg px-4 py-4">{user[key]}</td> 
        })}
    </tr>
  )
}

