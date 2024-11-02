import { windSpeed } from "../../assets";

export default function WindSpeed() {

    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={windSpeed} alt="Wind Speed" height="30" width="30" className='mr-2' />
                <span>29.6 km/h</span>
            </div>
            <span>Wind Speed</span>
        </div>
    );
}