import { windSpeedIcon } from "../../assets";

export default function WindSpeed({weatherInfo}) {

    return (
        <div className=' flex-1 flex ss:justify-center items-center border-solid border-r-2 border-b'>
            <img src={windSpeedIcon} alt="Wind Speed"  className='mr-2 w-[25px] vs:w-[30px]' />
            <div >
                <span className="numberFont">{weatherInfo.current.wind_speed_10m} km/h</span><br />
                <span>Wind Speed</span>
            </div>
        </div>
    );
}