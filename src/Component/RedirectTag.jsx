import SearchBar from "./Navbar/SearchBar";


export default function RedirectTag() {

    return (
        <div className=' h-[40px] my-4 rounded-lg w-full sm:w-[700px] px-6 bg-gray-200 text-zinc-600 flex justify-center items-center justify-between text-[0.9rem] font-poppins font-semibold'>
            <span className='hover:text-[0.93rem] cursor-pointer bg-sky-300 bg-transparent'>Today</span>
            <span className='hover:text-[0.93rem] cursor-pointer'>Hourly</span>
            <span className='hover:text-[0.93rem] cursor-pointer'>Daily</span>
            <SearchBar display="sm:hidden ss:flex hidden h-[30px] py-px" inputAppearance="rounded" buttonAppearance="px-2 py-1 rounded" />
        </div>
    );
}