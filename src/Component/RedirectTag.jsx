

export default function RedirectTag() {

    return (
        <div className=' h-[40px] mb-4 rounded-lg w-full xs:w-[700px] px-6 bg-gray-200 text-zinc-600 flex justify-center items-center justify-between text-[0.9rem] font-poppins font-semibold'>
            <span className='hover:text-[0.93rem] cursor-pointer bg-sky-300 bg-transparent'>Today</span>
            <span className='hover:text-[0.93rem] cursor-pointer'>Hourly</span>
            <span className='hover:text-[0.93rem] cursor-pointer'>Daily</span>
        </div>
    );
}