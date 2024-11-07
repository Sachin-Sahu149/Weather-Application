import { maxTemp } from "../../assets";


export default function MaxTemp() {

    return (
        <div className=' flex-1 flex justify-end ss:justify-center items-center border-b'>
            <img src={maxTemp} alt="max" className='mr-2 w-[25px] ts:w-[30px]' />
            <div >
                <span className="numberFont">21&deg;C</span> <br />
                <span>Max-Temp</span>
            </div>
        </div>
    );
}