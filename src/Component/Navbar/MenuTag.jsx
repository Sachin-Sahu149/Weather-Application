import { useState } from "react";
import { WorldIcon } from "../../assets/index.js";
import DropDown from "./DropDown/DropDown.jsx";
import Metric from "./Metric.jsx";

export default function MenuTag() {
    const [country, setCountry] = useState("India");
    const [countryISOCode, setCountryISOCode] = useState("IN");
    let[show,setShow] = useState(false);

    return (
        <div className='bg-green-300 flex shrink justify-center items-center justify-between h-[69px] w-[200px]'>
            <div className="flex justify-center items-center relative">
                <span className="">
                    <img src={WorldIcon} alt="World Icon" className="h-6"/>
                </span>
                <span className="p-2">{countryISOCode}</span>
                <span onClick={()=>setShow(true)}>Dropdown Icon</span>
                {show && <DropDown setCountryISOCode={setCountryISOCode} setCountry={setCountry} setShow={setShow}/>}
            </div>
            <Metric/>
        </div>
    );
}