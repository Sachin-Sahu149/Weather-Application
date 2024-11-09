import { weatherCode } from "../../Content/WeatherCode";
import Converter from "../CelsiusToFah";
import moment from "moment";

export default function ExpandedCard({ hourlyWeatherData, unit, index }) {


    const date = moment(hourlyWeatherData.hourlyData.time[index]);
    const formattedTime = date.format("hh:mm:ss A"); // "01:00:00 AM"
    console.log(formattedTime);

    return (
        <div className=" text-[white] text-[10px] leading-[15px] xs:text-[16px] xs:leading-[22px] ss:text-[18px] ss:leading-[28px]">
            <p className="p-1 text-left ">{formattedTime}</p>
            <div className="w-[475px] xs:w-[750px] ss:w-[900px] grid grid-cols-8 grid-rows-1 grid-flow-col gap-x-1">

                <div key={0} className="bg-[#707174] text-[12px] ts:text-[1rem] xs:text-[2] flex justify-center items-center "><span>{unit ? hourlyWeatherData.hourlyData.temperature_2m[index] : Converter(hourlyWeatherData.hourlyData.temperature_2m[index])}&deg;{unit ? "C" : "F"}</span></div>
                <div key={1} className="bg-[#707174] flex justify-center items-center">
                    <img src={weatherCode[hourlyWeatherData.hourlyData.weather_code[index]].icon} className="w-[35px] xs:w-[50px]" alt="Weather Icon" />
                </div>
                <div key={2} className="bg-[#707174] text-center flex justify-center items-center col-span-2">{weatherCode[hourlyWeatherData.hourlyData.weather_code[index]].text} test  codeand temp re rows</div>
                <div key={3} className="bg-[#707174] text-center flex flex-col justify-center items-center">
                    <span>Feels Like</span>
                    <span>{unit ? hourlyWeatherData.hourlyData.apparent_temperature[index] : Converter(hourlyWeatherData.hourlyData.apparent_temperature[index])}&deg;{unit ? "C" : "F"}</span>
                </div>
                <div key={4} className="bg-[#707174] text-center flex flex-col justify-center items-center">
                    <span>Humidity</span>
                    <span>{hourlyWeatherData.hourlyData.relative_humidity_2m[index]}%</span>
                </div>
                <div key={5} className="bg-[#707174] text-center flex flex-col justify-center items-center">
                    <span>Dew Point</span>
                    <span>{unit ? hourlyWeatherData.hourlyData.dew_point_2m[index] : Converter(hourlyWeatherData.hourlyData.dew_point_2m[index])}&deg;{unit ? 'C' : 'F'}</span>
                </div>
                <div key={6} className="bg-[#707174] text-center flex flex-col justify-center items-center mr-2">
                    <span>Wind Speed</span>
                    <span>{hourlyWeatherData.hourlyData.wind_speed_10m[index]} km/h</span>
                </div>
            </div>
        </div>
    );
}





