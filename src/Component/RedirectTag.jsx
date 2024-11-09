import SearchBar from "./Navbar/SearchBar";


export default function RedirectTag({setSearchCity}) {
   
    return (
        <div className=' h-[40px] my-4 rounded-lg w-full sm:w-[700px] px-6 bg-[#5C5C5C] text-slate-200 flex justify-center items-center justify-between text-[0.9rem] font-poppins font-semibold'>
            <span className='hover:text-[0.93rem] cursor-pointer bg-sky-300 bg-transparent'><a href="#currentContainerID">Today</a> </span>
            <span className='hover:text-[0.93rem] cursor-pointer'> <a href="#HourlyID">Hourly</a> </span>
            <span className='hover:text-[0.93rem] cursor-pointer'><a href="#DailyMainPageID">Daily</a> </span>
            <SearchBar setSearchCity={setSearchCity} display="sm:hidden ss:flex hidden h-[30px] py-px" inputAppearance="rounded" buttonAppearance="px-2 py-1 rounded" />
        </div>
    );
}