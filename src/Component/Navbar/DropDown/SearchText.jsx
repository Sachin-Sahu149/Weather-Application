import { CountryList } from "./CountryList.js";

export function SearchText({setSearchList,countries}) {

    return (
        <input
            type="text"
            name="Country"
            id="country"
            onChange={(e)=>{setSearchList([...CountryList(e.target.value,countries)])}}
            placeholder="Seach country"
            className=" text-center placeholder:italic rounded-full focus:outline-none focus:ring-1 mb-6 placeholder:text-slate-100
            focus:ring-[#C6C6C6] hover:ring-1 hover:ring-[#A0A0A0] font-poppins bg-[#848484] text-center text-slate-100"
        />
    );
}
