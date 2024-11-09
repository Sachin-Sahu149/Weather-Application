import { minTemp } from "../../assets";
import Converter from "../CelsiusToFah";

export default function MinTemp({weatherInfo,unit}) {

    return (
        <div className='flex-1 flex ss:justify-center items-center border-solid border-r-2 border-b'>
            <img src={minTemp} alt="min" className='mr-2 w-[25px] vs:w-[30px]' />
            <div>
                <span className="numberFont">{unit?weatherInfo.daily.temperature_2m_min[0]:Converter(weatherInfo.daily.temperature_2m_min[0])}&deg;{unit?"C":"F"}</span> <br />
                <span>Min-Temp</span>
            </div>
        </div>
    );
}
