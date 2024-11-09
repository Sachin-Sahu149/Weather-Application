import {UVIndexIcon } from "../../assets";

export default function UVIndexData({weatherInfo}) {

    return (
        <div className=' flex-1 flex justify-end  ss:justify-center items-center border-b'>
                <img src={UVIndexIcon} alt="Uv Icon" className='mr-2 w-[25px] vs:w-[30px]' />
            <div>
                <span className="numberFont">{weatherInfo.daily.uv_index_max[0]}</span> <br />
            <span>UV Index</span>
            </div>
        </div>
    );
}