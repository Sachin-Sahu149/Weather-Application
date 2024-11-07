import {UVIndexIcon } from "../../assets";

export default function UVIndexData() {

    return (
        <div className=' flex-1 flex justify-end  ss:justify-center items-center border-b'>
                <img src={UVIndexIcon} alt="Uv Icon" className='mr-2 w-[25px] ts:w-[30px]' />
            <div>
                <span className="numberFont">9</span> <br />
            <span>UV Index</span>
            </div>
        </div>
    );
}