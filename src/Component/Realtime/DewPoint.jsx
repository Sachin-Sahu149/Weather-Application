import { dewPointIcon } from "../../assets";

export default function DewPoint() {

    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={dewPointIcon} alt="DewPoint" height="30" width="30" className='mr-2' />
                <span>342.32</span>
            </div>
            <span>Dew point</span>
        </div>
    );
}