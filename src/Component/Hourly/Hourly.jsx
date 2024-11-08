import { weatherCode } from "../../Content/WeatherCode";
import ExpandButton from "../ExpandButton";
import Card from "./Card";
import HourlyContainer from "./HourlyContainer";
import HourlyDewPoint from "./HourlyDewPoint";
import HourlyHumidity from "./HourlyHumidity";
import HourlyWindSpeed from "./HourlyWindSpeed";

export default function Hourly({value,setHourlyVisible,hourlyWeatherData,unit}) {

    return (
        <div id="HourlyID" className='flex flex-col justify-between items-center w-full sm:w-[700px] h-[220px] vs:h-[350px]  xs:h-[450px] rounded-lg relative p-2 mb-6 bg-[#646567] font-poppins  text-slate-200'>
            <div className="self-start text-[13px] vs:text-[18px] font-semibold  xs:text-2xl">
                <span>Hourly Forecast Weather </span>
            </div>
            <ExpandButton visible={setHourlyVisible} value={value} position=" absolute top-2 right-2 font-semibold text-[9px] vs:text-[14px] xs:text-base" />
            <div className="h-[90%] w-full">
                <HourlyContainer hourlyWeatherData={hourlyWeatherData} unit={unit}/>
            </div>
        </div>
    );
}