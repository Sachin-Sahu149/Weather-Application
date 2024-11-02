import { weatherCode } from "../../Content/WeatherCode";

export default function DailyFormat({marginRight}) {

    return (
        <div className={`flex flex-col items-center justify-between h-[230px] w-[180px] font-semibold mr-${marginRight} p-3 mb-4 bg-sky-400 rounded-xl`}>
            <div>Sunday</div>
            <div>03 November</div>
            <div>
                <img src={weatherCode[1100].icon} alt="" />
            </div>
            <div>
                <span className='text-3xl'>33&deg;C</span>
            </div>
        </div>
    );
}