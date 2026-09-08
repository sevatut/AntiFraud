import { Link } from '@tanstack/react-router'
import { useLocation } from '@tanstack/react-router';
import { ChevronDown } from 'lucide-react';
import { links } from '../../constants/links';
import { useTranslation } from 'react-i18next';


export default function Sidebar() {
   const { pathname } = useLocation()
   const isShort = pathname === '/transactions';

   const { t } = useTranslation(); 

    if (isShort) 
     return (
        <nav className="w-18 min-h-[88vh] box-border bg-[#1C7FDA]">
            <ul className="flex flex-col items-center pt-10">
                {links.map((link) => (
                    <li key={link.title} className="mb-7">
                        <Link to={link.address}>
                            {link.icon}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
  )
    
    else 
        return ( <div className="min-h-[88vh] py-10 pl-6 pr-8 w-1/7 box-border bg-[#1C7FDA]">
        <p className="text-xl text-[#9BC1FF] mb-10">{t("sidebar.header")}</p>
        <nav>
            <ul className='pl-3'>
                {links.map((link) => (
                    <li key={link.title} className="mb-7 flex justify-between">
                        <Link to={link.address} className='flex items-center'>
                            {link.icon}
                            <span className="text-white text-lg font-medium">{t(`sidebar.${link.title}`)}</span>
                        </Link>

                        {link.isChevron ? <ChevronDown color='#FFFFFF' size={20} strokeWidth={2} /> : null}
                    </li>
                ))}
            </ul>
        </nav>
    </div>
    )
}
