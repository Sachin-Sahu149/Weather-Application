import DailyFormat from "./DailyFormat";
import ExpandedCard from "./ExpandedCard";


export default function ExpandedView({forecastData,unit}){

    let styles = {
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
    }
    return (
        <div className="mb-6 ts:p-4  h-[470px] xs:h-[700px] sm:h-[900px] w-full sm:w-[700px] rounded-lg p-2 mb-6 bg-[#757575] 
        font-poppins text-[9px] ts:text-[14px] ss:text-[17px] leading-6 xs:font-normal text-slate-200 " style={styles}>
            <ExpandedCard forecastData={forecastData} unit={unit}/>
        </div>
    );
}