import { windSpeedIcon } from "../../assets";

export default function WindSpeed() {

    return (
        <div className=' flex-1 flex ss:justify-center items-center border-solid border-r-2 border-b'>
            <img src={windSpeedIcon} alt="Wind Speed"  className='mr-2 w-[25px] ts:w-[30px]' />
            <div >
                <span className="numberFont">29.6 km/h</span><br />
                <span>Wind Speed</span>
            </div>
        </div>
    );
}