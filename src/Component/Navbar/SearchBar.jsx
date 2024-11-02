import SearchButton from "./SearchButton";
export default function SearchBar() {
    let style = {
        boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
    }
    return (
        <div className='h-[40px] bg-pink-300 w-[450px] flex '>
            <input 
                type="text" 
                name="City" 
                id="City" 
                placeholder=" Search City " 
                className="h-full font-poppins rounded-full bg-gray-200 text-center text-slate-600 
                placeholder:italic placeholder:text-slate-400  w-full mr-1
                focus:outline-none focus:ring-1 focus:ring-sky-500 hover:ring-1 hover:ring-yellow-300" 
            />
            <SearchButton />
        </div>
    );
}
