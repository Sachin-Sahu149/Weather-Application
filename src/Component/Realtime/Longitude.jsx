import { longitudeIcon } from "../../assets";

export default function () {

    return (
        <div className=' flex-1 flex ss:justify-center items-center border-solid border-r-2 border-b'>
            <img src={longitudeIcon} alt="Longitude" height="30" width="30" className='mr-2' />
            <div>
                <span className="numberFont">23.55334</span><br />
                <span>Longitude</span>
            </div>
        </div>
    );
}