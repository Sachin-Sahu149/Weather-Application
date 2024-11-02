import { PressureIcon } from "../../assets";

export default function Pressure() {

    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={PressureIcon} alt="pressure" height="30" width="30" className='mr-2' />
                <span> 342 paskal</span>
            </div>
            <span>Pressure</span>
        </div>
    );
}