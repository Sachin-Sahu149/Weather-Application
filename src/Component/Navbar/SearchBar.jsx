import { useState } from "react";
import SearchButton from "./SearchButton";



export default function SearchBar({setSearchCity,display,buttonAppearance,inputAppearance}) {

    let[searchText,setSearchText] = useState("");    

    let style = {
        boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
    }

    let setText = (e)=>{
        console.log(searchText);
        setSearchText(e.target.value);
    }
    return (
        <div className={` ${display} sm:flex shrink `}>
            <input 
                type="text" 
                name="City" 
                id="City"
                value={searchText}
                onChange={setText} 
                placeholder=" Search City " 
                className={`h-full font-poppins ${inputAppearance}  bg-[#848484] text-center text-slate-100 
                placeholder:italic placeholder:text-slate-100  w-full mr-2 
                focus:outline-none focus:ring-2 focus:ring-[#C6C6C6] hover:ring-2 hover:ring-[#A0A0A0]`} 
            />
            <SearchButton setCity={setSearchCity} searchText={searchText} setSearchText={setSearchText} buttonStyle={buttonAppearance}/>
        </div>
    );
}
