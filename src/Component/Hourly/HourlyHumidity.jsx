import { humidityIcon } from "../../assets";

export default function HourlyHumidity({visible,humidity}) {
    return (
        <div className="flex justify-between items-center">
            <div className='flex justify-center items-center'>
               {visible && <img src={humidityIcon} alt="humdity" className='mr-2 w-[25px] vs:w-[30px]' />}
                <span>Humidity</span>
            </div>
            <span>{humidity}%</span>
        </div>
    );
}