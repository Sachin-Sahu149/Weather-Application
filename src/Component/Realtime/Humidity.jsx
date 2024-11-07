import { humidityIcon } from "../../assets";

export default function Humidity() {
    return (
        <div className=' flex-1 flex ss:justify-center items-center border-solid border-r-2 border-b'>
            <img src={humidityIcon} alt="humdity" className='mr-2 w-[25px] ts:w-[30px]' />
            <div>
                <span className="numberFont">35%</span><br />
                <span>Humidity</span>
            </div>
        </div>
    );
}