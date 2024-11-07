import { precipitationIcon } from "../../assets";

export default function Precipitation() {

    return (
        <div className=' flex-1 flex ss:justify-center items-center border-solid border-r-2 border-b'>
            <img src={precipitationIcon} alt="Precipitaion" className='mr-2 w-[25px] ts:w-[30px]' />
            <div >
                <span className="numberFont">79%</span> <br />
                <span>Precipitation</span>
            </div>
        </div>
    );
}