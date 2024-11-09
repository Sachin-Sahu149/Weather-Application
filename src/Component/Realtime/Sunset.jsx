import { sunset } from "../../assets";


export default function Sunset({weatherInfo}) {

    return (
        <div className=" flex-1 flex justify-end  ss:justify-center items-center border-b">
            <img src={sunset} alt="set" className='mr-2 w-[25px] vs:w-[30px]' />
            <div>
                <span className="numberFont">{weatherInfo.daily.sunset[0].split('T')[1]} pm</span><br />
                <span>Sunset</span>
            </div>
        </div>
    );
}