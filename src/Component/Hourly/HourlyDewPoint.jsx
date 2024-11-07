import { dewPointIcon } from "../../assets";

export default function HourlyDewPoint({visible}) {

    return (
        <div className="flex justify-between items-center">
            <div className='flex justify-center items-center'>
               {visible &&  <img src={dewPointIcon} alt="DewPoint" className='mr-2 w-[25px] ts:w-[30px]' />}
                <span>Dew point</span>
            </div>
            <span>342.32</span>
        </div>
    );
}