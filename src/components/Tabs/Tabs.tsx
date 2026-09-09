import { Dispatch, SetStateAction } from "react"
import { tabs } from "../../constants/tabs"
import { useTranslation } from "react-i18next"

export default function Tabs( {currentTab, onClick}: {
  currentTab: string,
  onClick: Dispatch<SetStateAction<string>>
} ) {
  const { t } = useTranslation();
  
  return (
    <nav>
        <ul className="flex justify-between h-12">
            {tabs.map((tab) => { 

              if (currentTab == tab) 
                return (
                  <li key={tab} className="w-1/5 flex items-center justify-center 
            text-xl bg-white border-t border-r border-l border-[#B5B5B5] text-[#4E80D1]">
                    <button onClick={() => onClick(tab)} className="cursor-pointer">{t(`reports.tabs.${tab}`)}</button>
                    
                  </li>
              )
              else 
                return (
                  <li key={tab} className="w-1/5 flex items-center justify-center
                    text-xl border-b border-[#B5B5B5] text-[#5A5A5A]">
                    <button onClick={() => onClick(tab)} className="cursor-pointer">{t(`reports.tabs.${tab}`)}</button>
                  </li>               
              )
            })}
        </ul>
    </nav>
  )
}

