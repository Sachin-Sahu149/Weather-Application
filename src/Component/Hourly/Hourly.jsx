import { weatherCode } from "../../Content/WeatherCode";
import Card from "./Card";
import HourlyContainer from "./HourlyContainer";
import HourlyDewPoint from "./HourlyDewPoint";
import HourlyHumidity from "./HourlyHumidity";
import HourlyWindSpeed from "./HourlyWindSpeed";

export default function Hourly() {

    return (
        <div className='flex flex-col justify-between items-center w-full sm:w-[700px] h-[220px] ts:h-[350px]  xs:h-[450px] rounded-lg relative p-2 mb-6 bg-green-300 font-poppins  text-slate-500'>
            <div className="bg-slate-300 self-start text-[13px] ts:text-[18px] font-semibold t xs:text-2xl">
                <span>Hourly Forecast Weather </span>
            </div>
            <div className="bg-sky-300 h-[90%] w-full">
                <HourlyContainer />
            </div>
        </div>
    );
}