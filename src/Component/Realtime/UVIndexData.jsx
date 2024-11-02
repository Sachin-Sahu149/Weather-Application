import {UVIndexIcon } from "../../assets";

export default function UVIndexData() {

    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={UVIndexIcon} alt="" height="30" width="30" className='mr-2' />
                <span>9</span>
            </div>
            <span>UV Index</span>
        </div>
    );
}