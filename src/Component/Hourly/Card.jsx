import { weatherCode } from "../../Content/WeatherCode";
import HourlyDewPoint from "./HourlyDewPoint";
import HourlyHumidity from "./HourlyHumidity";
import HourlyWindSpeed from "./HourlyWindSpeed";
import moment from "moment";
import Converter from "../CelsiusToFah";


export default function Card({hourlyWeatherData,index,unit}) {

    const date = moment();
    const formattedDate = date.format('dddd D MMMM YYYY');
    console.log(formattedDate);

    const currentDate = moment(hourlyWeatherData.hourlyData.time[index]);
    const formattedTime = currentDate.format("hh:mm:ss A"); // "01:00:00 AM"
    console.log(formattedTime);
    
    return (
        <div  className=" text-[9px] vs:text-[14px] xs:text-base bg-[#707174] border-box h-[85%] w-[140px] vs:w-[210px] xs:w-[350px] rounded-lg p-1 transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-300">
            <div className="h-[50%]  flex flex-col justify-between pb-3">
                <div className="h-[3rem] flex flex-col font-semibold ">
                    <span>{formattedDate}</span>
                    <span>{formattedTime}</span>
                </div>
                <div className="flex items-center justify-between">
                    <img src={weatherCode[hourlyWeatherData.hourlyData.weather_code[index]].icon} alt="" className=" w-[25px] vs:w-[30px] xs:w-[50px]" />
                    <span>{weatherCode[hourlyWeatherData.hourlyData.weather_code[index]].text}</span>
                </div>
                <div className="flex justify-between">
                    <div>
                        {/* <span className="pr-2">Temperature</span> */}
                        <span className=" text-[12px] vs:text-[16px] xs:text-3xl font-semibold">{unit?hourlyWeatherData.hourlyData.temperature_2m[index]:Converter(hourlyWeatherData.hourlyData.temperature_2m[index])}&deg;{unit?"C":"F"}
                        </span>
                    </div>
                    <div>
                        <span className="pr-2">Feels Like</span>
                        <span className=" font-semibold">{unit?hourlyWeatherData.hourlyData.apparent_temperature[index]:Converter(hourlyWeatherData.hourlyData.apparent_temperature[index])}&deg;{unit?"C":"F"}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between h-[40%]">
                <HourlyHumidity visible={true} humidity={hourlyWeatherData.hourlyData.relative_humidity_2m[index]}/>
                <HourlyDewPoint visible={true} dew={hourlyWeatherData.hourlyData.dew_point_2m[index]} unit={unit}/>
                <HourlyWindSpeed visible={true} speed={hourlyWeatherData.hourlyData.wind_speed_10m[index]} />
            </div>
        </div>
    );
}

