import { latitudeIcon } from "../../assets";

export default function Latitude({lat}) {

    return (
        <div className=' flex-1 flex justify-end  ss:justify-center items-center border-b'>
            <img src={latitudeIcon} alt="Longitude" className='mr-2 w-[25px] vs:w-[30px]' />
            <div>
                <span className="numberFont">{String(lat).slice(0,6)}</span><br />
                <span>Latitude</span>
            </div>
        </div>
    );
}