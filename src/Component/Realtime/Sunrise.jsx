import { sunrise } from "../../assets";


export default function Sunrise() {
    return (
        <div className=" flex-1 flex  ss:justify-center items-center border-solid border-r-2 border-b">
            <img src={sunrise} alt="rise" height="25" width="25" className='mr-2' />
            <div>
                <span className="numberFont">06:11 am</span> <br />
                <span>Sunrise</span>
            </div>
        </div>
    );
}