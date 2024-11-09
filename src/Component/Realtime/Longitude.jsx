import { longitudeIcon } from "../../assets";

export default function ({lon}) {

    return (
        <div className=' flex-1 flex ss:justify-center items-center border-solid border-r-2 border-b'>
            <img src={longitudeIcon} alt="Longitude" className='mr-2 w-[25px] vs:w-[30px]' />
            <div>
                <span className="numberFont">{String(lon).slice(0,6)}</span><br />
                <span>Longitude</span>
            </div>
        </div>
    );
}