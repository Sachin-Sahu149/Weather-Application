import { windSpeedIcon } from "../../assets";

export default function HourlyWindSpeed({visible,speed}) {

    return (
        <div className="flex justify-between items-center">
            <div className='flex justify-center items-center'>
               {visible && <img src={windSpeedIcon} alt="Wind Speed" height="30" width="30" className='mr-2 w-[25px] vs:w-[30px]' />}
                <span>Wind Speed</span>
            </div>
            <span>{speed} km/h</span>
        </div>
    );
}