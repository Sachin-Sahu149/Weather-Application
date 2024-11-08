

export default function SearchButton({setCity,searchText,setSearchText,buttonStyle}){

    let handleEvent = ()=>{
        setCity(searchText);
        setSearchText("");
    }

    return(
        <button onClick={handleEvent} className={`${buttonStyle} bg-[#7B7B7B] hover:bg-[#4D4D4D] text-white text-center font-semibold  `}>Search</button>
    );
}
