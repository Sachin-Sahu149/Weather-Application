import { humidityIcon } from "../../assets";

export default function Humidity() {
    return (
        <div className=' flex-1 flex justify-center items-center'>
            <img src={humidityIcon} alt="humdity" height="30" width="30" className='mr-2' />
            <div>
                <span className="numberFont">35%</span><br />
                <span>Humidity</span>
            </div>
        </div>
    );
}