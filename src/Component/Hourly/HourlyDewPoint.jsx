import { dewPointIcon } from "../../assets";
import Converter from "../CelsiusToFah";

export default function HourlyDewPoint({visible,dew, unit}) {

    return (
        <div className="flex justify-between items-center">
            <div className='flex justify-center items-center'>
               {visible &&  <img src={dewPointIcon} alt="DewPoint" className='mr-2 w-[25px] vs:w-[30px]' />}
                <span>Dew point</span>
            </div>
            <span>{unit?dew:Converter(dew)}&deg;{unit?'C':'F'}</span>
        </div>
    );
}