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
export function CurrentWeather() {

    return (
        <div className='flex flex-col  justify-between w-full xs:w-[700px] xs:h-[400px] rounded-lg p-2 mb-6 bg-green-300 font-poppins text-[14px]  xs:font-normal text-slate-600'>
            <div className='h-[40%]  bg-pink-200 w-full xs:flex'> 
                <div className='bg-blue-200 xs:w-1/2 flex flex-col justify-between p-2 xs:p-4'>
                    <div className='flex text-center justify-between'>
                        <span>Friday 1 November 2024</span>
                        <img className='' src={weatherCode[6200].icon} alt="" height="30" width="40" />
                    </div>
                    <div className='flex justify-between items-center xs:mb-4'>
                        <div> {weatherCode[6200].text}</div>
                        <div className='text-5xl font-semibold'> 29&deg;C</div>
                    </div>
                </div>
                <div className='flex flex-col xs:w-1/2 p-2 xs:p-4'>
                    <div className='flex justify-between pb-4'>
                        <MinTemp/>
                        <MaxTemp/>
                    </div>
                    <div className='flex justify-between'>
                       <Sunrise/>
                       <Sunset/>
                    </div>
                </div>
            </div>

            <div className='h-[30%] xs:flex justify-between'>
                <div className='flex w-full xs:w-1/2 justify-between p-2 xs:p-4 xs:mr-14 bg-indigo-300'>
                    <Humidity/>
                    <Pressure/>
                </div>
                <div className='flex  w-full xs:w-1/2 justify-between p-2 xs:p-4'>
                    <Longitude/>
                    <Latitude/>
                </div>
            </div>
            <div className='h-[30%] xs:flex justify-between'>
                <div className='flex w-full xs:w-1/2 justify-between items-center p-2 xs:p-4 xs:mr-14 bg-indigo-300'>
                    <WindSpeed/>
                    <DewPoint/>
                </div>
                <div className='flex  w-full xs:w-1/2 justify-between p-2 xs:p-4 items-center'>
                    <Precipitation/>
                    <UVIndex/>
                </div>
            </div>
        </div>
    );
}