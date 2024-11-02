import { dewPointIcon } from "../../assets";

export default function HourlyDewPoint() {

    return (
        <div className="flex justify-between items-center">
            <div className='flex justify-center items-center'>
                <img src={dewPointIcon} alt="DewPoint" height="30" width="30" className='mr-2' />
                <span>Dew point</span>
            </div>
            <span>342.32</span>
        </div>
    );
}