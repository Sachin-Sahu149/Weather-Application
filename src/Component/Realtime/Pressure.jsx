import { PressureIcon } from "../../assets";

export default function Pressure() {

    return (
        <div className=' flex-1 flex justify-end  ss:justify-center items-center border-b'>
            <img src={PressureIcon} alt="pressure" className='mr-2 w-[25px] ts:w-[30px]' />
            <div>
                <span className="numberFont"> 342 hPa</span><br />
                <span>Pressure</span>
            </div>
        </div>
    );
}