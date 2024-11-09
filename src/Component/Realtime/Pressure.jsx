import { PressureIcon } from "../../assets";

export default function Pressure({weatherInfo}) {

    return (
        <div className=' flex-1 flex justify-end  ss:justify-center items-center border-b'>
            <img src={PressureIcon} alt="pressure" className='mr-2 w-[25px] vs:w-[30px]' />
            <div>
                <span className="numberFont">{weatherInfo.current.surface_pressure} hPa</span><br />
                <span>Pressure</span>
            </div>
        </div>
    );
}