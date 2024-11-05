import { windSpeedIcon } from "../../assets";

export default function WindSpeed() {

    return (
        <div className=' flex-1 flex justify-center items-center'>
            <img src={windSpeedIcon} alt="Wind Speed" height="30" width="30" className='mr-2' />
            <div >
                <span className="numberFont">29.6 km/h</span><br />
                <span>Wind Speed</span>
            </div>
        </div>
    );
}