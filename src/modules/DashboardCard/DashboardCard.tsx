import downloadPDF from "../../utils/pdf";

export default function DashboardCard( {title, value, image, isAnalyze} : {
    title: string;
    value: string;
    image: React.JSX.Element;
    isAnalyze: boolean;
} ) {
  return (
            <div className="flex p-20 py-12 flex-col items-start bg-white border border-[#E3E4E5] rounded-xs gap-8">
                {image}
                <p className="text-5xl font-medium">{value}</p>
                <h3 className="text-xl mb-20">{title}</h3>

                { isAnalyze ? <button className="w-48 p-3 border text-lg border-[#86B4E1] text-[#4E80D1] rounded-xs cursor-pointer 
                    hover:bg-[#1C7FDA] hover:text-white mr-2" onClick={() => downloadPDF( {
                        title,
                        value: +value
                    })}>Analyze</button> : null }
            </div>
        )
}