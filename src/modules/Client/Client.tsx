import { User } from "../../types/user";
import { fields } from "../../constants/fields";

export default function Client({user, isGray} : {
  user: User;
  isGray: boolean
}) {

  return (
    <tr>
        {fields.map((key) => {
          if (key == "balance")
            return <td key={key} className="text-lg px-4 py-4 text-right"
            style={{
              backgroundColor: isGray ? "#f9f9f9" : "white"
            }}>${user[key]}</td> 
          else 
            return <td key={key} className="text-lg px-4 py-4" 
             style={{
              backgroundColor: isGray ? "#f9f9f9" : "white"
            }}>{user[key]}</td> 
        })}
    </tr>
  )
}

