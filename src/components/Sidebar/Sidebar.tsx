import { Link } from '@tanstack/react-router'
import { ArrowRightLeft, CircleQuestionMark, ClipboardList, LayoutDashboard, Settings, ChevronDown } from 'lucide-react'
import { useLocation } from '@tanstack/react-router';

export default function Sidebar() {
    const { pathname } = useLocation()
   const isShort = pathname === '/transactions';


    if (isShort) 
     return (
        <nav className="w-18 box-border bg-[#1C7FDA]">
            <ul className="flex flex-col items-center pt-10">
                <li className="mb-7">
                    <Link to="/dashboard">
                       <LayoutDashboard size={16} color='#FFFFFF' />
                    </Link>
                </li>

                <li className="mb-7">
                    <Link to="/">
                        <ClipboardList size={16} color='#FFFFFF' />
                    </Link>
                </li>

                <li className="mb-7">
                    <Link to="/transactions">
                        <ArrowRightLeft size={16} color='#FFFFFF' />
                    </Link>
                </li>

                <li className="mb-7">
                    <CircleQuestionMark size={16} color='#FFFFFF' />
                </li>

                <li className="mb-7">
                    <Settings size={16} color='#FFFFFF' />
                </li>
            </ul>
        </nav>
  )
    
    else 
        return ( <div className="py-10 pl-6 pr-8 w-1/7 box-border bg-[#1C7FDA]">
        <p className="text-xl text-[#9BC1FF] mb-10">Fraud Management</p>
        <nav>
            <ul className='pl-3'>
                <li className="flex items-center mb-7">
                    <LayoutDashboard className='mr-2.5' size={16} color='#86B4E1' />
                    <Link to="/dashboard">
                        <span className="text-white text-lg font-medium">Dashboard</span>
                    </Link>
                </li>

                <li className="flex items-center justify-between mb-7">
                    <div className="flex items-center">
                        <ClipboardList size={16} color='#86B4E1' className='mr-2.5' />
                        <Link to="/">
                            <span className="text-white text-lg font-medium">Reports</span>
                        </Link>
                    </div>
                    <ChevronDown color='#FFFFFF' size={20} strokeWidth={2} />
                </li>

                <li className="flex items-center justify-between mb-7">
                     <div className="flex items-center">
                        <ArrowRightLeft size={16} color='#86B4E1' className='mr-2.5' />
                        <Link to="/transactions" >
                            <span className="text-white text-lg font-medium">Transactions</span>
                        </Link>
                     </div>
                    <ChevronDown color='#FFFFFF' size={20} strokeWidth={2} />
                </li>

                <li className="flex items-center mb-7">
                    <CircleQuestionMark size={16} color='#86B4E1' className='mr-2.5' />
                    <span className="text-white text-lg font-medium">Help</span>
                </li>

                <li className="flex items-center mb-7">
                    <Settings size={16} color='#86B4E1' className='mr-2.5' />
                    <span className="text-white text-lg font-medium">Settings </span>
                </li>
            </ul>
        </nav>
    </div>
    )
}
