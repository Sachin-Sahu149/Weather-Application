import { useEffect, useState } from "react";
import { WorldIcon } from "../../assets/index.js";
import DropDown from "./DropDown/DropDown.jsx";
import Metric from "./Metric.jsx";

export default function MenuTag({setCountry,setUnit,unit}) {

    const [countryISOCode, setCountryISOCode] = useState("IN");
    let[show,setShow] = useState(false);

    useEffect(()=>{
        if(show){
            setShow(false);
        }
    },[])
   
    return (
        <div className='flex justify-center items-center justify-between h-[69px] ss:w-[150px] '>
            <div className="flex justify-center items-center relative xs:mr-7">
                <span className="">
                    <img src={WorldIcon} alt="World Icon" className="h-6"/>
                </span>
                <span className="p-2 font-semibold">{countryISOCode}</span>
                <span onClick={()=>setShow(true)}><i class="fa-solid fa-circle-chevron-down" style={{color: "#ced4da",}}></i></span>
                {show && <DropDown setCountryISOCode={setCountryISOCode} setCountry={setCountry} setShow={setShow}/>}
            </div>
            <Metric setUnit={setUnit} unit={unit}/>
        </div>
    );
}
