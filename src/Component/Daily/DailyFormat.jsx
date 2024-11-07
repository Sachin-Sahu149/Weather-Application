import { weatherCode } from "../../Content/WeatherCode";

export default function DailyFormat({tempSize,iconWidth,daySize,containerStyle}) {
    
    return (
        <div className={`shrink-0  font-semibold flex flex-col justify-between items-center
        bg-sky-400  text-gray-700 ${containerStyle}
         transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300`}>
            <div className={`text-center ${daySize}`}>
                <span>Sunday <br /> 03 Nov</span>
            </div>

            <div>
                <img src={weatherCode[1100].icon} alt="Weather Icon" className={`mb-1 ${iconWidth}`}/>
            </div>
            <div>
                <span className={`${tempSize}`}>33&deg;/32&deg;C</span>
            </div>
        </div>
    );
}
