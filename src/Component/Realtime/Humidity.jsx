import { humidityIcon } from "../../assets";

export default function Humidity({weatherInfo}) {
    return (
        <div className=' flex-1 flex ss:justify-center items-center border-solid border-r-2 border-b'>
            <img src={humidityIcon} alt="humdity" className='mr-2 w-[25px] vs:w-[30px]' />
            <div>
                <span className="numberFont">{weatherInfo.current.relative_humidity_2m}%</span><br />
                <span>Humidity</span>
            </div>
        </div>
    );
}