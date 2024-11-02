import { UVIndex } from "../../assets";

export default function UVIndex() {

    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={UVIndex} alt="" height="30" width="30" className='mr-2' />
                <span>9</span>
            </div>
            <span>UV Index</span>
        </div>
    );
}