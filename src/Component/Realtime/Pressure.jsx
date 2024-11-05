import { PressureIcon } from "../../assets";

export default function Pressure() {

    return (
        <div className=' flex-1 flex justify-center items-center'>
            <img src={PressureIcon} alt="pressure" height="30" width="30" className='mr-2' />
            <div>
                <span className="numberFont"> 342 paskal</span><br />
                <span>Pressure</span>
            </div>
        </div>
    );
}