import { humidityIcon } from "../../assets";

export default function HourlyHumidity() {
    return (
        <div className="flex justify-between items-center">
            <div className='flex justify-center items-center'>
                <img src={humidityIcon} alt="humdity" className='mr-2 w-[30px]' />
                <span>Humidity</span>
            </div>
            <span>35%</span>
        </div>
    );
}