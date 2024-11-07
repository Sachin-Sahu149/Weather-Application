import { weatherCode } from "../../Content/WeatherCode";
import HourlyDewPoint from "./HourlyDewPoint";
import HourlyHumidity from "./HourlyHumidity";
import HourlyWindSpeed from "./HourlyWindSpeed";

export default function Card() {

    return (
        <div className=" text-[9px] ts:text-[14px] xs:text-base bg-slate-300 border-box h-[85%] w-[140px] ts:w-[210px] xs:w-[350px] rounded-lg p-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-300">
            <div className="h-[50%] bg-orange-200 flex flex-col justify-between pb-3">
                <div className="h-[3rem] bg-sky-200 flex flex-col font-semibold text-slate-600">
                    <span>Sunday 3 November 2024 </span>
                    <span>02:00 pm</span>
                </div>
                <div className="flex items-center justify-between">
                    <img src={weatherCode[8000].icon} alt="" className=" w-[25px] ts:w-[30px] xs:w-[50px]" />
                    <span>{weatherCode[8000].text}</span>
                </div>
                <div className="flex justify-between">
                    <div>
                        {/* <span className="pr-2">Temperature</span> */}
                        <span className=" text-[12px] ts:text-[16px] xs:text-3xl font-semibold">27&deg;C</span>
                    </div>
                    <div>
                        <span className="pr-2">Feels Like</span>
                        <span className=" font-semibold">27.7&deg;C</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between h-[40%]">
                <HourlyHumidity visible={true}/>
                <HourlyDewPoint visible={true} />
                <HourlyWindSpeed visible={true} />
            </div>
        </div>
    );
}







