import { CountryList } from "./CountryList.js";

export function SearchText({setSearchList,countries}) {

    return (
        <input
            type="text"
            name="Country"
            id="country"
            onChange={(e)=>{setSearchList([...CountryList(e.target.value,countries)])}}
            placeholder="Seach country"
            className=" text-center placeholder:italic rounded-full focus:outline-none focus:ring-1 mb-6
            focus:ring-sky-500 hover:ring-1 hover:ring-yellow-300 font-poppins bg-gray-200 text-center text-slate-600"
        />
    );
}
