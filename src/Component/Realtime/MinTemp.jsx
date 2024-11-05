import { minTemp } from "../../assets";


export default function MinTemp() {

    return (
        <div className='flex-1 flex justify-center items-center'>
            <img src={minTemp} alt="min" height="20" width="20" className='mr-2' />
            <div>
                <span className="text-[18px] font-semibold numberFont">31&deg;C</span> <br />
                <span>Min-Temp</span>
            </div>
        </div>
    );
}


// export default function MinTemp() {

//     return (
//         <div>
//             <div className='flex justify-center items-center'>
//                 <img src={minTemp} alt="min" height="20" width="20" className='mr-2' />
//                 <span>31&deg;C</span>
//             </div>
//             <span>Min-Temp</span>
//         </div>
//     );
// }