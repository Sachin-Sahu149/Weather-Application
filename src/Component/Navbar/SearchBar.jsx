import SearchButton from "./SearchButton";



export default function SearchBar({display,buttonAppearance,inputAppearance}) {
    let style = {
        boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
    }
    return (
        <div className={`bg-pink-300 ${display} sm:flex shrink `}>
            <input 
                type="text" 
                name="City" 
                id="City" 
                placeholder=" Search City " 
                className={`h-full font-poppins ${inputAppearance}  bg-sky-100 text-center text-slate-600 
                placeholder:italic placeholder:text-slate-400  w-full mr-2 
                focus:outline-none focus:ring-2 focus:ring-sky-500 hover:ring-2 hover:ring-yellow-300`} 
            />
            <SearchButton buttonStyle={buttonAppearance}/>
        </div>
    );
}
