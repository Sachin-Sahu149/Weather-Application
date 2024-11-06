import { useState, useEffect } from "react";
import DailyContainer from "./DailyContainer";
import DailyFormat from "./DailyFormat";

export default function DailyMainPage() {
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
        <div className='flex flex-col justify-around items-center w-full sm:w-[700px] h-[260px] xs:h-[350px] rounded-lg relative p-2 mb-6 bg-green-300 text-[13px] font-poppins font-normal'>
            <div className="bg-slate-300 self-start text-[18px] xs:text-2xl font-semibold text-slate-500">
                <span>Next 5 days forecast</span>
            </div>
            {/* Pass itemsCount as a prop to DailyContainer */}
            <DailyContainer itemsCount={itemsCount} />
        </div>
    );
}
