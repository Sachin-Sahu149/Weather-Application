import {humidityIcon } from "../../assets";

export default function Humidity() {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={humidityIcon} alt="humdity" height="30" width="30" className='mr-2' />
                <span>35%</span>
            </div>
            <span>Humidity</span>
        </div>
    );
}