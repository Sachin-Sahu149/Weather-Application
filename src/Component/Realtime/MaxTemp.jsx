import { maxTemp } from "../../assets";


export default function MaxTemp() {

    return (
        <div className=' flex-1 flex justify-center items-center'>
            <img src={maxTemp} alt="max" height="20" width="20" className='mr-2' />
            <div >
                <span className="numberFont">21&deg;C</span> <br />
                <span>Max-Temp</span>
            </div>
        </div>
    );
}