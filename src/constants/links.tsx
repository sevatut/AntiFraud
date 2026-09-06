import { ArrowRightLeft, CircleQuestionMark, ClipboardList, LayoutDashboard, Settings } from 'lucide-react'

export const links = [
    {
        title: "Dashboard",
        address: "/dashboard",
        icon: <LayoutDashboard className='mr-2.5' size={16} color='#86B4E1' />,
        isChevron: false,
    },
    {
        title: "Reports",
        address: "/",
        icon: <ClipboardList size={16} color='#86B4E1' className='mr-2.5' />,
        isChevron: true,
    },
    {
        title: "Transactions",
        address: "/transactions",
        icon: <ArrowRightLeft size={16} color='#86B4E1' className='mr-2.5' />,
        isChevron: true,
    },
    {
        title: "Help",
        address: "/",
        icon: <CircleQuestionMark size={16} color='#86B4E1' className='mr-2.5' />,
        isChevron: false,
    },
    {
        title: "Settings",
        address: "/",
        icon: <Settings size={16} color='#86B4E1' className='mr-2.5' />,
        isChevron: false,
    },
];

