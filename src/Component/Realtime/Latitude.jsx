import { latitudeIcon } from "../../assets";

export default function Latitude() {

    return (
        <div className=' flex-1 flex justify-end  ss:justify-center items-center border-b'>
            <img src={latitudeIcon} alt="Longitude" className='mr-2 w-[25px] ts:w-[30px]' />
            <div>
                <span className="numberFont">45.77565</span><br />
                <span>Latitude</span>
            </div>
        </div>
    );
}