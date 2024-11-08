import { weatherCode } from "../../Content/WeatherCode";
import moment from "moment";
import Converter from "../CelsiusToFah";

export default function DailyFormat({tempSize,iconWidth,daySize,containerStyle , forecastData,unit,index}) {
    const date = moment();
    const formattedDate = date.format('dddd D MMMM YYYY').split(" ");
    console.log(formattedDate);

    let maxTemp = forecastData.daily.temperature_2m_max[index];
    let minTemp = forecastData.daily.temperature_2m_min[index];
    return (
        <div className={`shrink-0  font-semibold flex flex-col justify-between items-center
        ${containerStyle}
         transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300`}>
            <div className={`text-center ${daySize}`}>
                <span>{formattedDate[0]} <br /> {formattedDate[1]} {formattedDate[2].slice(0,3)}</span>
            </div>

            <div>
                <img src={weatherCode[forecastData.daily.weather_code[index]].icon} alt="Weather Icon" className={`mb-1 ${iconWidth}`}/>
            </div>
            <div>
                <span className={`${tempSize}`}>{unit?maxTemp:Converter(maxTemp)}&deg;/{unit?minTemp:Converter(minTemp)}&deg;{unit?'C':'F'} </span>
            </div>
        </div>
    );
}
