import { longitude } from "../../assets";

export default function () {

    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={longitude} alt="Longitude" height="30" width="30" className='mr-2' />
                <span>23.55334</span>
            </div>
            <span>Longitude</span>
        </div>
    );
}