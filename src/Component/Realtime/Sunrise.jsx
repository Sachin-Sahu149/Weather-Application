import { sunrise } from "../../assets";


export default function Sunrise({weatherInfo}) {
    return (
        <div className=" flex-1 flex  ss:justify-center items-center border-solid border-r-2 border-b">
            <img src={sunrise} alt="rise" className='mr-2 w-[25px] vs:w-[30px]' />
            <div>
                <span className="numberFont">{weatherInfo.daily.sunrise[0].split('T')[1]} am</span> <br />
                <span>Sunrise</span>
            </div>
        </div>
    );
}
//       sunrise: ['2024-11-08T06:37'],
//       sunset: ['2024-11-08T17:30'],
//       temperature_2m_max: [29.9],
//       temperature_2m_min: [18],
//sunrise[0].split('T')[1];