import { weatherCode } from "../../Content/WeatherCode";

export default function DailyFormat({marginRight}) {
    
    return (
        <div className={`shrink-0 flex flex-col items-center justify-between xs:h-[230px] xs:w-[150px] font-semibold 
         mr-4 p-3 mb-4 bg-sky-400 rounded-xl   text-gray-700
         transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300`}>
            <div className="text-center text-[13px] xs:text-base">
                <span>Sunday <br /> 03 November</span>
            </div>

            <div>
                <img src={weatherCode[1100].icon} alt="" />
            </div>
            <div>
                <span className=' text-[18px] xs:text-3xl'>33&deg;C</span>
            </div>
        </div>
    );
}