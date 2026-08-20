export default function Sidebar() {
  return (
    <>
        <p>Fraud Management</p>
        <nav>
            <ul>
                <li><img src="icons/dashboard.png" alt="Dashboard" /><span>Dashboard</span></li>

                <li>
                    <div>
                        <img src="icons/reports.png" alt="Reports" /><span>Reports</span>
                    </div>
                    <img src="buttons/caret.png" alt="Caret" />
                </li>

                <li>
                    <div>
                        <img src="icons/transactions.png" alt="Transactions" /><span>Transactions</span>
                    </div>
                    <img src="buttons/caret.png" alt="Caret" />
                </li>

                <li><img src="icons/help.png" alt="Help" /><span>Help</span></li>

                <li><img src="icons/settings.png" alt="Settings" /><span>Setting</span></li>
            </ul>
        </nav>
    </>
  )
}
