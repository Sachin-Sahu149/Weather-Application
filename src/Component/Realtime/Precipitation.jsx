import {precipitationIcon } from "../../assets";

export default function Precipitation() {

    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={precipitationIcon} alt="Precipitaion" height="30" width="30" className='mr-2' />
                <span>79%</span>
            </div>
            <span>Precipitation</span>
        </div>
    );
}