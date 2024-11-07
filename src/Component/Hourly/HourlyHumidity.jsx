import { humidityIcon } from "../../assets";

export default function HourlyHumidity({visible}) {
    return (
        <div className="flex justify-between items-center">
            <div className='flex justify-center items-center'>
               {visible && <img src={humidityIcon} alt="humdity" className='mr-2 w-[25px] ts:w-[30px]' />}
                <span>Humidity</span>
            </div>
            <span>35%</span>
        </div>
    );
}