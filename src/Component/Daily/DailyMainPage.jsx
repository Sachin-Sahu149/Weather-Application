import { useState, useEffect } from "react";
import DailyContainer from "./DailyContainer";
import DailyFormat from "./DailyFormat";
import ExpandButton from "../ExpandButton";

export default function DailyMainPage({value,setDailyVisible,forecastData,unit}) {
    const [itemsCount, setItemsCount] = useState(2); // Default to 2 for smaller screens

    useEffect(() => {
        const updateItemsCount = () => {
            if (window.innerWidth <= 360) {
                setItemsCount(2);
            } else if (window.innerWidth <= 768) {
                setItemsCount(3);
            } else {
                setItemsCount(4);
            }
        };

        updateItemsCount(); // Run on component mount
        window.addEventListener("resize", updateItemsCount);

        return () => {
            window.removeEventListener("resize", updateItemsCount);
        };
    }, []);



    return (
        <div id="DailyMainPageID" className='flex flex-col justify-around items-center w-full sm:w-[700px] h-[260px] xs:h-[350px] rounded-lg relative 
        p-2 mb-6  bg-[#6E6E6E] text-[13px] font-poppins text-slate-200 font-normal'>

            <div className="self-start text-[13px] vs:text-[18px] xs:text-2xl font-semibold">
                <span>Next 16 days forecast</span>
            </div>
            <ExpandButton visible={setDailyVisible} value={value} position="absolute top-2 right-2 text-[9px] vs:text-[13px] font-semibold" />
            <DailyContainer itemsCount={itemsCount} forecastData={forecastData} unit={unit}/>
        </div>
    );
}