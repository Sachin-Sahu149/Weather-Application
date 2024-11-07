import { longitudeIcon } from "../../assets";

export default function () {

    return (
        <div className=' flex-1 flex ss:justify-center items-center border-solid border-r-2 border-b'>
            <img src={longitudeIcon} alt="Longitude" className='mr-2 w-[25px] ts:w-[30px]' />
            <div>
                <span className="numberFont">23.55334</span><br />
                <span>Longitude</span>
            </div>
        </div>
    );
}