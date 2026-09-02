export default function Client({user}) {
  return (
    <tr>
        <td className="text-lg px-4 py-4">{user.id}</td>
        <td className="text-lg px-4 py-4">{user.fullName}</td>
        <td className="text-lg px-4 py-4">{user.city}</td>
        <td className="text-lg px-4 py-4">{user.state}</td> 
        <td className="text-lg px-4 py-4">{user.address}</td>
        <td className="text-lg px-4 py-4">{user.phone}</td>
        <td className="text-lg px-4 py-4 text-right">${user.balance}</td>
    </tr>
  )
}

