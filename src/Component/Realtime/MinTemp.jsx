import { minTemp } from "../../assets";


export default function MinTemp() {

    return (
        <div className='flex-1 flex ss:justify-center items-center border-solid border-r-2 border-b'>
            <img src={minTemp} alt="min" className='mr-2 w-[25px] ts:w-[30px]' />
            <div>
                <span className="numberFont">31&deg;C</span> <br />
                <span>Min-Temp</span>
            </div>
        </div>
    );
}
