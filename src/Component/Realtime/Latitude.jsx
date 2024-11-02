import { latitude } from "../../assets";

export default function Latitude() {

    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={latitude} alt="Longitude" height="30" width="30" className='mr-2' />
                <span>45.77565</span>
            </div>
            <span>Latitude</span>
        </div>
    );
}