import { AppIcon } from "../../assets";

export default function AppName() {

    return (
        <div className='bg-red-300 flex justify-center items-center '>
            <div>
                <img src={AppIcon} alt="AppIcon" className='w-[55px] shrink-0' />
            </div>
            <div className=' h-full flex justify-center items-center vs:p-3'>
                <span className=' text-[20px] vs:text-[24px] font-semibold font-poppins text-[#212529]'>AuraCast</span>
            </div>
        </div>
    );
}