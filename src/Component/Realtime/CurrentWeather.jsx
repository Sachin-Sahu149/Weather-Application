import DewPoint from "./DewPoint";
import Humidity from "./Humidity";
import Latitude from "./Latitude";
import Longitude from "./Longitude";
import MaxTemp from "./MaxTemp";
import MinTemp from "./MinTemp";
import Precipitation from "./Precipitation";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import UVIndex from "./UVIndexData";
import WindSpeed from "./WindSpeed";
import Pressure from "./Pressure";
import { weatherCode } from "../../Content/WeatherCode";
import './CurrentWeather.css'
import Converter from "../CelsiusToFah";

// {weatherData.current.temperature_2m}

import moment from 'moment';





export function CurrentWeather({ weatherInfo, unit, coordinate }) {

    const date = moment();
    const formattedDate = date.format('dddd D MMMM YYYY');
    console.log(formattedDate);
    return (
        <div id="currentContainerID" className=' currentContainer bg-[#646567]  bg-no-repeat bg-cover bg-center flex-1 flex flex-col  justify-between w-full sm:w-[700px] xs:h-[400px] rounded-lg p-2 mb-2  font-poppins text-[9px] vs:text-[14px] ss:text-[17px] leading-6 xs:font-normal text-slate-100'>
            <div className='h-[40%] w-full ss:flex'>
                <div className='ss:w-1/2 flex flex-col justify-between p-2 sm:p-4 bg-[#707174]'>
                    <div className='flex text-center justify-between'>
                        <span>{formattedDate}</span>
                        <img className='' src={weatherCode[weatherInfo.current.weather_code].icon} alt="" height="30" width="40" />
                    </div>
                    <div className='flex justify-between items-center ss:mb-4'>
                        <div> {weatherCode[weatherInfo.current.weather_code].text}</div>
                        <div className=' text-xl vs:text-5xl font-semibold'>{unit ? weatherInfo.current.temperature_2m : Converter(weatherInfo.current.temperature_2m)}&deg;{unit ? "C" : "F"}</div>
                    </div>
                </div>
                <div className='flex flex-col ss:w-1/2 p-2 sm:p-4'>
                    <div className='flex justify-between pb-4'>
                        <MinTemp weatherInfo={weatherInfo} unit={unit} />
                        <MaxTemp weatherInfo={weatherInfo} unit={unit} />
                    </div>
                    <div className='flex justify-between'>
                        <Sunrise weatherInfo={weatherInfo} />
                        <Sunset weatherInfo={weatherInfo} />
                    </div>
                </div>
            </div>

            <div className='h-[30%] ss:flex justify-between'>
                <div className='flex w-full ss:w-1/2 justify-between p-2 sm:p-4 sm:mr-14 '>
                    <Humidity weatherInfo={weatherInfo} />
                    <Pressure weatherInfo={weatherInfo} />
                </div>
                <div className='flex  w-full ss:w-1/2 justify-between p-2 sm:p-4'>
                    <Longitude lon={coordinate.lon} />
                    <Latitude lat={coordinate.lat} />
                </div>
            </div>
            <div className='h-[30%] ss:flex justify-between'>
                <div className='flex w-full ss:w-1/2 justify-between items-center p-2 sm:p-4 sm:mr-14 '>
                    <WindSpeed weatherInfo={weatherInfo} />
                    <DewPoint weatherInfo={weatherInfo} unit={unit} />
                </div>
                <div className='flex  w-full ss:w-1/2 justify-between p-2 sm:p-4 items-center'>
                    <Precipitation weatherInfo={weatherInfo} />
                    <UVIndex weatherInfo={weatherInfo} />
                </div>
            </div>
        </div>
    );
}
