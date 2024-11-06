import { latitudeIcon } from "../../assets";

export default function Latitude() {

    return (
        <div className=' flex-1 flex justify-end  ss:justify-center items-center border-b'>
            <img src={latitudeIcon} alt="Longitude" height="30" width="30" className='mr-2' />
            <div>
                <span className="numberFont">45.77565</span><br />
                <span>Latitude</span>
            </div>
        </div>
    );
}