import { sunset } from "../../assets";


export default function Sunset() {

    return (
        <div className=" flex-1 flex justify-end  ss:justify-center items-center border-b">
            <img src={sunset} alt="set" height="25" width="25" className='mr-2' />
            <div>
                <span className="numberFont">05:45 pm</span><br />
                <span>Sunset</span>
            </div>
        </div>
    );
}