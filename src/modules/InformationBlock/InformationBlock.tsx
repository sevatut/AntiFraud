import React from "react"
import { useTranslation } from "react-i18next"

export default function InformationBlock( {theme, fields, info}: 
    {
        theme: string,
        fields: string[],
        info: {
            [key: string]: string
        }
    }

)
{
    const { t } = useTranslation();

    return (
    <div className="bg-white border border-[#E3E4E5] rounded-sm px-5 py-6">
        <h3 className="text-lg font-medium mb-1">{t(`transactions.${theme}.header`)}</h3>
        <hr className="border-[#BFC7EB] mb-5"/>
        
        <dl className="grid grid-cols-[175px_max-content] gap-x-6 gap-y-3.5">
            {fields.map((field) => (
                <React.Fragment key={field}>
                    <dt className="text-right text-[#6C757D]">{t(`transactions.${theme}.${field}`)}</dt>
                    <dd>{info[field]}</dd>
                </React.Fragment>
            ))}
        </dl>
    </div>
  )
}

