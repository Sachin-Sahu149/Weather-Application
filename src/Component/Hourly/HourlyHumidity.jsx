import { humidityIcon } from "../../assets";

export default function HourlyHumidity() {
    return (
        <div className="flex justify-between items-center">
            <div className='flex justify-center items-center'>
                <img src={humidityIcon} alt="humdity" height="30" width="30" className='mr-2' />
                <span>Humidity</span>
            </div>
            <span>35%</span>
        </div>
    );
}