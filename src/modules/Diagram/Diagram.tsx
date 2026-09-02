export default function Diagram( {transactions}: {transactions: number} ) {
  const value = transactions * 0.96;
  const max = transactions;
  
  const percentage = (value / max) * 100;

  const radius = 80;
  const circumference = 2 * Math.PI * radius; 
  
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center bg-white border border-[#E3E4E5] rounded-xs gap-8 pt-20">
      <svg width="200" height="200" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="100" cy="100" r={radius} fill="transparent" stroke="#FF5858" strokeWidth="6" />
        <circle cx="100" cy="100" r={radius} fill="transparent" stroke="#45D700" strokeWidth="12" strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}/>
        <text x="100" y="-100" transform="rotate(90)" textAnchor="middle" dominantBaseline="central" className='text-4xl font-medium'>
          {value}
        </text>
      </svg>
      <h3 className="text-xl">Approved Transactions</h3>
    </div>
  );
}
