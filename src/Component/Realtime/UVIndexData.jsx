import {UVIndexIcon } from "../../assets";

export default function UVIndexData() {

    return (
        <div className=' flex-1 flex justify-center items-center'>
                <img src={UVIndexIcon} alt="" height="30" width="30" className='mr-2' />
            <div>
                <span className="numberFont">9</span> <br />
            <span>UV Index</span>
            </div>
        </div>
    );
}