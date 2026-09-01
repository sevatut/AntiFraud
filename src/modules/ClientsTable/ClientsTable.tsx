import Client from "../Client/Client"


export default function ClientsTable({users}: any) {

  return (
    <table className="w-full text-left">
        <thead>
            <tr>
                <th scope="col" className="relative font-normal p-4"> 
                    <span>CID</span> <img src="buttons/caret-gray.png" alt="Caret" className="absolute right-6 top-1/2"/>
                </th>          
                <th scope="col" className="relative font-normal p-4"> 
                    <span>Full Name</span> <img src="buttons/caret-gray.png" alt="Caret" className="absolute right-6 top-1/2"/>
                </th>            
                <th scope="col" className="relative font-normal p-4"> 
                    <span>City</span> <img src="buttons/caret-gray.png" alt="Caret" className="absolute right-6 top-1/2"/>
                </th> 
                <th scope="col" className="relative font-normal p-4"> 
                    <span>State</span> <img src="buttons/caret-gray.png" alt="Caret" className="absolute right-6 top-1/2"/>
                </th> 
                <th scope="col" className="relative font-normal p-4"> 
                    <span>Address</span> <img src="buttons/caret-gray.png" alt="Caret" className="absolute right-6 top-1/2"/>
                </th> 
                <th scope="col" className="relative font-normal p-4"> 
                    <span>Phone Number</span> <img src="buttons/caret-gray.png" alt="Caret" className="absolute right-6 top-1/2"/>
                </th> 
                <th scope="col" className="relative font-normal p-4"> 
                    <span>Acc Balance</span> <img src="buttons/caret-gray.png" alt="Caret" className="absolute right-6 top-1/2"/>
                </th>            
            </tr>
        </thead>

        <tbody>
            {users.map((user: any) => (
                <Client key={user.id} user={user}></Client>
            ))}
        </tbody>
    </table>
  )
}