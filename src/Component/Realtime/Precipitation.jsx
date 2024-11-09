import { precipitationIcon } from "../../assets";

export default function Precipitation({weatherInfo}) {

    return (
        <div className=' flex-1 flex ss:justify-center items-center border-solid border-r-2 border-b'>
            <img src={precipitationIcon} alt="Precipitaion" className='mr-2 w-[25px] vs:w-[30px]' />
            <div >
                <span className="numberFont">{weatherInfo.current.precipitation} mm</span> <br />
                <span>Precipitation</span>
            </div>
        </div>
    );
}