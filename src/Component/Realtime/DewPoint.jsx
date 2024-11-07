import { dewPointIcon } from "../../assets";

export default function DewPoint() {

    return (
        <div className=' flex-1 flex justify-end  ss:justify-center items-center border-b'>
                <img src={dewPointIcon} alt="DewPoint"  className='mr-2 w-[25px] ts:w-[30px]' />
            <div >
                <span className="numberFont">342.32</span> <br />
            <span>Dew point</span>
            </div>
        </div>
    );
}