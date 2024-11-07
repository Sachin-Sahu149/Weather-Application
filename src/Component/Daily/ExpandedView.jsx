import DailyFormat from "./DailyFormat";
import ExpandedCard from "./ExpandedCard";


export default function ExpandedView(){

    return (
        <div className="mb-6 ts:p-4  h-[470px] xs:h-[700px] sm:h-[900px] w-full sm:w-[700px] rounded-lg p-2 mb-6 bg-green-300 font-poppins text-[9px] ts:text-[14px] ss:text-[17px] leading-6 xs:font-normal text-slate-600 bg-[#ffb3c6] overflow-scroll">
            <ExpandedCard/>
        </div>
    );
}