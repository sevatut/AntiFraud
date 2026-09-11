import { ArrowRightLeft, CircleQuestionMark, ClipboardList, LayoutDashboard, Settings } from 'lucide-react'

export const links = [
    {
        title: "dashboard",
        address: "/dashboard",
        icon: <LayoutDashboard className='mr-2.5' size={16} color='#86B4E1' />,
        isChevron: false,
    },
    {
        title: "reports",
        address: "/",
        icon: <ClipboardList size={16} color='#86B4E1' className='mr-2.5' />,
        isChevron: true,
    },
    {
        title: "transactions",
        address: "/transactions",
        icon: <ArrowRightLeft size={16} color='#86B4E1' className='mr-2.5' />,
        isChevron: true,
    },
    {
        title: "help",
        address: "/help",
        icon: <CircleQuestionMark size={16} color='#86B4E1' className='mr-2.5' />,
        isChevron: false,
    },
    {
        title: "settings",
        address: "/settings",
        icon: <Settings size={16} color='#86B4E1' className='mr-2.5' />,
        isChevron: false,
    },
];

