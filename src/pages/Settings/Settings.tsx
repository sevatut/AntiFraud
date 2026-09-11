import { useTranslation } from "react-i18next"
import { languages } from "../../constants/languages";

export default function Settings() {
  const { t, i18n } = useTranslation();
  
  return (
    <main className="p-10 bg-[#E9EFF2] w-full h-[88vh]">
      <label className="flex gap-5">
        <h2 className="text-3xl">{t("settings.language")}</h2>
        <select value={i18n.language} onChange={(event) => i18n.changeLanguage(event.target.value)} 
        className="bg-white border p-1 rounded-lg text-2xl">
          {languages.map((lang ) => (
            <option value={lang}>{t(`languages.${lang}`)}</option>
          ))}
        </select>
      </label>
    </main>
  )
}