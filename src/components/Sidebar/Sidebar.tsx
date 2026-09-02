import { Link } from '@tanstack/react-router'

export default function Sidebar() {
  return (
    // <div className="p-10 w-1/7 box-border bg-[#1C7FDA]">
    //     <p className="text-xl text-[#9BC1FF] mb-10">Fraud Management</p>
    //     <nav>
    //         <ul className="pl-3">
    //             <li className="flex items-center mb-7">
    //                 <img src="icons/dashboard.png" alt="Dashboard" className="h-5 mr-2.5"/>
    //                 <span className="text-white text-lg font-medium">Dashboard</span>
    //             </li>

    //             <li className="flex items-center justify-between mb-7">
    //                  <div className="flex items-center">
    //                      <img src="icons/reports.png" alt="Reports" className="h-5 mr-2.5"/>
    //                      <span className="text-white text-lg font-medium">Reports</span>
    //                  </div>
    //                  <img src="buttons/caret.png" alt="Caret" />
    //             </li>

    //             <li className="flex items-center justify-between mb-7">
    //                  <div className="flex items-center">
    //                      <img src="icons/transactions.png" alt="Transactions" className="h-5 mr-2.5"/>
    //                      <span className="text-white text-lg font-medium">Transactions</span>
    //                  </div>
    //                  <img src="buttons/caret.png" alt="Caret" />
    //             </li>

    //             <li className="flex items-center mb-7">
    //                 <img src="icons/help.png" alt="Help" className="h-5 mr-2.5"/>
    //                 <span className="text-white text-lg font-medium">Help</span>
    //             </li>

    //             <li className="flex items-center mb-7">
    //                 <img src="icons/settings.png" alt="Settings" className="h-5 mr-2.5"/>
    //                 <span className="text-white text-lg font-medium">Settings </span>
    //             </li>
    //         </ul>
    //     </nav>
    // </div>
    <div className="w-18 box-border bg-[#1C7FDA]">
        <nav>
            <ul className="flex flex-col items-center pt-10">
                <li className="mb-7">
                    <Link to="/dashboard">
                        <img src="icons/dashboard-white.png" alt="Dashboard" className="h-5"/>
                    </Link>
                </li>

                <li className="mb-7">
                    <Link to="/">
                        <img src="icons/reports-white.png" alt="Dashboard" className="h-5"/>
                    </Link>
                </li>

                <li className="mb-7">
                    <Link to="/transactions">
                        <img src="icons/transactions-white.png" alt="Dashboard" className="h-5"/>
                    </Link>
                </li>

                <li className="mb-7">
                    <img src="icons/help-white.png" alt="Dashboard" className="h-5"/>
                </li>

                <li className="mb-7">
                    <img src="icons/settings-white.png" alt="Dashboard" className="h-5"/>
                </li>
            </ul>
        </nav>
    </div>
  )
}
