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

export function CurrentWeather() {

    return (
        <div className='flex flex-col  justify-between w-[700px] h-[400px] p-2 bg-green-300 font-poppins text-slate-600'>
            <div className='h-[40%] bg-pink-200 flex'>
                <div className='bg-blue-200 w-1/2 flex flex-col justify-between p-4'>
                    <div className='flex justify-between'>
                        <span>Friday 1 November 2024</span>
                        <img className='' src={weatherCode[6200].icon} alt="" height="30" width="30" />
                    </div>
                    <div className='flex justify-between items-center mb-4'>
                        <div> {weatherCode[6200].text}</div>
                        <div className='text-5xl font-semibold'> 29&deg;C</div>
                    </div>
                </div>
                <div className='flex flex-col w-1/2 p-4'>
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

            <div className='h-[30%] flex justify-between'>
                <div className='flex w-1/2 justify-between p-4 mr-14'>
                    <Humidity/>
                    <Pressure/>
                </div>
                <div className='flex w-1/2 justify-between p-4'>
                    <Longitude/>
                    <Latitude/>
                </div>
            </div>
            <div className='h-[30%] flex'>
                <div className='flex w-1/2 justify-between p-4 items-center mr-14'>
                    <WindSpeed/>
                    <DewPoint/>
                </div>
                <div className='flex w-1/2 justify-between p-4 items-center'>
                    <Precipitation/>
                    <UVIndex/>
                </div>
            </div>
        </div>
    );
}