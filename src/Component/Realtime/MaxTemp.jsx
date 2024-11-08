import { maxTemp } from "../../assets";
import Converter from "../CelsiusToFah";

export default function MaxTemp({weatherInfo,unit}) {

    return (
        <div className=' flex-1 flex justify-end ss:justify-center items-center border-b'>
            <img src={maxTemp} alt="max" className='mr-2 w-[25px] vs:w-[30px]' />
            <div >
                <span className="numberFont">{unit?weatherInfo.daily.temperature_2m_max[0]:Converter(weatherInfo.daily.temperature_2m_max[0])}&deg;{unit?"C":"F"}</span> <br />
                <span>Max-Temp</span>
            </div>
        </div>
    );
}
