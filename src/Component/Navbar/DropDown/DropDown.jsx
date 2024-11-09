import { useState, useEffect,useRef } from "react";
import {Data} from '../../../Content/data.js'
import { SearchText } from "./SearchText.jsx";
import { CountryList } from "./CountryList.js";

export default function DropDown({setCountryISOCode,setShow,setCountry}) {

    let [searchList,setSearchList] = useState([...CountryList("",Data)]);
    

    const handleCountry = (e) => {
        const temp = e.target.textContent;
        setCountry(temp);
        let con = Data.filter(e=>e.country===temp);
        setCountryISOCode(con[0].isoCode);
        // once we clicked on country they should be close 
        setShow(false)
    };
    
    const dropdownRef = useRef(null);

    // Close dropdown if click detected outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShow(false);
            }
        };

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on cleanup
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);




    return (
        <div ref={dropdownRef} className="z-10 h-[60vh] w-[200px] bg-[#606060] flex-1 flex flex-col justify-start items-center m-4 p-2 rounded-lg absolute top-full" >

            <SearchText setSearchList={setSearchList} countries={Data}/>
            <div className="h-full w-full overflow-y-scroll scroll-smooth">
                <ul>
                    {
                        searchList.map((con) => (
                            <li className="hover:bg-[#737373] font-poppins text-slate-200 cursor-pointer" onClick={handleCountry} key={con.country}>{con.country}</li>
                        ))
                    }
                    {searchList.length==0 && <li>Not found result</li>}
                </ul>
            </div>
        </div>
    );
}