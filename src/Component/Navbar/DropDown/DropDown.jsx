import { useState, useEffect } from "react";
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
        setShow(false);
    };

    return (
        <div className="h-[60vh] max-w-[200px] bg-[#F4F6FF] flex-1 flex flex-col justify-start items-center m-4 p-2 rounded-lg absolute top-full" >

            <SearchText setSearchList={setSearchList} countries={Data}/>
            <div className="h-full w-full overflow-y-scroll scroll-smooth">
                <ul>
                    {
                        searchList.map((con) => (
                            <li className="hover:bg-gray-300 font-poppins text-gray-600 cursor-pointer" onClick={handleCountry} key={con.country}>{con.country}</li>
                        ))
                    }
                    {searchList.length==0 && <li>Not found result</li>}
                </ul>
            </div>
        </div>
    );
}