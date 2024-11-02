import { weatherCode } from "../../Content/WeatherCode";
import HourlyDewPoint from "./HourlyDewPoint";
import HourlyHumidity from "./HourlyHumidity";
import HourlyWindSpeed from "./HourlyWindSpeed";


export default function Hourly() {

    return (
        <div className='flex justify-center items-center w-[700px] h-[450px] relative p-2 mb-6 bg-green-300 font-poppins font-semibold text-slate-500'>
            <div className="bg-slate-300 absolute left-0">
                <span> {"<"}Left Icon</span>
            </div>
            <div className="bg-slate-300 absolute top-3 left-4 text-2xl">
                <span>Hourly Forecast Weather </span>
            </div>
            <div className="bg-slate-300 border-box h-[80%] w-[350px] p-3">
                <div className="h-[50%] bg-orange-200 flex flex-col justify-between pb-3">
                    <div className="h-[3rem] bg-sky-200 flex flex-col font-semibold text-slate-600">
                        <span>Sunday 3 November 2024 </span>
                        <span>02:00 pm</span>    
                    </div>
                    <div className="flex items-center justify-between">
                        <img src={weatherCode[8000].icon} alt="" height="50" width="50"/>
                        <span>{weatherCode[8000].text}</span>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            {/* <span className="pr-2">Temperature</span> */}
                            <span className="text-3xl font-semibold">27&deg;C</span>
                        </div>
                        <div>
                            <span className="pr-2">Feels Like</span>
                            <span className=" font-semibold">27.7&deg;C</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between h-[40%]">
                    <HourlyHumidity/>
                    <HourlyDewPoint/>
                    <HourlyWindSpeed/>
                </div>
            </div>
            <div className="bg-slate-300 absolute right-0">
                <span>right Icon{">"}</span>
            </div>
        </div>
    );
}