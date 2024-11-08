import { dewPointIcon } from "../../assets";
import Converter from "../CelsiusToFah";



export default function DewPoint({weatherInfo,unit}) {
    
    let dewindex = parseInt(weatherInfo.current.time.split('T')[1].split(':')[0]);
    let temp = weatherInfo.hourly.dew_point_2m[dewindex];
    return (
        <div className=' flex-1 flex justify-end  ss:justify-center items-center border-b'>
                <img src={dewPointIcon} alt="DewPoint"  className='mr-2 w-[25px] vs:w-[30px]' />
            <div >
                <span className="numberFont">{unit?temp:Converter(temp)}&deg;{unit?"C":"F"}</span> <br />
            <span>Dew point</span>
            </div>
        </div>
    );
}
