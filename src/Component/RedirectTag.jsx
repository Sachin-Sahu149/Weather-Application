

export default function RedirectTag() {

    return (
        <div className=' shrink h-[40px] mb-4 rounded-lg w-[600px] px-6 bg-gray-200 text-zinc-600 flex justify-center items-center justify-between text-[0.9rem] font-poppins font-semibold'>
            <span className='hover:text-[0.93rem] cursor-pointer bg-sky-300 bg-transparent'>Today</span>
            <span className='hover:text-[0.93rem] cursor-pointer'>Hourly</span>
            <span className='hover:text-[0.93rem] cursor-pointer'>Daily</span>
            {/* <span className='hover:text-[0.93rem] cursor-pointer'>MinuteCast</span>
            <span className='hover:text-[0.93rem] cursor-pointer'>Monthly</span> */}
        </div>
    );
}