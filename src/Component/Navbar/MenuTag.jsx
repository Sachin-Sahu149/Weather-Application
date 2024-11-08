import { useState } from "react";
import { WorldIcon } from "../../assets/index.js";
import DropDown from "./DropDown/DropDown.jsx";
import Metric from "./Metric.jsx";

export default function MenuTag() {
    const [country, setCountry] = useState("India");
    const [countryISOCode, setCountryISOCode] = useState("IN");
    let[show,setShow] = useState(false);

    return (
        <div className='bg-green-300 flex justify-center items-center justify-between h-[69px] ss:w-[150px]'>
            <div className="flex justify-center items-center relative xs:mr-7">
                <span className="">
                    <img src={WorldIcon} alt="World Icon" className="h-6"/>
                </span>
                <span className="p-2">{countryISOCode}</span>
                <span onClick={()=>setShow(true)}><i class="fa-solid fa-circle-chevron-down" style={{color: "#4e5255",}}></i></span>
                {show && <DropDown setCountryISOCode={setCountryISOCode} setCountry={setCountry} setShow={setShow}/>}
            </div>
            <Metric/>
        </div>
    );
}
