import { sunrise } from "../../assets";


export default function Sunrise() {
    return (
        <div className=" flex-1 flex  ss:justify-center items-center border-solid border-r-2 border-b">
            <img src={sunrise} alt="rise" className='mr-2 w-[25px] ts:w-[30px]' />
            <div>
                <span className="numberFont">06:11 am</span> <br />
                <span>Sunrise</span>
            </div>
        </div>
    );
}